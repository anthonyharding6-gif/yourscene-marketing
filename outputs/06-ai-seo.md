# YourScene — AI SEO (AEO/GEO) Plan

> Applies the `ai-seo` skill. Goal: get YourScene **cited** by ChatGPT/Perplexity/Google AI Overviews
> when fans ask "where to watch the World Cup in NYC." That query is spiking right now — this is the
> single biggest untapped traffic source pre-launch. Last updated: June 3, 2026.

## Why this matters now
- AI Overviews appear in ~45% of Google searches and can cut clicks by up to 58% — if YourScene isn't *in* the answer, the traffic never reaches you.
- "Where to watch the World Cup in NYC" is a high-intent, high-volume query for the next 5 weeks. Win the AI answer = win the fan at the exact moment of intent.
- Optimized, stat-backed content gets cited ~3x more; adding citations/statistics boosts visibility +40%.

---

## 1. AI-visibility audit (current state)

| Check | Finding | Action |
|---|---|---|
| AI bots allowed in robots.txt | ✅ `User-Agent: * / Allow: /` — GPTBot, PerplexityBot, ClaudeBot, Google-Extended all allowed | Keep; make explicit (see §5) |
| `llms.txt` present | ❌ 404 — missing | **Add it** (ready file in `site-assets/llms.txt`) |
| Sitemap | ⚠️ Points to **wrong domain**: `yourspace-waitlist.netlify.app/...` (not `yourscene`) | **Fix** — point to the real domain's sitemap |
| Schema markup | ❌ None detected | Add FAQPage + Organization + ItemList (see §6) |
| Extractable content (definition, tables, FAQ) | ❌ Landing page is a waitlist splash | **Add the flagship article** (`content/where-to-watch-world-cup-nyc.md`) |
| Brand cited in AI answers today | ❌ No (pre-launch, no content) | Publish content + get third-party mentions (§7) |

**Biggest gap:** you have zero indexable, extractable content. A waitlist splash can't be cited. The fix is one great page (below) + the machine-readable files.

---

## 2. Target query map (what fans ask AI)
Optimize for the whole cluster, not one keyword (Google fans out to related queries):

**Primary:**
- "where to watch the World Cup in NYC"
- "best soccer bars in NYC"
- "World Cup 2026 watch parties NYC"

**Fan-out / long-tail (cover these in the same page or cluster):**
- "where to watch [Mexico / England / Argentina / Brazil] game in NYC"
- "best bars to watch soccer in [Astoria / Williamsburg / Manhattan]"
- "World Cup fan zones NYC"
- "sports bars near me showing the World Cup"
- "where do [country] fans watch in NYC"
- "rooftop World Cup watch party NYC"

---

## 3. Flagship content asset (the big win)
**Page:** `/where-to-watch-world-cup-nyc` → fully written & extractable in
`outputs/content/where-to-watch-world-cup-nyc.md`.
It leads with a 40-60 word definition answer, a 20-venue comparison **table** (AI loves tables for "best X" / "X vs Y"), neighborhood + country sections (fan-out coverage), a dated FAQ, and a soft CTA to the app. Every venue row is a self-contained, extractable fact.

This single page targets the entire primary cluster and is the kind of comparison/listicle content that earns ~43% of AI citations.

## 4. Topical cluster (build as you have time — `programmatic-seo`)
Spin these from the same venue data so you're retrievable for fan-out variants:
- **Neighborhood pages:** `/world-cup-watch-parties/{astoria|williamsburg|midtown|...}`
- **Country pages:** `/where-to-watch/{mexico|england|argentina|brazil|...}-world-cup-nyc`
- **Match-day pages:** `/world-cup/{date}-nyc-watch-parties`
Each: same extractable structure, internally linked to the flagship page + waitlist.

---

## 5. robots.txt — make AI access explicit + fix the sitemap
Ready file: `site-assets/robots.txt`. Key changes: keep wildcard allow, explicitly welcome the AI search bots, block training-only CCBot (optional), and **point the sitemap at the correct domain**.

## 6. Schema markup (JSON-LD) — add to the flagship page
Ready snippets in `site-assets/schema.jsonld`: `Organization` (entity recognition for "YourScene"), `FAQPage` (direct Q&A extraction), and `ItemList` (the venue list). Content with schema sees 30-40% higher AI visibility on non-Google engines. Implement via the `schema` skill.

## 7. Presence — be where AI looks (third-party = 6.5x more citations than your own site)
- **Reddit:** the r/nyc / r/worldcup "where to watch" threads get cited heavily by ChatGPT — participate genuinely (playbook in `marketing-kit/08`). This is the highest-ROI presence move.
- **Get listed** on the authoritative roundups AI already cites: nyctourism.com soccer-bars article, iloveny.com WC events, worldcup.nyc, FANZO. (Harbor already has some of these — piggyback.)
- **YouTube Short** of the energy-map demo (Google AI Overviews cite YouTube often).
- **Wikipedia/Quora:** later, once there's notability.

## 8. Monitoring (DIY, monthly — no tools needed)
Run these 6 queries through ChatGPT, Perplexity, and Google monthly; log if YourScene is cited and who else is:
1. where to watch the World Cup in NYC
2. best soccer bars NYC
3. World Cup watch parties NYC
4. where to watch the Mexico game in NYC
5. best Astoria / Williamsburg World Cup bars
6. World Cup fan zones NYC
Track month-over-month in the tracker.

## What NOT to do (per the skill)
- Don't write separate "AI content" or chunk pages into fragments — write one genuinely helpful page.
- Don't keyword-stuff (actively *hurts* AI visibility −10%).
- Don't fake Reddit/Wikipedia mentions — real participation only.
- Don't gate the flagship content — AI can't cite what it can't read.

## Hand-off
Deploy the 3 files in `outputs/site-assets/` to the site root + publish the flagship article. All are plain files; none touch app logic. Dev can drop them in.
