---
contact_name: Michael Fiedel
contact_title: Co-Founder, COO
organization: PolicyFly
icp: startups
apollo_contact_id: 60d60329609ca20001ba5c5e
score_total: 81
tier: hot
status: pushed
drafted_at: 2026-10-19
pushed_at: 2026-10-19T18:54:38Z
---

## research
- The New York Times featured PolicyFly in a piece on AI and the future of work, dated 2026-07-29 (source: policyfly.com "recent news" list, WebFetch 2026-10-19)
- PolicyFly calls itself "The growth platform for specialty insurers," serving MGAs, coverholders, carriers, and syndicates with submission capture, an underwriting workbench, and reporting (source: WebFetch https://policyfly.com, 2026-10-19)
- $7M seed round, 2024-07-30, led by Bain Capital Ventures with Y Combinator participation (source: https://seedtable.com/companies/policyfly/funding-rounds/seed-2024-07, https://www.trysignalbase.com/news/funding/pioneering-insurtech-platform-policyfly-secures-7-million-in-seed-funding-for-growth-and-innovation)
- policyfly.com mobile load: performance 64/100, LCP 6.2s (source: scripts/pagespeed_check.py --url https://policyfly.com --strategy mobile, run 2026-10-19)
- No careers page or marketing/design hire found (source: WebFetch https://policyfly.com, 2026-10-19)

## proof_used
- knowledge/case-studies/fispoke.md (new_build_track has one approved case study; used as a plain scope/before-after description, no vertical-fit claim)

## email_1
subject: the NYT write-up, then what
body: |
  Hey Michael,

  Congrats on the New York Times piece. Coverage like that sends people straight to your homepage.

  The product is clearly built for serious insurers, but the site undersells it. Lines like "cutting edge technology solutions" could describe anyone, and it takes 6.2 seconds to load on a phone.

  We help startups look like the company they're becoming. We recently rebuilt a fintech site that's faster, sharper, and run by their own team.

  Worth 15 minutes next week?

  Ethan

## email_2
subject: MGAs checking you out post-NYT
body: |
  Hey Michael,

  A coverholder or carrier reading that NYT piece is going to look you up before they ever talk to sales. Whatever they find on policyfly.com in those first few seconds is doing the selling for you.

  We build fixed-price Webflow sites for growth-stage teams, usually live in 30-60 days, built around whatever's actually converting your prospects right now.

  Up for a quick call this week?

  Ethan

## email_3
subject: last one, PolicyFly
body: |
  Hey Michael,

  Last note from me. If the site's doing its job fine post-NYT, no worries.

  If a faster, easier-to-update one would help you turn that attention into demos, happy to grab 15 minutes.

  Ethan

## fact_check
result: pass
checked_at: 2026-10-19
notes:
- "NYT piece on AI and the future of work, 2026-07-29" -> re-fetched https://policyfly.com, confirms the dated news item "Jul 29, 2026: PolicyFly was featured in The New York Times on AI and the future of work" exactly as cited; not claiming the article's content beyond the fact of the feature
- "growth platform for specialty insurers" / product description -> re-fetched https://policyfly.com, matches verbatim
- "$7M seed... Bain Capital Ventures... YC participation" -> verified against seedtable.com and trysignalbase.com, both cite the same round and investors; dated 2024-07-30, not used as a fresh trigger, only background context
- "6.2 seconds on mobile" -> verified against scripts/pagespeed_check.py output (performance 64, LCP display "6.2 s"); raw fact about the lead's own site only, no comparative claim to Polymer's benchmark
- Track/proof consistency: new_build_track lead, Fispoke case study (track: new_build) used only for scope description ("moved them off a slow, no-CMS site onto a full Webflow build"), no numbers/results borrowed, no vertical-fit claim made (fintech != insurtech, not claimed as a match)
- No pricing/tier named, CTA is the intro call only, no booking link
- voice_check.py: clean on all three emails (python scripts/voice_check.py, no banned words/clichés/openers/em dashes)
- word counts: email_1 79w, email_2 68w, email_3 35w - all within band
- sign-off: plain "Ethan" (startups)
- hot tier: per pipeline/daily-run.md step 4, email 1 requires human review before any push - goes into the "Hot tier drafts" PR, not auto-pushed
