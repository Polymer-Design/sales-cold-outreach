---
contact_name: Jamey Codding
contact_title: Director of Communications
organization: Freshwater Community Church
icp: churches
apollo_contact_id: 55d6bea3f3e5bb0b1100159f
score_total: 70
tier: warm
research_arm: light
status: ready
drafted_at: 2026-11-13
---

## research
- Multi-site, St. Bonifacius + Waconia, MN, three Sunday services (8:00/9:30/11:00am) -
  confirmed via lead-scoring's WebFetch of freshwater.church and corroborated by church
  directory listings putting weekly attendance at 800-1000 (source: lead-scoring
  2026-11-13, score_notes)
- Platform detected as subsplash -> new_build_track (source: scripts/platform_detect.py
  --url https://freshwater.church --icp churches, lead-scoring 2026-11-13); per the
  lead-scoring skill's church nuance, use the Subsplash angle (app's good, site doesn't
  match it), not the generic outgrown-the-DIY-builder angle
- org_data: 47 employees, $5.0M revenue (source: Apollo org_data, lead-scoring 2026-11-13)
- research_arm: light per EXP-001 - no new searches run for drafting; facts above are
  reused from lead-scoring's score_notes and free org_data/platform_detect fields only.

## proof_used
- knowledge/case-studies/landmark-church.md (new_build_track; also a Subsplash migration,
  directly on-angle for this lead's platform)

## email_1
subject: freshwater's app vs. the site
body: |
  Hey Jamey,

  Running three services across two campuses on Subsplash means Freshwater's app is
  already doing a lot of heavy lifting, but the website usually doesn't keep pace with it.

  We build sites that connect to what your app and Planning Center already deliver, so
  people aren't bouncing between the two. For Landmark Church, a similar move grew organic
  search sessions 29.5% with zero paid spend.

  Worth 15 minutes?

  God Bless,
  Ethan

## email_2
subject: two campuses, one site
body: |
  Hey Jamey,

  Most churches running Subsplash have a strong app and a website that never quite caught
  up to it, especially once a second campus is in the mix.

  We build church sites specifically to match what your app already delivers, not a
  generic template bolted on top.

  Open to a quick call this week?

  God Bless,
  Ethan

## email_3
subject: last note, freshwater
body: |
  Hey Jamey,

  Last one from me.

  If freshwater.church already matches what your app delivers across both campuses, no
  worries at all.

  If it's still catching up, happy to grab 15 minutes whenever works.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-13
notes:
- "Running three services across two campuses on Subsplash" -> matches WebFetch of
  freshwater.church (lead-scoring 2026-11-13: "Sunday Services at 8:00am | 9:30am | 11:00am",
  two distinct addresses in footer) plus WebSearch confirmation of a St. Bonifacius +
  Waconia, MN multi-site structure.
- "your app and Planning Center already deliver" -> source field church_crawler:churchcenter_subdomain
  confirms a Planning Center/Church Center signal for this domain.
- Landmark Church quote ("grew organic search sessions 29.5% with zero paid spend") ->
  verbatim match to knowledge/case-studies/landmark-church.md Results/Quotable lines;
  status approved, track new_build matches this lead's track, and Landmark is itself a
  Subsplash migration - directly on-angle.
- No pricing cited. Track/proof consistency: new_build_track lead, new_build-tagged case
  study - consistent.
- scripts/voice_check.py: clean. Word counts: email_1 ~67w, email_2 ~52w, email_3 ~31w -
  within band, escalating brevity.
- Sign-off: "God Bless," then "Ethan" (churches). One CTA per email, rotated phrasing.
- First sentence specific to this church (3 services, 2 campuses, Subsplash), not sendable
  elsewhere. No repeated proof point across the sequence.
