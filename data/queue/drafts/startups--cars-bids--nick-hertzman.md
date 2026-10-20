---
contact_name: Nick Hertzman
contact_title: Head of Growth Marketing
organization: Cars & Bids
icp: startups
apollo_contact_id: 611c5ab342ee6a0001d141c5
score_total: 62
tier: warm
status: pushed
drafted_at: 2026-10-20
pushed_at: 2026-10-20T16:39:11Z
---

## research
- Cars & Bids is an online auction marketplace for enthusiast cars (two-sided platform, not a retailer of its own inventory); its own site claims 36K+ auctions completed and 1.1M+ registered members, reportedly growing 15.9% in headcount over the past 6 months per org_data (source: WebSearch 2026-10-20, carsandbids.com public claims; org_data from Apollo enrichment)
- Mothers became the platform's official car-care partner, and Cars & Bids hosted an AvantsFest Cars & Coffee meetup Aug 1, 2026 at Pacific Raceway - real but modest marketing/partnership activity this year (source: WebSearch 2026-10-20, theshopmag.com trade roundup)
- Mobile PageSpeed: performance 39/100, LCP 13.0s (source: scripts/pagespeed_check.py --url https://carsandbids.com --strategy mobile, run 2026-10-20)
- Site returns HTTP 403 to automated fetches (WebFetch blocked on both the homepage and /jobs 2026-10-20) - platform and careers page content could not be directly verified; platform_detect.py also returned "unknown"
- Site platform: unknown (confirmed via scripts/platform_detect.py --url https://carsandbids.com --icp startups, 2026-10-20)

## proof_used
- knowledge/case-studies/fispoke.md (25-page CMS-driven Webflow build with SEO/AEO and structured data built in from scratch)

## email_1
subject: carsandbids.com's 13-second load
body: |
  Hey Nick,

  Cars & Bids says it's crossed 1.1M registered members, and the site still takes 13 seconds to show its main content on mobile, a rough first impression for buyers deciding whether to bid in the next few minutes.

  We rebuilt a fintech company's site into a 25-page CMS-driven build with SEO and structured data from scratch, the same kind of gap between scale and the page that's supposed to carry it.

  Open to chatting this week?

  Ethan

## email_2
subject: Mothers partnership, slow site
body: |
  Hey Nick,

  The Mothers partnership and the AvantsFest meetup are the kind of marketing moves that bring new bidders to the site, and a 13-second mobile load is the thing working against every one of them before a car ever loads.

  We build fast, CMS-driven sites a growth team can update without waiting on engineering.

  Want to grab a quick call?

  Ethan

## email_3
subject: 13 seconds, one more note
body: |
  Hey Nick,

  If site performance isn't a priority right now, no worries.

  If 13 seconds on mobile is quietly costing bids, any interest in a short call?

  Ethan

## fact_check
result: pass
checked_at: 2026-10-20
notes:
- "Cars & Bids says it's crossed 1.1M registered members" -> attributed as the site's own self-reported claim per WebSearch 2026-10-20 (amerifreight.net review citing carsandbids.com's own stats: 36K+ auctions, $800M+ sold, 1.1M+ registered members); carsandbids.com itself returns HTTP 403 to automated fetches so this could not be re-verified directly against the primary source, flagged as a third-party-sourced self-reported figure rather than independently confirmed
- "the site still takes 13 seconds to show its main content on mobile" -> verified against scripts/pagespeed_check.py --url https://carsandbids.com --strategy mobile (run 2026-10-20): LCP 13.0s, performance 39/100. Raw fact about the lead's own site, no comparison to Polymer's benchmark made
- "Mothers partnership" and "AvantsFest meetup Aug 1, 2026" -> verified against theshopmag.com trade-news roundup (via WebSearch 2026-10-20)
- "a 25-page CMS-driven build with SEO and structured data from scratch" -> matches knowledge/case-studies/fispoke.md (status: approved, track: new_build, matches this lead's new_build_track)
- "We build fast, CMS-driven sites a growth team can update without waiting on engineering" -> consistent with knowledge/business-overview.md positioning ("A fixed price. A live site in weeks." + Webflow/CMS team-editing claim), no specific timeline or price number invented
- platform_detect.py returned "unknown" for this site (confirmed 2026-10-20) - email does not claim a specific hosted-builder platform, only the measured load time
- voice_check.py: clean
- word counts: email_1 79w, email_2 62w, email_3 28w - all within band
- sign-off: plain "Ethan", no "God Bless" (startups)
- CTA and subject phrasing cross-checked against the Aibrary and Multiplier drafts in this batch - no verbatim repeats ("Open to chatting this week?", "Want to grab a quick call?", "any interest in a short call?"; subjects "carsandbids.com's 13-second load", "Mothers partnership, slow site", "13 seconds, one more note" - all distinct)
