const fs = require('fs');
function readCsv(p) {
  const lines = fs.readFileSync(p, 'utf8').split(/\r?\n/).filter(Boolean);
  const head = lines.shift().split(',').map(s => s.replace(/^"|"$/g, ''));
  return lines.map(l => {
    const cells = l.match(/("([^"]|"")*"|[^,]*)/g).filter((_, i) => i % 2 === 0).map(c => c.replace(/^"|"$/g, '').replace(/""/g, '"'));
    return Object.fromEntries(head.map((h, i) => [h, cells[i] || '']));
  });
}
function domainOf(url) {
  try { return new URL(url.startsWith('http') ? url : 'https://' + url).hostname.replace(/^www\./, '').toLowerCase(); }
  catch { return ''; }
}
const seen = new Set();
const out = [['domain', 'company']];
for (const r of readCsv('venues-nyc-all.csv')) {
  if (!r.website) continue;
  const d = domainOf(r.website);
  if (!d || d.indexOf('.') === -1 || seen.has(d)) continue;
  seen.add(d);
  out.push([d, r.name || '']);
}
const esc = s => /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
fs.writeFileSync('hunter-domains.csv', out.map(r => r.map(esc).join(',')).join('\n'));
console.log('hunter-domains.csv rows:', out.length - 1);
