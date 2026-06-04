const fs = require('fs');
const inputs = process.argv.slice(2, -1);
const outFile = process.argv[process.argv.length - 1];
let els = [];
for (const f of inputs) { try { els = els.concat((JSON.parse(fs.readFileSync(f, 'utf8')).elements) || []); } catch (e) { console.error('skip', f); } }
const rows = [];
for (const e of els) {
  const t = e.tags || {};
  if (!t.name) continue;
  const email = t['contact:email'] || t.email || '';
  const website = t['contact:website'] || t.website || '';
  const ig = t['contact:instagram'] || t['instagram'] || '';
  const phone = t['contact:phone'] || t.phone || '';
  const addr = [t['addr:housenumber'], t['addr:street']].filter(Boolean).join(' ');
  const hood = t['addr:suburb'] || t['addr:neighbourhood'] || t['addr:city'] || '';
  rows.push({ name: t.name, amenity: t.amenity || '', email, website, ig, phone, addr, hood });
}
// dedupe by name+addr
const seen = new Set(); const uniq = [];
for (const r of rows) { const k = r.name + '|' + r.addr; if (seen.has(k)) continue; seen.add(k); uniq.push(r); }
// sort: email first, then website, then name
uniq.sort((a, b) => (b.email ? 1 : 0) - (a.email ? 1 : 0) || (b.website ? 1 : 0) - (a.website ? 1 : 0) || a.name.localeCompare(b.name));
const esc = s => '"' + String(s || '').replace(/"/g, '""') + '"';
const csv = ['name,amenity,email,phone,website,instagram,address,neighborhood']
  .concat(uniq.map(r => [r.name, r.amenity, r.email, r.phone, r.website, r.ig, r.addr, r.hood].map(esc).join(','))).join('\n');
fs.writeFileSync(outFile, csv);
const withEmail = uniq.filter(r => r.email).length;
const withWeb = uniq.filter(r => r.website).length;
const withIg = uniq.filter(r => r.ig).length;
console.log(`TOTAL venues: ${uniq.length}`);
console.log(`with EMAIL: ${withEmail}`);
console.log(`with WEBSITE: ${withWeb}`);
console.log(`with INSTAGRAM: ${withIg}`);
console.log('--- first 12 with email ---');
uniq.filter(r => r.email).slice(0, 12).forEach(r => console.log(`${r.name} | ${r.email} | ${r.hood || r.addr}`));
