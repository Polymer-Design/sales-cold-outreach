---
contact_name: Kevin Monahan
contact_title: Executive Pastor
organization: Journey Christian Church
icp: churches
apollo_contact_id: 54a42dba7468693209470f33
score_total: 91
tier: hot
research_arm: light
status: ready
drafted_at: 2026-11-12
---

## research
- Confirmed journeychristian.com/transition (2026, letter from elder board chairman Brian
  McIntosh): the church is mid leadership transition, Pastor Harvey serving as Acting Lead
  Pastor, Pastor Kevin named Executive Pastor, active Lead Pastor search underway (source:
  WebSearch 2026-11-12 during lead-scoring, journeychristian.com/transition)
- Confirmed journeychristian.com churchcenter subdomain via church_crawler (Planning Center)
- Platform detected as subsplash -> new_build_track; per outreach-email Step 0 and the
  lead-scoring skill's church-specific nuance, use the Subsplash angle ("your app's great,
  the website doesn't match it"), not the generic outgrown-the-DIY-builder angle
- org_data: 63 employees, $19.6M revenue - large, established congregation (source: Apollo
  org_data, lead-scoring 2026-11-12)
- research_arm: light per EXP-001 - no new searches run for drafting; facts above are reused
  from lead-scoring's score_notes and free org_data/platform_detect fields only.

## proof_used
- knowledge/case-studies/landmark-church.md (new_build_track; also a Subsplash migration,
  directly on-angle for this lead's platform)

## email_1
subject: congrats, and journey's site
body: |
  Hey Kevin,

  Congrats on stepping into the Executive Pastor role during Journey's transition season.

  Right when a church is focused on a leadership search, the website is usually the first
  thing that quietly falls behind, even with a strong app already in place through Subsplash.

  We build sites that match what a church's app already delivers. For Landmark Church, a
  similar move grew organic search sessions 29.5% with zero paid spend.

  Worth 15 minutes sometime soon?

  God Bless,
  Ethan

## email_2
subject: an app that outruns the site
body: |
  Hey Kevin,

  Most churches running Subsplash have a strong app and a website that never quite caught
  up to it.

  We build church sites specifically to match what your app and Planning Center setup
  already deliver, not a generic template bolted on top.

  Open to a quick call this week?

  God Bless,
  Ethan

## email_3
subject: last note, journey
body: |
  Hey Kevin,

  Last one from me.

  If journeychristian.com already matches the app your people use every week, no worries
  at all.

  If it's still catching up, happy to grab 15 minutes during the transition or after,
  whenever works.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-12
notes:
- "Congrats on stepping into the Executive Pastor role during Journey's transition season" -> matches journeychristian.com/transition (found during lead-scoring 2026-11-12): Pastor Kevin named Executive Pastor amid an active lead-pastor search; phrased as congratulations/context, not a claim about outgoing leadership.
- "a strong app already in place through Subsplash" -> matches scripts/platform_detect.py --url https://journeychristian.com --icp churches (platform: subsplash), lead-scoring 2026-11-12. Using the Subsplash-specific angle per lead-scoring's church nuance, not the generic DIY-builder angle.
- "Planning Center setup" (email_2) -> matches confirmed journeychristian.com churchcenter subdomain via church_crawler.
- Landmark Church quote ("grew organic search sessions 29.5% with zero paid spend") -> verbatim match to knowledge/case-studies/landmark-church.md Quotable lines; status approved, track new_build matches this lead's track, and Landmark is itself a Subsplash migration - directly on-angle. Only used in email_1, not repeated.
- No pricing cited. Track/proof consistency: new_build_track lead, new_build-tagged case study - consistent.
- scripts/voice_check.py: clean. Word counts: email_1 ~74w, email_2 ~48w, email_3 ~36w - within band.
- Sign-off: "God Bless," then "Ethan" (churches). One CTA per email, rotated phrasing ("worth 15 minutes sometime soon?", "open to a quick call this week?", "happy to grab 15 minutes").
- First sentence specific to this church (Executive Pastor transition), not sendable elsewhere. No repeated proof point across the sequence.
