# Call prep: Josh Manifold — Compass Ion Advisors

**When:** 2026-10-28T14:00:00.000Z          **ICP:** startups (as tagged on the booking — see note below)          **Track:** new_build_track (unconfirmed — site blocked automated checks, see below)
**Lead score:** Not in our outreach system — booked directly

## What we sent them

n/a — no record of this contact in `data/leads/index.jsonl`, `data/queue/`, or `data/replies/log.jsonl` (checked by email `jmanifold@ionadv.com` and domain `ionadv.com`/`compass-ionadvisors.com`, case-insensitive). This is a direct booking, not an outreach lead.

**Note on ICP tag:** the booking came in tagged `startups`, but the research below points to a registered investment advisory (wealth management) firm, not a startup. Flagging rather than forcing the fit — worth a quick gut-check with Ethan before the call.

## Company and industry

- Compass Ion Advisors, LLC is a registered investment advisory (RIA) firm based in Conshohocken, PA, serving individual and high-net-worth investors, pension/profit-sharing plans, charitable organizations, and trusts, using a team-driven, asset-allocation approach with outside research/sub-advisors. (Source: [fintrx.com firm profile](https://fintrx.com/firms/firm/compass-ion-advisors-llc-166418), [advizorpro.com firm profile](https://profiles.advizorpro.com/firm/compass-ion-advisors-llc-ekwzdxyhb8z64q) — third-party aggregator directories, unverified against SEC/FINRA records)
- Scale: ~$1.3B AUM, 16 offices, ~23 employees firm-wide; the Conshohocken HQ office (300 Conshohocken State Road, Suite 230) lists 15 advisors. (Source: [getwarmer.com firm page](https://www.getwarmer.com/firms/compass-ion-advisors-llc), [getwarmer.com Conshohocken office](https://www.getwarmer.com/firms/compass-ion-advisors-llc/offices/conshohocken-pa) — aggregator, unverified)
- Timely: a state/SEC-style registration listing shows a filing dated 2026-01-29 for the firm at its Conshohocken address. The firm previously operated under the name APW Capital before rebranding to Compass Ion Advisors. (Source: web search of directory listings — unverified, flag as aggregator data)
- The person: Joshua "Josh" Manifold is a financial advisor at the firm, Series 66 licensed, with roughly 21-22 years of industry experience; a directory profile lists him with the firm (as APW Capital, pre-rebrand) since 2012. (Source: [getwarmer.com advisor profile](https://www.getwarmer.com/advisors/joshua-manifold) — aggregator, unverified)
- No LinkedIn profile or firm press release was found to corroborate the above directly — all of it comes from third-party advisor-directory aggregators (getwarmer, fintrx, advizorpro), not the firm's own site or filings. Treat as directionally useful, not confirmed fact, going into the call.

## What we found on them

n/a — no research block exists for this contact (not a matched lead). Everything above is from a fresh live pass done for this briefing.

## Their current stack and site scope

- Platform: unknown — `ionadv.com` redirects (301) to `https://compass-ionadvisors.com/`, which returns an HTTP 403 with a Cloudflare bot-challenge (`cf-mitigated: challenge`) to automated requests. `scripts/platform_detect.py` could not reach the site to identify the platform.
- Pages: not available — `scripts/sitemap_scope.py` found no sitemap at the common paths (same Cloudflare blocking likely applies).
- PageSpeed (via Google's PageSpeed API, which was not blocked): performance 50, accessibility 89, best practices 100, SEO 85. Largest Contentful Paint 14.8s, Speed Index 7.7s — a notably slow load.

## Recommended package

**Suggested: Core ($9,500, up to 5 pages, CMS where needed)** — tentative, given how little we could confirm. Reasoning: this reads as a professional-services marketing site (firm overview, advisor bios, services, contact — typically more than a single page but unlikely to need deep CMS/migration complexity), and the 50 performance score / 14.8s LCP suggests a site that would benefit from a rebuild rather than just ongoing maintenance. We couldn't confirm the current platform or actual page count (site blocked automated checks), so this is a starting suggestion for Ethan to size up or down once he can see the site live on the call, not a locked recommendation.

## Reply history

n/a — no outreach history, so no replies on file.

## Suggested angle for the call

Since this is a direct booking with no outreach history and an ICP tag that doesn't match what the research turned up (financial advisory firm, not a startup), start by confirming what Josh is actually looking for and for which entity/site. If it is in fact a rebuild of compass-ionadvisors.com, the slow load time (14.8s LCP) and professional-services structure (advisor bios/services) are a natural, true opening thread.
