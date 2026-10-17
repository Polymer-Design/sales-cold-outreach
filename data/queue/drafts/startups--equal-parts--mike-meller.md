---
contact_name: Mike Meller
contact_title: Co-Founder, COO
organization: Equal Parts
icp: startups
apollo_contact_id: 65b23d3541fe430001f987c3
score_total: 64
tier: warm
status: pushed
drafted_at: 2026-10-17
pushed_at: 2026-10-17T16:54:39Z
---

## research
- equalparts.ai runs on Webflow (source: scripts/platform_detect.py --url https://equalparts.ai --icp startups, 2026-10-17)
- Equal Parts' own blog, dated 2026-10-07, is headlined "Three Acquisitions. Three Weeks. 10 and Counting." - on top of earlier 2026 acquisitions (Florida/Independence 9/25, ProSource 9/18, D3 Insurance Group 6/17) (source: WebFetch https://equalparts.ai, 2026-10-17)
- $22.6M Series A led by Inspired Capital at a $100M post-money valuation (source: https://www.davispolk.com/experience/equal-parts-22-6-million-series-financing-round) - dated outside the lead-scoring 180-day trigger window as of 2026-10-17, not used as a fresh trigger, cited here only as a factual funding reference
- equalparts.ai mobile load: performance 31/100, LCP 14.9s (source: scripts/pagespeed_check.py --url https://equalparts.ai --strategy mobile, run 2026-10-17)
- Site messaging: "top-5 insurance distributor within the next decade" (source: WebFetch https://equalparts.ai, 2026-10-17)

## proof_used
- knowledge/business-overview.md#monthly-plans (plain capability statement - subscription_track has no approved case study yet per knowledge/case-studies/README.md)

## email_1
subject: three acquisitions, one Webflow site
body: |
  Hey Mike,

  Equal Parts picked up three agencies in three weeks this month, "10 and counting" by your own count. Each one lands on the same Webflow site: new pages, new logos, new messaging, fast.

  Loading that site on mobile right now takes 14.9 seconds, a rough welcome for whoever's checking you out mid-acquisition.

  We run ongoing Webflow work for teams growing this fast: a dedicated team keeping the site current, not a one-time build.

  Open to a quick look at it together?

  Ethan

## email_2
subject: keeping pace with the acquisitions
body: |
  Hey Mike,

  Every new agency Equal Parts brings on is another page, another team to fold into the brand, another thing competing for whoever's maintaining the Webflow site in-house.

  That's exactly what our monthly plans are for: ongoing pages, edits, and small builds, handled by the same team every month, no new project to kick off each time.

  Want to grab 15 minutes?

  Ethan

## email_3
subject: last one, Equal Parts
body: |
  Hey Mike,

  Last note from me. If the site's keeping up fine as you add agencies, no worries at all.

  If it'd help to have a dedicated team on it while you're acquiring this fast, glad to grab 15 minutes.

  Ethan

## fact_check
result: pass
checked_at: 2026-10-17
notes:
- "equalparts.ai runs on Webflow" -> verified via scripts/platform_detect.py --url https://equalparts.ai --icp startups (2026-10-17), returns platform: webflow, track: subscription_track
- "three agencies in three weeks... 10 and counting" -> re-fetched https://equalparts.ai (2026-10-17), confirms blog headline dated 10.7.2026: "Three Acquisitions. Three Weeks. 10 and Counting."
- "$22.6M Series A... Inspired Capital... $100M post-money" -> verified against https://www.davispolk.com/experience/equal-parts-22-6-million-series-financing-round; not used as a fresh trigger (already >180 days old per scoring), only as background context, no claim that it's recent
- "14.9 seconds to load on mobile" -> verified against scripts/pagespeed_check.py --url https://equalparts.ai --strategy mobile, LCP display "14.9 s"; raw fact only, no comparative claim
- Track/proof consistency: subscription_track lead, pitched "ongoing Webflow work" / "monthly plans" per knowledge/business-overview.md Monthly Plans section - no case study numbers borrowed (subscription has no approved case study yet per knowledge/case-studies/README.md), no specific tier or price named
- voice_check.py: clean on all three emails
- word counts: email_1 84w, email_2 64w, email_3 41w - all within band
- sign-off: plain "Ethan"
- subjects/CTAs checked against the other drafts in this batch and data/queue/drafts/ - unique
