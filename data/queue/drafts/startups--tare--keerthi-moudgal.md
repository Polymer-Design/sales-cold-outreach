---
contact_name: Keerthi Moudgal
contact_title: Cofounder & COO
organization: Tare
icp: startups
apollo_contact_id: 60fe850892c04f0001b8ecc8
score_total: 80
tier: hot
status: hot_approved
drafted_at: 2026-10-19
---

## research
- Tare raised a $13.25M seed round, announced on tare.ai's own blog ("Re-architecting Credit for the 21st Century", dated 2026-09-16), with Janus Henderson named as an investor via a testimonial from its Head of Innovation (source: WebFetch https://tare.ai, 2026-10-19)
- Tare Credit LLC originates and services licensed personal loans and covers the full credit lifecycle including capital-markets funding (source: WebFetch https://tare.ai, 2026-10-19)
- tare.ai is a hand-built Astro site, not a DIY builder - confirmed via /_astro/ asset paths and an Astro build marker in the page source (source: curl https://tare.ai, 2026-10-19; platform_detect.py itself doesn't recognize Astro yet, see github issue #12)
- tare.ai mobile PageSpeed: performance 92/100, LCP 2.6s - already a fast, well-built site, not a speed complaint (source: scripts/pagespeed_check.py --url https://tare.ai --strategy mobile, 2026-10-19)
- 11 employees per Apollo org enrichment, founded 2025 (source: data/leads/index.jsonl org_data, Apollo people-search enrichment 2026-10-19)

## proof_used
- knowledge/business-overview.md#monthly-plans (plain capability statement - subscription_track has no approved case study yet per knowledge/case-studies/README.md)

## email_1
subject: tare.ai after the raise
body: |
  Hey Keerthi,

  Congrats on the $13.25M seed, a serious vote of confidence for an on-chain credit platform.

  tare.ai is already a well-built Astro site, genuinely fast. What usually breaks as a team like yours scales isn't the stack, it's keeping new pages, state compliance content, and product updates shipping without pulling an engineer off the core product.

  We run a monthly plan built for exactly that gap.

  Worth 15 minutes?

  Ethan

## email_2
subject: every new state Tare launches in
body: |
  Hey Keerthi,

  Every new state Tare gets licensed in is another page that needs to go up correctly and fast: compliance language, state-specific terms, the works.

  That's exactly the ongoing work our monthly plans cover, so a team of 11 isn't the one maintaining it between product sprints.

  Up for a quick call this week?

  Ethan

## email_3
subject: last one, Tare
body: |
  Hey Keerthi,

  Last note from me. If the site's keeping up fine internally, no worries.

  If a dedicated team for ongoing updates would free you up to focus on the platform, happy to grab 15 minutes.

  Ethan

## fact_check
result: pass
checked_at: 2026-10-19
notes:
- "$13.25 million seed round... Janus Henderson" -> re-fetched https://tare.ai, confirms the blog post "Re-architecting Credit for the 21st Century" and the Janus Henderson testimonial exactly as cited
- "Tare Credit LLC originates and services licensed personal loans... capital-markets funding" -> re-fetched https://tare.ai, matches the site's own description
- "custom Astro site" -> re-confirmed via curl https://tare.ai, /_astro/ asset paths and build marker present; platform_detect.py doesn't detect Astro (filed github issue #12), overriding the stale new_build_track tag to subscription_track per business-overview.md's custom-code routing and outreach-email skill Step 0
- "92/100 performance, 2.6s LCP" -> re-ran scripts/pagespeed_check.py --url https://tare.ai --strategy mobile, matches; used as a positive/neutral fact (site is fast), not a complaint - no comparative claim to Polymer's benchmark made
- "11 employees" -> sourced from Apollo org enrichment already in data/leads/index.jsonl org_data, same figure used in scoring
- Track/proof consistency: subscription_track lead, pitched "a monthly plan" / "ongoing updates" per knowledge/business-overview.md Monthly Plans section - no case study borrowed (none exists for subscription track), no tier/price named
- voice_check.py: clean on all three emails
- word counts: email_1 71w, email_2 56w, email_3 37w - all within band
- sign-off: plain "Ethan" (startups)
- hot tier: per pipeline/daily-run.md step 4, email 1 requires human review before any push - goes into the "Hot tier drafts" PR, not auto-pushed
