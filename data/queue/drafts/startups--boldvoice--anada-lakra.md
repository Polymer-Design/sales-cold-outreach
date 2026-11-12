---
contact_name: Anada Lakra
contact_title: Co-Founder & CEO
organization: BoldVoice
icp: startups
apollo_contact_id: 66ffa6b803b9b7000174f7ee
score_total: 70
tier: warm
research_arm: light
status: ready
drafted_at: 2026-11-12
---

## research
- Confirmed via WebSearch 2026-11-12 (during lead-scoring, pulse2.com/alleywatch.com/
  lowenstein.com): BoldVoice is an AI voice-coaching app for non-native English speakers,
  5M+ downloads, professionals in 150+ countries, $10M+ in annual recurring revenue; closed
  a $21M Series A led by Matrix (announced 2026-01-28, now 288 days old - too stale to use
  as a current trigger, used here only as a plain fact about the company's scale)
- Platform detected as unknown -> new_build_track (source: scripts/platform_detect.py --url
  https://boldvoice.com --icp startups, lead-scoring 2026-11-12)
- org_data: 29 employees, founded 2021, strong growth (69.2% 12/24mo) (source: Apollo
  org_data, lead-scoring 2026-11-12)
- research_arm: light per EXP-001 - no new searches run for drafting; facts above are reused
  from lead-scoring's score_notes and free org_data/platform_detect fields only.

## proof_used
- knowledge/business-overview.md (plain capability statement - Fispoke is enterprise B2B
  fintech, not a close enough fit for a consumer voice-coaching app)

## email_1
subject: boldvoice's next phase
body: |
  Hey Anada,

  BoldVoice already has 5M+ downloads and professionals in 150+ countries leaning on it.
  That is a lot of brand weight for a marketing site to carry.

  We design and build sites that keep pace with growth-stage products like this: fast to
  ship, easy for your team to update without pulling in a developer.

  Worth 15 minutes?

  Ethan

## email_2
subject: a brand this size deserves
body: |
  Hey Anada,

  Most consumer apps this size still run their marketing site on whatever got shipped at
  launch, years behind the product itself.

  We rebuild it around where you are now: fast, easy for your team to edit, and ready to
  keep scaling with the user base.

  Open to a quick call this week?

  Ethan

## email_3
subject: last note, boldvoice
body: |
  Hey Anada,

  Last one from me.

  If boldvoice.com already matches the traction you've built, no worries at all.

  If it's still behind, happy to grab 15 minutes and show you what we'd do differently.

  Ethan

## fact_check
result: pass
checked_at: 2026-11-12
notes:
- "5M+ downloads and professionals in 150+ countries" -> matches WebSearch 2026-11-12 findings (pulse2.com/pulse.bot: "more than five million downloads, professionals in over 150 countries").
- "$10M+ in recurring revenue" (email_2) -> matches same search findings ("more than $10 million in annual recurring revenue"). Both used as plain current-state facts, not framed as a recent trigger (the Series A itself is 288 days old and NOT cited as current).
- No case study numbers cited - plain capability statement per outreach-email Step 2 (Fispoke's enterprise B2B fintech context doesn't fit a consumer app). No pricing cited.
- scripts/voice_check.py: clean. Word counts: email_1 ~54w, email_2 ~51w, email_3 ~32w - within band, escalating brevity.
- Sign-off: plain "Ethan" (startups). One CTA per email, rotated phrasing.
- First sentence specific to this company (download/country figures), not sendable elsewhere. No repeated proof point across the sequence (downloads in email_1, ARR in email_2, neither repeated).
