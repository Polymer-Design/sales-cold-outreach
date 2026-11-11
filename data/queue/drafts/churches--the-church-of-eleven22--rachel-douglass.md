---
contact_name: Rachel Douglass
contact_title: Creative Director
organization: The Church of Eleven22®
icp: churches
apollo_contact_id: 5b17de05a6da987904569fc0
score_total: 88
tier: hot
research_arm: light
status: hot_approved
drafted_at: 2026-11-10
---

## research
- Eleven22 is actively building a new Wildlight campus (construction started summer 2025,
  completing 2026) with secured bank financing, and opened a second Baymeadows campus
  (sources: etminc.com, commercial.bmo.com, jaxdailyrecord.com, all found during
  lead-scoring 2026-11-10)
- org_data: 210 employees, $91.1M revenue - clear megachurch scale (source: Apollo org_data,
  lead-scoring 2026-11-10)
- Confirmed coe22.churchcenter.com Planning Center subdomain (source: church_crawler,
  lead-scoring 2026-11-10)
- Platform detected as unknown -> new_build_track (source: scripts/platform_detect.py
  --url https://coe22.com --icp churches, lead-scoring 2026-11-10)
- research_arm: light per EXP-001 - no new searches run for drafting; facts above are
  reused from lead-scoring's score_notes and free Apollo/platform_detect fields only.

## proof_used
- knowledge/case-studies/landmark-church.md (new_build_track; multi-campus church, Planning
  Center integration, organic search growth)

## email_1
subject: eleven22's new campus
body: |
  Hey Rachel,

  Building a new Wildlight campus while also expanding into Baymeadows is a lot of growth
  happening at once for Eleven22.

  Every new campus needs a digital front door that keeps up, especially for a church
  already running Planning Center across its locations.

  We build sites for growing multi-campus churches, pulling in Planning Center events,
  groups, and giving so people aren't bouncing between apps. For Landmark Church, a similar
  migration grew organic search sessions 29.5% with zero paid spend.

  Worth 15 minutes?

  God Bless,
  Ethan

## email_2
subject: coe22.com, two campuses in
body: |
  Hey Rachel,

  Running 210 people on staff while opening two new locations means a lot riding on people
  finding the right campus, service times, and giving options without confusion.

  We keep multi-campus sites current as a church grows, so a new launch like Wildlight
  doesn't mean rebuilding from scratch each time.

  Open to a quick call this week?

  God Bless,
  Ethan

## email_3
subject: last note, eleven22
body: |
  Hey Rachel,

  Last one from me.

  If the site's keeping pace with Wildlight and Baymeadows opening up, no worries at all.

  If it's not, happy to grab 15 minutes and talk through what would help.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-10
notes:
- "Wildlight campus construction, started summer 2025, completing 2026" and "Baymeadows second campus" -> matches score_notes, sourced from etminc.com/BMO/jaxdailyrecord.com during lead-scoring; no new fetch needed (light arm).
- "210 people on staff" -> matches org_data exactly.
- "running Planning Center across its locations" -> confirmed via church_crawler churchcenter_subdomain signal.
- Landmark Church claim ("grew organic search sessions 29.5% with zero paid spend") -> verbatim match to knowledge/case-studies/landmark-church.md Results section; status approved, track new_build matches this lead's track.
- No pricing cited. Track/proof consistency: new_build_track lead, new_build-tagged case study - consistent.
- scripts/voice_check.py: clean. word counts: email_1 ~80w, email_2 ~60w, email_3 ~33w - within band.
- sign-off: "God Bless," then "Ethan" (churches). Single CTA per email, no booking link.
- First sentence (Wildlight + Baymeadows growth) specific to this church, not sendable elsewhere. No repeated proof point across the sequence, escalating brevity.
- HOT TIER: email 1 requires Ethan's review via PR before anything touches Apollo.
