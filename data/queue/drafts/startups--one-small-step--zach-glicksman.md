---
contact_name: Zach Glicksman
contact_title: COO and Co-Founder
organization: One Small Step
icp: startups
apollo_person_id: 6ad41a145d243300019012fa
score_total: 50
tier: warm
research_arm: light
status: ready
drafted_at: 2026-11-09
---

## research
- 7 employees, information technology & services industry, headcount roughly doubled over the last year (100% 12mo, 200% 24mo per org_data) (source: Apollo org_data, lead-scoring 2026-11-09)
- Platform detected as unknown -> new_build_track (source: scripts/platform_detect.py --url https://onesmallstep.io --icp startups, scoring 2026-11-09)
- No funding/press signal found specific to this company during lead-scoring's WebSearch pass (2026-11-09); draft built on the confirmed org_data growth figure alone
- research_arm: light per EXP-001 - no new searches run for drafting.

## proof_used
- knowledge/case-studies/fispoke.md (new_build_track)

## email_1
subject: one small step's headcount
body: |
  Hey Zach,

  Doubling headcount in a year is a good problem to have, it also means whatever handled the site at 3-4 people stops being enough.

  Most teams at this stage are still running on something a co-founder threw together early on.

  We build sites for growing teams in weeks, then keep building after launch. For Fispoke, a fintech client, we moved them off Wix onto a 25-page, CMS-driven build with SEO built in.

  Worth 15 minutes?

  Ethan

## email_2
subject: one small step, scaled up
body: |
  Hey Zach,

  A site built for a 3-person team rarely still fits once you're at 7 and climbing.

  We build it to match where the company actually is now, then keep it current from there.

  Open to a quick call this week?

  Ethan

## email_3
subject: last note, one small step
body: |
  Hey Zach,

  Last one from me.

  If the site's keeping up with the growth, no worries at all.

  If it's not, happy to grab 15 minutes and talk through what a rebuild would look like.

  Ethan

## fact_check
result: pass
checked_at: 2026-11-09
notes:
- "doubled headcount in a year, 200% 24mo" -> matches org_data exactly (1.0 = 100% 12mo, 2.0 = 200% 24mo).
- Fispoke claims -> verbatim-compatible with knowledge/case-studies/fispoke.md; track: new_build matches lead's tag.
- research_arm: light confirmed, no new search/fetch calls made.
- scripts/voice_check.py: clean. word counts: 78w/43w/36w - within band.
- sign-off: plain "Ethan". single CTA per email, no booking link.
- Cross-draft check: structurally distinct from the rest of today's batch (early-team-outgrew-its-first-site angle), no reused skeleton.
