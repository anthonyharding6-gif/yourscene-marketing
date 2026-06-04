const fs = require('fs'), path = require('path');
const outDir = path.join(__dirname, 'gen3');
fs.mkdirSync(outDir, { recursive: true });
const F = `<link href="https://fonts.googleapis.com/css2?family=Anton&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">`;
const BASE = `*{margin:0;padding:0;box-sizing:border-box}html,body{width:1080px;height:1350px;overflow:hidden}body{position:relative;font-family:'Space Grotesk',sans-serif;color:#fff}`;
const Wr = (n, h) => fs.writeFileSync(path.join(outDir, n + '.html'), h);

/* COUNTRY (same layout family as gen2) */
const country = c => `<!doctype html><html><head><meta charset=utf-8>${F}<style>${BASE}
body{background:#07090c}.glow{position:absolute;inset:0;background:radial-gradient(700px 560px at 20% 90%,rgba(57,255,20,.18),transparent 60%),radial-gradient(560px 460px at 95% 5%,rgba(0,150,255,.12),transparent 60%)}
.code{position:absolute;top:120px;left:80px;width:170px;height:170px;border-radius:50%;border:2px solid rgba(57,255,20,.5);background:radial-gradient(circle at 50% 30%,rgba(57,255,20,.14),rgba(255,255,255,.03));display:flex;align-items:center;justify-content:center;font-family:'Anton';font-size:54px}
.where{position:absolute;top:340px;left:82px;font-weight:600;letter-spacing:6px;font-size:30px;color:#9affc0;text-transform:uppercase}
.name{position:absolute;top:380px;left:76px;right:50px;font-family:'Anton';font-size:175px;line-height:.84;letter-spacing:-3px}
.watches{position:absolute;top:600px;left:82px;font-weight:600;letter-spacing:6px;font-size:30px;text-transform:uppercase}
.card{position:absolute;left:78px;right:78px;bottom:230px;border:1px solid rgba(255,255,255,.12);border-radius:18px;padding:34px;background:rgba(255,255,255,.03)}
.card .lbl{font-size:20px;letter-spacing:2px;color:#8da08d;text-transform:uppercase}.card .hub{font-size:40px;font-weight:600;margin-top:8px}.card .vibe{font-size:28px;color:#cfe9cf;margin-top:16px}
.foot{position:absolute;left:82px;bottom:96px;font-size:26px;font-weight:700}.foot em{color:#39ff14;font-style:normal}
</style></head><body><div class="glow"></div><div class="code">${c.code}</div>
<div class="where">Where</div><div class="name">${c.name}</div><div class="watches">watches in NYC</div>
<div class="card"><div class="lbl">The hub</div><div class="hub">${c.hub}</div><div class="vibe">${c.vibe}</div></div>
<div class="foot">Find the crowd → <em>yourscene.netlify.app</em></div></body></html>`;
[
  { slug:'portugal', code:'POR', name:'PORTUGAL', hub:'The Ironbound · NJ', vibe:'NYC-area Portuguese heart. Loud for every match.' },
  { slug:'spain', code:'ESP', name:'SPAIN', hub:'Boqueria & the Spanish crowd', vibe:'Tapas, cañas, and a roaring Furia Roja.' },
  { slug:'colombia', code:'COL', name:'COLOMBIA', hub:'Jackson Heights · Queens', vibe:'The beating heart of NYC’s Colombian crowd.' },
  { slug:'ecuador', code:'ECU', name:'ECUADOR', hub:'Jackson Heights & Corona', vibe:'Queens turns yellow, blue and red.' },
  { slug:'morocco', code:'MAR', name:'MOROCCO', hub:'Astoria · Queens', vibe:'Fills to capacity on every Atlas Lions match.' },
].forEach(c => Wr('country-' + c.slug, country(c)));

