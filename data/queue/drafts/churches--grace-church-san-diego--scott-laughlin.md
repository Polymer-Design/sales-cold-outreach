---
contact_name: Scott Laughlin
contact_title: Executive Pastor
organization: Grace Church San Diego
icp: churches
apollo_contact_id: 54c218287468697af7bb8879
score_total: 79
tier: hot
research_arm: light
status: pushed
drafted_at: 2026-11-23
pushed_at: 2026-11-24T13:10:59Z
mailbox: ethan@integratedchurchwebsites.com
---

## research
- research_arm: light per EXP-001 - no new searches run for drafting; facts below are reused
  from lead-scoring's score_notes only.
- Confirmed churchcenter.com subdomain (gracesd) - Planning Center is the system of record
  for giving/check-in (source: lead-scoring score_notes 2026-11-23, church_crawler signal)
- Site platform: Squarespace -> new_build_track (source: lead-scoring score_notes 2026-11-23,
  WebFetch gracesd.com)
- Phone number on the site opens a Google search instead of a tel: link; several nav items
  (About, Connect, Missions) point to placeholder "/new-folder" URLs; service times are
  written inconsistently ("8 AM, 9:30 am, 11 AM or 12:30 pM") (source: lead-scoring
  score_notes 2026-11-23, WebFetch gracesd.com)
- "Vision 2026" page confirms an active push for a second campus in East Clairemont
  ("prayerfully pursuing," recruiting a "Clairemont Team"), no specific date given (source:
  lead-scoring score_notes 2026-11-23, WebFetch gracesd.com/vision)
- 18 staff, founded 1912, $13.5M revenue, 4 Sunday services (source: org_data, lead-scoring
  score_notes 2026-11-23)

## proof_used
- knowledge/case-studies/landmark-church.md (new_build_track)

## email_1
subject: the phone number link
body: |
  Hey Scott,

  Your site's phone number opens a Google search instead of actually calling, and nav items
  like About, Connect, and Missions still point to placeholder "/new-folder" links.

  With four Sunday services and a second campus in the works for East Clairemont, those are
  the kind of details worth getting right before more people show up.

  We rebuild church sites so gaps like that get caught. One similar rebuild grew organic
  search sessions 29.5% with zero paid spend.

  Worth 15 minutes?

  God Bless,
  Ethan

## email_2
subject: 9:30 am or 12:30 pM?
body: |
  Hey Scott,

  Grace already runs on Planning Center for giving and check-in, but the site still lists
  service times as "8 AM, 9:30 am, 11 AM or 12:30 pM" - small, but it's the first thing a
  visitor planning their morning reads.

  As you build toward the Clairemont campus, we'd build a site that pulls straight from
  Planning Center and gets details like that right everywhere, not just the homepage.

  Open to a quick call this week?

  God Bless,
  Ethan

## email_3
subject: last note, grace church
body: |
  Hey Scott,

  Last one from me.

  If the site's working fine as you grow toward Clairemont, no worries at all.

  If the small stuff (the phone link, the service times) is worth cleaning up before then,
  happy to grab 15 minutes whenever works.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-23
notes:
- Phone-number tel: link issue, placeholder "/new-folder" nav links, inconsistent service-time
  capitalization -> verified against WebFetch of gracesd.com this same session (score_notes)
- "Vision 2026" East Clairemont second-campus push -> verified against WebFetch of
  gracesd.com/vision this same session (score_notes)
- Landmark Church proof point ("grew organic search sessions 29.5% with zero paid spend")
  verbatim-compatible with knowledge/case-studies/landmark-church.md, track new_build matches
  this lead's new_build_track
- No pricing cited
- voice_check.py: pass
- word counts: email_1 84, email_2 80, email_3 46 - all within band
- cohesion: three angles (phone/nav breakage / service-time typo tied to Planning Center /
  closer), proof used once, sign-off "God Bless," + "Ethan" correct, research_arm: light
  correctly reused only score_notes facts (no new searches run during drafting)
