const fs = require('fs');
function readCsv(p) {
  const lines = fs.readFileSync(p, 'utf8').split(/\r?\n/).filter(Boolean);
  const head = lines.shift().split(',').map(s => s.replace(/^"|"$/g, ''));
  return lines.map(l => {
    const cells = l.match(/("([^"]|"")*"|[^,]*)/g).filter((_, i) => i % 2 === 0).map(c => c.replace(/^"|"$/g, '').replace(/""/g, '"'));
    return Object.fromEntries(head.map((h, i) => [h, cells[i] || '']));
  });
}
const valid = e => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e);
const seen = new Set();
const out = [['email', 'name']];
for (const r of readCsv('venues-nyc-all.csv')) {
  const e = (r.email || '').trim().toLowerCase();
  if (!e || !valid(e) || seen.has(e)) continue;
  seen.add(e);
  out.push([e, r.name || '']);
}
const esc = s => /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
fs.writeFileSync('substack-import.csv', out.map(r => r.map(esc).join(',')).join('\n'));
console.log('substack-import.csv rows:', out.length - 1);