/* NEIGHBORHOOD (same family as gen2) */
const hood = h => `<!doctype html><html><head><meta charset=utf-8>${F}<style>${BASE}
body{background:#0a0c0f}.glow{position:absolute;inset:0;background:radial-gradient(680px 460px at 88% 8%,rgba(57,255,20,.20),transparent 60%)}
.kick{position:absolute;top:80px;left:80px;letter-spacing:5px;font-size:20px;text-transform:uppercase;color:#9affc0}
.where{position:absolute;top:130px;left:78px;font-family:'Anton';font-size:70px}
.hood{position:absolute;top:210px;left:76px;font-family:'Anton';font-size:118px;color:#39ff14;line-height:.9;letter-spacing:-1px}
.list{position:absolute;top:470px;left:80px;right:80px}
.row{display:flex;align-items:flex-start;gap:24px;padding:26px 0;border-top:1px solid rgba(255,255,255,.10)}
.pin{width:46px;height:46px;flex:none;border-radius:50%;border:2px solid #39ff14;display:flex;align-items:center;justify-content:center;color:#39ff14;font-size:22px}
.row b{font-size:40px;font-weight:600}.row span{display:block;font-size:24px;color:#8da08d;margin-top:3px}
.foot{position:absolute;left:80px;bottom:84px;font-size:27px;font-weight:700}.foot em{color:#39ff14;font-style:normal}
</style></head><body><div class="glow"></div><div class="kick">NYC · World Cup 2026</div>
<div class="where">WHERE TO WATCH IN</div><div class="hood">${h.name}</div>
<div class="list">${h.v.map(x=>`<div class="row"><div class="pin">●</div><div><b>${x[0]}</b><span>${x[1]}</span></div></div>`).join('')}</div>
<div class="foot">Full live map → <em>yourscene.netlify.app</em></div></body></html>`;
[
  { slug:'west-village', name:'WEST VILLAGE', v:[['The Red Lion','10+ screens on Bleecker'],['Houston Hall','huge beer hall'],['Whiskey Tavern','daily watch parties']] },
  { slug:'long-island-city', name:'LONG ISLAND CITY', v:[['Beija Flor','the Brazil crowd'],['The WORLD by Zum Schneider','waterfront giant screens']] },
  { slug:'flatiron', name:'FLATIRON', v:[['Smithfield Hall','wall of screens + heated patio'],['Stout NYC','multi-level for big groups']] },
  { slug:'greenpoint', name:'GREENPOINT', v:[['Box House Rooftop','a month of rooftop parties'],['The WORLD by Zum Schneider','beer-hall energy']] },
].forEach(h => Wr('hood-' + h.slug, hood(h)));

