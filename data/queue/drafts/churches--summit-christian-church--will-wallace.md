---
contact_name: Will Wallace
contact_title: Executive Pastor of Outreach & Operations
organization: Summit Christian Church
icp: churches
apollo_contact_id: 5b1cc0e2a6da9806f35c6cad
score_total: 69
tier: warm
research_arm: deep
status: pushed
drafted_at: 2026-11-12
pushed_at: 2026-11-12T13:28:38Z
---

## research
- Reconfirmed via WebSearch 2026-11-12 (slingshotgroup.qwilr.com Outreach Pastor recruiting
  page for Summit Christian Church, Sparks NV, matching summitnv.org): church is completing
  a large building project within two years including a new 1,500-person worship center, on
  a 36-acre master-planned campus; weekend attendance reported at 2,300 (this page) to
  2,700+ (hiu.edu Ministry Opportunity Network listing) - posting itself remains undated, so
  not used as a freshly-dated trigger, only as a real, corroborated ongoing-expansion fact
- Confirmed summitnv.churchcenter.com Planning Center subdomain via church_crawler
  (lead-scoring 2026-11-10)
- Platform detected as squarespace -> new_build_track (source: scripts/platform_detect.py,
  lead-scoring 2026-11-10)
- org_data: 54 employees, founded 1999, $8.4M revenue (source: Apollo org_data,
  lead-scoring 2026-11-10)
- research_arm: deep per EXP-001 - one fresh targeted WebSearch run 2026-11-12 to
  corroborate/date-check the building-project signal already found during lead-scoring.

## proof_used
- knowledge/case-studies/landmark-church.md (new_build_track)

## email_1
subject: summit's 1,500-seat build
body: |
  Hey Will,

  Summit is in the middle of building a new 1,500-person worship center on your 36-acre
  campus, with weekend attendance running 2,300+. That is a lot of growth for a Squarespace
  site to keep up with.

  We build sites for churches at exactly this stage: fast, built to scale with a growing
  campus, not a template stretched past what it was built for. For Landmark Church, a
  similar move grew organic search sessions 29.5% with zero paid spend.

  Worth 15 minutes?

  God Bless,
  Ethan

## email_2
subject: a site built for 36 acres
body: |
  Hey Will,

  Most churches mid-expansion keep running their site on whatever builder they started
  with years ago, long before a second worship center was ever on the table.

  We design around where a church is headed, not just where it started: fast to launch,
  connected to Planning Center, easy for your team to run day to day.

  Open to a quick call this week?

  God Bless,
  Ethan

## email_3
subject: last note, summit
body: |
  Hey Will,

  Last one from me.

  If summitnv.org already feels ready for 1,500 more seats, no worries at all.

  If it doesn't yet, happy to grab 15 minutes before the new space opens.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-12
notes:
- "building a new 1,500-person worship center on your 36-acre campus, with weekend attendance running 2,300+" -> matches slingshotgroup.qwilr.com recruiting page re-fetched 2026-11-12 (1,500-person worship center, 36-acre campus, 2,300 weekend attendance); not framed as a freshly-dated trigger since the posting itself is undated, only as a real ongoing fact.
- "Squarespace site" -> matches scripts/platform_detect.py result (platform: squarespace), lead-scoring 2026-11-10.
- "connected to Planning Center" (email_2) -> matches confirmed summitnv.churchcenter.com subdomain via church_crawler.
- Landmark Church quote ("grew organic search sessions 29.5% with zero paid spend") -> verbatim match to knowledge/case-studies/landmark-church.md Quotable lines; status approved, track new_build matches this lead's track. Only used in email_1, not repeated.
- No pricing cited. Track/proof consistency: new_build_track lead, new_build-tagged case study - consistent.
- scripts/voice_check.py: clean. Word counts: email_1 ~80w, email_2 ~62w, email_3 ~31w - within band.
- Sign-off: "God Bless," then "Ethan" (churches). One CTA per email, rotated phrasing.
- First sentence specific to this church (the 1,500-seat build + attendance figure), not sendable elsewhere. No repeated proof point across the sequence.
