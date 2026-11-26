---
contact_name: Travis Wysocki
contact_title: Creative Director
organization: Bethany Church
icp: churches
apollo_contact_id: 648066c49547e300018402da
score_total: 70
tier: warm
research_arm: light
status: pushed
pushed_at: 2026-11-26T13:38:13Z
pushed_via_mailbox: ethan@integratedchurchwebsites.com
apollo_contact_id_resolved: 6b08364416f632000c83bed8
drafted_at: 2026-11-26
---

## research
- 5 physical campuses (Wyckoff NJ, Washington Township, Wanaque, Parsippany, Paterson/Union Spanish-language) plus an online campus, each with multiple weekend services (source: WebFetch bethanychurch.tv, 2026-11-26, reused from lead-scoring)
- Confirmed churchcenter_subdomain signal via church_crawler (source: data/leads/churches/candidates.csv)
- org_data: 230 employees, founded 1911
- Own site platform: wix (scripts/platform_detect.py, 2026-11-26)

## proof_used
- knowledge/case-studies/landmark-church.md (new_build, icp_fit churches, used once in email_1)

## email_1
subject: five campuses on Wix
body: |
  Hey Travis,

  Bethany runs Church Center across five locations, Wyckoff, Washington Township, Wanaque, Parsippany, and Paterson/Union, on a Wix site that wasn't built for that kind of complexity.

  We build multi-campus sites that keep each location's times, groups, and giving straight, pulled right from Church Center.

  For Landmark Church, pulling Church Center into the site grew organic search 29.5%, zero paid spend.

  Want to jump on a call to see what that'd look like across your five campuses?

  God Bless,
  Ethan

## email_2
subject: a build sized for five
body: |
  Hey Travis,

  For a church running five campuses plus a Spanish-language service, this usually scopes as a Custom build with us, from $12,000.

  We'd connect Church Center too, so each location's info comes straight from the system you already run, not a separately maintained page.

  Worth 15 minutes to talk through what that would take for Bethany specifically?

  God Bless,
  Ethan

## email_3
subject: no pressure, Travis
body: |
  Hey Travis,

  If the site's holding up fine across all five locations, no worries at all.

  If keeping five campuses straight on one site is still a headache behind the scenes, happy to walk through what a Custom build would take, even for 15 minutes.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-26
notes:
- 5 campuses + online -> matches WebFetch bethanychurch.tv 2026-11-26 (reused, same session as lead-scoring)
- Church Center / churchcenter_subdomain -> matches data/leads/churches/candidates.csv
- Custom 'from $12,000' -> matches knowledge/business-overview.md exactly, no specific quote given
- Integration line ('We'd connect Church Center too') states what we connect to, not a price - matches business-overview.md's rule
- Landmark Church proof '29.5% / zero paid spend' -> matches knowledge/case-studies/landmark-church.md exactly (+29.5% organic, no paid spend), status approved, track new_build, icp_fit churches, used once (email_1)
- scripts/voice_check.py: clean (see log)
- Word counts: email_1 81, email_2 61, email_3 48
