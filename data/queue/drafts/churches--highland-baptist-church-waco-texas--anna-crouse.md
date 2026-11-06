---
contact_name: Anna Crouse
contact_title: Communications Director
organization: Highland Baptist Church - Waco Texas
icp: churches
apollo_contact_id: 6509607a4db5c700016b8b0e
score_total: 70
tier: warm
research_arm: deep
status: ready
drafted_at: 2026-11-06
---

## research
- Confirmed Planning Center (check-in/giving) via churchcenter_subdomain signal (hbcwaco slug, source: data/leads/churches/candidates.csv)
- platform_detect.py -> subsplash -> new_build_track, "app's great, site doesn't match it" angle per icp-churches.yaml
- PageSpeed (scripts/pagespeed_check.py, this session, mobile): performance 31/100, LCP 23.5s - a real, citable problem on their own site
- 4 Sunday services (8:40/10/11:20/4pm) per live fetch of https://www.highlandwaco.org this session - meaningful weekly reach
- org_data: 98 employees, founded 1929 (Apollo org_data)

## proof_used
- knowledge/case-studies/landmark-church.md (new_build, icp_fit churches - organic search growth proof point, used once in email_1 only)

## email_1
subject: app's solid, site isn't
body: |
  Hey Anna,

  Highland's on Subsplash, so the app and giving are already dialed in, but your main site takes over 23 seconds to load on mobile, where most people actually open it.

  We build sites that match that same level of polish, pulling Church Center straight in instead of a slow, separate experience.

  For Landmark Church, that kind of rebuild grew organic search nearly 30% with zero paid spend.

  Worth 15 minutes to talk through what that'd look like for Highland?

  God Bless,
  Ethan

## email_2
subject: fixed price, Church Core
body: |
  Hey Anna,

  Church Core is $14,000 flat, up to 10 pages, Planning Center and YouTube sermons built in, live in 60 days.

  A church running 4 services a week can't really afford a homepage that loses people before they ever see a service time.

  Want to jump on a call?

  God Bless,
  Ethan

## email_3
subject: no pressure, Anna
body: |
  Hey Anna,

  If the slow load's not a priority right now, no worries.

  If it is, happy to show you what a faster, Church Center-connected site would look like for Highland, even for 15 minutes.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-06
notes:
- Church Center confirmed via churchcenter_subdomain signal -> matches data/leads/churches/candidates.csv
- Subsplash platform + 23s mobile LCP -> matches platform_detect.py and scripts/pagespeed_check.py output run this session (citable_as_raw_fact: true, no comparative claim made)
- 4 Sunday services -> matches live fetch of https://www.highlandwaco.org run during lead-scoring this session
- Landmark Church proof: "organic search nearly 30% with zero paid spend" -> matches +29.5%/"no paid spend" in knowledge/case-studies/landmark-church.md; status approved, track new_build, icp_fit churches match; used once only (email_1)
- Pricing: "$14,000 flat, up to 10 pages, Planning Center and YouTube sermons built in, live in 60 days" -> matches knowledge/business-overview.md Church Core tier exactly
- scripts/voice_check.py: clean
- Word counts: email_1 83, email_2 53, email_3 38 - all within band (50-85/40-80/30-60)
- One CTA per email, sign-off "God Bless," then "Ethan" throughout
- Cohesion: three distinct angles (app-vs-site speed gap / pricing+service-volume / closer), escalating brevity, proof point used once only
