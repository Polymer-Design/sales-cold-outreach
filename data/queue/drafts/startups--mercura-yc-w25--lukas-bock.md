---
contact_name: Lukas Bock
contact_title: Co-Founder & CEO
organization: Mercura (YC W25)
icp: startups
apollo_contact_id: 5e6b5d84bdcb2a00017f4cd0
score_total: 63
tier: warm
status: pushed
drafted_at: 2026-10-19
pushed_at: 2026-10-19T18:55:32Z
---

## research
- Mercura closed an oversubscribed EUR1.8M seed round led by TQ Ventures and SignalFire with Y Combinator and angels participating, reported January 2026 (source: munich-startup.de/en/132383/mercura-secures-e1-8-million, checked 2026-10-19)
- Mercura turns emails, bills of quantities, tenders, and purchase orders into ERP-ready quotes and orders for technical distributors and manufacturers; the site states it's DIN ISO/IEC 27001 & 27018 certified and names 80+ customers (source: WebFetch https://mercura.ai, 2026-10-19)
- mercura.ai is built on Framer (confirmed via a "Made in Framer" HTML comment and Framer generator meta tag), a modern hosted builder, not a legacy DIY platform (source: curl https://mercura.ai, 2026-10-19; github issue #12)
- mercura.ai mobile PageSpeed: performance 66/100, LCP 9.3s - a real, citable load-time issue (source: scripts/pagespeed_check.py --url https://mercura.ai --strategy mobile, 2026-10-19)
- No careers/jobs page found (nav is success stories/products/solutions/integrations/contact only) (source: WebFetch https://mercura.ai, 2026-10-19)

## proof_used
- knowledge/business-overview.md#monthly-plans (plain capability statement - subscription_track has no approved case study yet)

## email_1
subject: mercura.ai's 9 second load
body: |
  Hey Lukas,

  Congrats on the EUR1.8M seed. Turning quotes and purchase orders into ERP-ready data automatically is a real problem to solve for distributors.

  mercura.ai takes 9.3 seconds to load on mobile, which works against a product that's selling speed as the whole point.

  We run ongoing site work for funded teams so that gets fixed and stays fixed, without an engineer picking it up between releases.

  Worth 15 minutes?

  Ethan

## email_2
subject: ISO certified, slow homepage
body: |
  Hey Lukas,

  Mercura leads with ISO 27001/27018 certification and 80+ customers, real trust signals. The homepage carrying that message loads in over 9 seconds on a phone.

  Our monthly plans cover that gap for teams who'd rather not staff it internally.

  Up for a quick call this week?

  Ethan

## email_3
subject: last one, Mercura
body: |
  Hey Lukas,

  Last note from me. If the load time's already on someone's radar internally, no worries at all.

  If not, happy to grab 15 minutes and get it handled before it costs you a customer.

  Ethan

## fact_check
result: pass
checked_at: 2026-10-19
notes:
- "EUR1.8M oversubscribed seed... TQ Ventures, SignalFire, YC" -> verified against munich-startup.de, dated January 2026
- "turns emails, BOQs, tenders, POs into ERP-ready quotes/orders... DIN ISO/IEC 27001 & 27018 certified... 80+ customers" -> re-fetched https://mercura.ai, matches the site's own description verbatim
- "Framer" -> re-confirmed via curl https://mercura.ai, "<!-- Made in Framer -->" comment and Framer generator meta tag present; platform_detect.py doesn't detect Framer (github issue #12) - treated as a modern hosted builder like Webflow, not a legacy DIY platform, per the same subscription-track logic business-overview.md applies to Webflow (judgment call flagged in issue #12 for Ethan to confirm)
- "66/100 performance, 9.3s LCP" -> re-ran scripts/pagespeed_check.py --url https://mercura.ai --strategy mobile, matches exactly; raw fact only, no comparative claim
- "No careers page" -> re-fetched https://mercura.ai, nav confirmed as success stories/products/solutions/integrations/contact only
- Track/proof consistency: subscription_track lead, pitched "ongoing site work" / "monthly plans" per business-overview.md - no case study borrowed, no tier/price named
- voice_check.py: clean on all three emails
- word counts: email_1 71w, email_2 49w, email_3 37w - all within band
- sign-off: plain "Ethan"
