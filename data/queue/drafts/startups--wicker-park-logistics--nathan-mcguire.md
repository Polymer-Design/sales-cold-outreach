---
contact_name: Nathan McGuire
contact_title: Co-Founder & Chief Operating Officer
organization: Wicker Park Logistics
icp: startups
apollo_contact_id: 66ff846093a365000133e9a7
score_total: 70
tier: warm
status: ready
drafted_at: 2026-10-19
---

## research
- wickerparklogistics.com runs on Webflow (source: scripts/platform_detect.py --url https://wickerparklogistics.com --icp startups, run 2026-10-19)
- Wicker Park Logistics' own blog post, dated 2026-08-27, is headlined "Cross-Border Freight Sees Nearly 25% Gain" (source: WebFetch https://wickerparklogistics.com, 2026-10-19)
- wickerparklogistics.com mobile load: performance 48/100, LCP 11.4s (source: scripts/pagespeed_check.py --url https://wickerparklogistics.com --strategy mobile, run 2026-10-19)
- Wicker Park Logistics is a Chicago-based 3PL/digital freight broker offering truckload, LTL, flatbed, bulk, warehousing, managed services, and cross-border service to Canada and Mexico (source: WebFetch https://wickerparklogistics.com, 2026-10-19)
- Careers page (wpl-careers) lists no open roles, no marketing or design/frontend hire found (source: WebFetch https://wickerparklogistics.com, 2026-10-19)

## proof_used
- knowledge/business-overview.md#monthly-plans (plain capability statement - subscription_track has no approved case study yet per knowledge/case-studies/README.md)

## email_1
subject: the cross-border number, and your load time
body: |
  Hey Nathan,

  Nearly 25% gain in cross-border freight, per your own blog post last month, that's the kind of number that should be easy to find on wickerparklogistics.com.

  Right now the site takes 11.4 seconds to load on a phone, even though it's already built on Webflow, the right platform, just not running at its best.

  We run ongoing Webflow work for teams like yours: speed fixes, new pages, and updates, handled by the same team every month.

  Worth 15 minutes?

  Ethan

## email_2
subject: Webflow, just not tuned
body: |
  Hey Nathan,

  Being on Webflow already puts Wicker Park ahead of a lot of 3PLs still stuck on a DIY builder. The gap right now is speed and upkeep, not the platform itself.

  Our monthly plans cover exactly that: performance fixes, new pages as the cross-border and bulk lines grow, small automations, no new project to kick off each time.

  Up for a quick call this week?

  Ethan

## email_3
subject: last one, Wicker Park
body: |
  Hey Nathan,

  Last note from me. If the site's fast enough and keeping up fine, no worries at all.

  If a dedicated team on it would help while freight volume's climbing, happy to grab 15 minutes.

  Ethan

## fact_check
result: pass
checked_at: 2026-10-19
notes:
- "runs on Webflow" -> verified via scripts/platform_detect.py --url https://wickerparklogistics.com --icp startups, returns platform: webflow, track: subscription_track
- "Cross-Border Freight Sees Nearly 25% Gain, dated 2026-08-27" -> re-fetched https://wickerparklogistics.com, confirms the blog headline and date exactly as cited
- "11.4 seconds on mobile" -> verified against scripts/pagespeed_check.py output (performance 48, LCP display "11.4 s"); raw fact about the lead's own site only, no comparative claim to Polymer's benchmark
- Track/proof consistency: subscription_track lead, pitched "ongoing Webflow work"/"monthly plans" per knowledge/business-overview.md Monthly Plans section, no case study borrowed (subscription has no approved case study yet), no specific tier or price named
- No pricing named, CTA is the intro call only, no booking link
- voice_check.py: clean on all three emails
- word counts: email_1 82w, email_2 68w, email_3 37w - all within the 50-85 band
- sign-off: plain "Ethan" (startups)
- checked against other drafts in this run for repeated sentence shapes - distinct hooks and structure, not templated
