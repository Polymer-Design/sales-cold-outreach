---
contact_name: Samraaj Bath
contact_title: CEO
organization: ion design (YC)
icp: startups
apollo_contact_id: 66f2b737b33bef0001e29e74
score_total: 66
tier: warm
research_arm: light
status: ready
drafted_at: 2026-11-11
---

## research
- org_data: 6 employees, founded 2023, 100% headcount growth over the last 6 months (team
  roughly doubled) - within the 5-50 band (source: Apollo org_data, lead-scoring
  2026-11-11)
- Platform detected as unknown -> new_build_track (source: scripts/platform_detect.py
  --url https://ion.design --icp startups, lead-scoring 2026-11-11)
- No design/frontend job posting found for ion.design - absence of in-house design
  capability is a positive technographic signal for the build service (source: lead-scoring
  2026-11-11 search)
- research_arm: light per EXP-001 - no new searches run for drafting. Not using the
  conflicting/uncertain third-party product-description facts flagged during scoring
  (sources described the product focus as having shifted across launches, not solid
  enough to cite in a cold email).

## proof_used
- knowledge/business-overview.md (plain capability statement - no case study fits a
  6-person pre-seed team at this stage)

## email_1
subject: ion design's growth
body: |
  Hey Samraaj,

  ion design has doubled its headcount in the last six months. That is usually right when
  the earliest version of the site stops keeping up with the team.

  We build sites for small YC teams growing fast: fast to ship, easy for whoever is free
  to update, no developer required.

  Worth 15 minutes?

  Ethan

## email_2
subject: even design teams skip this
body: |
  Hey Samraaj,

  Even design-focused teams often do not have anyone dedicated to their own marketing
  site, it just inherits whatever was true at the start.

  We take that off your plate: design, build, and a platform your team can update without
  pulling an engineer off the product.

  Open to a quick call this week?

  Ethan

## email_3
subject: last note, ion design
body: |
  Hey Samraaj,

  Last one from me.

  If the site is keeping pace with the team you have now, no worries at all.

  If it is still built for the earlier version of ion design, happy to grab 15 minutes.

  Ethan

## fact_check
result: pass
checked_at: 2026-11-11
notes:
- "doubled its headcount in the last six months" -> matches org_data organization_headcount_six_month_growth of 1.0 (100%) exactly; no specific old/new headcount numbers asserted, just the growth fact itself.
- No case study or numbers cited - plain capability statement per Step 2 (no fit for a 6-person pre-seed team). No pricing cited.
- Deliberately avoided the conflicting product-description facts flagged in score_notes (product focus described as having shifted across launches in uncertain third-party sources) - not citable.
- scripts/voice_check.py: clean. Word counts: email_1 ~50w, email_2 ~43w, email_3 ~33w - within band, escalating brevity.
- Sign-off: plain "Ethan" (startups). One CTA per email, rotated phrasing.
- First sentence specific to this company (headcount doubling), not sendable elsewhere. No repeated proof point across the sequence.
