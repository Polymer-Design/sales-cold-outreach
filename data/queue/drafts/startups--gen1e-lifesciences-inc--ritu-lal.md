---
contact_name: Ritu Lal
contact_title: CEO and Co-Founder
organization: GEn1E Lifesciences Inc.
icp: startups
apollo_contact_id: 66fcb7141b49660001749dc0
score_total: 55
tier: warm
research_arm: light
status: pushed
drafted_at: 2026-10-30
pushed_at: 2026-10-30T14:00:07Z
mailbox: ehoover@growwithpolymer.com
apollo_contact_id_resolved: 6ae4a2e60bde9b00100459f8
---

## research
- GEn1E has raised $22.67M across five rounds, reaching a ~$135.5M valuation as of PremierAlts' Dec 2025 data (source: lead-scoring score_notes, scored 2026-10-30) - used here as a background capital/scale fact only, not as a current trigger
- Clinical-stage biotech with a science-focused team; lead-scoring flagged this team type as unlikely to carry in-house web development capacity (source: score_notes, scored 2026-10-30)
- Platform confirmed Webflow -> subscription_track (source: scripts/platform_detect.py output, recorded in score_notes during lead-scoring, scored 2026-10-30)
- Score_notes' own stage flag: GEn1E is more mature/well-capitalized than this ICP's typical Series A-C band, still fitting via the ICP's embedded-team framing for later-stage companies (source: score_notes, scored 2026-10-30)
- Ritu Lal, CEO and Co-Founder, verified email, exact title match to the ICP's decision-maker criteria (source: Apollo contact record, apollo_id 66fcb7141b49660001749dc0)
- Not used: an Oct/Dec 2025 funding update and an undated new board-chair appointment both surfaced during lead-scoring, but score_notes already scored intent 0/30 for these specifically (funding stale >180 days, board-chair appointment undated, not a marketing trigger) - correctly excluded here as a "current news" hook
- research_arm: light - no new WebSearch/WebFetch run this step. All facts above are reused from lead-scoring's score_notes plus the free platform_detect/Apollo contact fields already on the lead record, per outreach-email skill Step 1.

## proof_used
- knowledge/business-overview.md#monthly-plans (Partner plan; plain capability statement - no approved subscription_track case study exists yet per knowledge/case-studies/README.md, so no case study numbers borrowed)

## email_1
subject: who's running gen1e.com
body: |
  Hey Ritu,

  GEn1E has raised $22.67M across five rounds to a ~$135.5M valuation, past the stage most companies are at when they first set up a Webflow site.

  The platform still fits. What usually doesn't keep up is who's driving it once the team's heads-down on the clinical work.

  Our Partner plan covers that: a team handling new pages and investor-facing updates, so GEn1E's own people stay on the trial work.

  Up for a quick call?

  Ethan

## email_2
subject: not a founder's job
body: |
  Hey Ritu,

  At GEn1E, whoever decides what goes on the website is probably you, not a developer or a marketing hire, since the team's built for the science.

  That's exactly what the Partner plan takes on: a team that ships new pages and updates on its own, without routing every change through you.

  GEn1E stays on Webflow either way, the only thing that changes is who's actually keeping it current.

  Make sense to connect?

  Ethan

## email_3
subject: if the site's not urgent
body: |
  Hey Ritu,

  One more try, then I'll stop.

  If the Webflow site is holding up fine on its own, no worries at all.

  If it should look like it belongs to a $135.5M company, open to 15 minutes?

  Ethan