/* VENUE SPOTLIGHT (typographic) */
const spot = v => `<!doctype html><html><head><meta charset=utf-8>${F}<style>${BASE}
body{background:#070d09}.glow{position:absolute;inset:0;background:radial-gradient(760px 600px at 14% 8%,rgba(57,255,20,.22),transparent 58%),radial-gradient(620px 620px at 100% 100%,rgba(0,150,255,.12),transparent 60%)}
.diag{position:absolute;right:-260px;top:-260px;width:900px;height:900px;transform:rotate(40deg);background:linear-gradient(180deg,rgba(57,255,20,.12),transparent);border-radius:80px}
.tag{position:absolute;top:74px;left:74px;background:#39ff14;color:#04210a;font-weight:700;letter-spacing:3px;font-size:21px;padding:12px 22px;border-radius:11px;text-transform:uppercase}
.live{position:absolute;top:74px;right:74px;display:flex;align-items:center;gap:12px;border:1.5px solid rgba(57,255,20,.5);background:rgba(57,255,20,.07);padding:12px 22px;border-radius:999px;font-weight:600;letter-spacing:2px;font-size:20px;color:#9affc0;text-transform:uppercase}
.live .pip{width:14px;height:14px;border-radius:50%;background:#39ff14;box-shadow:0 0 16px #39ff14}
.hood{position:absolute;top:300px;left:78px;font-weight:600;font-size:30px;letter-spacing:5px;color:#39ff14}
.name{position:absolute;top:350px;left:74px;right:74px;font-family:'Anton';font-size:140px;line-height:.84;letter-spacing:-2px;white-space:pre-line}
.hook{position:absolute;top:880px;left:80px;right:90px;font-size:42px;font-weight:600;color:#dcebdc;line-height:1.3}
.foot{position:absolute;left:78px;right:74px;bottom:90px;display:flex;justify-content:space-between;align-items:center;border-top:1px solid rgba(255,255,255,.12);padding-top:28px}
.brand{display:flex;align-items:center;gap:12px;font-weight:700;font-size:30px}.brand .pip{width:14px;height:14px;border-radius:50%;background:#39ff14;box-shadow:0 0 14px #39ff14}
.handle{font-size:27px;color:#8da08d;font-weight:600}
</style></head><body><div class="glow"></div><div class="diag"></div>
<div class="tag">Featured Scene</div><div class="live"><span class="pip"></span> On the map</div>
<div class="hood">${v.hood} · NYC</div><div class="name">${v.name}</div><div class="hook">${v.hook}</div>
<div class="foot"><span class="brand"><span class="pip"></span> YourScene</span><span class="handle">${v.handle}</span></div></body></html>`;
[
  { slug:'smithfield', name:'SMITHFIELD\nHALL', hood:'FLATIRON', handle:'@smithfieldnyc', hook:'Wall of screens and a heated patio. Premium and packed.' },
  { slug:'red-lion', name:'THE RED\nLION', hood:'WEST VILLAGE', handle:'@redlionnyc', hook:'Bleecker St mainstay — named a top NYC World Cup bar.' },
  { slug:'bowery-beer-garden', name:'BOWERY\nBEER GARDEN', hood:'BOWERY', handle:'@bowerybeergarden', hook:'50+ screens and it opens early for the 8 AM matches.' },
  { slug:'jack-demseys', name:'JACK\nDEMSEY’S', hood:'MIDTOWN', handle:'@jackdemseysnyc', hook:'Four floors of matchday energy. A proven World Cup hub.' },
  { slug:'slainte', name:'SLÁINTE', hood:'BOWERY', handle:'@slaintenyc', hook:'Self-styled World Cup HQ — projector and 14 screens.' },
].forEach(v => Wr('spotlight-' + v.slug, spot(v)));

/* HOW IT WORKS (3-step) */
Wr('how-it-works', `<!doctype html><html><head><meta charset=utf-8>${F}<style>${BASE}
body{background:#06090b}.glow{position:absolute;inset:0;background:radial-gradient(700px 500px at 50% -5%,rgba(57,255,20,.2),transparent 60%)}
h1{position:absolute;top:110px;left:0;right:0;text-align:center;font-family:'Anton';font-size:96px;letter-spacing:-1px}
.steps{position:absolute;top:330px;left:90px;right:90px;display:flex;flex-direction:column;gap:34px}
.step{display:flex;align-items:center;gap:30px;border:1px solid rgba(255,255,255,.12);border-radius:20px;padding:34px;background:rgba(255,255,255,.03)}
.num{font-family:'Anton';font-size:88px;color:#39ff14;width:90px;text-align:center}
.txt b{font-size:42px;font-weight:600}.txt span{display:block;font-size:26px;color:#9bb09b;margin-top:6px}
.url{position:absolute;bottom:96px;left:0;right:0;text-align:center;font-size:26px;font-weight:700;color:#39ff14}
</style></head><body><div class="glow"></div><h1>HOW IT WORKS</h1>
<div class="steps">
<div class="step"><div class="num">1</div><div class="txt"><b>Pick your country</b><span>and the scenes you love</span></div></div>
<div class="step"><div class="num">2</div><div class="txt"><b>See the live map</b><span>green = buzzing, right now</span></div></div>
<div class="step"><div class="num">3</div><div class="txt"><b>Find your people</b><span>and never watch alone</span></div></div>
</div><div class="url">yourscene.netlify.app</div></body></html>`);

