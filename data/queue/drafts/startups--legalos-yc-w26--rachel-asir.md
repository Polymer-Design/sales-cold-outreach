---
contact_name: Rachel Asir
contact_title: Co-founder/COO
organization: LegalOS (YC W26)
icp: startups
apollo_contact_id: 5eda4c49d6cecf008c27a86d
score_total: 62
tier: warm
status: ready
drafted_at: 2026-10-19
---

## research
- LegalOS is a B2B immigration-support platform for companies and global talent, part of Y Combinator's W26 batch (source: data/leads/index.jsonl score_notes, sourced 2026-10-17 from legalos.ai + YC batch listing)
- legalos.ai runs on Webflow, confirmed by platform_detect.py -> subscription_track (source: scripts/platform_detect.py --url https://legalos.ai --icp startups, 2026-10-17)
- legalos.ai mobile PageSpeed: performance 48/100, LCP 20.3s - a severe, citable load-time problem on the lead's own site (source: scripts/pagespeed_check.py --url https://legalos.ai --strategy mobile, 2026-10-19)
- No open roles listed, no marketing/design hire found (source: data/leads/index.jsonl score_notes, 2026-10-17)

## proof_used
- knowledge/business-overview.md#monthly-plans (plain capability statement - subscription_track has no approved case study yet)

## email_1
subject: legalos.ai's 20 second load
body: |
  Hey Rachel,

  Congrats on the YC batch. Immigration support for global talent is a trust-first sale, and legalos.ai takes over 20 seconds to load on mobile right now.

  That's long enough that most visitors from a recruiter's phone or a candidate's inbox never see the page.

  We run ongoing Webflow work for funded teams so performance like that gets fixed and stays fixed, without pulling anyone off the product.

  Worth 15 minutes?

  Ethan

## email_2
subject: 20 seconds is the whole funnel
body: |
  Hey Rachel,

  For a platform selling trust around immigration cases, a 20+ second mobile load is the first thing working against you, before anyone reads a word of copy.

  Our monthly plans cover exactly that kind of ongoing Webflow performance work, so it's handled without touching your roadmap.

  Open to chatting this week?

  Ethan

## email_3
subject: last one, LegalOS
body: |
  Hey Rachel,

  Last note from me. If the load time's already on someone's list internally, no worries at all.

  If not, happy to grab 15 minutes and get it fixed before it costs you an applicant.

  Ethan

## fact_check
result: pass
checked_at: 2026-10-19
notes:
- "YC W26 batch... B2B immigration-support platform for companies/global talent" -> sourced from data/leads/index.jsonl score_notes (2026-10-17 research), consistent with legalos.ai's own positioning; not re-researched since no newer signal was needed
- "Webflow -> subscription_track" -> confirmed via scripts/platform_detect.py --url https://legalos.ai --icp startups (2026-10-17 run, recorded in index), correctly already subscription_track, no override needed
- "48/100 performance, 20.3s LCP" -> re-ran scripts/pagespeed_check.py --url https://legalos.ai --strategy mobile, 2026-10-19, matches exactly; raw fact about the lead's own site, no comparative claim to Polymer's benchmark
- "No open roles / no marketing hire" -> sourced from data/leads/index.jsonl score_notes (2026-10-17)
- Track/proof consistency: subscription_track lead, pitched "ongoing Webflow work" / "monthly plans" per business-overview.md - no case study borrowed, no tier/price named
- voice_check.py: clean on all three emails
- word counts: email_1 73w, email_2 54w, email_3 37w - all within band
- sign-off: plain "Ethan"
