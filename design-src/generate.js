// Generates fully-populated design HTML (no placeholders) → design-src/gen/*.html
const fs = require('fs');
const path = require('path');
const outDir = path.join(__dirname, 'gen');
fs.mkdirSync(outDir, { recursive: true });

const FONTS = `<link href="https://fonts.googleapis.com/css2?family=Anton&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">`;
const BASE = `*{margin:0;padding:0;box-sizing:border-box}html,body{overflow:hidden}body{font-family:'Space Grotesk',sans-serif;color:#fff}`;

// ---------- COUNTDOWN (1080x1350) ----------
const countdowns = [
  { n:'8', u:'DAYS', cap:'The World Cup is coming to NYC.', fill:12 },
  { n:'7', u:'DAYS', cap:'The world shows up in New York.', fill:25 },
  { n:'6', u:'DAYS', cap:'Pick your spot. Pick your people.', fill:37 },
  { n:'5', u:'DAYS', cap:"The city's about to feel different.", fill:50 },
  { n:'4', u:'DAYS', cap:'Tag the crew you are watching with.', fill:62 },
  { n:'3', u:'DAYS', cap:'Three days. Find your scene.', fill:75 },
  { n:'2', u:'DAYS', cap:'Almost kickoff.', fill:87 },
  { n:'1', u:'DAY',  cap:'Tomorrow, it begins.', fill:100 },
];
const countdown = d => `<!doctype html><html><head><meta charset="utf-8">${FONTS}<style>${BASE}
html,body{width:1080px;height:1350px}body{position:relative;background:#06090a}
.glow{position:absolute;inset:0;background:radial-gradient(720px 560px at 50% 24%,rgba(57,255,20,.28),transparent 60%),radial-gradient(520px 520px at 85% 96%,rgba(0,150,255,.12),transparent 60%)}
.grid{position:absolute;inset:0;opacity:.08;background-image:linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px);background-size:60px 60px;-webkit-mask-image:radial-gradient(circle at 50% 40%,#000,transparent 72%)}
.kick{position:absolute;top:96px;left:0;right:0;text-align:center;font-weight:600;letter-spacing:7px;font-size:22px;color:#9affc0;text-transform:uppercase}
.num{position:absolute;top:300px;left:0;right:0;text-align:center;font-family:'Anton';font-size:560px;line-height:.78;letter-spacing:-12px;color:#fff;text-shadow:0 0 80px rgba(57,255,20,.45)}
.unit{position:absolute;top:840px;left:0;right:0;text-align:center;font-family:'Anton';font-size:64px;letter-spacing:14px;color:#39ff14}
.cap{position:absolute;top:960px;left:90px;right:90px;text-align:center;font-size:42px;font-weight:600;color:#e8f3e8;line-height:1.25}
.barwrap{position:absolute;left:90px;right:90px;bottom:210px;height:10px;border-radius:6px;background:rgba(255,255,255,.10);overflow:hidden}
.bar{height:100%;width:${d.fill}%;background:linear-gradient(90deg,#1f9c0a,#39ff14);box-shadow:0 0 18px rgba(57,255,20,.6)}
.lbl{position:absolute;left:90px;right:90px;bottom:230px;display:flex;justify-content:space-between;font-size:18px;letter-spacing:2px;color:#7d927d;text-transform:uppercase}
.foot{position:absolute;left:0;right:0;bottom:110px;text-align:center}
.foot .b{display:inline-flex;align-items:center;gap:11px;font-weight:700;font-size:26px}
.foot .b .pip{width:13px;height:13px;border-radius:50%;background:#39ff14;box-shadow:0 0 14px #39ff14}
.foot .u{display:block;margin-top:10px;font-size:24px;color:#39ff14;font-weight:600}
</style></head><body>
<div class="glow"></div><div class="grid"></div>
<div class="kick">Feel the crowd · Find your scene</div>
<div class="num">${d.n}</div>
<div class="unit">${d.u} TO KICKOFF</div>
<div class="cap">${d.cap}</div>
<div class="lbl"><span>Jun 3</span><span>Kickoff · Jun 11</span></div>
<div class="barwrap"><div class="bar"></div></div>
<div class="foot"><span class="b"><span class="pip"></span> YourScene</span><span class="u">yourscene.netlify.app</span></div>
</body></html>`;
countdowns.forEach(d => fs.writeFileSync(path.join(outDir, `countdown-${d.n}d.html`), countdown(d)));

