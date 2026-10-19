---
contact_name: Joseph Perrotta
contact_title: CEO & Co-Founder
organization: Invertix (YC F26)
icp: startups
apollo_contact_id: 66475e8e0701c60001fb65dd
score_total: 65
tier: warm
status: ready
drafted_at: 2026-10-19
---

## research
- Invertix raised a EUR1.7M (~$1.97M) pre-seed round led by Vireo Ventures with Italian Founders Fund and energy/AI angels participating, closed 2026-05-19 (source: startbase.com/news/ki-mitarbeiter-fuer-die-energiewende-erhalten-17-mio-euro-invertix, mercomcapital.com/invertix-raises-2-million-for-ai-based-renewable-asset-tools, checked 2026-10-19)
- Invertix builds AI agents that manage renewable energy assets, already monitoring 1.8GW+ of solar capacity with plans to expand into wind, battery storage, and grid management (source: WebFetch https://invertix.ai, 2026-10-19)
- invertix.ai is a custom-built Vite/React single-page app, not a DIY builder - confirmed via /assets/index-*.js and /assets/vendor-*.js bundle naming; platform_detect.py doesn't recognize this yet (source: curl -L https://invertix.ai, 2026-10-19; github issue #12)
- invertix.ai mobile PageSpeed: performance 77/100, LCP 3.6s - solid, not a speed complaint (source: scripts/pagespeed_check.py --url https://invertix.ai --strategy mobile, 2026-10-19)
- No careers/jobs page found (nav is Our team/Resources/Request a demo only) (source: WebFetch https://invertix.ai, 2026-10-19)

## proof_used
- knowledge/business-overview.md#monthly-plans (plain capability statement - subscription_track has no approved case study yet)

## email_1
subject: invertix.ai managing 1.8GW
body: |
  Hey Joseph,

  Congrats on the EUR1.7M pre-seed. Managing 1.8GW of solar with AI agents, with wind and grid management next, is a lot to be building at once.

  As Invertix adds more asset classes and markets, the site's going to need new pages and proof points on a pace that competes with actual product work.

  We run a monthly plan for exactly that, so a small technical team isn't the one maintaining the site between releases.

  Worth 15 minutes?

  Ethan

## email_2
subject: wind and grid management next
body: |
  Hey Joseph,

  Every new asset class Invertix expands into, wind, battery storage, grid management, is another section of the site that needs to explain it clearly and fast.

  That's the ongoing work our monthly plans cover, so it's not sitting on an engineer's backlog behind the actual platform.

  Open to chatting this week?

  Ethan

## email_3
subject: last one, Invertix
body: |
  Hey Joseph,

  Last note from me. If the site's keeping pace fine internally, no worries.

  If a dedicated team for that would help as you expand, happy to grab 15 minutes.

  Ethan

## fact_check
result: pass
checked_at: 2026-10-19
notes:
- "EUR1.7M pre-seed... Vireo Ventures, Italian Founders Fund" -> verified against startbase.com and mercomcapital.com, both cite the same round, amount, and investors, dated 2026-05-19
- "AI agents managing 1.8GW+ solar... wind, battery storage, grid management next" -> re-fetched https://invertix.ai, matches the site's own description
- "Vite/React SPA" -> re-confirmed via curl -L https://invertix.ai, /assets/index-*.js and /assets/vendor-*.js bundle naming present; platform_detect.py doesn't detect this (github issue #12), overriding stale new_build_track to subscription_track per business-overview.md's custom-code routing
- "77/100 performance, 3.6s LCP" -> re-ran scripts/pagespeed_check.py --url https://invertix.ai --strategy mobile, matches; used as a neutral/positive fact (site performs fine), not a complaint
- "No careers page" -> re-fetched https://invertix.ai, nav confirmed as Our team/Resources/Request a demo only
- Track/proof consistency: subscription_track lead, pitched "a monthly plan" / "ongoing work" per business-overview.md - no case study borrowed, no tier/price named
- voice_check.py: clean on all three emails
- word counts: email_1 80w, email_2 54w, email_3 32w - all within band
- sign-off: plain "Ethan"
