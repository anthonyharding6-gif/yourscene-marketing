# YourScene — Lifecycle Email Sequences

> Applies the `emails` skill. Automated flows (not one-off sends) for an ESP (Customer.io / Resend /
> Mailchimp). Coordinates with — doesn't duplicate — the in-app onboarding (`outputs/09`) and uses the
> World Cup match schedule as the built-in re-engagement engine. Voice: "Feel the crowd. Find your
> scene." — short, mobile-first, energetic. One job + one CTA per email. Last updated: June 3, 2026.

## Sequences at a glance
| # | Sequence | Trigger | Goal |
|---|---|---|---|
| A | Waitlist nurture | joins waitlist (pre-launch) | stay warm → refer → install at launch |
| B | New-user onboarding | installs / creates account | activation (save venue / set alert) → habit |
| C | Stalled re-engagement | no app open 3 days (during tournament) | win back |
| D | Venue onboarding | venue confirms listing | get them live + resharing |

Global rules: send at local time; suppress a user from other sequences once in onboarding; exit a sequence the moment the goal is hit (e.g., stop nurture once they install).

---

# SEQUENCE A — Waitlist Nurture (pre-launch) ★ priority
Trigger: waitlist signup. Goal: keep warm, drive referrals, convert to install on Jun 11. 4 emails.

**A1 — Welcome (immediate)**
- Subject: You're in. Welcome to YourScene 🟢
- Preview: Here's what you just got early access to (and how to skip the line).
- Body:
  > You're on the list — nice. ⚽
  > When the World Cup hits NYC, YourScene shows you the **real-time energy** of every watch party and bar near you, so you always find the crowd, not an empty room.
  > Want in even sooner? Invite 3 friends and unlock your country's crowd map before launch.
- CTA: **Share your link** → referral page

**A2 — Value: where to watch (day 3)**
- Subject: Where to watch the opener in NYC
- Preview: 20 of the city's best World Cup spots, by neighborhood.
- Body:
  > Kickoff's almost here. While you wait for the app, here's our guide to the best watch parties in NYC — Football Factory, Banter in Williamsburg, Boca Juniors Steakhouse for the Argentina crowd, and more.
  > Find your spot for the Mexico opener 👇
- CTA: **See the NYC guide** → /where-to-watch-world-cup-nyc

**A3 — Referral nudge (day 6)**
- Subject: Skip the line 🟢
- Preview: Your friends + your country's crowd, unlocked early.
- Body:
  > The best watch parties are better with your people. Invite 3 friends and you'll both get early access + your country's crowd map before everyone else.
- CTA: **Invite friends** → referral page

**A4 — Launch day (Jun 11 AM)**
- Subject: We're live. Find your scene for the opener ⚽
- Preview: Mexico kicks off the World Cup — here's where the crowd is.
- Body:
  > It's here. YourScene is **live** — open the app and see where NYC is watching the opener, right now.
  > Feel the crowd. Find your scene.
- CTA: **Open YourScene** → app store / deep link

---

# SEQUENCE B — New-User Onboarding (post-install)
Trigger: install / account created. Goal: drive to the aha moment (save a venue / set a match alert). Email *supports* in-app onboarding. 5 emails, but match events override timing.

**B1 — Welcome + first step (immediate)**
- Subject: Your city's about to light up
- Preview: Pick your country and see the map.
- Body: Welcome! Two taps to start: pick who you're repping, turn on location, and watch the map light up green where the energy is.
- CTA: **Find your scene** → open app (map)

**B2 — Activation help (day 1, only if NOT activated)**
- Subject: Don't miss the next match
- Preview: Set an alert and we'll tell you where it's buzzing.
- Body: Set an alert for the next match and YourScene will ping you when the spots near you start filling. Never walk into a dead bar again.
- CTA: **Set a match alert** → app

