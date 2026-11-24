---
contact_name: Amy Ruth
contact_title: Director of Communications
organization: New Heights Church
icp: churches
apollo_contact_id: 54a40b3374686934421cff27
score_total: 77
tier: hot
research_arm: deep
status: hot_approved
drafted_at: 2026-11-24
---

## research
- 82 staff (org_data), $3.3M revenue, founded 1954 (source: Apollo org_data, lead-scoring
  score_notes 2026-11-24)
- Site confirms 4 physical locations across two languages: "New Heights is one church,
  meeting in four locations, worshipping in two languages," with 13 total Sunday services
  across them (source: lead-scoring score_notes 2026-11-24, WebFetch newheights.org)
- Confirmed churchcenter.com subdomain (newheights, church_crawler signal) - Planning Center
  is the system of record (source: lead-scoring score_notes 2026-11-24)
- Christmas push promoted on the homepage: "we'll get to host hundreds of first-time
  guests" (source: lead-scoring score_notes 2026-11-24, WebFetch newheights.org)
- PageSpeed (mobile), checked fresh for drafting: performance 35/100, LCP 9.2s, speed index
  6.2s (scripts/pagespeed_check.py 2026-11-24) - a real, weak site-health stat, used as
  supporting evidence only

## proof_used
- knowledge/case-studies/landmark-church.md (new_build_track)

## email_1
subject: four campuses, two languages
body: |
  Hey Amy,

  New Heights runs 13 services across four locations in two languages, all tied to Planning
  Center behind the scenes - a lot for one site to hold together, and it currently takes 9.2
  seconds to load on mobile.

  We'd build a site pulling directly from Church Center so every campus and language stays
  current without extra upkeep. Landmark Church did something similar and grew organic
  search sessions 29.5% with zero paid spend.

  Worth 15 minutes?

  God Bless,
  Ethan

## email_2
subject: hundreds of first-time guests
body: |
  Hey Amy,

  With Christmas bringing hundreds of first-time guests across four locations, that's the
  exact moment a slow, hard-to-navigate site costs you the most - visitors checking service
  times before they ever walk in.

  We'd build New Heights a fast site built around your actual campuses and languages, not a
  patched-together multi-location template.

  Open to a quick call this week?

  God Bless,
  Ethan

## email_3
subject: last note, new heights
body: |
  Hey Amy,

  Last one from me.

  If the site's handling four campuses and the holiday push fine, no worries at all.

  If it's not, happy to grab 15 minutes whenever works.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-24
notes:
- "One church, meeting in four locations, worshipping in two languages" -> re-verified
  verbatim via WebFetch of newheights.org 2026-11-24
- "13 services" -> re-verified: page lists 14 total service times, 13 of them Sunday
  (East/West/Battle Ground at 3 each, Central Vancouver's 3 Sunday + 1 separate Thursday
  service, Nuevas Alturas 1) - East Vancouver's listing doesn't explicitly state "Sunday" but
  is grouped with the other Sunday campuses, consistent with the score_notes framing
- "Hundreds of first-time guests" Christmas line -> re-verified verbatim via same WebFetch
- PageSpeed 35/100 mobile, LCP 9.2s -> fresh scripts/pagespeed_check.py run 2026-11-24, cited
  as a raw fact about their own site only, not a comparative claim
- Landmark Church proof point verbatim-compatible with knowledge/case-studies/landmark-church.md,
  track new_build matches this lead's new_build_track
- No pricing cited
- voice_check.py: pass
- word counts: email_1 80, email_2 63, email_3 34 - all within band
- cohesion: three angles (multi-campus/Planning Center + slow site / Christmas traffic spike
  / closer), proof used once, sign-off "God Bless," + "Ethan" correct
