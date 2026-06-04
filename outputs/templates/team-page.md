<!-- TEMPLATE: National-team page (Personas playbook)
URL: /world-cup-nyc/teams/{{team_slug}}/
Data: rows in venues.csv where teams contains {{team}} (fall back to general spots if < 3).
Rule: unique intro about THIS team's NYC fan culture/neighborhoods. Refresh weekly. -->

Title tag: Where to Watch {{team}} at the World Cup in NYC — 2026
Meta description: The best NYC bars to watch {{team}} at the 2026 World Cup, where {{team}} fans gather, and how to find the loudest crowd for every match.

# Where to Watch {{team}} in NYC (World Cup 2026)

**Last updated: {{date}}**

**Quick answer:** {{team}} fans in NYC gather at {{top_team_venue}} ({{top_team_venue_neighborhood}}), {{one_sentence_fan_culture}}. Below are the best spots for every {{team}} match.

## Best NYC bars to watch {{team}}
| Venue | Neighborhood | Why {{team}} fans go here |
|---|---|---|
{{#each team_venues}}| [{{name}}](/world-cup-nyc/venues/{{slug}}/) | [{{neighborhood}}](/world-cup-nyc/neighborhoods/{{neighborhood_slug}}/) | {{blurb_short}} |
{{/each}}

## {{team}} fan culture in NYC
<!-- Unique paragraph: where this diaspora/community concentrates (e.g. Argentina → Elmhurst/Corona;
Brazil → LIC/Astoria; USA → American Outlaws chapters). Real, specific, useful. -->

## {{team}}'s World Cup matches
{{match_list_with_dates_linking_to_match_pages}}

## Find the loudest {{team}} crowd, live
**YourScene** shows the real-time energy of {{team}} watch parties near you — find where your country's crowd actually is. Early access → yourscene.netlify.app

## FAQ
**Where do {{team}} fans watch the World Cup in NYC?** {{top_team_venue}} in {{top_team_venue_neighborhood}} is the hub.
**What's the best bar for the {{team}} games?** {{recommendation_sentence}}.

Internal links: ← [World Cup in NYC](/world-cup-nyc/) · Neighborhoods: {{linked_neighborhood_pages}}
Schema: BreadcrumbList + FAQPage + ItemList
