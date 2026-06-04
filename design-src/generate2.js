const fs = require('fs'), path = require('path');
const outDir = path.join(__dirname, 'gen2');
fs.mkdirSync(outDir, { recursive: true });
const F = `<link href="https://fonts.googleapis.com/css2?family=Anton&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">`;
const BASE = `*{margin:0;padding:0;box-sizing:border-box}html,body{width:1080px;height:1350px;overflow:hidden}body{position:relative;font-family:'Space Grotesk',sans-serif;color:#fff}`;
const W = (name, html) => fs.writeFileSync(path.join(outDir, name + '.html'), html);

/* ---------- 1. BRAND HERO ---------- */
W('brand-hero', `<!doctype html><html><head><meta charset=utf-8>${F}<style>${BASE}
body{background:#05080a;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}
.rings{position:absolute;width:1100px;height:1100px;border-radius:50%;border:1px solid rgba(57,255,20,.10);display:flex;align-items:center;justify-content:center}
.rings:before{content:'';width:760px;height:760px;border-radius:50%;border:1px solid rgba(57,255,20,.16)}
.rings:after{content:'';position:absolute;width:440px;height:440px;border-radius:50%;background:radial-gradient(circle,rgba(57,255,20,.28),transparent 70%)}
.kick{position:relative;letter-spacing:7px;font-size:22px;text-transform:uppercase;color:#9affc0;margin-bottom:30px}
h1{position:relative;font-family:'Anton';font-size:150px;line-height:.9;letter-spacing:-2px}
h1 .g{color:#39ff14;text-shadow:0 0 50px rgba(57,255,20,.5)}
.sub{position:relative;margin-top:36px;font-size:34px;font-weight:600;color:#cfe9cf}
.url{position:absolute;bottom:96px;font-size:25px;font-weight:700;color:#04210a;background:#39ff14;padding:14px 28px;border-radius:14px}
</style></head><body>
<div class="rings"></div>
<div class="kick">⚽ World Cup 2026 · New York</div>
<h1>FEEL THE<br>CROWD.<br><span class="g">FIND YOUR<br>SCENE.</span></h1>
<div class="sub">The live map of where the city is buzzing.</div>
<div class="url">yourscene.netlify.app</div>
</body></html>`);

/* ---------- 2. NEIGHBORHOOD GUIDES ---------- */
const hoods = [
  { slug:'midtown', name:'MIDTOWN', v:[['Football Factory','NYC’s #1 soccer bar'],['Jack Demsey’s','4-floor Irish matchday hub'],['Stout NYC','multi-level, big groups']] },
  { slug:'astoria', name:'ASTORIA', v:[['Pig Beach BBQ','28,000 sq ft beer garden'],['Rivercrest','American Outlaws Queens'],['The Rabbit Hole','sports bar meets nightlife']] },
  { slug:'williamsburg', name:'WILLIAMSBURG', v:[['Banter','15-year soccer institution'],['Berry Park','rooftop + big screens']] },
  { slug:'lower-east-side', name:'THE BOWERY', v:[['Sláinte','self-styled World Cup HQ'],['Bowery Beer Garden','50+ screens, opens early']] },
];
hoods.forEach(h => W('hood-' + h.slug, `<!doctype html><html><head><meta charset=utf-8>${F}<style>${BASE}
body{background:#0a0c0f}
.glow{position:absolute;inset:0;background:radial-gradient(680px 460px at 88% 8%,rgba(57,255,20,.20),transparent 60%)}
.kick{position:absolute;top:80px;left:80px;letter-spacing:5px;font-size:20px;text-transform:uppercase;color:#9affc0}
.where{position:absolute;top:130px;left:78px;font-family:'Anton';font-size:70px;color:#fff;letter-spacing:1px}
.hood{position:absolute;top:210px;left:76px;font-family:'Anton';font-size:128px;color:#39ff14;line-height:.9;letter-spacing:-1px}
.list{position:absolute;top:470px;left:80px;right:80px}
.row{display:flex;align-items:flex-start;gap:24px;padding:26px 0;border-top:1px solid rgba(255,255,255,.10)}
.pin{width:46px;height:46px;flex:none;border-radius:50%;border:2px solid #39ff14;display:flex;align-items:center;justify-content:center;color:#39ff14;font-size:22px}
.row b{font-size:40px;font-weight:600}.row span{display:block;font-size:24px;color:#8da08d;margin-top:3px}
.foot{position:absolute;left:80px;bottom:84px;font-size:27px;font-weight:700}.foot em{color:#39ff14;font-style:normal}
</style></head><body><div class="glow"></div>
<div class="kick">NYC · World Cup 2026</div>
<div class="where">WHERE TO WATCH IN</div>
<div class="hood">${h.name}</div>
<div class="list">${h.v.map(x=>`<div class="row"><div class="pin">●</div><div><b>${x[0]}</b><span>${x[1]}</span></div></div>`).join('')}</div>
<div class="foot">Full live map → <em>yourscene.netlify.app</em></div>
</body></html>`));