## fact_check
result: pass
checked_at: 2026-10-30
notes:
- "$22.67M raised across five rounds, ~$135.5M valuation" -> matches the lead brief's score_notes verbatim ("$22.67M raised over 5 rounds, ~$135.5M valuation (Dec 2025, PremierAlts)"); research_arm: light means no fresh WebFetch of PremierAlts itself, only re-checking the already-scored claim against score_notes, correct per the light arm's rules - consistently presented as a background capital/scale fact in all three emails, never framed as "congrats" or implied-recent news
- Confirmed the Oct/Dec 2025 funding update and the undated new board-chair appointment are NOT cited anywhere in any of the three emails - correctly excluded per the brief's explicit instruction and score_notes' own intent=0 reasoning (funding stale >180d, board-chair appointment undated)
- "clinical-stage biotech, science-focused team" -> matches score_notes verbatim; "unlikely to have in-house web dev" claim is carried into copy only as a hedged inference ("probably you," "team's built for the science," "heads-down on the clinical work"), never asserted as a confirmed fact about GEn1E's org chart
- Platform/track: Webflow confirmed -> subscription_track (matches lead brief); all three emails pitch the Partner monthly plan and ongoing work only, never a rebuild - email_2 explicitly states "GEn1E stays on Webflow either way." Track/proof consistency check (subscription_track-specific per task instructions): passed - no case study borrowed, no new_build language anywhere
- Proof point: "Partner plan" -> verified against knowledge/business-overview.md Monthly plans table (Partner exists, scope "Grow + design collateral, decks, brand work," inherits Grow's "new pages, landing pages, CMS work, small automations"); no price or hours cited in any email, so no numeric mismatch is possible; Partner (vs. Grow) chosen over the default and justified by score_notes' own stage flag (GEn1E is more mature/well-capitalized than the ICP's typical band), noted in the research block
- No approved subscription_track case study exists per knowledge/case-studies/README.md - confirmed proof_used is a plain capability statement only, no case study numbers borrowed, no Fispoke (new_build-tagged) numbers reused for this subscription pitch
- No PageSpeed claim anywhere (light arm correctly skipped it per Step 1 - scoring didn't run it either)
- No Internal-only pricing, hourly rates, or discount language anywhere
- `python scripts/voice_check.py`: clean, no banned words/clichés/openers/em dashes
- Word counts (script-verified): email_1 77w, email_2 75w, email_3 39w - all within band (e1 50-85 aim <80, e2 40-80, e3 30-60), email_3 clearly shortest
- Sign-off: plain "Ethan" all three (correct for startups, no "God Bless" leakage)
- Single CTA per email, no booking link anywhere; CTA phrasing rotated across the sequence ("Up for a quick call?" / "Make sense to connect?" / "open to 15 minutes?")
- First sentences of email_1 (exact funding figures + Webflow) and email_2 (Ritu as the de facto website owner, science-first team) are each specific to GEn1E, not sendable to another company
- Cohesion: three distinct hooks (funding scale vs. platform-staffing mismatch / founder-as-bottleneck / closer), no literal repeated sentence, same underlying $135.5M fact reused in email_3 only as a closing callback, not as a second "new" hook
- Checked against recently-committed sibling startup drafts, especially same-vertical biotech/pharma ones (startups--lavior-pharma-inc--anabelle-savion.md, startups--granza-bio--ashwin-nandakumar.md, startups--avant-genomics--renna-nouwairi.md) plus startups--visual-feeder--yaxi-yang.md, startups--ever-ledger--ashley-aviram.md, startups--tenyour--joah-spearman.md, startups--voosh--priyam-saraswat.md (both subscription/Webflow-adjacent or phrase-adjacent): caught and rewrote three real collisions before finalizing - (1) original e1 subject "the site behind the science" was one word off Lavior's already-committed "the site before the science," replaced with "who's running gen1e.com"; (2) original e1/e2 proof sentences used "puts a team on it full time... new pages, updates... as the science/pipeline moves," too close to Granza Bio's committed "A monthly plan puts a team on it full time, new pages, updates, as the pipeline moves forward," reworded to "covers that: a team handling..." / "takes on: a team that ships..."; (3) original e3 opener "I'll leave this here" nearly duplicated Avant Genomics' committed "I'll leave this with you," replaced with "One more try, then I'll stop." Also avoided "standing team" (used in startups--voosh--priyam-saraswat.md) and "take ... off your plate" (used in both startups--ever-ledger--ashley-aviram.md and startups--tenyour--joah-spearman.md) - neither phrase appears in the final copy. Additionally caught that e1 and e2 both originally opened their proof paragraph with "[Our/A] Partner plan covers that" - an internal self-collision - reworded email_2's to "That's exactly what the Partner plan takes on" before finalizing
