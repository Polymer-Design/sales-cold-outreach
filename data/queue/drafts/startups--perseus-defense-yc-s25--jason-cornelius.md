---
contact_name: Jason Cornelius
contact_title: Co-Founder & CEO
organization: Perseus Defense (YC S25)
icp: startups
apollo_contact_id: 687ce84cfd3673000189fafb
score_total: 55
tier: warm
research_arm: deep
status: ready
drafted_at: 2026-10-30
---

## research
- Firmographic/reachability/intent context reused verbatim from lead-scoring's score_notes (not re-scored): "Firmographic 22/30: confirmed real YC-backed counter-drone defense startup, reported $6M seed (15+ investors incl. Alumni Ventures/Bow Capital, exact date unconfirmed) - fits 5-50/founded>=2019 band. Technographic 13/20: platform_detect returned 'unknown', no in-house capability evidence. Intent 0/30: best-dated references (Jan 2026 flight-test milestone ~290 days old, an April 2026 third-party analysis ~199 days old) are both at or past the 180-day decay boundary - scored 0 conservatively given the dating is genuinely ambiguous rather than guessing in the lead's favor. Reachability 20/20: verified email, 'Co-Founder & CEO' exact match."
- New find this pass, newer/better-dated than what scoring's search surfaced: Perseus's Harpe interceptor was put through a live-fire evaluation at Yuma Proving Ground during Falcon Peak 26.2 (experiment window Aug 31-Sept 25, 2026), involving NORTHCOM, NORAD, and JIATF-401 (source: https://www.armyrecognition.com/news/army-news/2026/u-s-tests-perseus-harpe-interceptor-for-low-collateral-defense-against-small-drone-attacks, published 2026-09-11; https://www.thedefensenews.com/US-Firm-Perseus-Defense-Tests-Harpe-Low-Cost-Kinetic--MK-II-Drone-Interceptor-at-Yuma-Proving-Ground-During-Falcon-Peak-262/, published 2026-09-18). This is ~6-7 weeks old as of 2026-10-30, well inside the 180-day decay window - not used to override lead-scoring's tier/score (out of scope for drafting), but is current and citable as a drafting fact.
- perseusdefense.com runs on Framer (a hosted, drag-and-drop no-code builder), confirmed via direct curl of the page source: `<!-- Made in Framer · framer.com -->` and `<meta name="generator" content="Framer...">`, page last published 2026-09-30 (source: direct fetch of https://perseusdefense.com, 2026-10-30). `scripts/platform_detect.py --url https://perseusdefense.com --icp startups` returns `{"platform": "unknown", "track": "new_build_track"}` since Framer has no dedicated signature in that script yet. Framer is a hosted builder, not custom code, so the Step 0 custom-code override (which applies to Astro/Vercel/other custom-code sites) does not apply here - new_build_track stands, correctly.
- Jason Cornelius helped lead major parts of NASA's Titan Dragonfly rotorcraft program (Penn State PhD in aerospace engineering, later NASA Ames) before leaving NASA in 2025 to co-found Perseus. Per the company's own founder profile, the team then ran a two-week design-build-test cycle and moved through four major guided-missile iterations with more than 30 live-fire flight tests in their first eight weeks (source: https://yespress.io/jason-cornelius, checked 2026-10-30).
- Mobile PageSpeed: performance 98, accessibility 94, best practices 100, SEO 100, LCP 1.9s (`scripts/pagespeed_check.py --url https://perseusdefense.com --strategy mobile`, 2026-10-30) - the Framer site is already fast and clean technically; logged per Step 1 but not used as a hook since there's nothing weak to flag (consistent with the gap being platform/credibility fit, not performance).
- Targeted search for any contract/award news beyond the two items above found none: a Sept 2025 Tectonic Defense article (https://www.tectonicdefense.com/exclusive-yc-backed-perseus-defense-closes-6m-seed-round/, published 2025-09-18) confirms the $6M seed, 15+ investors incl. Bow Capital (largest check) and Alumni Ventures, but it's now over a year old - used only as background, not as a fresh trigger.

## proof_used
- knowledge/case-studies/fispoke.md (track: new_build, status: approved)
- knowledge/business-overview.md (Initial builds timelines / positioning line)

## email_1
subject: falcon peak and framer
body: |
  Hey Jason,

  Perseus put the Harpe interceptor in front of NORTHCOM and NORAD at Yuma last month, and perseusdefense.com is still running on Framer, a drag-and-drop builder, not something built to carry that kind of audience.

  A defense buyer doing diligence on a counter-drone vendor notices that gap fast.

  We did similar work for Fispoke, a fintech platform selling to registered investment advisors: full SEO and structured data built in from scratch, something their old Wix site never had.

  Worth 15 minutes?

  Ethan

## email_2
subject: eight weeks, four iterations
body: |
  Hey Jason,

  Before Perseus, you helped lead major parts of NASA's Titan Dragonfly program. Since founding Perseus, your team ran a two-week design-build-test cycle and burned through four missile iterations in eight weeks.

  That's not the pace of a typical agency website build.

  We work the same way: fixed price, Sprint live in 30 days, Core in 60, built around where Perseus is headed next, not where it started.

  Up for a quick call?

  Ethan

## email_3
subject: where this stands
body: |
  Hey Jason,

  I'll leave this with you.

  If the current site is fine while Perseus is heads-down on flight tests and funding, that's a fair call.

  If a defense buyer doing diligence deserves a stronger first look, happy to talk this week.

  Ethan

## fact_check
result: pass
checked_at: 2026-10-30
notes:
- "Harpe interceptor live-fire evaluation at Yuma Proving Ground, Falcon Peak 26.2, involving NORTHCOM/NORAD/JIATF-401" -> re-fetched armyrecognition.com (independent fresh pass) and thedefensenews.com, both confirm; cross-verified against a third, independently-found source (interestingengineering.com, published 2026-09-19) which also names Perseus, Yuma, Falcon Peak 26.2, NORTHCOM/NORAD/JIATF-401 - three independent outlets agree, not a single-source claim
- Dating: articles published 2026-09-11, 2026-09-18, 2026-09-19; experiment window Aug 31-Sept 25, 2026 per thedefensenews.com - roughly 6-7 weeks before today (2026-10-30), well inside the 180-day decay boundary and accurately described as "last month" in email_1 (September is literally the prior calendar month to October)
- This dated signal is newer/better than the two stale references scoring's score_notes cited (Jan 2026 ~290d, April 2026 ~199d, both past the 180-day boundary) - used here only as a drafting fact per Step 1, tier/score_total correctly left untouched since re-scoring is out of scope for drafting
- "perseusdefense.com runs on Framer" -> re-curled the live page independently of the drafting fetch: `<!-- Made in Framer -->` comment and `<meta name="generator" content="Framer...">` both present; platform_detect.py confirmed returning `unknown` -> `new_build_track` (no Framer signature in that script); Framer is a hosted no-code builder, not custom code, so the Step 0 custom-code override does not apply - new_build_track is correct, not a stale default being blindly followed
- "helped lead major parts of NASA's Titan Dragonfly program... left NASA in 2025... two-week design-build-test cycle... four major guided-missile iterations... 30+ live-fire flight tests in eight weeks" -> re-fetched yespress.io/jason-cornelius independently, exact wording confirmed for all clauses used in email_2; flagged in research that the publishing page presents these as the company's own claims (not independently verified by a third party), consistent with the "lead's research notes with a source URL" standard - not held to a stricter bar than that
- Fispoke claims (email_1): "fintech platform selling to registered investment advisors," "full SEO and structured data built in from scratch," "old Wix site never had [it]" -> checked against knowledge/case-studies/fispoke.md (status: approved, track: new_build, icp_fit: startups) verbatim - matches "sells an embedded banking platform to registered investment advisors (RIAs)," "Built in AEO/SEO/technical SEO and structured data from scratch (the old site had none)," "ran on Wix." Corrected one imprecision during this pass: an earlier draft said "institutional advisors," which isn't the case study's term - fixed to "registered investment advisors" to match verbatim
- Did NOT use the Fispoke testimonial quote verbatim ("...makes institutional buyers take us seriously") since data/queue/drafts/startups--peakflo-yc-w22--saurabh-chauhan.md (committed same batch, same case study) already uses that exact quote - used a different, non-overlapping fact from the same case study instead
- No stale $6M seed (Sept 2025, now 13+ months old) or old Jan/April 2026 flight-test references presented as current anywhere in copy - only the Sept 2026 Falcon Peak find and Jason's personal/founding background are used as time-sensitive material
- business-overview.md claims: "fixed price," "Sprint live in 30 days," "Core in 60" -> matches knowledge/business-overview.md Initial Builds table exactly (Sprint 30 days, Core 60 days); no price figure cited in copy, nothing to mismatch; no specific platform (Webflow/Astro) named as what Polymer builds, consistent with the pitch rule
- Track/proof consistency: new_build_track (platform is a hosted no-code builder, not Webflow, not custom code) correctly paired with the new_build-tagged Fispoke case study and a plain capability/timeline statement, never a monthly-plan pitch
- PageSpeed (98/94/100/100, LCP 1.9s) logged in research, intentionally not cited anywhere in copy - site is already fast/clean so there's no weak point to use as supporting evidence, and no comparative Polymer-benchmark claim was made
- `scripts/voice_check.py`: clean, zero banned words/clichés/openers/em dashes
- Word counts (script-verified): email_1 83, email_2 75, email_3 43 - within band (50-85/40-80/30-60); email_1 slightly over the "aim under 80" soft target but within the hard limit, justified by the density of the two-fact opening hook
- One CTA per email, no booking link anywhere, sign-off plain "Ethan" all three (startups, correct - no "God Bless" leakage)
- CTA phrasing rotated against the five most recently committed startup drafts (Peakflo, Visual Feeder, TenYour, Revella Health, SMITH&SAINT): used "Worth 15 minutes?" and "Up for a quick call?" (bare forms), neither of which appears as a top-level CTA in any of those five
- Subject lines and email_3 opening checked against the same five drafts: avoided the "last [one/note/thought], {company}" skeleton used by three of them (SMITH&SAINT, Revella Health, TenYour, TraceRoot.AI) for email_3's subject and opening line - used "where this stands" / "I'll leave this with you." instead
- First sentences of email_1 and email_2 are both specific enough (named test event + named NASA program) to be impossible to send to any other company
- Cohesion: three distinct hooks (current-moment capability gap / founder-history-and-pace / low-pressure close), no repeated proof point, brevity escalates 83 -> 75 -> 43
