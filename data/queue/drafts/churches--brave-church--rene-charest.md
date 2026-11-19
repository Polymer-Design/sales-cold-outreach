---
contact_name: Rene Charest
contact_title: Executive Pastor
organization: Brave Church
icp: churches
apollo_contact_id: 64d8f403560f3d00011114cb
score_total: 64
tier: warm
research_arm: light
status: ready
drafted_at: 2026-11-19
---

## research
- Confirmed Planning Center via a separate brave.churchcenter.com subdomain (source:
  data/leads/churches/candidates.csv signal=churchcenter_subdomain, scripts/church_crawler.py,
  2026-10-29)
- Own marketing site runs on Squarespace -> new_build_track, "outgrown the DIY builder" angle
  (source: scripts/platform_detect.py, via lead-scoring score_notes, 2026-11-11)
- 91 staff (Apollo org_data) - a large, multi-ministry operation (source: Apollo org_data,
  via lead-scoring score_notes, 2026-11-11)
- No new search run for this draft (research_arm: light per EXP-001) - built from the facts
  above only, all already captured during lead-scoring

## proof_used
- knowledge/case-studies/landmark-church.md (new_build, churches icp_fit) - "Organic search
  sessions +29.5% (5,604 -> 7,256) with no paid spend"

## email_1
subject: brave.churchcenter.com
body: |
  Hey Rene,

  Church Center runs on its own subdomain, brave.churchcenter.com, while the main site sits
  on Squarespace, a template builder most churches outgrow once they're running real
  programs through it.

  We build the site directly around Church Center on a platform built to grow with you, not
  rented from a builder. For Landmark Church that kind of rebuild grew organic search
  sessions almost 30% with zero paid spend.

  Worth a quick call about it?

  God Bless,
  Ethan

## email_2
subject: outgrowing the template
body: |
  Hey Rene,

  Running real ministries, series, and events across a church your size usually means
  outgrowing what Squarespace handles cleanly once you're past a handful of pages.

  A CMS-driven build keeps your team publishing without waiting on a web person, and keeps
  Church Center content connected instead of bolted on the side.

  Open to chatting this week?

  God Bless,
  Ethan

## email_3
subject: no pressure, Rene
body: |
  Hey Rene,

  If the site's already getting a look, no worries at all.

  If not, happy to walk through it, even for 15 minutes.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-19
notes:
- research_arm=light: no new WebFetch/WebSearch performed - facts drawn only from
  already-captured church_crawler/platform_detect/org_data records cited in the research
  block, consistent with lead-scoring's score_notes (2026-11-11)
- Church Center subdomain claim (brave.churchcenter.com) matches
  data/leads/churches/candidates.csv row for Brave Church exactly
- Did not quote the specific 91-employee org_data estimate directly to the lead (reads as
  surveillance-y for a cold email) - used it only as internal justification for the
  "church your size" framing, not a cited figure
- Polymer facts: "almost 30%" paraphrases knowledge/case-studies/landmark-church.md's
  "Organic search sessions +29.5% (5,604 -> 7,256) with no paid spend" without inventing
  numbers; track=new_build matches this lead's new_build_track; "outgrown the DIY builder"
  angle matches icp-churches.yaml's squarespace routing
- No pricing claims in this draft
- scripts/voice_check.py: clean
- Word counts: 74/55/25 - e1/e2 within band, e3 matches the established short-closer pattern
- One CTA per email, sign-off "God Bless," then "Ethan" on all three
- Cohesion: distinct angles (visitor-facing split in e1, staff/publishing friction in e2,
  closer in e3), escalating brevity, no repeated proof point (Landmark stat only in email_1)
