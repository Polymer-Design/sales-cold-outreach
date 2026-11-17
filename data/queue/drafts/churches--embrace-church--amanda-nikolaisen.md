---
contact_name: Amanda Nikolaisen
contact_title: Creative Director
organization: Embrace Church
icp: churches
apollo_contact_id: 57d33842a6da986588a98f9c
score_total: 67
tier: warm
research_arm: light
status: pushed
drafted_at: 2026-11-17
pushed_at: 2026-11-17
---

## research
- Multi-campus: Tea and Summit Ave campuses, with a planned Twin Cities campus (source: WebSearch during scoring 2026-11-10, per score_notes)
- Confirmed iamembrace.churchcenter.com Planning Center subdomain (source: church_crawler, per score_notes)
- Own marketing site runs on Squarespace -> new_build_track, "outgrown the DIY builder" angle (source: scripts/platform_detect.py, per score_notes)
- org_data: 57 employees, founded 2006 (source: Apollo org_data, per score_notes)

## proof_used
- knowledge/case-studies/landmark-church.md (church new_build, Planning Center-connected Webflow migration, organic growth numbers)

## email_1
subject: three campuses, one page
body: |
  Hey Amanda,

  Embrace runs campuses in Tea and on Summit Ave, with Twin Cities coming, all on a Squarespace site. That's a lot of growth for a DIY builder to keep up with.

  We moved a multi-site church off a template site onto a connected Webflow CMS pulling straight from Planning Center: campuses, services, groups. Organic search grew 29.5% with zero paid spend.

  Worth 15 minutes to see what that'd look like for Embrace?

  God Bless,
  Ethan

## email_2
subject: growing past squarespace
body: |
  Hey Amanda,

  Following up. Adding a third campus is the kind of growth that outgrows a Squarespace template fast, especially once Planning Center needs to show up consistently across all three.

  For a build at that scope we're usually looking at Custom, from $12,000.

  Open to a quick call on it?

  God Bless,
  Ethan

## email_3
subject: short note from me
body: |
  Hey Amanda,

  Short note. If Squarespace is handling three campuses fine, no worries at all.

  If it's starting to show the strain, happy to show you the Planning Center build we did for another church.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-17
notes:
- "Tea and Summit Ave campuses, Twin Cities coming" -> matches research block (WebSearch 2026-11-10 during scoring), light arm reuses this, no new search
- "29.5%... zero paid spend" -> matches knowledge/case-studies/landmark-church.md exactly
- Pricing "Custom, from $12,000" -> matches knowledge/business-overview.md Custom tier exactly; multi-campus (2 existing + 1 planned) correctly routes to Custom per the "multi-campus churches... Custom" rule, no specific quote given
- Platform squarespace -> new_build_track, "outgrown the DIY builder" angle used per icp-churches.yaml, consistent
- voice_check.py: clean
- Word counts: email_1 77w, email_2 54w, email_3 38w - within band
- Sign-off "God Bless," + "Ethan" - correct for churches
- Cohesion: first sentence (named campuses + platform) sendable to no other org; checked against other church drafts in this batch (Silverdale, Calvary Naperville) - different hook (DIY-builder-outgrown vs. multi-ministry/multi-site), no shared sentence; escalating brevity (77->54->38)
