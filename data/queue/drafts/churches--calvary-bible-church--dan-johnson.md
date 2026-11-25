---
contact_name: Dan Johnson
contact_title: Executive Director
organization: Calvary Bible Church
icp: churches
apollo_contact_id: 5b8b1def324d4470a5a5a05b
score_total: 92
tier: hot
research_arm: light
status: ready
drafted_at: 2026-11-25
---

## research
- research_arm: light per EXP-001 - no new searches run for drafting; facts below are
  reused from lead-scoring's score_notes only.
- Live placeholder banner on the homepage reading "This is a public service announcement,
  this is only a test" (source: lead-scoring score_notes, 2026-11-24/25, WebFetch cbcderry.org)
- Confirmed multisite: "We're a multisite church based in Derry and doing a revitalizing
  work in Atkinson" (source: lead-scoring score_notes, WebFetch cbcderry.org)
- Confirmed churchcenter.com subdomain (church_crawler signal) - Planning Center is the
  system of record (source: lead-scoring score_notes)
- 200 staff (org_data), founded 1967 (source: Apollo org_data)

## proof_used
- knowledge/case-studies/landmark-church.md (new_build_track)

## email_1
subject: the test banner on your homepage
body: |
  Hey Dan,

  Calvary Bible's homepage still shows "This is a public service announcement, this is only
  a test," live for every visitor, right as you're revitalizing the Atkinson campus.

  You already run Planning Center behind the scenes. We'd build a site tied directly to it,
  so Derry and Atkinson both look as real as the work you're doing in them.

  One similar rebuild grew organic search sessions 29.5% with zero paid spend.

  Worth 15 minutes?

  God Bless,
  Ethan

## email_2
subject: derry, atkinson, and planning center
body: |
  Hey Dan,

  Running two campuses, Derry and Atkinson, means Planning Center has to stay consistent
  across both, which is exactly where a site that isn't built around it starts to show.

  We'd build one site tied directly to Planning Center for both locations, so neither
  campus depends on manual upkeep to stay current.

  Open to a quick call this week?

  God Bless,
  Ethan

## email_3
subject: last note, calvary bible
body: |
  Hey Dan,

  Last one from me.

  If Derry and Atkinson are both covered, no worries at all.

  If not, happy to grab 15 minutes whenever works.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-25
notes:
- Test banner text -> matches lead-scoring score_notes verbatim, sourced from WebFetch of
  cbcderry.org the same pipeline run
- "multisite church based in Derry and doing a revitalizing work in Atkinson" -> matches
  score_notes verbatim
- Planning Center confirmed via church_crawler churchcenter.com signal, independent of the
  disputed Subsplash/SnapPages platform signal - email does not name a specific website
  platform, sidestepping that ambiguity per score_notes' flag
- Landmark Church proof point verbatim-compatible with knowledge/case-studies/landmark-church.md,
  track new_build matches this lead's new_build_track
- No pricing cited
- voice_check.py: pass
- word counts: email_1 68, email_2 51, email_3 26 - all within band
- cohesion: three angles (test banner + Atkinson timing / two-campus Planning Center
  consistency / closer), proof used once, research_arm: light correctly reused only
  score_notes facts (no new searches run during drafting)
