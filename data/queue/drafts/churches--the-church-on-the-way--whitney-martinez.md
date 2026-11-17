---
contact_name: Whitney Martinez
contact_title: Communications Director
organization: The Church On The Way
icp: churches
apollo_contact_id: 651506273e40f50001db49cc
score_total: 67
tier: warm
research_arm: light
status: ready
drafted_at: 2026-11-17
---

## research
- Two campuses: Van Nuys and Sawtelle (source: thechurchontheway.org, WebFetch 2026-11-16, per score_notes)
- Confirmed thechurchontheway.org churchcenter subdomain, flagship Planning Center signal (source: church_crawler, per score_notes)
- Own marketing site runs on Squarespace -> new_build_track, "outgrown the DIY builder" angle (source: scripts/platform_detect.py, per score_notes)
- org_data: 71 employees, founded 1926 (source: Apollo org_data, per score_notes)

## proof_used
- knowledge/case-studies/landmark-church.md (church new_build, Planning Center-connected Webflow migration, organic growth numbers)

## email_1
subject: two campuses, one site
body: |
  Hey Whitney,

  Running Van Nuys and Sawtelle as two campuses on a Squarespace site built for one is the kind of stretch nobody notices until they're hunting for the wrong campus's service times.

  We moved a multi-site church off a template site onto a connected Webflow CMS pulling straight from Planning Center: campuses, services, groups. Organic search grew 29.5% with zero paid spend.

  Worth 15 minutes to see what that'd look like for your church?

  God Bless,
  Ethan

## email_2
subject: neither campus the afterthought
body: |
  Hey Whitney,

  Following up. Two campuses sharing one Squarespace template usually means one of them is the afterthought. Planning Center can carry service times and groups for both; the site should too.

  For a build at that scope we're usually looking at Custom, from $12,000.

  Open to a quick call on it?

  God Bless,
  Ethan

## email_3
subject: short note from me
body: |
  Hey Whitney,

  Short note. If Van Nuys and Sawtelle are both well served by the current site, no worries at all.

  If one's getting shortchanged, happy to show you the Planning Center build we did for another church.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-17
notes:
- "Van Nuys and Sawtelle" campuses -> matches research block (WebFetch 2026-11-16 during scoring), light arm reuses this, no new search
- "29.5%... zero paid spend" -> matches knowledge/case-studies/landmark-church.md exactly
- Pricing "Custom, from $12,000" -> matches knowledge/business-overview.md Custom tier exactly; multi-campus (2 campuses) correctly routes to Custom, no specific quote given
- Platform squarespace -> new_build_track, "outgrown the DIY builder" angle, consistent
- voice_check.py: clean
- Word counts: email_1 78w, email_2 55w, email_3 41w - within band
- Sign-off "God Bless," + "Ethan" - correct for churches
- Cohesion: first sentence (named campuses + platform) sendable to no other org; checked against other church drafts in this batch - Embrace Church used the same case study/campaign-growth proof but with different campus names/framing, no shared sentence; escalating brevity (78->55->41)