**B3 — Feature: find your people (day 3)**
- Subject: See who's already out
- Preview: Your country's crowd + your friends, on the map.
- Body: The best part isn't the bar — it's the crowd. Find where your country's fans are watching, and invite your crew so you can see who's where.
- CTA: **Invite your crew** → app invite

**B4 — Match-day re-engagement (event-based, recurring per relevant match)**
- Subject: [Team] kicks off in 2 hours
- Preview: Here's where the crowd's going near you.
- Body: [Team] vs [Team] is almost here. Spots near you are already filling — open the map and grab your scene before it's packed. 🟢
- CTA: **See what's buzzing** → app (map)

**B5 — Habit / beyond the Cup (day 12-14)**
- Subject: The scene doesn't stop at the final
- Preview: Nightlife, music, and more — live.
- Body: Loved finding the crowd for the matches? YourScene works for nightlife, concerts, and the whole city's energy — every night. Keep finding your scene.
- CTA: **Open YourScene** → app

---

# SEQUENCE C — Stalled Re-Engagement
Trigger: no app open in 3 days during the tournament. Goal: win back. 3 emails. Exit on any open.

**C1 — Match-anchored check-in**
- Subject: [Team] plays tomorrow
- Preview: Your spots are waiting.
- Body: Big match coming up. Open YourScene to see where the [team] crowd's heading — don't watch it alone.
- CTA: **Find your scene** → app

**C2 — Value reminder (3 days later)**
- Subject: The city's lit up right now 🟢
- Preview: The knockouts are where it gets loud.
- Body: The atmosphere's peaking. Here's where the energy is tonight near you.
- CTA: **See the map** → app

**C3 — Last touch (4 days later)**
- Subject: Still want to find your scene?
- Preview: We'll keep your spots ready.
- Body: No worries if now's not the time — your saved spots and country crowd will be here when you're back. One tap to jump back in.
- CTA: **Open YourScene** → app

---

# SEQUENCE D — Venue Onboarding (supply side)
Trigger: a venue confirms it wants to be listed. Goal: get them live + resharing to their following. 3 emails.

**D1 — Welcome + what we need (immediate)**
- Subject: Let's get [Venue] on the map
- Preview: 3 quick things and you're live.
- Body: Awesome — excited to feature [Venue]! To get you live for launch, send: (1) which matches you're showing, (2) any specials/cover, (3) your best photo or IG handle.
- CTA: **Reply with your details** (or a short form link)

**D2 — You're live (when listed)**
- Subject: [Venue] is live on YourScene 🟢
- Preview: Share it with your crowd.
- Body: You're on the map — fans searching for [neighborhood] watch parties will find you. Want more of them? Reshare this to your followers; we made it easy.
- CTA: **Get your share kit** → spotlight asset

**D3 — Match-day nudge (event-based)**
- Subject: Big match at [Venue] tomorrow
- Preview: We'll send fans your way.
- Body: [Team] vs [Team] is tomorrow — make sure your YourScene listing shows it so fans pick you. Anything to update?
- CTA: **Update your listing** → form

---

## Metrics & benchmarks
Track per email: open rate (target 35-50% for warm/lifecycle), click rate (3-7%), and the real one — **install rate** (Seq A) and **activation rate** (Seq B, target ≥40% per `outputs/09`). Instrument with the `analytics` plan (`outputs/10`); UTM the CTAs (utm_source=newsletter, utm_medium=email). A/B test subjects with `ab-testing`.

## Tooling (part-time, low cost)
- **Customer.io** if you want behavior-triggered flows (match events, stalled detection) — best fit.
- **Resend** for dev-friendly transactional + simple sequences.
- **Mailchimp** for the simplest start (has MCP). Whatever the waitlist already uses, start there.

## Related
`onboarding` (in-app side these support), `churn-prevention` (Seq C deepens), `referrals` (Seq A3/B3 loop), `analytics` (instrument), `ab-testing` (subject/CTA tests), `copywriting` (the pages these link to).
