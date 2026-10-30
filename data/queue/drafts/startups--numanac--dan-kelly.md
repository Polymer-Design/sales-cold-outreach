---
contact_name: Dan Kelly
contact_title: Co-Founder & Chief Operations Officer
organization: Numanac
icp: startups
apollo_contact_id: 5acc9361a6da9874177a6020
score_total: 55
tier: warm
research_arm: light
status: pushed
drafted_at: 2026-10-30
pushed_at: 2026-10-30T14:00:30Z
mailbox: ethan@growwithpolymer.com
apollo_contact_id_resolved: 6ae4a2fc0c20490020b7257d
---

## research
- Numanac: 9 employees, founded 2024, industry "information technology & services" (source: Apollo org_data, recorded on the lead during lead-scoring, scored_at 2026-10-27)
- Headcount growth off a small base: +20% (6mo), +100% (12mo), +200% (24mo) (source: Apollo org_data, same lead-scoring record, scored_at 2026-10-27)
- Platform undetected, no in-house dev/design signal found in Apollo's data -> new_build_track per score_notes (source: scripts/platform_detect.py output, recorded in score_notes during lead-scoring, scored_at 2026-10-27)
- Dan Kelly, Co-Founder & Chief Operations Officer, is the verified decision-maker contact on this org (source: Apollo contact data, apollo_id 5acc9361a6da9874177a6020)
- research_arm: light per EXP-001 (data/experiments.md) - no new WebSearch/WebFetch run. All facts above are reused from lead-scoring's score_notes plus the free org_data/platform_detect fields already on the lead record, per outreach-email skill Step 1.

## proof_used
- knowledge/case-studies/fispoke.md (new_build_track, status: approved - Numanac is tagged new_build_track, matches)
- knowledge/business-overview.md (positioning line: fixed price, live site in weeks)

## email_1
subject: nine people, 200% growth
body: |
  Hey Dan,

  Numanac doubled headcount in the last year and tripled it over two, still only nine people doing it.

  That kind of pace usually means every open role goes to product first; the website gets whatever's left over, which isn't much.

  We build fixed-price sites small teams run themselves. Fispoke had no CMS and nobody in-house who could publish; we rebuilt it into a 25-page site their team edits on their own.

  Does 15 minutes this week work to talk through it?

  Ethan

## email_2
subject: two years old, still climbing
body: |
  Hey Dan,

  Numanac's only been around since 2024, and headcount's still climbing, up 20% in just the last six months.

  As Co-Founder and COO, you're the one who ends up owning whatever the website isn't already handling, on top of everything else that's growing right now.

  We do fixed-price builds, live in weeks, so it's one less thing added to your plate instead of another project to manage.

  Open to a quick call this week?

  Ethan

## email_3
subject: no worries if not
body: |
  Hey Dan,

  No pressure if the website's not high on the list right now, there's plenty else moving at Numanac.

  If a few weeks and a fixed price would help, worth a quick call?

  Ethan

