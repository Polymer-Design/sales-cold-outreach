---
contact_name: Kelly Powers
contact_title: Founder & Chief Operating Officer
organization: AseptiScope
icp: startups
apollo_person_id: 607a003fd29500000179059c
score_total: 54
tier: warm
research_arm: light
status: ready
drafted_at: 2026-11-09
---

## research
- AseptiScope makes the DiskCover stethoscope hygiene system; raised a $6M Series A in 2021 and announced plans for a Series B/growth round in August 2023 (source: PRNewswire 2021-04, GlobeNewswire 2023-08, both found during lead-scoring 2026-11-09) - NOT used as the email's hook since both events are now too old to reference as current (2021/2023), consistent with lead-scoring's intent score of 0/30 for this lead. The email instead hooks on the current (2026-11-09) org_data headcount-growth figure below.
- 13 employees, founded 2016, steady recent headcount growth (61%/40%/23.5% 6/12/24mo) (source: Apollo org_data, lead-scoring 2026-11-09)
- Platform detected as wordpress -> new_build_track (source: scripts/platform_detect.py --url https://diskcover.com --icp startups, scoring 2026-11-09)
- research_arm: light per EXP-001 - no new searches run for drafting; facts above are reused from lead-scoring's score_notes and free Apollo/platform_detect fields only.

## proof_used
- knowledge/case-studies/fispoke.md (new_build_track)

## email_1
subject: diskcover's commercialization push
body: |
  Hey Kelly,

  AseptiScope's headcount is up 61% in the last six months, real hiring for a medical device company scaling DiskCover.

  Hospital buyers vetting a new hygiene device usually check the website before they check anything else.

  We build sites for growing medical device companies in weeks, then keep building after launch. For Fispoke, a fintech client, we moved them off Wix onto a 25-page, CMS-driven build with SEO built in.

  Worth 15 minutes?

  Ethan

## email_2
subject: who owns diskcover.com
body: |
  Hey Kelly,

  At 13 people heading into commercialization, the site usually sits with whoever has the most spare time, not someone whose job it actually is.

  We're a dedicated team that builds it right once, then keeps it current as the company grows.

  Open to a quick call this week?

  Ethan

## email_3
subject: last note, aseptiscope
body: |
  Hey Kelly,

  Last one from me.

  If the site's keeping pace with where DiskCover is headed, no worries at all.

  If it's not quite there, happy to grab 15 minutes and talk through what a rebuild would look like.

  Ethan

## fact_check
result: pass
checked_at: 2026-11-09
notes:
- "61% 6mo headcount growth" -> matches org_data exactly. The 2021/2023 funding events were deliberately NOT used as the hook (too stale to reference as current) - caught and fixed during this pass, only the current headcount figure is used as the trigger.
- Fispoke claims -> verbatim-compatible with knowledge/case-studies/fispoke.md; track: new_build matches lead's tag.
- research_arm: light confirmed, no new search/fetch calls made.
- scripts/voice_check.py: clean. word counts: 75w/51w/40w - within band.
- sign-off: plain "Ethan". single CTA per email, no booking link.
- checked against other drafts in data/queue/ - distinct hook, no reused phrasing.