/* QUOTE CARD */
Wr('quote-crowd', `<!doctype html><html><head><meta charset=utf-8>${F}<style>${BASE}
body{background:#05080a;display:flex;align-items:center;justify-content:center;text-align:center}
.glow{position:absolute;inset:0;background:radial-gradient(620px 620px at 50% 50%,rgba(57,255,20,.16),transparent 62%)}
.mark{position:absolute;top:150px;left:0;right:0;text-align:center;font-family:'Anton';font-size:220px;color:rgba(57,255,20,.25);line-height:.5}
q{position:relative;font-family:'Anton';font-size:96px;line-height:1.02;letter-spacing:-1px;max-width:880px;display:block}
q em{color:#39ff14;font-style:normal}
.url{position:absolute;bottom:110px;left:0;right:0;text-align:center;font-size:25px;font-weight:700;color:#9affc0;letter-spacing:2px}
</style></head><body><div class="glow"></div><div class="mark">“</div>
<q>THE <em>CROWD</em> YOU WATCH WITH MATTERS MORE THAN THE MATCH.</q>
<div class="url">FEEL THE CROWD · YOURSCENE.NETLIFY.APP</div></body></html>`);

/* MATCH DAY (generic, no fixture needed) */
Wr('match-day', `<!doctype html><html><head><meta charset=utf-8>${F}<style>${BASE}
body{background:#06080a;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}
.glow{position:absolute;inset:0;background:radial-gradient(700px 540px at 50% 30%,rgba(57,255,20,.24),transparent 60%)}
.live{position:relative;display:inline-flex;align-items:center;gap:14px;border:1.5px solid rgba(57,255,20,.5);background:rgba(57,255,20,.08);padding:14px 26px;border-radius:999px;font-weight:600;letter-spacing:3px;font-size:24px;color:#9affc0;text-transform:uppercase;margin-bottom:34px}
.live .pip{width:16px;height:16px;border-radius:50%;background:#39ff14;box-shadow:0 0 18px #39ff14}
h1{position:relative;font-family:'Anton';font-size:230px;line-height:.82;letter-spacing:-3px}h1 .g{color:#39ff14;text-shadow:0 0 60px rgba(57,255,20,.5)}
.sub{position:relative;margin-top:30px;font-size:40px;font-weight:600;color:#cfe9cf}
.url{position:absolute;bottom:100px;font-size:25px;font-weight:700;color:#04210a;background:#39ff14;padding:14px 28px;border-radius:14px}
</style></head><body><div class="glow"></div>
<div class="live"><span class="pip"></span> Live now in NYC</div>
<h1>MATCH<br><span class="g">DAY</span></h1><div class="sub">Find where the energy is — right now.</div>
<div class="url">yourscene.netlify.app</div></body></html>`);

/* TAG YOUR CREW (engagement) */
Wr('tag-your-crew', `<!doctype html><html><head><meta charset=utf-8>${F}<style>${BASE}
body{background:#0a0610;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}
.glow{position:absolute;inset:0;background:radial-gradient(640px 520px at 30% 20%,rgba(57,255,20,.18),transparent 60%),radial-gradient(560px 520px at 80% 85%,rgba(180,0,255,.16),transparent 60%)}
h1{position:relative;font-family:'Anton';font-size:140px;line-height:.9;letter-spacing:-2px}h1 .g{color:#39ff14}
.sub{position:relative;margin-top:30px;font-size:40px;font-weight:600;color:#e6dcf0;max-width:760px}
.hand{position:relative;font-size:120px;margin-top:24px}
.url{position:absolute;bottom:100px;font-size:24px;font-weight:700;color:#9affc0;letter-spacing:2px}
</style></head><body><div class="glow"></div>
<h1>TAG YOUR<br><span class="g">CREW</span></h1>
<div class="sub">Who are you watching the World Cup with this summer?</div>
<div class="hand">👇</div><div class="url">YOURSCENE.NETLIFY.APP</div></body></html>`);

console.log('gen3: 5 countries + 4 hoods + 5 spotlights + how-it-works + quote + match-day + tag-crew = 16');
