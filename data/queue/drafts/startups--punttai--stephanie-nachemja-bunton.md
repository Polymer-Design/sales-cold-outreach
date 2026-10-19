---
contact_name: Stephanie Nachemja-Bunton
contact_title: Founder & COO
organization: PunttAI
icp: startups
apollo_contact_id: 601133645b73dd00015fb40b
score_total: 60
tier: warm
status: pushed
drafted_at: 2026-10-19
pushed_at: 2026-10-19T19:30:38Z
---

## research
- Puntt AI builds AI agents that review packaging, ads, and marketing collateral against brand rules and regional regulations, flagging issues inline inside tools like Wrike, Asana, and Figma (source: WebFetch https://puntt.ai, 2026-10-19)
- Site claims 120+ enterprise brands, a 40% rework reduction in the first 90 days, and 374K manual review hours automated; customer logos include Johnson & Johnson, Kenvue, Danone, and Coinbase (source: WebFetch https://puntt.ai, 2026-10-19)
- Kenvue testimonial from Ashley Stevens, Director, Global Brand Design: "Puntt helped our team move from week-long reviews to same-day turnaround." (source: WebFetch https://puntt.ai, 2026-10-19)
- org_data from Apollo enrichment: 18 employees, founded 2023, industry "information technology & services" (source: Apollo people-search enrichment, captured at ingestion 2026-10-19)
- Platform detected as Webflow -> subscription_track (source: scripts/platform_detect.py --url https://puntt.ai --icp startups, run 2026-10-19)
- puntt.ai mobile load: performance 68/100, LCP 5.3s (source: scripts/pagespeed_check.py --url https://puntt.ai --strategy mobile, run 2026-10-19)

## proof_used
- knowledge/business-overview.md#monthly-plans (subscription_track has no approved case study yet; plain capability statement only)

## email_1
subject: same-day reviews, slow load
body: |
  Hey Stephanie,

  Puntt turned Kenvue's week-long compliance reviews into same-day turnarounds, but puntt.ai itself takes 5.3 seconds to load on a phone before anyone even sees that pitch.

  That's a strange gap for a company selling speed to brands like Danone and Kenvue.

  Since Puntt's already running on Webflow, we do ongoing updates and builds for growing teams on a monthly plan, no new project kickoff needed.

  Worth 15 minutes?

  Ethan

## email_2
subject: the Webflow choice
body: |
  Hey Stephanie,

  120+ brands trust Puntt to catch issues before they reach market, from Danone to Coinbase, real rigor built into the product itself.

  Webflow was the right call for the site, but a tool built for speed needs its own front end kept just as current.

  Our monthly plans do exactly that: ongoing Webflow updates from the same team, no new project needed.

  Up for a quick call this week?

  Ethan

## email_3
subject: no pressure, Puntt
body: |
  Hey Stephanie,

  I won't keep pushing on this.

  Puntt's clearly doing enterprise-grade work already, so if the site's not on your radar right now, no problem.

  If it is, happy to find 15 minutes whenever works.

  Ethan

## fact_check
result: pass
checked_at: 2026-10-19
notes:
- "120+ enterprise brands, 40% rework reduction, 374K hours automated, Danone/Kenvue/Coinbase" -> matches WebFetch of puntt.ai verbatim
- "week-long reviews to same-day turnaround" -> confirmed verbatim as the Kenvue (Ashley Stevens) testimonial on puntt.ai; "compliance reviews" in email_1 is a fair paraphrase of the product's stated brand-rules/regulation-review scope, not an invented detail
- "5.3 seconds to load on a phone" -> verified against scripts/pagespeed_check.py output (LCP display "5.3 s", performance 68); raw fact about the lead's own site, no comparative claim
- Track/proof consistency: subscription_track lead (Webflow confirmed), pitched the monthly plan only, no rebuild language, no case study borrowed (none exists for this track yet)
- No pricing/tier number named, single CTA per email, no booking link
- scripts/voice_check.py: clean, no banned words/phrases/em dashes ("enterprise-grade" checked against config/voice-bans.yaml - not listed)
- word counts: email_1 71w, email_2 72w, email_3 37w - all within band
- sign-off: plain "Ethan" (startups)
- checked against this run's other drafts - distinct hook (practice-what-you-preach speed angle) and closer phrasing from Lavior/Aura/Sparrow in this same batch
