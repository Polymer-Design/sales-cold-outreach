---
contact_name: Jackie Rice
contact_title: Director of Communications
organization: Calvary Church
icp: churches
apollo_contact_id: 5ae3548ea6da981c7871bd2d
score_total: 71
tier: warm
research_arm: light
status: pushed
pushed_at: 2026-11-03T14:33:00Z
drafted_at: 2026-11-03
---

## research
- Confirmed on Squarespace, a hosted DIY builder -> new_build_track per icp-churches.yaml's "outgrown the DIY builder" angle (source: scripts/platform_detect.py, via lead-scoring)
- 2 campuses, Quakertown and Souderton, PA, plus a livestream option (source: lead-scoring score_notes, WebFetch of calvary-church.com, 2026-11-03)
- A section header reads "cOMING UP AT CALVARY" - a capitalization/copy-paste glitch (source: same score_notes WebFetch)
- Confirmed churchcenter_embed (Planning Center) signal (source: church_crawler.py, via lead-scoring)
- research_arm: light (EXP-001) - no new research run this pass; all facts reused from lead-scoring's score_notes.

## proof_used
- knowledge/case-studies/landmark-church.md (new_build, churches icp_fit) - organic search sessions +29.5% with zero paid spend, from connecting Planning Center/Church Center into one real CMS

## email_1
subject: two campuses, one squarespace site
body: |
  Hey Jackie,

  Calvary runs on Squarespace, a DIY template builder, while two campuses, Quakertown and Souderton, plus a livestream all need their own clear, current information.

  That's a lot of growth for a template site to keep up with once Church Center is already handling check-in and giving on the backend.

  We rebuilt a multi-campus church's site into one connected CMS around Church Center and grew organic search sessions 29.5% with zero paid spend.

  Worth 15 minutes?

  God Bless,
  Ethan

## email_2
subject: cOMING UP AT CALVARY
body: |
  Hey Jackie,

  One of Calvary's own section headers reads "cOMING UP AT CALVARY," a small copy-paste glitch that's easy to miss on a template builder with no one dedicated to catching it.

  A connected site means someone's actually watching for the small stuff, not just the big launches.

  Want to jump on a call?

  God Bless,
  Ethan

## email_3
subject: no pressure, Jackie
body: |
  Hey Jackie,

  If Squarespace is working fine for Calvary's two campuses, no worries at all.

  If it's starting to feel like the ceiling, happy to talk through what a connected site around Church Center would look like, even for 15 minutes.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-03
notes:
- Squarespace platform confirmed via platform_detect.py; "outgrown the DIY builder" angle matches icp-churches.yaml's explicit routing note for squarespace
- 2 campuses (Quakertown, Souderton) + livestream, "cOMING UP AT CALVARY" capitalization glitch -> verified against same-session WebFetch of calvary-church.com; not re-fetched again (minutes old)
- churchcenter_embed confirmed -> lead-scoring output
- Polymer facts: Landmark Church case study numbers match knowledge/case-studies/landmark-church.md exactly, track=new_build matches
- scripts/voice_check.py: clean
- Word counts: 80/57/44 - all within band
- One CTA per email, sign-off "God Bless," then "Ethan"
- Cohesion: distinct hooks (DIY-builder-vs-growth / copy glitch / closer), escalating brevity, single case-study citation only in email_1
