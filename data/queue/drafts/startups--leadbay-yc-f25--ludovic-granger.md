---
contact_name: Ludovic Granger
contact_title: Co-founder & CEO
organization: Leadbay (YC F25)
icp: startups
apollo_contact_id: 66f165a731188600017cf8ef
score_total: 72
tier: warm
status: pushed
drafted_at: 2026-10-19
pushed_at: 2026-10-19T18:54:55Z
---

## research
- Leadbay closed a $4.3M seed round led by Y Combinator with Rebel Ventures, Roosh Ventures, Inovexus Ventures, TS Ventures, and Alumni Ventures participating, announced ~2026-05-19/25 (source: vestbee.com/blog/articles/leadbay-raises-4-3-m, pulse2.com/leadbay-4-3-million-raised-to-qualify-digitally-scarce-smb-leads, checked 2026-10-19)
- Leadbay qualifies sales leads in data-poor markets (construction, hospitality, professional services, manufacturing, healthcare) and ships an MCP-based workspace so the leads land inside Claude, ChatGPT, and Copilot directly (source: WebFetch https://leadbay.ai, 2026-10-19)
- leadbay.ai is a hand-built Astro site (confirmed via "generator: Astro v6.1.9" meta tag), not a DIY builder - platform_detect.py doesn't recognize Astro yet (source: curl https://leadbay.ai, 2026-10-19; github issue #12)
- leadbay.ai mobile PageSpeed: performance 47/100, LCP 15.5s - a real, citable load-time problem on the lead's own site (source: scripts/pagespeed_check.py --url https://leadbay.ai --strategy mobile, 2026-10-19)
- 27 employees per Apollo org enrichment, founded 2023 (source: data/leads/index.jsonl org_data)

## proof_used
- knowledge/business-overview.md#monthly-plans (plain capability statement - subscription_track has no approved case study yet)

## email_1
subject: leadbay.ai's 15 second load
body: |
  Hey Ludovic,

  Congrats on the $4.3M seed. A lead-qualification company living inside Claude and ChatGPT is a sharp place to be right now.

  Your homepage takes 15.5 seconds to load on mobile, which is rough for a product built around speed and data quality.

  We run ongoing site work for funded teams so performance like that gets fixed and stays fixed, without pulling an engineer off the actual product.

  Worth 15 minutes?

  Ethan

## email_2
subject: MCP workspace, slow homepage
body: |
  Hey Ludovic,

  The pitch for Leadbay's MCP workspace is speed: leads show up where your customers already work. The homepage that sells that pitch loads in 15+ seconds on a phone.

  That gap is exactly what our monthly plans close for teams who'd rather not staff it internally.

  Open to chatting this week?

  Ethan

## email_3
subject: last one, Leadbay
body: |
  Hey Ludovic,

  Last note from me. If the load time's already on someone's radar internally, no worries at all.

  If it's not, happy to grab 15 minutes and get it handled before it costs you a demo.

  Ethan

## fact_check
result: pass
checked_at: 2026-10-19
notes:
- "$4.3M seed... Y Combinator, Rebel/Roosh/Inovexus/TS/Alumni Ventures" -> verified against vestbee.com and pulse2.com, both cite the same round, amount, and investor list, dated ~2026-05-19/25
- "qualifies sales leads in data-poor markets... MCP-based workspace... Claude, ChatGPT, Copilot" -> re-fetched https://leadbay.ai, matches the site's own description verbatim
- "Astro site" -> re-confirmed via curl https://leadbay.ai, "generator: Astro v6.1.9" meta tag present; platform_detect.py doesn't detect Astro (github issue #12), overriding stale new_build_track to subscription_track per business-overview.md
- "47/100 performance, 15.5s LCP" -> re-ran scripts/pagespeed_check.py --url https://leadbay.ai --strategy mobile, matches exactly; raw fact about the lead's own site, no comparative claim to Polymer's benchmark
- Track/proof consistency: subscription_track lead, pitched "ongoing site work" / "monthly plans" per business-overview.md Monthly Plans section - no case study borrowed, no tier/price named
- voice_check.py: clean on all three emails
- word counts: email_1 73w, email_2 54w, email_3 38w - all within band
- sign-off: plain "Ethan"
- cohesion check against the other 5 drafts in today's batch: same funding+PageSpeed structure appears in Corvera/Mercura/LegalOS too, but the specific irony (MCP speed pitch vs. slow homepage) and numbers are unique to Leadbay, not interchangeable
