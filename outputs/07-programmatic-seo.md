# YourScene — Programmatic SEO Plan

> Applies the `programmatic-seo` skill. Turns the venue dataset into a cluster of ~50-60 pages that
> blanket the "where to watch [team] in [neighborhood] NYC" fan-out. Hub = the flagship article from
> `ai-seo`. Quality over quantity — every page is genuinely differentiated. Last updated: June 3, 2026.

## Opportunity
Fans don't just search "where to watch the World Cup in NYC" — they fan out: *"where to watch Argentina in NYC," "best Astoria World Cup bars," "Mexico watch party Williamsburg,"* and per-match *"USA vs [x] watch party NYC."* One page can't rank for all of it. A templated cluster, each page answering one specific intent, can.

**Defensibility:** venue facts are semi-public now, but YourScene layers **product-derived data** (real-time crowd energy) on top — the long-term moat. Pre-launch, the unique value = accurate, curated, locally-specific picks + the live-energy CTA.

## Playbooks chosen (4, layered)
| Playbook | Pattern | Pages | Est. count |
|---|---|---|---|
| **Locations** | "World Cup watch parties in {neighborhood}" | neighborhood guides | ~6-8 |
| **Personas/segments** | "where to watch {country} in NYC" | national-team guides | ~14-16 |
| **Profiles** | "{venue} World Cup watch party" | venue pages | 20 |
| **Curation + dates** | "{teamA} vs {teamB} watch party NYC {date}" | match-day pages | ~12 (NYC-relevant) |
**Total: ~52-64 quality pages**, all from `outputs/data/venues.csv` + the match schedule.

## URL architecture (subfolders — consolidate authority, hub-and-spoke)
```
/world-cup-nyc/                                  ← HUB (the flagship article)
/world-cup-nyc/neighborhoods/{slug}/             ← e.g. /astoria/, /williamsburg/, /midtown/
/world-cup-nyc/teams/{slug}/                      ← e.g. /argentina/, /mexico/, /usa/, /england/
/world-cup-nyc/venues/{slug}/                     ← e.g. /football-factory-legends/, /banter/
/world-cup-nyc/matches/{date}-{teamA}-vs-{teamB}/ ← e.g. /2026-06-11-mexico-vs-south-africa/
```

## Internal linking (no orphans)
- **Hub → spokes:** flagship article links to every neighborhood + team page.
- **Venue page →** its neighborhood page + each team it's a hub for.
- **Team page →** its 3-5 recommended venues + relevant neighborhoods.
- **Match-day page →** venues showing it + the two teams' pages.
- Breadcrumbs (`World Cup NYC › Neighborhoods › Astoria`) with BreadcrumbList schema.
- All pages in an XML sitemap (separate sitemap per page type for crawl clarity).

## Data model — `outputs/data/venues.csv`
Single source of truth. Fields: `slug, name, neighborhood, neighborhood_slug, borough, address, teams (pipe-sep), instagram, blurb`. Each page type queries/filters this file:
- Neighborhood page = all venues where `neighborhood_slug = X`
- Team page = all venues where `teams` contains X
- Venue page = one row
- Match page = venues whose `teams` include either side (+ neighborhood spread)

## Templates (in `outputs/templates/`)
`neighborhood-page.md`, `team-page.md`, `venue-page.md` — each has unique-title/meta patterns, an intro that is NOT just swapped variables (conditional, locally-specific), a data table, FAQ, schema, and internal links.

## Rendered examples (in `outputs/content/examples/`)
- `astoria-world-cup-watch-parties.md` (Locations)
- `where-to-watch-argentina-world-cup-nyc.md` (Personas)
Show the dev exactly what generated output looks like.

## Anti-thin-content rules (avoid Google penalties)
1. **Unique intro per page** — real neighborhood/team character, not "Watch the World Cup in {X}!"
2. **Minimum 3 venues** per neighborhood/team page; if fewer, merge or `noindex` until you have data.
3. **Unique title + meta** per page (patterns in templates).
4. **No cannibalization** — one canonical page per intent; cross-link, don't duplicate.
5. **Freshness** — match-day pages dated; refresh venue data weekly during the tournament.
6. **Real utility** — the live-energy angle + accurate specifics make each page useful to a human, not just Google.

## Indexation / rollout priority
1. **Now:** hub + top 4 neighborhoods (Midtown, Astoria, Williamsburg, Downtown) + top 6 teams (Mexico, USA, England, Argentina, Brazil, Portugal). These have the most search demand.
2. **Week 2:** all 20 venue pages.
3. **Ongoing:** match-day pages, published 3-4 days before each NYC-relevant match (freshness window).
- `noindex` any page under 3 venues until it has enough to be non-thin.

## Build options (tech is the dev's call)
- Static-site generation (Next.js/Astro/11ty) reading `venues.csv` → one component per template.
- Or a no-code/CMS collection (Webflow CMS, Airtable→site) bound to the same fields.
- Keep it server-rendered/static so AI crawlers + Google see content without JS gymnastics (see `ai-seo`).

## Success metrics (post-launch)
Indexation rate, rankings for "where to watch {team}/{neighborhood}", organic traffic → waitlist, and AI citations (monitor per `outputs/06-ai-seo.md`). Watch for thin-content warnings; merge/`noindex` underperformers.
