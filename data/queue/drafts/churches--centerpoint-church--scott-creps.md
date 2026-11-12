---
contact_name: Scott Creps
contact_title: Executive Pastor
organization: CenterPoint Church
icp: churches
apollo_contact_id: 673786235318e10001775d8c
score_total: 70
tier: warm
research_arm: light
status: ready
drafted_at: 2026-11-12
---

## research
- Confirmed via WebSearch 2026-11-12 (during lead-scoring, jobera.com Executive Pastor
  posting directing applicants to hiring@cpchurch.com): seven campuses across Long Island,
  with the Massapequa campus alone averaging 1,500 weekly attendance
- Confirmed cpchurch.com churchcenter subdomain via church_crawler (Planning Center)
- Platform detected as unknown -> new_build_track (source: scripts/platform_detect.py --url
  https://cpchurch.com --icp churches, lead-scoring 2026-11-12)
- org_data: 52 employees (source: Apollo org_data, lead-scoring 2026-11-12)
- research_arm: light per EXP-001 - no new searches run for drafting; facts above are reused
  from lead-scoring's score_notes and free org_data/platform_detect fields only.

## proof_used
- knowledge/case-studies/landmark-church.md (new_build_track)

## email_1
subject: centerpoint's seven campuses
body: |
  Hey Scott,

  Running seven campuses with Massapequa alone averaging 1,500 on a weekend is a lot of
  moving pieces for one website to keep straight, especially with Planning Center handling
  giving, groups, and check-in behind it.

  We build sites for multi-site churches that pull all of that into one connected hub
  instead of leaving campuses to patch things together. For Landmark Church, a similar move
  grew organic search sessions 29.5% with zero paid spend.

  Worth 15 minutes?

  God Bless,
  Ethan

## email_2
subject: one hub for seven campuses
body: |
  Hey Scott,

  Most multi-site churches end up with a website that grew campus by campus instead of
  being built for all seven at once.

  We design and build church sites meant to scale across campuses from day one, so every
  location shows up the same way without extra work on your end.

  Open to a quick call this week?

  God Bless,
  Ethan

## email_3
subject: last note, centerpoint
body: |
  Hey Scott,

  Last one from me.

  If the site already keeps up with seven campuses and counting, no worries at all.

  If it doesn't yet, happy to grab 15 minutes and talk through what would help.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-12
notes:
- "seven campuses... Massapequa alone averaging 1,500 on a weekend" -> matches jobera.com Executive Pastor posting found during lead-scoring 2026-11-12, directing applicants to hiring@cpchurch.com (domain match confirmed).
- "Planning Center handling giving, groups, and check-in" -> matches confirmed cpchurch.com churchcenter subdomain via church_crawler.
- Landmark Church quote ("grew organic search sessions 29.5% with zero paid spend") -> verbatim match to knowledge/case-studies/landmark-church.md Quotable lines; status approved, track new_build matches this lead's track. Only used in email_1, not repeated.
- No pricing cited. Track/proof consistency: new_build_track lead, new_build-tagged case study - consistent.
- scripts/voice_check.py: clean. Word counts: email_1 ~75w, email_2 ~57w, email_3 ~34w - within band, escalating brevity.
- Sign-off: "God Bless," then "Ethan" (churches). One CTA per email, rotated phrasing.
- First sentence specific to this church (seven campuses + Massapequa attendance), not sendable elsewhere. No repeated proof point across the sequence.
