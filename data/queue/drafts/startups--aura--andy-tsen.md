---
contact_name: Andy Tsen
contact_title: Cofounder and CEO
organization: Aura
icp: startups
apollo_contact_id: 64ca8121fb936f0001172a38
score_total: 65
tier: warm
status: ready
drafted_at: 2026-10-19
---

## research
- Ramen (ramenvr.com) builds AI agents for interactive 3D/game development; Aura is its agent product, built for both Unreal and Unity engines (source: WebFetch https://ramenvr.com, 2026-10-19)
- Ramen acquired Coplay, an AI tool for Unity developers, announced ~2026-03-16 (source: CB Insights news item via WebSearch, https://www.cbinsights.com/company/ramen-vr) - ~7 months old as of 2026-10-19, past the 180-day scoring window; noted here as background only, not claimed as a fresh trigger
- Aura 1.0 launched as an AI development agent for Unity and Unreal per a Business Wire release; exact launch date unconfirmed (source: https://www.01net.it/aura-1-0-launches-today-pushing-the-frontier-of-agentic-ai-in-game-development/)
- Site footer credits Beach.Studio as the website's designer (source: WebFetch https://ramenvr.com, 2026-10-19)
- Platform detected as Webflow -> subscription_track (source: scripts/platform_detect.py --url https://ramenvr.com --icp startups, run 2026-10-19)
- ramenvr.com mobile load: performance 61/100, LCP 27.9s (source: scripts/pagespeed_check.py --url https://ramenvr.com --strategy mobile, run 2026-10-19)

## proof_used
- knowledge/business-overview.md#monthly-plans (subscription_track has no approved case study yet; plain capability statement only, per the "no proof yet, write without proof" rule)

## email_1
subject: Aura's 28-second homepage
body: |
  Hey Andy,

  Aura is Ramen's pitch to studios that their next build should run on AI agents instead of hand coding everything, but ramenvr.com takes almost 28 seconds to load on a phone.

  That's a strange first impression for a company selling speed.

  We run ongoing Webflow support for growing teams, so a site built well doesn't quietly fall behind while the product keeps shipping.

  Worth 15 minutes?

  Ethan

## email_2
subject: the Beach.Studio credit
body: |
  Hey Andy,

  Whoever built ramenvr.com cared about the craft, Beach.Studio gets a credit right in the footer for the design.

  A site that deliberate deserves someone keeping it current while Ramen ships new agents and products, not sitting untouched between projects.

  Our monthly plans cover exactly that: ongoing Webflow updates from the same team, no new project kickoff required.

  Up for a quick call this week?

  Ethan

## email_3
subject: last one, Aura
body: |
  Hey Andy,

  Last note from me here.

  If the site's keeping up fine while Aura ships, no worries at all.

  If it'd help to have someone on it full time, happy to grab 15 minutes.

  Ethan

## fact_check
result: pass
checked_at: 2026-10-19
notes:
- "Ramen builds AI agents for interactive 3D/game development, Aura for Unreal and Unity" -> matches WebFetch of ramenvr.com verbatim
- "Beach.Studio credited as website designer in the footer" -> confirmed via WebFetch of ramenvr.com
- Coplay acquisition (~2026-03-16) and Aura 1.0 launch are NOT presented as fresh/recent triggers in the copy (no "just" language applied to either) - only used as background color, consistent with both being outside or unconfirmed within the 180-day window
- "28 seconds to load on a phone" -> verified against scripts/pagespeed_check.py output (LCP display "27.9 s"); raw fact about the lead's own site, no comparative claim
- Track/proof consistency: subscription_track lead (Webflow confirmed), pitched the monthly plan only, no rebuild language, no case study borrowed (none exists for this track yet) - plain capability statement from knowledge/business-overview.md#monthly-plans
- No pricing/tier number named, single CTA per email, no booking link
- scripts/voice_check.py: clean, no banned words/phrases/em dashes
- word counts: email_1 69w, email_2 67w, email_3 36w - all within band
- sign-off: plain "Ethan" (startups)
- checked against this run's other drafts for repeated sentence shapes - distinct hooks and structure; site-speed stat used once (email_1 only), email_2 uses a different observation
