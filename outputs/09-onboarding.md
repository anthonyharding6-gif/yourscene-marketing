# YourScene — Onboarding & Activation

> Applies the `onboarding` skill. Goal: get a new user to the "aha moment" — seeing a real, lit-up
> watch spot near them — in under 60 seconds, WITHOUT ever hitting an empty map. This is the single
> biggest retention risk for a crowd-energy app. Last updated: June 3, 2026.

## The aha moment (activation definition)
**A new user sees a populated, energetic map of World Cup watch spots near them and saves one / sets a match alert.**
That's the action that proves the product works and predicts retention. Everything in the first session drives to it.

Secondary aha: **"finds my country's crowd"** — picks their team, immediately sees where that crowd watches.

**Activation event (instrument this):** `first_session_saved_venue_or_set_alert` within the first session.

## The core challenge: don't ship an empty map
Pre-launch and early on, real-time presence data is thin. A blank or grey map = instant churn. Solve it with seeded, always-on value:
1. **Seed the map with real venues + the WC schedule** (the 20 venues in `outputs/data/venues.csv` + Harbor's 6 events). The map is never empty — it shows real spots and what match each is showing.
2. **Show "expected energy," not just live energy** early on — e.g. "Buzzing for the 3pm Argentina match" based on the schedule + venue's team affinity, until real-time presence kicks in. Label it honestly ("Expected" vs "Live now 🟢").
3. **Always zoom to show *something*** — if the user's block is quiet, widen to the neighborhood/borough so they always see active spots. Never a dead screen.
4. **Match-anchored, not just place-anchored** — open onboarding around the next match ("Mexico kicks off in 2h — here's where the crowd's going"). The tournament guarantees relevance.

## First session — step by step (mobile: permissions → quick win → push → habit)
**0-10s — Pick your scene (value-first, no account wall)**
- Screen 1: "Who are you reppin'?" → pick country/countries (this is the Fan Passport seed + powers the map).
- Optional: pick vibe/tribes (sports / nightlife / rooftops). Skippable.
- *Do NOT* ask for signup/email yet — deliver value first, capture later.

**10-25s — Location permission, primed in context**
- Pre-permission screen BEFORE the OS prompt: "Show me what's buzzing near me" → [Turn on location]. Explain the value, then trigger the OS dialog. (Priming lifts grant rates significantly.)
- If denied: fall back to a city/neighborhood picker — never dead-end.

**25-45s — The aha: a populated, energetic map**
- Drop them onto the map, already showing real venues near them lit by expected/live energy for the next match.
- Auto-surface "Your [country] crowd" pin if they picked a team.
- One clear primary action per the empty-state rule: **"Save a spot"** or **"Set an alert for [next match]"**.

**45-60s — Push permission, primed at the value moment**
- After they save/tap: "Want a heads-up when [venue] starts buzzing for the [match]?" → [Notify me]. Priming push at the moment of demonstrated interest = far higher opt-in than asking on launch.

**Then — capture the account** (now that they've felt value): "Save your scene" → Apple/Google one-tap. Low friction, high intent.

## Onboarding checklist (3-5 items, value-ordered, dismissable)
Surface as a small progress card, not a wall:
1. ✅ Pick your country/tribe (done in flow)
2. ⬜ Turn on location (see what's near you)
3. ⬜ Save your first spot
4. ⬜ Set a match alert
5. ⬜ Invite a friend → see who's out (ties to `referrals` loop)
Show % complete; celebrate completion ("You're set — go find your scene 🟢").

## Empty-state copy (turn dead ends into onboarding)
- **Quiet block:** "Your block's calm right now — but [neighborhood] is heating up for the [match]. Take a look 👇" → widen map.
- **No matches today:** "No matches today. Save your favorite spots so you're ready when [next match date] kicks off." (extends habit past match days)
- **No friends yet:** "None of your crew are out yet. Invite them and you'll see who's where." → invite CTA.

## Push + email coordination (reinforce, don't duplicate)
**Push (the habit engine — the tournament makes these welcome, not spammy):**
- Match-day, T-2h: "Mexico vs South Africa in 2h — 4 spots near you already filling 🟢"
- Live spike: "[Saved venue] is buzzing right now for the [match]."
- Post-match lull → keep habit: "Knockout draw is set — here's where to watch the [team] next."
**Email (waitlist → install → activate):**
- Welcome (immediate): one CTA — open the app, pick your country.
- Incomplete onboarding (24h): "You're one tap from your city, live." → deep link to the map.
- Activation celebration: "You found your scene 🎉 here's how to never miss the crowd."
- Stalled (3-7 days): "The [team] play [date] — your spots are waiting."

## Stalled-user recovery
- **Stalled = no open in 3 days during the tournament** (tight window matters). 
- Trigger a match-anchored push/email ("[team] vs [team] tomorrow"). The schedule is your built-in re-engagement calendar — use every match as a reason to return.

## Metrics & funnel (instrument before launch — see `analytics` next)
```
Install → Pick country → Location granted → Map shown → SAVE/ALERT (activation) → D1 → D7
 100%       ~85%            ~60%              ~90%*        ~40% target            …
```
*of those past location. Track: activation rate, time-to-activation, location grant rate, push opt-in rate, D1/D7 retention, and activation by acquisition source (which channel sends users who stick).
**Targets:** activation ≥40% of installs; location grant ≥55%; push opt-in ≥50% (primed); D7 ≥25% during tournament.

## Top 5 experiments (run with `ab-testing`)
1. **Country-first vs map-first** opening screen (hypothesis: country-first personalizes the map → higher activation).
2. **Primed vs cold** location/push prompts (expect large grant-rate lift from priming).
3. **"Expected energy" labeling** on/off early — does showing predicted buzz raise saves without hurting trust?
4. **Account capture timing** — before vs after first save (expect after = higher completion).
5. **Match-anchored vs place-anchored** first screen.

## Related
`signup` (the capture step), `emails` (full lifecycle series), `referrals` (the invite checklist item), `analytics` (instrument all of the above), `ab-testing` (run the experiments).
