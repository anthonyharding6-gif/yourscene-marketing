# YourScene — Analytics & Tracking Plan

> Applies the `analytics` skill. Instruments the waitlist, the onboarding funnel (`outputs/09`), and
> per-channel attribution so every signup is traceable and every target is provable. Track for
> decisions, not vanity. Naming = `object_action`, lowercase_underscores, no PII in properties.
> Last updated: June 3, 2026.

## The questions this data must answer
1. Which channel actually drives waitlist signups → installs → activated users? (kill what doesn't work)
2. Where do new users drop in onboarding? (fix the biggest leak — see funnel below)
3. Are we hitting the activation/retention targets from `outputs/09`?
4. Is the SEO content (`outputs/06-07`) converting readers to signups?
5. Is the referral loop (`outputs/05`) actually looping?

## Recommended stack (part-time, ~$0 budget)
| Layer | Tool | Why |
|---|---|---|
| Web/waitlist | **GA4** (+ GTM) | Free, has MCP, standard for organic/UTM attribution |
| Product/app | **PostHog** | Generous free tier, session replay, **doubles as the feature-flag tool for the `ab-testing` experiments** in `outputs/09` |
| (alt) | Mixpanel / Amplitude | Either works; PostHog wins on free + flags + replay |
| Search | **Google Search Console** | The only way to measure the SEO pages' organic performance |
Wire PostHog into the app SDK; GA4+GTM on the web. One `user_id` (hashed) shared across both so web→app is joinable.

---

## Tracking plan — WAITLIST SITE (GA4 via GTM)
| Event | Properties | Trigger |
|---|---|---|
| `page_view` | page_location, page_referrer, utm_* | auto (enhanced measurement) |
| `guide_viewed` | slug, neighborhood, team | view of any `/world-cup-nyc/*` SEO page |
| `cta_clicked` | button_text, location (hero/band/footer) | any waitlist CTA click |
| `waitlist_signup_completed` ⭐ | method, source, country | signup success |
| `referral_link_shared` | channel | post-signup share action |
| `referral_signup_completed` | referrer_code | signup via a referral link |
⭐ = mark as **conversion**. `source` = UTM source captured at signup.

## Tracking plan — APP (PostHog)
**Onboarding funnel (mirrors `outputs/09`):**
| Event | Properties | Trigger |
|---|---|---|
| `app_installed` | platform, acquisition_source | first open (store referrer) |
| `app_opened` | session_number | every launch |
| `onboarding_country_selected` | countries[] | country pick |
| `location_permission_result` | granted (bool) | after OS prompt |
| `map_viewed` | venues_shown_count, mode (live/expected) | map render |
| `venue_viewed` | venue_slug, energy_state | venue card open |
| `venue_saved` ⭐ | venue_slug | save tap |
| `match_alert_set` ⭐ | match_id | alert set |
| `activation_completed` ⭐ | trigger (saved_venue \| set_alert) | derived: first venue_saved OR match_alert_set in session 1 |
| `push_permission_result` | granted (bool) | after OS prompt |
| `account_created` ⭐ | method (apple/google) | account capture |
| `friend_invited` | channel | invite action |
| `push_notification_opened` | type (matchday/spike/lull) | push tap |
⭐ = conversions. **Activation = `activation_completed`** — the metric everything optimizes for.

## Custom dimensions / user properties (no PII)
`user_id` (hashed), `country_team`, `tribes[]`, `acquisition_source`, `acquisition_channel`, `activation_status`, `is_founding_fan`. Never put email/name/phone in event properties.

---

## Attribution: UTM strategy (ready table → `outputs/data/utm-builder.csv`)
Every link you share gets UTMs so signups attribute to the right channel. Convention: lowercase, underscores.
| Channel | utm_source | utm_medium | utm_campaign |
|---|---|---|---|
| Venue DM/email | venue | outreach | wc2026_supply |
| Influencer (per creator) | {handle} | influencer | wc2026_launch |
| Community org | community | partnership | wc2026_supply |
| Instagram bio | instagram | bio | wc2026 |
| IG Story/Reel | instagram | social | wc2026 |
| Threads | threads | social | wc2026 |
| X | x | social | wc2026 |
| Reddit | reddit | community | wc2026 |
| Facebook group | facebook | group | wc2026 |
| Discord | discord | community | wc2026 |
| Email/waitlist blast | newsletter | email | launch_jun11 |
| Harbor reshare | harbor | partner | wc2026 |
SEO/flagship pages = **organic** (no UTM) — measure via GSC + GA4 `guide_viewed` → `waitlist_signup_completed`.

## The funnels to watch
**Acquisition → waitlist (web):** `page_view` → `cta_clicked` → `waitlist_signup_completed`, split by utm_source.
**Waitlist → activated (cross):** `waitlist_signup_completed` → `app_installed` → `activation_completed`, split by source (which channel sends *stickers*, not just clicks).
**Onboarding (app):** install → country → location_granted → map_viewed → activation → D1 → D7 (targets in `outputs/09`: activation ≥40%, location grant ≥55%, push opt-in ≥50%, D7 ≥25%).

## North-star metric
**Weekly active fans who find a buzzing spot** (proxy pre-launch: weekly activated users). Vanity metrics to ignore: raw installs, total pageviews, follower counts.

## Privacy & compliance
- **Mobile ATT:** show Apple's App Tracking Transparency prompt; don't gate core analytics on it (use first-party event analytics).
- **Web consent:** GA4 Consent Mode for EU/UK/CA visitors; IP anonymization on.
- **No PII in properties** — hashed `user_id` only. Keep contact data in the private tracker, never in analytics.

## Validation checklist (before launch)
- [ ] GA4 + GTM live; `waitlist_signup_completed` marked as conversion
- [ ] PostHog SDK in app; onboarding events firing (test in DebugView)
- [ ] `activation_completed` derived correctly (fires once, session 1)
- [ ] UTMs captured at signup and persisted to `source` property
- [ ] Shared `user_id` joins web ↔ app
- [ ] No PII in any event property (audit once)
- [ ] GSC verified for the domain + sitemap submitted (also fixes the `ai-seo` sitemap finding)
- [ ] Funnels + a one-screen dashboard built (signups by source, onboarding funnel, D1/D7)

## Related
`ab-testing` (PostHog feature flags run the `outputs/09` experiments), `cro` & `onboarding` (consume this data), `seo-audit`/`ai-seo` (GSC), `revops` (later, venue/revenue pipeline).
