---
contact_name: Megan Perkins
contact_title: Creative Director
organization: Bethany Church LA
icp: churches
apollo_contact_id: 67a66962a210b700019a56cf
score_total: 70
tier: warm
research_arm: deep
status: pushed
drafted_at: 2026-11-06
pushed_at: 2026-11-06
pushed_via_mailbox: ethan@integratedchurchwebsites.com
apollo_contact_id_pushed: 6aedd65c46d69c00183b9f03
---

## research
- Confirmed Planning Center (check-in/giving) via churchcenter_subdomain signal (bethanychurch slug, source: data/leads/churches/candidates.csv)
- Multi-site: site (source: https://bethany.church, fetched this session) lists 8 campuses across Louisiana and Alabama, with inconsistent copy on the page suggesting a possible 9th (Puerto Rico) - genuine multi-campus complexity
- Two Sunday services streamed live (9am/11am) per the same fetch
- PageSpeed (scripts/pagespeed_check.py, this session, mobile): performance 85/100, LCP 2.7s - site itself is in good shape, not used as a hook (no problem to point to)
- org_data: 150 employees, founded 1963 (Apollo org_data)

## proof_used
- knowledge/case-studies/landmark-church.md (new_build, icp_fit churches - organic search growth proof point, used once in email_1 only)

## email_1
subject: 8 campuses, one site
body: |
  Hey Megan,

  Bethany runs Church Center across 8 campuses in Louisiana and Alabama, which is exactly the kind of multi-site complexity that breaks a normal church website's events and service-time pages.

  We build multi-campus sites with real campus filtering, so each location's times, groups, and giving stay straight on their own.

  For Landmark Church, pulling Church Center straight into the site grew organic search nearly 30% with zero paid spend.

  Worth 15 minutes to see what that'd look like across your campuses?

  God Bless,
  Ethan

## email_2
subject: a build sized for 8 campuses
body: |
  Hey Megan,

  For a church running 8+ campuses, we usually recommend a Custom build, from $18,000, scoped around how many campuses and how much Church Center data needs to show per location.

  Fixed price, clear timeline, your team keeps full editing control once it launches.

  Want to jump on a call to talk through what that'd look like for Bethany specifically?

  God Bless,
  Ethan

## email_3
subject: no pressure, Megan
body: |
  Hey Megan,

  If the site's in good shape across all your campuses, no worries at all.

  If coordinating 8 locations on one site is still a headache, happy to talk through what a Custom build would take, even for 15 minutes.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-06
notes:
- Church Center confirmed via churchcenter_subdomain signal -> matches data/leads/churches/candidates.csv
- 8 campuses across Louisiana/Alabama -> matches live fetch of https://bethany.church run this session
- Custom tier "from $18,000" for multi-campus -> matches knowledge/business-overview.md ("Multi-campus churches... Custom. Mention a range, never a specific quote") exactly, no specific quote given
- Landmark Church proof: "organic search nearly 30% with zero paid spend" -> matches +29.5%/"no paid spend" in knowledge/case-studies/landmark-church.md; status approved, track new_build, icp_fit churches match; used once only (email_1)
- No PageSpeed claim used (site already scores well, 85/100 mobile - not a legitimate problem to cite)
- scripts/voice_check.py: clean
- Word counts: email_1 84, email_2 64, email_3 44 - all within band (50-85/40-80/30-60)
- One CTA per email, sign-off "God Bless," then "Ethan" throughout
- Cohesion: three distinct angles (multi-campus complexity / Custom pricing / closer), escalating brevity, proof point used once only
