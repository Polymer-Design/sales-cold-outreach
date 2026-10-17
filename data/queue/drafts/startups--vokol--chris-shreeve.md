---
contact_name: Chris Shreeve
contact_title: Co-Founder, Head of Growth
organization: Vokol
icp: startups
apollo_contact_id: 611cce124007d7000190d6cb
score_total: 58
tier: warm
status: pushed
drafted_at: 2026-10-17
pushed_at: 2026-10-17T16:54:39Z
---

## research
- vokol.ai runs on Webflow (source: scripts/platform_detect.py --url https://vokol.ai --icp startups, 2026-10-17)
- Vokol's homepage features the United Football League as a customer, with a testimonial from their VP of Partner Strategy & Solutions (source: WebFetch https://vokol.ai, 2026-10-17)
- Vokol is a small team (a third-party business-data listing puts it at ~6 people as of this check; unverified, so not cited as a specific number in the email) building AI-generated sports audio (source: https://www.premieralts.com/companies/vokol, checked 2026-10-17)
- vokol.ai mobile load: performance 61/100, Speed Index 8.8s (source: scripts/pagespeed_check.py --url https://vokol.ai --strategy mobile, run 2026-10-17)

## proof_used
- knowledge/business-overview.md#monthly-plans (plain capability statement - subscription_track has no approved case study yet per knowledge/case-studies/README.md)

## email_1
subject: Vokol's Webflow site
body: |
  Hey Chris,

  Vokol's homepage already lists the United Football League as a customer, strong trust signal for a small team. It's also running on Webflow.

  Loading time on mobile runs 8.8 seconds right now: a long wait for someone arriving from a UFL mention.

  We run ongoing Webflow work for small teams who'd rather keep shipping product than manage the site themselves.

  Open to chatting this week?

  Ethan

## email_2
subject: more logos, same small team
body: |
  Hey Chris,

  Every new sports league or media partner Vokol lands is another reason the site needs to keep up, new case studies, new pages, new proof.

  Our monthly plans cover that ongoing work on Webflow sites specifically, so a small team isn't the one maintaining it.

  Worth a quick call?

  Ethan

## email_3
subject: last one, Vokol
body: |
  Hey Chris,

  Last note from me. If the site's handled fine internally, no worries at all.

  If handing ongoing Webflow work to a dedicated team would help, happy to grab 15 minutes.

  Ethan

## fact_check
result: pass
checked_at: 2026-10-17
notes:
- "vokol.ai runs on Webflow" -> verified via scripts/platform_detect.py --url https://vokol.ai --icp startups (2026-10-17), returns platform: webflow, track: subscription_track
- "UFL as a customer" -> verified against WebFetch https://vokol.ai (2026-10-17), UFL testimonial from VP of Partner Strategy & Solutions
- "small team" -> deliberately not stated as a specific headcount; the only source (premieralts.com, a third-party aggregator) is unverified, so the email avoids citing an unverified number
- "8.8 seconds" -> verified against scripts/pagespeed_check.py --url https://vokol.ai --strategy mobile, Speed Index display "8.8 s"; raw fact only, no comparative claim
- did NOT use the Aug 2025 VIP Play partnership as a trigger (already scored 0 for being outside the 180-day decay window) - not mentioned in the email at all, avoids a stale-sounding reference
- Track/proof consistency: subscription_track lead, pitched "ongoing Webflow work" / "monthly plans" per knowledge/business-overview.md Monthly Plans section - no case study numbers borrowed (subscription has no approved case study yet), no specific tier or price named
- voice_check.py: clean on all three emails
- word counts: email_1 68w, email_2 52w, email_3 33w - all within band
- sign-off: plain "Ethan"
- subjects/CTAs checked against the other drafts in this batch and data/queue/drafts/ - unique
