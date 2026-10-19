---
contact_name: Christopher Kong
contact_title: CEO & Co-Founder
organization: Corvera (YC W26)
icp: startups
apollo_contact_id: 6108fd122201d20001d77736
score_total: 66
tier: warm
status: pushed
drafted_at: 2026-10-19
pushed_at: 2026-10-19T18:55:07Z
---

## research
- Corvera raised a $4.2M seed round led by 6 Degrees Capital with 20+ VC and angel investors participating, announced May 2026 following its Y Combinator Winter 2026 batch (source: crowdfundinsider.com/2026/05/278068-agentic-supply-chain-management-firm-corvera-raises-4-2m-round, vestbee.com/blog/articles/corvera-lands-4-2-m, checked 2026-10-19)
- Corvera is an AI sales agent for CPG brands, connecting distributor/retailer data into a ranked daily list of sales actions, built by ex-Google data engineers per its own site (source: WebFetch https://corvera.ai, 2026-10-19)
- corvera.ai is a custom Next.js site hosted on Vercel, not a DIY builder - confirmed via /_next/static/ asset paths and a Vercel deployment id; platform_detect.py doesn't recognize this yet (source: curl https://corvera.ai, 2026-10-19; github issue #12)
- corvera.ai mobile PageSpeed: performance 30/100, LCP 7.6s, Speed Index 18.3s - a real, citable load-time problem (source: scripts/pagespeed_check.py --url https://corvera.ai --strategy mobile, 2026-10-19)
- No careers/jobs page found anywhere on the site (nav is Team/News/Blog/Case Studies/FAQ/Docs/Changelog only) (source: WebFetch https://corvera.ai, 2026-10-19)

## proof_used
- knowledge/business-overview.md#monthly-plans (plain capability statement - subscription_track has no approved case study yet)

## email_1
subject: corvera.ai's 18 second load
body: |
  Hey Christopher,

  Congrats on the $4.2M seed. Turning distributor and retailer data into a daily action list is a sharp wedge for CPG.

  corvera.ai takes 7.6 seconds to show anything useful on mobile and over 18 seconds to finish loading, which is a tough first impression for a brand you're selling data discipline to.

  We run ongoing site work for funded teams so that gets fixed and stays fixed, without pulling an engineer off the product.

  Worth 15 minutes?

  Ethan

## email_2
subject: the site vs. the pitch
body: |
  Hey Christopher,

  Corvera's whole pitch to CPG brands is speed and discipline in their data. The site that makes that first impression loads in 18+ seconds on a phone.

  Our monthly plans cover exactly that kind of ongoing performance and content work, so it's not competing with your actual product roadmap.

  Up for a quick call this week?

  Ethan

## email_3
subject: last one, Corvera
body: |
  Hey Christopher,

  Last note from me. If the load time's handled internally already, no worries at all.

  If not, happy to grab 15 minutes and get it fixed before it costs you a demo.

  Ethan

## fact_check
result: pass
checked_at: 2026-10-19
notes:
- "$4.2M seed... 6 Degrees Capital, 20+ investors... YC Winter 2026" -> verified against crowdfundinsider.com and vestbee.com, both cite the same round, amount, and YC batch, dated May 2026
- "AI sales agent for CPG brands... distributor/retailer data... ex-Google data engineers" -> re-fetched https://corvera.ai, matches the site's own description
- "Next.js on Vercel" -> re-confirmed via curl https://corvera.ai, /_next/static/ chunks and a Vercel dpl_ deployment id present; platform_detect.py doesn't detect this (github issue #12), overriding stale new_build_track to subscription_track per business-overview.md's Vercel/custom-code routing
- "30/100 performance, 7.6s LCP, 18.3s Speed Index" -> re-ran scripts/pagespeed_check.py --url https://corvera.ai --strategy mobile, matches exactly; raw fact only, no comparative claim
- "No careers page" -> re-fetched https://corvera.ai, nav confirmed as Team/News/Blog/Case Studies/FAQ/Docs/Changelog only
- Track/proof consistency: subscription_track lead, pitched "ongoing site work" / "monthly plans" per business-overview.md - no case study borrowed, no tier/price named
- voice_check.py: clean on all three emails
- word counts: email_1 80w, email_2 59w, email_3 35w - all within band
- sign-off: plain "Ethan"
