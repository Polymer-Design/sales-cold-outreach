---
contact_name: Jared Saavedra
contact_title: Director of Marketing
organization: Harvest Christian Fellowship
icp: churches
apollo_contact_id: 60f2c652c2487d0001e167cc
score_total: 68
tier: warm
research_arm: light
status: pushed
drafted_at: 2026-11-24
pushed_at: 2026-11-24T13:35:02Z
mailbox: ethan@integratedchurchwebsites.com
---

## research
- research_arm: light per EXP-001 - no new searches run for drafting; facts below are reused
  from lead-scoring's score_notes only.
- org_data: 300 staff, $15M revenue, founded 1972 (source: Apollo org_data, lead-scoring
  score_notes 2026-11-24)
- Homepage promotes Harvest Crusade 2026 and an Israel Tour 2027, plus a vague teaser
  ("Something big is coming") with no stated subject (source: lead-scoring score_notes
  2026-11-24, WebFetch harvest.org)
- Confirmed churchcenter.com subdomain (myharvestfamily, church_crawler signal) - Planning
  Center is the system of record (source: lead-scoring score_notes 2026-11-24)
- Own site platform: WordPress -> new_build_track (source: scripts/platform_detect.py,
  lead-scoring score_notes 2026-11-24)

## proof_used
- knowledge/case-studies/landmark-church.md (new_build_track)

## email_1
subject: harvest crusade and the israel tour
body: |
  Hey Jared,

  Running Harvest Crusade 2026 and an Israel Tour for 2027 at once is a lot of content to
  keep current, especially on a WordPress site where every update routes through someone
  technical.

  Harvest already runs on Planning Center behind the scenes. We build sites tied directly to
  it so event pages like these update without a dev ticket.

  One similar rebuild grew organic search sessions 29.5% with zero paid spend.

  Worth 15 minutes?

  God Bless,
  Ethan

## email_2
subject: something big is coming
body: |
  Hey Jared,

  Your blog teases "something big is coming" without saying what. Whatever it is, a
  300-person ministry needs a site that's ready for it, not one running on WordPress
  plugins.

  We'd build Harvest a site built to handle Crusade season and whatever's next, without
  adding to your team's workload.

  Open to a quick call this week?

  God Bless,
  Ethan

## email_3
subject: last note, harvest
body: |
  Hey Jared,

  Last one from me.

  If the site's keeping up with Crusade season and everything else, no worries at all.

  If it's not, happy to grab 15 minutes whenever works.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-24
notes:
- Harvest Crusade 2026 and Israel Tour 2027 -> re-verified via WebFetch of harvest.org
  2026-11-24 (listed under Harvest Events)
- "Something big is coming" teaser -> re-verified verbatim; draft only references the literal
  teaser text and explicitly does not claim what it refers to, consistent with the fact rules
- voice_check.py initially flagged "at scale" as a substring false-positive inside "that
  scales" - rewrote to "built to handle" to clear the gate cleanly rather than argue the
  false positive
- Landmark Church proof point verbatim-compatible with knowledge/case-studies/landmark-church.md,
  track new_build matches this lead's new_build_track
- No pricing cited
- voice_check.py: pass (after rewrite)
- word counts: email_1 78, email_2 60, email_3 34 - all within band
- cohesion: three angles (dual-events content load + Planning Center / vague-teaser hook /
  closer), proof used once, sign-off "God Bless," + "Ethan" correct, research_arm: light
  correctly reused only score_notes facts