// ---------- VENUE SPOTLIGHT (1080x1350, typographic, no photo) ----------
const venues = [
  { slug:'football-factory', name:'FOOTBALL\nFACTORY', hood:'MIDTOWN', handle:'@footballfactoryny', hook:"NYC's #1 soccer bar — 30+ supporter clubs and dozens of screens." },
  { slug:'banter', name:'BANTER', hood:'WILLIAMSBURG', handle:'@banterbrooklyn', hook:'15 years of pure soccer. Opens early, packed by halftime.' },
  { slug:'boca-juniors', name:'BOCA JUNIORS\nSTEAKHOUSE', hood:'ELMHURST', handle:'@bocajrssteakhouse', hook:'The Argentina HQ. Electric when the Albiceleste play.' },
  { slug:'pig-beach', name:'PIG BEACH\nBBQ', hood:'ASTORIA', handle:'@pigbeachnyc', hook:'A 28,000 sq ft beer garden with a giant projector.' },
  { slug:'rivercrest', name:'RIVERCREST', hood:'ASTORIA', handle:'@rivercrestny', hook:'Home of American Outlaws Queens. USA games go off.' },
];
const spotlight = v => `<!doctype html><html><head><meta charset="utf-8">${FONTS}<style>${BASE}
html,body{width:1080px;height:1350px}body{position:relative;background:#070d09}
.glow{position:absolute;inset:0;background:radial-gradient(760px 600px at 14% 8%,rgba(57,255,20,.22),transparent 58%),radial-gradient(620px 620px at 100% 100%,rgba(0,150,255,.12),transparent 60%)}
.diag{position:absolute;right:-260px;top:-260px;width:900px;height:900px;transform:rotate(40deg);background:linear-gradient(180deg,rgba(57,255,20,.12),transparent);border-radius:80px}
.tag{position:absolute;top:74px;left:74px;background:#39ff14;color:#04210a;font-weight:700;letter-spacing:3px;font-size:21px;padding:12px 22px;border-radius:11px;text-transform:uppercase}
.live{position:absolute;top:74px;right:74px;display:flex;align-items:center;gap:12px;border:1.5px solid rgba(57,255,20,.5);background:rgba(57,255,20,.07);padding:12px 22px;border-radius:999px;font-weight:600;letter-spacing:2px;font-size:20px;color:#9affc0;text-transform:uppercase}
.live .pip{width:14px;height:14px;border-radius:50%;background:#39ff14;box-shadow:0 0 16px #39ff14;animation:p 2s infinite}@keyframes p{50%{opacity:.5}}
.hood{position:absolute;top:300px;left:78px;font-family:'Space Grotesk';font-weight:600;font-size:30px;letter-spacing:5px;color:#39ff14}
.name{position:absolute;top:350px;left:74px;right:74px;font-family:'Anton';font-size:150px;line-height:.84;letter-spacing:-2px;white-space:pre-line}
.hook{position:absolute;top:880px;left:80px;right:90px;font-size:42px;font-weight:600;color:#dcebdc;line-height:1.3}
.foot{position:absolute;left:78px;right:74px;bottom:90px;display:flex;justify-content:space-between;align-items:center;border-top:1px solid rgba(255,255,255,.12);padding-top:28px}
.brand{display:flex;align-items:center;gap:12px;font-weight:700;font-size:30px}
.brand .pip{width:14px;height:14px;border-radius:50%;background:#39ff14;box-shadow:0 0 14px #39ff14}
.handle{font-size:27px;color:#8da08d;font-weight:600}
</style></head><body>
<div class="glow"></div><div class="diag"></div>
<div class="tag">Featured Scene</div>
<div class="live"><span class="pip"></span> On the map</div>
<div class="hood">${v.hood} · NYC</div>
<div class="name">${v.name}</div>
<div class="hook">${v.hook}</div>
<div class="foot"><span class="brand"><span class="pip"></span> YourScene</span><span class="handle">${v.handle}</span></div>
</body></html>`;
venues.forEach(v => fs.writeFileSync(path.join(outDir, `spotlight-${v.slug}.html`), spotlight(v)));

console.log('generated', countdowns.length, 'countdowns +', venues.length, 'spotlights');
