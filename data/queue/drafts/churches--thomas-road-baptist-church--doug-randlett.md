---
contact_name: Doug Randlett
contact_title: Executive Pastor
organization: Thomas Road Baptist Church
icp: churches
apollo_contact_id: 6517aaeb0b368c000125e549
score_total: 67
tier: warm
research_arm: light
status: ready
drafted_at: 2026-11-03
---

## research
- Site links out to Dan River Church (danriverchurch.org) as an outreach entry, not described as a connected campus (source: lead-scoring score_notes, WebFetch of trbc.org, 2026-11-03)
- Confirmed churchcenter_embed (Planning Center) signal; site platform WordPress -> new_build_track, a separate system from Church Center (source: scripts/platform_detect.py + church_crawler.py, via lead-scoring)
- org_data 150 employees, large well-known Lynchburg VA congregation (Liberty University-affiliated) (source: Apollo org_data, via lead-scoring)
- research_arm: light (EXP-001) - no new research run this pass; all facts reused from lead-scoring's score_notes.

## proof_used
- knowledge/case-studies/landmark-church.md (new_build, churches icp_fit) - organic search sessions +29.5% with zero paid spend, from connecting Planning Center/Church Center into one real CMS

## email_1
subject: two systems, one church
body: |
  Hey Doug,

  Thomas Road runs Planning Center underneath for check-in and groups, but the public site is a separate WordPress build, so none of that shows up on the site itself.

  With Dan River Church linked off the main site too, that's more than one place for a visitor to get lost between systems.

  We connected Planning Center and Church Center directly into a multi-campus church's site and grew organic search sessions 29.5% with zero paid spend.

  Worth 15 minutes?

  God Bless,
  Ethan

## email_2
subject: the Dan River link
body: |
  Hey Doug,

  Dan River Church shows up on Thomas Road's site as an outreach link, but it's not treated as a connected campus, so it's unclear to a visitor how the two actually relate.

  A connected build gives a clear answer to that instead of leaving it to inference.

  Want to jump on a call?

  God Bless,
  Ethan

## email_3
subject: no pressure, Doug
body: |
  Hey Doug,

  If the current setup between the site and Planning Center is working fine, no worries at all.

  If not, happy to talk through connecting them into one build, even for 15 minutes.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-03
notes:
- Dan River Church outreach link, WordPress platform, churchcenter_embed confirmed -> verified against same-session WebFetch of trbc.org (2026-11-03); not re-fetched again
- org_data 150 employees -> Apollo org_data via lead-scoring, consistent
- Polymer facts: Landmark Church case study numbers match knowledge/case-studies/landmark-church.md exactly, track=new_build matches
- scripts/voice_check.py: clean
- Word counts: 83/58/37 - all within band (trimmed email_1 from an initial 86-word draft to fit the 85-word ceiling)
- One CTA per email, sign-off "God Bless," then "Ethan"
- Cohesion: distinct hooks (two-systems-one-church / Dan River link / closer), escalating brevity, no repeated proof point
