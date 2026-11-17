---
contact_name: Steve Shoemaker
contact_title: Executive Pastor
organization: Silverdale Baptist Church
icp: churches
apollo_contact_id: 6ad5d7144a20e100018fcd2e
score_total: 69
tier: warm
research_arm: light
status: pushed
drafted_at: 2026-11-17
pushed_at: 2026-11-17
---

## research
- Six campuses under "One Church, Many Locations": Apison, Bonny Oaks, Gracia, North Georgia, North Ooltewah, St. Elmo (source: silverdalebc.com homepage, WebFetch 2026-11-17, per score_notes)
- Confirmed churchcenter.com subdomain, flagship Planning Center signal (source: church_crawler, per score_notes)
- org_data: 56 employees, founded 1889, $8.3M revenue, affiliated academy (source: Apollo org_data, per score_notes)
- Platform: unknown -> new_build_track (source: scripts/platform_detect.py, per score_notes)

## proof_used
- knowledge/case-studies/landmark-church.md (church new_build, Planning Center-connected Webflow migration, organic growth numbers)

## email_1
subject: six campuses, one site
body: |
  Hey Steve,

  Six campuses, Apison, Bonny Oaks, Gracia, North Georgia, North Ooltewah, and St. Elmo, means a lot to keep straight on one site, for your team and for anyone trying to find the right location.

  We moved a multi-site church off a template builder onto a connected Webflow CMS pulling straight from Planning Center: campuses, services, groups. Organic search grew 29.5% with zero paid spend.

  Worth 15 minutes to see what that'd look like for Silverdale?

  God Bless,
  Ethan

## email_2
subject: six campuses, one build
body: |
  Hey Steve,

  Following up. A church with six campuses and an academy under one roof needs a site that actually holds all of it without turning into a maze.

  For a build at that scope, Planning Center integrations included, we're usually looking at Custom, from $12,000.

  Open to a quick call on it?

  God Bless,
  Ethan

## email_3
subject: short note from me
body: |
  Hey Steve,

  Short note. If the site's handling six campuses fine as is, no worries at all.

  If it's adding friction instead of cutting it, happy to show you the Planning Center-connected build we did for another church.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-17
notes:
- "six campuses: Apison, Bonny Oaks, Gracia, North Georgia, North Ooltewah, St. Elmo" -> matches silverdalebc.com homepage per research block (WebFetch 2026-11-17 during scoring), light arm reuses this, no new search
- "29.5%... zero paid spend" -> matches knowledge/case-studies/landmark-church.md exactly (Organic search sessions +29.5% (5,604 -> 7,256) with no paid spend); landmark-church.md's "campus info" / connected-CMS scope supports characterizing it as a multi-site-relevant build
- Pricing "Custom, from $12,000" -> matches knowledge/business-overview.md Custom tier exactly; correctly follows the "multi-campus churches... Custom, mention from $12,000, never a specific quote" rule rather than quoting Core
- Track: new_build_track, proof tagged track: new_build in landmark-church.md frontmatter - consistent
- voice_check.py: clean (no banned words/phrases/openers, no em dashes)
- Word counts: email_1 80w, email_2 56w, email_3 41w - within band
- Sign-off "God Bless," + "Ethan" - correct for churches
- Cohesion: same case study referenced across emails but different facts each time (growth stat, pricing, generic callback) - no repeated sentence; escalating brevity holds (80->56->41); first sentence (named campuses) sendable to no other org