/* ---------- 3. COUNTRY FEATURES ---------- */
const countries = [
  { slug:'mexico', code:'MEX', name:'MEXICO', hub:'Midtown & Bowery soccer bars', vibe:'The opener crowd. Loudest in the city. 🔥' },
  { slug:'england', code:'ENG', name:'ENGLAND', hub:'Football Factory & Smithfield Hall', vibe:'Supporter-club central in Midtown.' },
  { slug:'argentina', code:'ARG', name:'ARGENTINA', hub:'Boca Juniors Steakhouse · Elmhurst', vibe:'Jerseys, memorabilia, pure Albiceleste.' },
  { slug:'brazil', code:'BRA', name:'BRAZIL', hub:'Beija Flor · Long Island City', vibe:'Where NYC’s Brazil crowd gathers.' },
  { slug:'usa', code:'USA', name:'USA', hub:'Rivercrest · Astoria', vibe:'Home of American Outlaws Queens.' },
];
countries.forEach(c => W('country-' + c.slug, `<!doctype html><html><head><meta charset=utf-8>${F}<style>${BASE}
body{background:#07090c}
.glow{position:absolute;inset:0;background:radial-gradient(700px 560px at 20% 90%,rgba(57,255,20,.18),transparent 60%),radial-gradient(560px 460px at 95% 5%,rgba(0,150,255,.12),transparent 60%)}
.code{position:absolute;top:120px;left:80px;width:170px;height:170px;border-radius:50%;border:2px solid rgba(57,255,20,.5);background:radial-gradient(circle at 50% 30%,rgba(57,255,20,.14),rgba(255,255,255,.03));display:flex;align-items:center;justify-content:center;font-family:'Anton';font-size:58px;letter-spacing:1px}
.where{position:absolute;top:340px;left:82px;font-weight:600;letter-spacing:6px;font-size:30px;color:#9affc0;text-transform:uppercase}
.name{position:absolute;top:380px;left:76px;right:60px;font-family:'Anton';font-size:200px;line-height:.84;letter-spacing:-3px}
.watches{position:absolute;top:610px;left:82px;font-weight:600;letter-spacing:6px;font-size:30px;color:#fff;text-transform:uppercase}
.card{position:absolute;left:78px;right:78px;bottom:230px;border:1px solid rgba(255,255,255,.12);border-radius:18px;padding:34px;background:rgba(255,255,255,.03)}
.card .lbl{font-size:20px;letter-spacing:2px;color:#8da08d;text-transform:uppercase}
.card .hub{font-size:42px;font-weight:600;margin-top:8px}
.card .vibe{font-size:28px;color:#cfe9cf;margin-top:16px}
.foot{position:absolute;left:82px;bottom:96px;font-size:26px;font-weight:700}.foot em{color:#39ff14;font-style:normal}
</style></head><body><div class="glow"></div>
<div class="code">${c.code}</div>
<div class="where">Where</div>
<div class="name">${c.name}</div>
<div class="watches">watches in NYC</div>
<div class="card"><div class="lbl">The hub</div><div class="hub">${c.hub}</div><div class="vibe">${c.vibe}</div></div>
<div class="foot">Find the crowd → <em>yourscene.netlify.app</em></div>
</body></html>`));