## fact_check
result: pass
checked_at: 2026-10-30
notes:
- "9 employees, founded 2024, industry information technology & services" -> re-verified against data/leads/index.jsonl org_data for numanac.com (estimated_num_employees: 9, founded_year: 2024, industry: "information technology & services") and matches score_notes verbatim
- "+20% (6mo), +100% (12mo), +200% (24mo) headcount growth" -> re-verified against the same org_data record (organization_headcount_six_month_growth: 0.2, twelve_month_growth: 1.0, twenty_four_month_growth: 2.0); email_1 "doubled...in the last year" = +100% exactly, "tripled it over two" = +200% exactly (a 200% increase is 3x the base); email_2 "up 20% in just the last six months" matches the 0.2 figure exactly - all three are faithful plain-language translations, not rounded or inflated
- "Numanac's only been around since 2024" -> matches founded_year 2024, consistent with today's date (2026-10-30), no contradiction with the 24-month growth figure (company existed in some form across that window)
- "platform undetected, no in-house dev/design signal" (research block) -> matches score_notes and lead record (platform: unknown, track: new_build_track); correctly NOT stated as a direct claim about Numanac in the copy itself - email_1's "every open role goes to product first; the website gets whatever's left over" is phrased as a general pattern inference, not an assertion of fact about Numanac's actual hiring, consistent with the "no verifiable signal" limits of this research
- Dan Kelly, Co-Founder & Chief Operations Officer, apollo_id 5acc9361a6da9874177a6020 -> matches the lead brief and frontmatter exactly; email_2's "Co-Founder and COO" is a standard abbreviation of the same title, consistent with how sibling drafts (e.g. SMITH&SAINT) render this title
- Track/proof consistency: new_build_track lead, all three emails pitch a fixed-price build, never a monthly plan or retainer; knowledge/case-studies/fispoke.md is tagged track: new_build, status: approved - correct case study for this track
- Fispoke claims ("no CMS and nobody in-house who could publish," "25-page site their team edits on their own") -> verbatim-compatible with knowledge/case-studies/fispoke.md ("no CMS and no way for Fispoke's own team to publish," "up to 25 pages... so Fispoke's team can publish without touching code"); "25-page" for "up to 25 pages" matches the rounding precedent already used and passed in startups--smith-saint--madison-smith.md; no numbers invented, no client quote misattributed, no pricing/tier named
- "fixed-price sites small teams run themselves" / "fixed-price builds, live in weeks" -> consistent with knowledge/business-overview.md's positioning line ("A fixed price. A live site in weeks. The same team to keep it growing.") and the general build offer; no specific tier, price, or timeline number cited, so nothing to mismatch against the Sprint/Core/Custom table
- No PageSpeed claim anywhere (light arm correctly skipped it per outreach-email Step 1 - scoring didn't run it either, nothing to cite)
- No funding/press/intent signal claimed anywhere, consistent with score_notes (intent 0/30, no verifiable signal found)
- research_arm: light recorded in frontmatter; confirmed no new WebSearch/WebFetch calls were made for this draft - all facts trace to score_notes plus the free org_data/platform_detect/Apollo contact fields already on the lead record, per outreach-email skill Step 1
- scripts/voice_check.py: clean, no banned words/phrases/openers/em dashes
- word counts (script-verified): email_1 84, email_2 76, email_3 35 - all within band (e1 50-85 aim <80, e2 40-80, e3 30-60); e1 sits at the high end of the aim but under the 85 hard limit
- sign-off: plain "Ethan" all three emails (correct for startups, no "God Bless" leakage)
- single CTA per email, no booking link anywhere; CTA phrasing rotates ("Does 15 minutes this week work to talk through it?" / "Open to a quick call this week?" / "worth a quick call?") - grepped data/queue/drafts/ and confirmed the email_1 CTA is not reused anywhere else in the batch; "worth a quick call?" (not "worth 15 minutes?") deliberately chosen since "Worth 15 minutes?" is the single most overused CTA in this batch (51 occurrences across sibling drafts)
- first sentence (12mo/24mo headcount growth + still-9-people combination) is a specific numeric fact pattern not sendable to another company
- cohesion: Fispoke cited once only (email_1); the "fixed price / live in weeks" capability line recurs across all three as the core offer itself (expected, not a repeated proof-point stat); each email uses a distinct hook (growth-vs-headcount in e1, founding date + COO role in e2, easy-out closer in e3); brevity decreases 84 -> 76 -> 35, holding the escalating-brevity rule
- checked against today's other committed/drafted startup sequences in data/queue/drafts/ (SMITH&SAINT, TenYour, Visual Feeder, University Bridge - all light/thin-research new_build_track siblings) for skeleton collisions: caught and rewrote an initial email_1 paragraph 2 ("Teams growing that fast rarely have anyone dedicated to the website...") that mirrored TenYour's "a team growing that fast rarely has anyone whose full-time job is keeping the site current" almost verbatim in construction - replaced with "That kind of pace usually means every open role goes to product first; the website gets whatever's left over, which isn't much," a different sentence shape; also caught and removed an awkward back-to-back repetition of "nine people" across paragraphs 1 and 2 in an intermediate draft; also moved email_3 away from the literal "If [condition], no worries at all. If [opposite], [CTA]" two-sentence mirrored-conditional shape used nearly verbatim by SMITH&SAINT, TenYour, and University Bridge's closers, in favor of a single flowing "No pressure if X... If Y, [CTA]" construction with different vocabulary ("no pressure" instead of "no worries at all")
