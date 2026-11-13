---
contact_name: Jordan Elliott
contact_title: Creative Director
organization: Foothills Church
icp: churches
apollo_contact_id: 60c2f53ba95ce200018649b7
score_total: 68
tier: warm
research_arm: deep
status: pushed
pushed_at: 2026-11-13T13:30:00Z
pushed_via_mailbox: ehoover@integratedchurchwebsites.com
drafted_at: 2026-11-13
---

## research
- Two campuses (Maryville + Knoxville, TN), four Sunday services total (Maryville 8am/
  9:45am/11:30am, Knoxville 10am) - confirmed via WebFetch of foothillschurch.com
  (lead-scoring 2026-11-13)
- A 2020 religiousproductnews.com piece on the church's 32,000-sq-ft Maryville building
  (opened 2018) puts weekly attendance around 2,000 (source: WebSearch 2026-11-13,
  lead-scoring)
- Confirmed foothillschurch.churchcenter.com (Planning Center) events live in search
  results (source: WebSearch 2026-11-13, corroborating the church_crawler
  churchcenter_subdomain signal)
- PageSpeed mobile (scripts/pagespeed_check.py --url https://foothillschurch.com
  --strategy mobile, run 2026-11-13): performance 57/100, largest contentful paint 8.6s -
  cited as a raw fact about the lead's own site only, no comparative claim made
- Platform detected as unknown -> new_build_track (source: scripts/platform_detect.py
  --url https://foothillschurch.com --icp churches, lead-scoring 2026-11-13)

## proof_used
- knowledge/case-studies/landmark-church.md (new_build_track; also a multi-site/
  multi-campus church, directly on-angle)

## email_1
subject: foothills, two campuses in
body: |
  Hey Jordan,

  Four services across Maryville and Knoxville is a lot of people trying to find the right
  campus and time from one site.

  On a phone, foothillschurch.com takes 8.6 seconds to load, which is rough when that's
  where most of your people check service times.

  We build sites for growing multi-campus churches, pulling in Planning Center events and
  giving. For Landmark Church, a similar move grew organic search sessions 29.5% with zero
  paid spend.

  Worth 15 minutes?

  God Bless,
  Ethan

## email_2
subject: running two campuses on one site
body: |
  Hey Jordan,

  Two campuses and four services means a lot riding on people finding the right one
  without getting confused or giving up.

  We keep multi-campus sites current as a church grows, pulling straight from Planning
  Center so a schedule change in Knoxville doesn't mean rebuilding pages by hand.

  Open to a quick call this week?

  God Bless,
  Ethan

## email_3
subject: last note, foothills
body: |
  Hey Jordan,

  Last one from me.

  If foothillschurch.com is already keeping up with both campuses, no worries at all.

  If it's not, happy to grab 15 minutes and talk through what would help.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-13
notes:
- "Four services across Maryville and Knoxville" -> matches WebFetch of foothillschurch.com
  (lead-scoring 2026-11-13): "Weekly Sunday Experiences: Maryville at 8AM, 9:45AM, 11:30AM |
  Knoxville at 10AM".
- "foothillschurch.com takes 8.6 seconds to load" -> matches scripts/pagespeed_check.py
  --url https://foothillschurch.com --strategy mobile (run 2026-11-13): LCP 8.6s. Raw fact
  about the lead's own site only, no comparative claim to Polymer's benchmark made.
- "Planning Center events and giving" -> matches confirmed church_crawler
  churchcenter_subdomain signal, corroborated by foothillschurch.churchcenter.com event
  pages found in WebSearch.
- Landmark Church quote ("grew organic search sessions 29.5% with zero paid spend") ->
  verbatim match to knowledge/case-studies/landmark-church.md Results/Quotable lines;
  status approved, track new_build matches this lead's track, and Landmark is itself
  described as a multi-site church - directly on-angle for Foothills' two campuses.
- No pricing cited. Track/proof consistency: new_build_track lead, new_build-tagged case
  study - consistent.
- scripts/voice_check.py: clean. Word counts: email_1 ~76w, email_2 ~45w, email_3 ~28w -
  within band, escalating brevity.
- Sign-off: "God Bless," then "Ethan" (churches). One CTA per email, rotated phrasing.
- First sentence specific to this church (2 campuses, 4 services), not sendable elsewhere.
  Proof point used once, PageSpeed fact used as supporting evidence only (not the opener).
