---
contact_name: Annie Duncan
contact_title: Executive Pastor
organization: Bellevue Presbyterian Church
icp: churches
apollo_contact_id: 54a73e147468696de7244f22
score_total: 68
tier: warm
research_arm: light
status: pushed
pushed_at: 2026-11-18T13:33:09Z
drafted_at: 2026-11-18
---

## research
- Confirmed churchcenter.com subdomain (slug "belpres") - Planning Center is already in use
  (source: church_crawler candidates.csv signal "churchcenter_subdomain", found_at 2026-11-02)
- Site platform detected as Webflow -> subscription_track (source: scripts/platform_detect.py,
  via lead-scoring score_notes, 2026-11-18)
- org_data: 87 estimated employees, $7.5M revenue, modest headcount growth (source: Apollo
  org_data, via lead-scoring score_notes, 2026-11-18)
- research_arm: light - no new search run; built only from score_notes + free Apollo/
  platform_detect fields per EXP-001

## proof_used
- knowledge/business-overview.md#monthly-plans (plain capability statement, no approved
  subscription_track case study exists yet per knowledge/case-studies/README.md)

## email_1
subject: belpres.churchcenter.com
body: |
  Hey Annie,

  You're running Planning Center at belpres.churchcenter.com and your main site's already on
  Webflow, which puts you ahead of most 80-plus-staff churches still stuck on a static
  builder.

  The gap at that stage usually isn't the platform, it's keeping it current: new pages,
  small updates, Planning Center and YouTube staying connected as things change. Our Grow
  plan is built around that, ongoing work from the same team, not a one-time handoff.

  Worth a quick call to see if it fits Bellevue?

  God Bless,
  Ethan

## email_2
subject: the one-time-build problem
body: |
  Hey Annie,

  Most churches on Webflow got a nice launch, then the site quietly stopped changing because
  no one on staff owns it day to day.

  We stay on as the team that keeps building: new landing pages for a series or campaign,
  small fixes, the integrations staying wired up, without a new project every time.

  Open to chatting this week?

  God Bless,
  Ethan

## email_3
subject: no pressure, Annie
body: |
  Hey Annie,

  If Bellevue's site is already well cared for, no worries at all.

  If it's more "launched and left," happy to talk through what ongoing support looks like,
  even for 15 minutes.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-18
notes:
- belpres.churchcenter.com slug and Webflow platform -> verified against lead-scoring's
  score_notes/church_crawler signal and platform_detect.py output (both already-available
  data, no new fetch needed since research_arm is light)
- 87-staff/$7.5M revenue figures used only to justify "ahead of most churches your size",
  not stated as literal numbers in the email body - matches org_data
- Polymer facts: Grow plan description ("new pages, landing pages, CMS work, small
  automations", Planning Center + YouTube monitoring included) matches
  knowledge/business-overview.md monthly-plans section; no dollar figure stated in the
  email (kept to a capability description per the "no subscription case study yet" rule);
  track=subscription matches this lead's subscription_track
- No build-pricing/timeline claims (not applicable, this is a monthly-plan pitch)
- scripts/voice_check.py: clean
- Word counts: 85/64/36 - all within band
- One CTA per email, sign-off "God Bless," then "Ethan"
- Cohesion: distinct hooks (Planning Center + Webflow already in place, the "launched and
  left" problem, closer), escalating brevity, no repeated proof point (capability framing
  varies each email, no case study to repeat)
