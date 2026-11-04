---
contact_name: Bill Buchholz
contact_title: Senior Pastor
organization: Family Community Church
icp: churches
apollo_contact_id: 66f744d831303a0001378de5
score_total: 73
tier: warm
research_arm: light
status: pushed
drafted_at: 2026-11-04
pushed_at: 2026-11-04T13:30:00Z
mailbox: ehoover@integratedchurchwebsites.com
apollo_contact_id_resolved: 6aeb34245723d700182bb284
---

## research
- Active capital campaign, "Powering Our Future," a six-month $250,000 project to fund solar panels and end a decade-long lease, starting November 1, 2026 (source: lead-scoring score_notes, WebFetch of familycommunity.church, 2026-11-04)
- Single campus (San Jose, CA), Sundays at 10am (source: same score_notes)
- Confirmed churchcenter_subdomain, Planning Center signal (source: scripts/church_crawler.py via lead-scoring)
- Platform returned unknown -> new_build_track (source: scripts/platform_detect.py via lead-scoring)
- research_arm: light - no new research run this pass, per EXP-001; built from score_notes plus free Apollo/platform fields only.

## proof_used
- knowledge/case-studies/landmark-church.md (new_build, icp_fit churches - organic search sessions +29.5% with zero paid spend)

## email_1
subject: powering our future
body: |
  Hey Bill,

  Family Community just kicked off "Powering Our Future," a six-month campaign to fund solar panels and end a lease you've carried for about a decade.

  A campaign like that deserves a site that can carry it clearly, not just a page buried in the nav.

  We moved Landmark Church onto a connected Webflow CMS and grew their organic search sessions 29.5%, zero paid spend.

  Worth 15 minutes to talk through what that could look like for Family Community?

  God Bless,
  Ethan

## email_2
subject: Sunday visitors, San Jose
body: |
  Hey Bill,

  You're already on Planning Center, so a site that actually pulls in giving, events, and the campaign isn't a rebuild, it's building around what you're already running.

  That matters most right now, with a live campaign asking people to act.

  Want to jump on a call?

  God Bless,
  Ethan

## email_3
subject: no pressure, Bill
body: |
  Hey Bill,

  If the site side of the campaign is already covered, no worries at all.

  If not, happy to talk through what a dedicated team on Family Community's site would look like, even for 15 minutes.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-04
notes:
- "Powering Our Future" capital campaign ($250k, solar panels, ends a decade-long lease, starts Nov 1 2026) -> verified against score_notes, sourced to the same-session WebFetch of familycommunity.church (2026-11-04, lead-scoring pass); light arm, not re-fetched this pass per EXP-001
- Single campus, Sun 10am -> same score_notes
- Planning Center confirmed via church crawler; platform unknown -> new_build_track per lead-scoring
- Landmark Church proof matches knowledge/case-studies/landmark-church.md quotable line verbatim; status approved, track new_build matches, icp_fit churches matches
- scripts/voice_check.py: clean
- Word counts: email_1 83, email_2 51, email_3 40 - all within band (50-85/40-80/30-60)
- One CTA per email, sign-off "God Bless," then "Ethan" throughout
- Cohesion: three distinct hooks (campaign launch / Planning Center integration angle / closer), escalating brevity, proof used once only (email_1)
