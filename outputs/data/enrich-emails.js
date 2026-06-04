/* enrich-emails.js — turn the OSM venue list into REAL named contact emails.
 *
 * Supports RocketReach, Hunter.io, or Apollo. Reads the API key from an ENV VAR
 * (never hard-code it). Reads venues-nyc-bars.csv, looks up real contacts by the
 * venue's website domain, and writes venues-enriched.csv (name, title, email, venue, domain).
 *
 * USAGE (PowerShell):
 *   $env:PROVIDER="hunter"      # or "rocketreach" or "apollo"
 *   $env:API_KEY="sk_xxx"
 *   node enrich-emails.js --limit 25      # test on 25 first, then drop --limit
 *
 * Coverage note: domain-based providers (Hunter) hit the 817 venues with a website.
 * RocketReach/Apollo also do people-by-title. Expect partial coverage for tiny bars.
 */
const fs = require('fs');
const PROVIDER = (process.env.PROVIDER || 'hunter').toLowerCase();
const API_KEY = process.env.API_KEY;
const LIMIT = (() => { const i = process.argv.indexOf('--limit'); return i > -1 ? parseInt(process.argv[i + 1]) : Infinity; })();
const IN = 'venues-nyc-all.csv', OUT = 'venues-enriched.csv';

if (!API_KEY) { console.error('Set API_KEY (and optionally PROVIDER=hunter|rocketreach|apollo) as env vars first.'); process.exit(1); }

// --- tiny CSV reader ---
function readCsv(p) {
  const lines = fs.readFileSync(p, 'utf8').split(/\r?\n/).filter(Boolean);
  const head = lines.shift().split(',').map(s => s.replace(/^"|"$/g, ''));
  return lines.map(l => {
    const cells = l.match(/("([^"]|"")*"|[^,]*)/g).filter((_, i) => i % 2 === 0).map(c => c.replace(/^"|"$/g, '').replace(/""/g, '"'));
    return Object.fromEntries(head.map((h, i) => [h, cells[i] || '']));
  });
}
const domainOf = url => { try { return new URL(url.startsWith('http') ? url : 'https://' + url).hostname.replace(/^www\./, ''); } catch { return ''; } };
const sleep = ms => new Promise(r => setTimeout(r, ms));

// --- providers ---
async function hunter(domain) {
  const r = await fetch(`https://api.hunter.io/v2/domain-search?domain=${domain}&api_key=${API_KEY}&limit=5`);
  const j = await r.json();
  return (j.data?.emails || []).map(e => ({ email: e.value, name: [e.first_name, e.last_name].filter(Boolean).join(' '), title: e.position || '', conf: e.confidence }));
}
async function rocketreach(domain) {
  const r = await fetch('https://api.rocketreach.co/api/v2/person/search', {
    method: 'POST', headers: { 'Api-Key': API_KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: { current_employer_domain: [domain] }, page_size: 5 })
  });
  const j = await r.json();
  return (j.profiles || []).map(p => ({ email: p.recommended_email || (p.emails && p.emails[0]) || '', name: p.name || '', title: p.current_title || '', conf: '' })).filter(x => x.email);
}
async function apollo(domain) {
  const r = await fetch('https://api.apollo.io/v1/mixed_people/search', {
    method: 'POST', headers: { 'X-Api-Key': API_KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify({ q_organization_domains: domain, person_titles: ['owner', 'general manager', 'marketing', 'events'], page: 1, per_page: 5 })
  });
  const j = await r.json();
  return (j.people || []).map(p => ({ email: p.email || '', name: p.name || '', title: p.title || '', conf: '' })).filter(x => x.email);
}
const lookup = { hunter, rocketreach, apollo }[PROVIDER];
if (!lookup) { console.error('PROVIDER must be hunter, rocketreach, or apollo'); process.exit(1); }

(async () => {
  const venues = readCsv(IN).filter(v => v.website);
  const seenDom = new Set();
  const targets = venues.filter(v => { const d = domainOf(v.website); if (!d || seenDom.has(d)) return false; seenDom.add(d); return true; }).slice(0, LIMIT);
  console.log(`${PROVIDER}: enriching ${targets.length} domains...`);
  const esc = s => '"' + String(s || '').replace(/"/g, '""') + '"';
  fs.writeFileSync(OUT, 'venue,domain,contact_name,title,email,confidence\n');
  let found = 0;
  for (let i = 0; i < targets.length; i++) {
    const v = targets[i], d = domainOf(v.website);
    try {
      const people = await lookup(d);
      for (const p of people) { if (!p.email) continue; found++; fs.appendFileSync(OUT, [v.name, d, p.name, p.title, p.email, p.conf].map(esc).join(',') + '\n'); }
      if ((i + 1) % 25 === 0) console.log(`  ${i + 1}/${targets.length} · ${found} emails so far`);
    } catch (e) { console.error('  err', d, e.message); }
    await sleep(1100); // be polite / respect rate limits
  }
  console.log(`DONE — ${found} real emails written to ${OUT}`);
})();
