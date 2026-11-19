---
contact_name: Mark Morinishi
contact_title: Director of Communications and Creative Arts
organization: Peninsula Covenant Church
icp: churches
apollo_contact_id: 54a7439e74686975f8c58724
score_total: 65
tier: warm
research_arm: light
status: ready
drafted_at: 2026-11-19
---

## research
- Confirmed Planning Center via a separate wearepcc.churchcenter.com subdomain (source:
  data/leads/churches/candidates.csv signal=churchcenter_subdomain, scripts/church_crawler.py,
  2026-10-30)
- Own marketing site runs on WordPress -> new_build_track (source: scripts/platform_detect.py,
  via lead-scoring score_notes, 2026-11-12)
- 60 staff, founded 1951 (Apollo org_data) - a long-established, well-staffed congregation
  (source: Apollo org_data, via lead-scoring score_notes, 2026-11-12)
- No new search run for this draft (research_arm: light per EXP-001) - built from the facts
  above only, all already captured during lead-scoring

## proof_used
- knowledge/case-studies/landmark-church.md (new_build, churches icp_fit) - "Organic search
  sessions +29.5% (5,604 -> 7,256) with no paid spend"

## email_1
subject: wearepcc.churchcenter.com
body: |
  Hey Mark,

  Church Center lives on its own address, wearepcc.churchcenter.com, separate from the
  WordPress site most first-time visitors actually land on. Giving, groups, and events sit
  one click away instead of built into the page someone's already on.

  We build the main site directly around Church Center so that split disappears. For
  Landmark Church that kind of rebuild grew organic search sessions almost 30% with zero
  paid spend.

  Worth a quick call about it?

  God Bless,
  Ethan

## email_2
subject: a 1951 church, a rented template
body: |
  Hey Mark,

  A congregation with this much history usually has a lot of content behind it, sermons,
  series, decades of ministry, and WordPress makes publishing all of that cleanly harder than
  it should be as a creative team.

  A CMS built around what you actually run gives your team one place to work instead of
  fighting the platform.

  Open to chatting this week?

  God Bless,
  Ethan

## email_3
subject: no pressure, Mark
body: |
  Hey Mark,

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
  block, consistent with lead-scoring's score_notes (2026-11-12)
- Church Center subdomain claim (wearepcc.churchcenter.com) matches
  data/leads/churches/candidates.csv row for Peninsula Covenant Church exactly
- Founded-1951 fact used only as color for the "a lot of content behind it" framing, not as
  a precise claim requiring further sourcing beyond org_data
- Polymer facts: "almost 30%" paraphrases knowledge/case-studies/landmark-church.md's
  "Organic search sessions +29.5% (5,604 -> 7,256) with no paid spend" without inventing
  numbers; track=new_build matches this lead's new_build_track
- No pricing claims in this draft
- scripts/voice_check.py: clean
- Word counts: 74/61/25 - e1/e2 within band, e3 matches the established short-closer pattern
- One CTA per email, sign-off "God Bless," then "Ethan" on all three
- Cohesion: distinct angles (visitor-facing split in e1, staff/publishing friction in e2,
  closer in e3), escalating brevity, no repeated proof point (Landmark stat only in email_1)
