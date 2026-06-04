<!-- TEMPLATE: Neighborhood page (Locations playbook)
URL: /world-cup-nyc/neighborhoods/{{neighborhood_slug}}/
Data: all rows in venues.csv where neighborhood_slug == {{neighborhood_slug}}
Rule: render only if >= 3 venues, else noindex/merge. Write a UNIQUE intro per neighborhood
(real local character) — do not just swap the name. Refresh weekly during the tournament. -->

Title tag: Where to Watch the World Cup in {{neighborhood}} ({{borough}}) — 2026
Meta description: The best World Cup 2026 watch parties and soccer bars in {{neighborhood}}, {{borough}}. {{venue_count}} spots, what each is known for, and how to find the buzzing one.

# Where to Watch the World Cup in {{neighborhood}}

**Last updated: {{date}}**

**Quick answer:** {{neighborhood}} has {{venue_count}} standout World Cup spots, led by {{top_venue}} ({{top_venue_hook}}). {{one_sentence_neighborhood_character}}

## Best World Cup bars in {{neighborhood}}
| Venue | Address | Known for | Best for |
|---|---|---|---|
{{#each venues}}| [{{name}}](/world-cup-nyc/venues/{{slug}}/) | {{address}} | {{blurb_short}} | {{teams_human}} |
{{/each}}

## {{unique_section}}
<!-- One genuinely local paragraph: e.g. for Astoria, the Greek/Moroccan/Brazilian/Croatian fan mix;
for Williamsburg, the rooftop + international-crowd angle. Pull from the area's real character. -->

## Find the buzzing spot in {{neighborhood}}, live
Crowds shift by match and hour. **YourScene** shows the real-time crowd energy of every venue in {{neighborhood}} so you find the packed spot, not an empty room. Get early access → yourscene.netlify.app

## FAQ
**Where's the best World Cup atmosphere in {{neighborhood}}?** {{top_venue}} — {{top_venue_hook}}.
**Which {{neighborhood}} bars open early for morning matches?** {{early_openers}}.
**Where do {{notable_team}} fans watch in {{neighborhood}}?** {{team_hub_sentence}}.

Internal links: ← [World Cup in NYC]( /world-cup-nyc/ ) · Teams: {{linked_team_pages}}
Schema: BreadcrumbList + FAQPage + ItemList (see site-assets/schema.jsonld pattern)
