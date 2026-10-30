---
contact_name: Joah Spearman
contact_title: Founder and CEO
organization: TenYour
icp: startups
apollo_contact_id: 660d8ffdf16d5a000706dbda
score_total: 59
tier: warm
research_arm: deep
status: ready
drafted_at: 2026-10-30
---

## research
- 7 employees, founded 2023, fintech/financial-services vertical; headcount growth +14.3% (6mo), +166.7% (12mo), +300% (24mo) - textbook early growth-stage trajectory despite small current headcount (source: Apollo org_data, reused from lead-scoring's score_notes)
- tenyour.com's homepage is for "Safety Net by TenYour," a job-loss financial safety net product, backed by institutional investors including Precursor Ventures, Cake Ventures, Northwestern Mutual's accelerator, and Swizzle Ventures (source: WebFetch https://tenyour.com, checked 2026-10-30)
- The site is built on Next.js, custom code (confirmed via /_next/static/ asset paths in the raw page source), not a hosted no-code builder - this overrides the stale platform_detect.py "unknown" -> new_build_track default. Per outreach-email skill Step 0 ("Astro/Vercel/other custom-code sites... pitch the monthly plan anyway"), this draft pitches the subscription/monthly-plan angle instead of a rebuild (source: direct fetch of https://tenyour.com page source, 2026-10-30; scripts/platform_detect.py --url https://tenyour.com --icp startups returned platform: unknown / new_build_track since it has no Next.js marker yet)
- Joah Spearman previously founded Localeur, "a global travel platform with partners like Nike, JetBlue, Lyft, and Match.com," before starting TenYour (source: https://www.praxis.co/people/joah-spearman, checked 2026-10-30)
- Targeted follow-up searches ("Joah Spearman TenYour fintech", "TenYour Joah Spearman funding raise 2024 2025") found no dated funding/press event to cite as a trigger, confirming score_notes' intent score of 0/30 - growth is real, no credit-able event exists yet (source: WebSearch, 2026-10-30)
- PageSpeed mobile: accessibility 95, best practices 100, SEO 100, Speed Index 16.8s, performance score not computed - raw fact about their own site, not used as the email hook per the site-health-is-supporting-only rule (source: scripts/pagespeed_check.py --url https://tenyour.com, 2026-10-30)

## proof_used
- knowledge/business-overview.md#monthly-plans (plain capability statement; subscription_track has no approved case study yet per knowledge/case-studies/README.md)

## email_1
subject: custom code, no caretaker
body: |
  Hey Joah,

  TenYour's headcount is up 300% in two years, and the site holding that growth together is hand-coded in Next.js, not a drag-and-drop builder.

  That's great for flexibility, but a team growing that fast rarely has anyone whose full-time job is keeping the site current.

  We run ongoing work for custom-coded sites like yours: a dedicated team handling updates and new pages without pulling your team off the product.

  Want to jump on a call?

  Ethan

## email_2
subject: built this before
body: |
  Hey Joah,

  Before TenYour, you built Localeur into a travel platform with partners like Nike, JetBlue, Lyft, and Match.com.

  TenYour is backed by Precursor Ventures and Northwestern Mutual's accelerator, names that expect the site to match that credibility.

  A custom-coded site like yours needs the same ongoing attention as the product itself. That's exactly what our monthly plans cover, so nothing waits on a developer's spare time.

  Make sense to connect?

  Ethan

## email_3
subject: quick last thought
body: |
  Hey Joah,

  Last note from this end.

  If TenYour's site is keeping up with that 300% growth just fine, no worries at all.

  If it's not, worth 15 minutes to talk through what a dedicated team could take off your plate?

  Ethan

## fact_check
result: pass
checked_at: 2026-10-30
notes:
- "7 employees, founded 2023, +14.3%/+166.7%/+300% headcount growth (6/12/24mo), fintech/financial-services" -> verified against the lead's score_notes as given (org_data figures reused verbatim, not re-derived)
- "Safety Net by TenYour, job-loss safety net product, investors Precursor Ventures / Cake Ventures / Northwestern Mutual's accelerator / Swizzle Ventures" -> re-fetched https://tenyour.com directly (2026-10-30), confirmed all named investors and product framing present on the live homepage
- "site runs on Next.js, custom code" -> re-verified via raw curl of https://tenyour.com, page source contains /_next/static/ asset paths and webpack chunk references, conclusive Next.js fingerprint; scripts/platform_detect.py has no Next.js marker so it returned unknown -> new_build_track, a stale default this draft correctly overrides per outreach-email Step 0's custom-code carve-out
- Track/proof consistency: re-tagged subscription_track off the Next.js finding, pitches ongoing monthly-plan work (not a rebuild) in all three emails, and cites only knowledge/business-overview.md's Monthly Plans section (a plain capability statement) - correctly did NOT borrow knowledge/case-studies/fispoke.md (track: new_build) as proof for this subscription pitch
- "Joah Spearman previously founded Localeur, a global travel platform with partners like Nike, JetBlue, Lyft, and Match.com" -> re-fetched https://www.praxis.co/people/joah-spearman (2026-10-30), quote matches verbatim
- Caught and fixed one imprecision during this pass: original email_2 draft said "Safety Net is backed by Precursor Ventures..." but the cited investors fund TenYour the company, not the "Safety Net" product name specifically - corrected to "TenYour is backed by..." before verdict
- Did not cite the AllAmericanSpeakers/Thrive Global "$5M+ raised" figure found in search results - that number is an unverified speaker-bio claim about Spearman's career total, not confirmed on a primary source, so left out per the "don't invent/embellish" rule
- No funding/press trigger claimed anywhere in copy, consistent with score_notes (intent 0/30) and this pass's own re-search turning up nothing dated
- PageSpeed figures (accessibility 95, best practices 100, SEO 100, Speed Index 16.8s) recorded in research but intentionally not used as a hook or anywhere in copy - no PageSpeed claim to verify in the emails themselves
- scripts/voice_check.py: clean on the full file, zero banned words/phrases/em dashes
- word counts: email_1 74w, email_2 69w, email_3 39w - all within band (50-85/40-80/30-60), escalating brevity holds, email_3 shortest
- sign-off: plain "Ethan" all three, correct for startups ICP; no "God Bless" leakage
- single CTA per email, no booking link anywhere; CTA phrasing rotated across the sequence ("want to jump on a call?" / "make sense to connect?" / "worth 15 minutes?") per voice-and-tone's anti-fingerprint rule
- first sentences (e1: 300% headcount + Next.js stack; e2: Localeur/Nike/JetBlue/Match.com founder history) are both impossible to send to another company
- checked subject lines and first-line construction against data/queue/drafts/ (Sunlight, Vokol, and other recent startup drafts) - deliberately avoided Sunlight's "{company}'s {number}%" subject skeleton and the "last note/last one, {company}" email_3 subject pattern already used in-repo; no repeated proof-point sentence or CTA skeleton found

