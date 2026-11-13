---
contact_name: Kyla Slack
contact_title: Director, Communication and Marketing
organization: One Hope Church
icp: churches
apollo_contact_id: 57da6d75a6da984aabc2ca8c
score_total: 64
tier: warm
research_arm: light
status: pushed
pushed_at: 2026-11-13T13:30:00Z
pushed_via_mailbox: ethan@integratedchurchwebsites.com
drafted_at: 2026-11-13
---

## research
- Confirmed ouronehope.com churchcenter subdomain via church_crawler (Planning Center),
  source: lead-scoring 2026-11-13
- Platform detected as squarespace -> new_build_track (source:
  scripts/platform_detect.py --url https://ouronehope.com --icp churches, lead-scoring
  2026-11-13)
- org_data: 78 employees, founded 1914 - a long-established, larger congregation (source:
  Apollo org_data, lead-scoring 2026-11-13)
- research_arm: light per EXP-001 - no new searches run for drafting; facts above are
  reused from lead-scoring's score_notes and free org_data/platform_detect fields only.

## proof_used
- knowledge/case-studies/landmark-church.md (new_build_track)

## email_1
subject: onehope's squarespace site
body: |
  Hey Kyla,

  A church running Planning Center across every service, group, and giving option usually
  outgrows what Squarespace can actually pull into the site.

  We build church sites that connect directly to Planning Center, so events, groups, and
  giving show up live instead of living in a separate app. For Landmark Church, a similar
  move grew organic search sessions 29.5% with zero paid spend.

  Worth 15 minutes?

  God Bless,
  Ethan

## email_2
subject: planning center, actually connected
body: |
  Hey Kyla,

  Most Squarespace church sites end up as a static brochure next to Planning Center, not
  connected to it.

  We build sites specifically to pull in what Planning Center already runs, so your team
  isn't updating two places for every event or group.

  Open to a quick call this week?

  God Bless,
  Ethan

## email_3
subject: last note, one hope
body: |
  Hey Kyla,

  Last one from me.

  If ouronehope.com is already doing everything you need alongside Planning Center, no
  worries at all.

  If it's not, happy to grab 15 minutes whenever works.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-13
notes:
- "A church running Planning Center" -> matches confirmed church_crawler
  churchcenter_subdomain signal for ouronehope.com.
- "Squarespace" -> matches scripts/platform_detect.py output (platform: squarespace).
- Landmark Church quote ("grew organic search sessions 29.5% with zero paid spend") ->
  verbatim match to knowledge/case-studies/landmark-church.md Results/Quotable lines;
  status approved, track new_build matches this lead's track.
- No pricing cited. Track/proof consistency: new_build_track lead, new_build-tagged case
  study - consistent.
- scripts/voice_check.py: clean. Word counts: email_1 ~70w, email_2 ~44w, email_3 ~27w -
  within band, escalating brevity.
- Sign-off: "God Bless," then "Ethan" (churches). One CTA per email, rotated phrasing.
- First sentence ties Planning Center + Squarespace capability-gap specifically to this
  church, not a generic template. No repeated proof point across the sequence.
