---
contact_name: Dmitry Karpov
contact_title: Chief Executive Officer
organization: Adentris (Y Combinator P25)
icp: startups
apollo_contact_id: 66f17a7617af84000119d67f
score_total: 64
tier: warm
status: pushed
drafted_at: 2026-10-20
pushed_at: 2026-10-20T18:11:16Z
---

## research
- Adentris expanded from a single documentation-compliance product to five modules (Documentation Compliance, Documentation Co-pilot, Coding QA, Prior Authorization, Appeals & Denials), announced ~2026-05 (source: WebSearch 2026-10-20, cited in lead's score_notes)
- Homepage backs the expansion with real self-reported numbers: 73% -> 96% pre-submission documentation accuracy, and a 62% drop in claim denials over 90 days for a multi-site behavioral health customer (source: WebFetch https://adentris.com, 2026-10-20)
- Homepage also claims SOC 2 Type I/II, BAA-readiness, 42 CFR Part 2 architecture, and "no patient data sent to external LLM APIs" (source: WebFetch https://adentris.com, 2026-10-20)
- No open roles listed on the Adentris careers page (source: WebSearch 2026-10-20, cited in lead's score_notes)
- Mobile PageSpeed: performance 75/100, LCP 3.6s (source: scripts/pagespeed_check.py --url https://adentris.com --strategy mobile, 2026-10-20)
- Site platform: no builder marker detected (source: scripts/platform_detect.py --url https://adentris.com --icp startups, 2026-10-20)

## proof_used
- knowledge/case-studies/fispoke.md (complex, multi-product fintech platform rebuilt onto a CMS-driven Webflow site)

## email_1
subject: five modules, one page
body: |
  Hey Dmitry,

  Five modules now, up from one, with real numbers to back it: 96% pre-submission accuracy, 62% fewer denials for one behavioral health network.

  That's a lot of product to explain clearly on one homepage to compliance buyers who read everything twice before they trust it.

  We moved a fintech platform with a similarly complex, multi-product pitch off Wix onto a CMS-driven Webflow build so their team could publish without touching code.

  Worth 15 minutes to see if something similar fits Adentris?

  Ethan

## email_2
subject: trust signals, slow page
body: |
  Hey Dmitry,

  Adentris leans hard on trust signals: SOC 2, BAA-ready, no patient data to external LLMs. That's exactly what a compliance buyer needs to see fast.

  Your homepage still takes 3.6 seconds to load on mobile, where hospital admins are skimming vendor sites between meetings.

  We build sites for exactly this kind of product: technical, for buyers who need to trust you before they'll even take a call.

  Up for a quick call this week?

  Ethan

## email_3
subject: quick close
body: |
  Hey Dmitry,

  Last note on this. Five modules, real adoption numbers, but a homepage doing a lot of heavy lifting to explain all of it to a skeptical buyer.

  If a redesign isn't a priority this year, no worries at all. If it is, happy to grab 15 minutes whenever works.

  Ethan

## fact_check
result: pass
checked_at: 2026-10-20
notes:
- 5-module expansion and ~2026-05 timing -> verified against lead's score_notes (dated WebSearch 2026-10-20); still within intent discussion, not re-claimed as a fresh trigger in the copy itself
- 73->96% pre-submission accuracy, -62% denials (multi-site BH) -> re-fetched https://adentris.com 2026-10-20, homepage states these exact figures; cited as the company's own self-reported numbers, not asserted as independently verified
- SOC 2 / BAA-ready / no patient data to external LLMs -> re-fetched https://adentris.com 2026-10-20, confirmed on page
- 3.6s mobile LCP / 75 performance -> re-ran scripts/pagespeed_check.py --url https://adentris.com --strategy mobile 2026-10-20, matches; cited as a raw fact about their own site, no comparison to Polymer's benchmark
- Fispoke proof (Wix migration, CMS-driven, multi-product, publish without touching code) -> matches knowledge/case-studies/fispoke.md verbatim-compatible, track: new_build matches this lead's new_build_track
- No Polymer pricing mentioned; single CTA per email; voice_check.py clean; e1/e2/e3 word counts 84/77/52, all within band
- Sign-off "Ethan" alone, correct for startups ICP; greeting + blank-line paragraph breaks present in all three
- Cohesion: proof point appears once (e1), e2 uses a plain capability statement instead of re-citing Fispoke, e3 has no new claims - no repeated proof point, brevity escalates 84->77->52
