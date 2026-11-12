---
contact_name: Shawn Maurer
contact_title: Discipleship/Executive Pastor
organization: First Christian Church - Canton
icp: churches
apollo_contact_id: 67a4bd1356b5d1000117fcb7
score_total: 68
tier: warm
research_arm: light
status: ready
drafted_at: 2026-11-12
---

## research
- org_data: 120 employees, corroborated by WebSearch 2026-11-12 (occ.edu Adult Discipleship
  Pastor posting citing ~2,000 average weekly attendance and 91 employees for this same
  church) (source: lead-scoring 2026-11-12)
- Confirmed firstchristian.com churchcenter subdomain via church_crawler (Planning Center)
- Platform detected as squarespace -> new_build_track (source: scripts/platform_detect.py
  --url https://firstchristian.com --icp churches, lead-scoring 2026-11-12)
- research_arm: light per EXP-001 - no new searches run for drafting; facts above are reused
  from lead-scoring's score_notes and free org_data/platform_detect fields only. (An
  undated Executive Pastor opening also surfaced during scoring but was not credited as a
  trigger and is not used here either, for the same reason.)

## proof_used
- knowledge/case-studies/landmark-church.md (new_build_track)

## email_1
subject: canton's planning center gap
body: |
  Hey Shawn,

  First Christian runs about 2,000 people through Planning Center every week, and the main
  site is still built on Squarespace.

  A church at that size usually needs more than a template builder can flex to: giving,
  groups, and events all routed through one connected experience instead of bolted on
  separately.

  We build sites specifically for churches at this stage. For Landmark Church, a similar
  move grew organic search sessions 29.5% with zero paid spend.

  Worth 15 minutes?

  God Bless,
  Ethan

## email_2
subject: outgrowing the template
body: |
  Hey Shawn,

  A church running 2,000 people through Planning Center usually outgrows a template
  builder long before anyone gets around to replacing it.

  We design and build church sites meant to carry that kind of weekly traffic: fast,
  CMS-driven, and wired directly into the Planning Center tools your team already uses.

  Open to a quick call this week?

  God Bless,
  Ethan

## email_3
subject: last note, first christian
body: |
  Hey Shawn,

  Last one from me.

  If firstchristian.com already keeps up with 2,000 people a week, no worries at all.

  If it doesn't yet, happy to grab 15 minutes whenever is easiest.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-12
notes:
- "runs about 2,000 people through Planning Center every week" -> matches occ.edu Adult Discipleship Pastor posting (~2,000 average weekly attendance for this church) found during lead-scoring 2026-11-12, plus confirmed firstchristian.com churchcenter subdomain via church_crawler.
- "main site is still built on Squarespace" -> matches scripts/platform_detect.py result (platform: squarespace).
- Landmark Church quote ("grew organic search sessions 29.5% with zero paid spend") -> verbatim match to knowledge/case-studies/landmark-church.md Quotable lines; status approved, track new_build matches this lead's track. Only used in email_1, not repeated.
- No pricing cited. Track/proof consistency: new_build_track lead, new_build-tagged case study - consistent.
- scripts/voice_check.py: clean. Word counts: email_1 ~77w, email_2 ~56w, email_3 ~30w - within band.
- Sign-off: "God Bless," then "Ethan" (churches). One CTA per email, rotated phrasing.
- First sentence specific to this church (2,000 weekly attendance + Planning Center), not sendable elsewhere. No repeated proof point across the sequence.
