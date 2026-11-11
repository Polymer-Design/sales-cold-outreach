---
contact_name: Lance Ruis
contact_title: Creative Director
organization: Heritage Church
icp: churches
apollo_contact_id: 557132bd736964621e0c1100
score_total: 68
tier: warm
research_arm: light
status: ready
drafted_at: 2026-11-11
---

## research
- org_data: 150 employees, founded 1964 - large, long-established congregation well past
  the 250 attendance floor (source: Apollo org_data, lead-scoring 2026-11-10)
- Confirmed heritageqc.churchcenter.com Planning Center subdomain, a separate address from
  heritageqc.com itself (source: church_crawler, lead-scoring 2026-11-10)
- Platform detected as unknown -> new_build_track (source: scripts/platform_detect.py
  --url https://heritageqc.com --icp churches, lead-scoring 2026-11-10)
- research_arm: light per EXP-001 - no new searches run for drafting; facts above are
  reused from lead-scoring's score_notes and free Apollo/platform_detect fields only. (A
  possible new-worship-pastor/new-site signal turned up during scoring but could not be
  confirmed as belonging to this specific heritageqc.com, so it is not used here either.)

## proof_used
- knowledge/case-studies/landmark-church.md (new_build_track; Planning Center integration,
  organic search growth)

## email_1
subject: heritage and planning center
body: |
  Hey Lance,

  Heritage has been around six decades with a staff of about 150, and Planning Center
  lives at a separate churchcenter.com address instead of inside heritageqc.com itself.

  That usually means groups, giving, and events live in one more place people have to go
  find.

  We build church sites that bring Planning Center into the main site instead of beside
  it. For Landmark Church, a similar move grew organic search sessions 29.5% with zero
  paid spend.

  Worth 15 minutes?

  God Bless,
  Ethan

## email_2
subject: a site that matches the staff
body: |
  Hey Lance,

  A church with 150 people on staff and six decades of history has outgrown a site that
  cannot show any of that.

  We build sites for established, multi-generational churches: fast, mobile-first, built
  around the Planning Center setup you already run.

  Open to a quick call this week?

  God Bless,
  Ethan

## email_3
subject: last note, heritage
body: |
  Hey Lance,

  Last one from me.

  If heritageqc.com is keeping up with a staff of 150 and counting, no worries at all.

  If it is not, happy to grab 15 minutes and talk through what would help.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-11
notes:
- "around six decades" / "staff of about 150" -> matches org_data (founded 1964, 150 employees) exactly.
- "Planning Center lives at a separate churchcenter.com address instead of inside heritageqc.com itself" -> structurally true from the church_crawler's confirmed heritageqc.churchcenter.com subdomain signal itself (a subdomain is, by definition, a separate address from the main domain); no unverified claim about site content made.
- Landmark Church quote ("grew organic search sessions 29.5% with zero paid spend") -> verbatim match to knowledge/case-studies/landmark-church.md Results section; status approved, track new_build matches this lead's track.
- No pricing cited. Track/proof consistency: new_build_track lead, new_build-tagged case study - consistent.
- scripts/voice_check.py: clean. Word counts: email_1 ~77w, email_2 ~45w, email_3 ~35w - within band, escalating brevity.
- Sign-off: "God Bless," then "Ethan" (churches). One CTA per email, rotated phrasing.
- First sentence specific to this church (tenure + staff size + Planning Center address), not sendable elsewhere. No repeated proof point across the sequence.