/* ---------- 4. STAT CARDS ---------- */
const stats = [
  { slug:'nations', big:'32', unit:'NATIONS', line:'One city. Every crowd. One map.' },
  { slug:'spots', big:'20+', unit:'NYC SPOTS', line:'The best watch parties, all in one place.' },
];
stats.forEach(s => W('stat-' + s.slug, `<!doctype html><html><head><meta charset=utf-8>${F}<style>${BASE}
body{background:#05080a;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}
.glow{position:absolute;inset:0;background:radial-gradient(640px 640px at 50% 38%,rgba(57,255,20,.22),transparent 62%)}
.big{position:relative;font-family:'Anton';font-size:440px;line-height:.8;color:#39ff14;text-shadow:0 0 70px rgba(57,255,20,.5)}
.unit{position:relative;font-family:'Anton';font-size:80px;letter-spacing:10px;margin-top:6px}
.line{position:relative;margin-top:40px;font-size:38px;font-weight:600;color:#cfe9cf;max-width:760px}
.url{position:absolute;bottom:100px;font-size:25px;font-weight:700;color:#39ff14}
</style></head><body><div class="glow"></div>
<div class="big">${s.big}</div><div class="unit">${s.unit}</div>
<div class="line">${s.line}</div>
<div class="url">yourscene.netlify.app</div>
</body></html>`));

/* ---------- 5. THIS OR THAT ---------- */
W('vs-rooftop-dive', `<!doctype html><html><head><meta charset=utf-8>${F}<style>${BASE}
body{background:#06080a}
.top{position:absolute;top:0;left:0;right:0;height:680px;background:linear-gradient(135deg,#0f2d14,#06140a);clip-path:polygon(0 0,100% 0,100% 78%,0 100%);display:flex;align-items:center;justify-content:flex-start;padding:0 90px}
.bot{position:absolute;bottom:0;left:0;right:0;height:740px;background:linear-gradient(135deg,#0a1626,#05080f);clip-path:polygon(0 22%,100% 0,100% 100%,0 100%);display:flex;align-items:center;justify-content:flex-end;padding:0 90px}
.opt{font-family:'Anton';font-size:120px;line-height:.86;letter-spacing:-1px}
.top .opt{color:#39ff14;text-shadow:0 0 40px rgba(57,255,20,.45)}
.bot .opt{color:#fff;text-align:right}
.opt small{display:block;font-family:'Space Grotesk';font-weight:600;font-size:26px;letter-spacing:3px;color:#9affc0;margin-bottom:8px}
.vs{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-family:'Anton';font-size:70px;color:#fff;background:#06080a;border:3px solid #39ff14;width:150px;height:150px;border-radius:50%;display:flex;align-items:center;justify-content:center;z-index:3;box-shadow:0 0 40px rgba(57,255,20,.4)}
.q{position:absolute;top:60px;left:0;right:0;text-align:center;font-weight:600;letter-spacing:4px;font-size:24px;color:#cfe9cf;text-transform:uppercase;z-index:3}
.url{position:absolute;bottom:50px;left:0;right:0;text-align:center;font-size:24px;font-weight:700;color:#39ff14;z-index:3}
</style></head><body>
<div class="top"><div class="opt"><small>Option A</small>ROOFTOP</div></div>
<div class="bot"><div class="opt"><small>Option B</small>DIVE BAR</div></div>
<div class="q">Where you watching the matches?</div>
<div class="vs">VS</div>
<div class="url">Find both → yourscene.netlify.app</div>
</body></html>`);

console.log('generated brand-hero + ' + hoods.length + ' hoods + ' + countries.length + ' countries + ' + stats.length + ' stats + 1 vs');
