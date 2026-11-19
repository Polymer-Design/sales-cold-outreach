---
contact_name: Kevin Lewis
contact_title: Marketing Director
organization: Times Square Church
icp: churches
apollo_contact_id: 5d4ae2adf65125845493165f
score_total: 64
tier: warm
research_arm: light
status: pushed
pushed_at: 2026-11-19T13:36:31Z
drafted_at: 2026-11-19
---

## research
- Confirmed Planning Center via a separate tscnyc.churchcenter.com subdomain (source:
  data/leads/churches/candidates.csv signal=churchcenter_subdomain, scripts/church_crawler.py,
  2026-10-29)
- Own marketing site runs on WordPress -> new_build_track (source: scripts/platform_detect.py,
  via lead-scoring score_notes, 2026-11-10)
- 65 staff, founded 1987, steady headcount growth (+11.8%/12mo, +26.7%/24mo) (source: Apollo
  org_data, via lead-scoring score_notes, 2026-11-10)
- No new search run for this draft (research_arm: light per EXP-001) - built from the facts
  above only, all already captured during lead-scoring

## proof_used
- knowledge/case-studies/landmark-church.md (new_build, churches icp_fit) - "Organic search
  sessions +29.5% (5,604 -> 7,256) with no paid spend"

## email_1
subject: tscnyc.churchcenter.com
body: |
  Hey Kevin,

  Your Church Center lives on its own subdomain, tscnyc.churchcenter.com, separate from the
  WordPress site people actually land on first. Two different systems, two different looks,
  for one church.

  We build the main site directly around Church Center so events, groups, and giving live in
  one place. For Landmark Church that kind of rebuild grew organic search sessions almost
  30% with zero paid spend.

  Worth a quick call about it?

  God Bless,
  Ethan

## email_2
subject: two logins for one church
body: |
  Hey Kevin,

  Running service info in Church Center and everything else on WordPress means your team
  keeps two systems straight instead of one, updating content in two places for every event
  or series.

  A connected build cuts that down to one system your team actually enjoys using, instead of
  stitching two together by hand.

  Open to chatting this week?

  God Bless,
  Ethan

## email_3
subject: no pressure, Kevin
body: |
  Hey Kevin,

  If the site's already getting a look, no worries at all.

  If not, happy to walk through it, even for 15 minutes.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-19
notes:
- research_arm=light: no new WebFetch/WebSearch performed per outreach-email skill Step 1 -
  facts drawn only from already-captured church_crawler/platform_detect/org_data records
  cited in the research block, consistent with lead-scoring's score_notes (2026-11-10)
- Church Center subdomain claim (tscnyc.churchcenter.com) matches
  data/leads/churches/candidates.csv row for Times Square Church exactly
- Polymer facts: "almost 30%" paraphrases knowledge/case-studies/landmark-church.md's
  "Organic search sessions +29.5% (5,604 -> 7,256) with no paid spend" without inventing
  numbers; track=new_build matches this lead's new_build_track; no claim that Times Square
  itself migrated off any platform, only the integration-result stat is cited
- No pricing claims in this draft
- scripts/voice_check.py: clean
- Word counts: 71/57/25 - e1/e2 within band, e3 matches the established short-closer pattern
- One CTA per email, sign-off "God Bless," then "Ethan" on all three
- Cohesion: distinct angles (two-systems-for-visitors in e1, two-systems-for-staff in e2,
  closer in e3), escalating brevity, no repeated proof point (Landmark stat only in email_1)
