# Polymer — what we are allowed to say about ourselves

Facts agents may cite in outreach. If it's not here or in `knowledge/case-studies/`,
it doesn't go in an email. Items marked PENDING are not citable yet. Items marked
**Internal** never go in an email, PR, or any outward-facing text.

## The basics

- Polymer is a full-service design and web development studio, founded 2017, based in New Jersey.
- Website: hellopolymer.com — **live now**. ICP-specific solutions pages (churches,
  startups, etc.) are coming soon but not live yet - don't reference them as if they exist.
  Never send cold outreach from this domain — see `config/domains.yaml`.
- Founders: Ethan Hoover and Blair Hoover (brothers). Never "Tyler."
- Ethan personally takes every sales call booked from outreach.
- Positioning: build-first. We lead with the websites we build, around the rare combination
  of craft, speed, and cost. The monthly plan is an add-on for post-launch work, not the
  headline. Positioning line: "A fixed price. A live site in weeks. The same team to keep
  it growing."
- Core pitch line: "we build the systems growing teams run on."
- Stack: we match the platform to the client, not the client to a platform. Two paths:
  Webflow (or Webflow Source) when the team wants visual, no-developer editing; or a custom
  Astro site hosted on Vercel with Sanity CMS when they need more flexibility, performance,
  or room to scale. The choice is made to solve their current problems and set them up to
  grow. Design in Figma. Ops side: Stripe/Trello/Brevo.
- **Pitch rule (corrected 2026-10-26 per Ethan):** never present Webflow as what we build,
  or as the default. The pitch is platform fit: we pick the stack that fits how their team
  works and where they're headed. Only name a specific platform in an email when the lead's
  own research makes it relevant (e.g. they're already on Webflow and the angle is a monthly
  plan); otherwise talk about the outcome (a site their team can edit, that's fast, that
  scales), not the tool.
- Voice in pricing-adjacent copy: plain, direct, no wordplay, no em dashes (same rule as
  everywhere else, see `knowledge/voice-and-tone.md`).

## Pricing (November 2026, approved by Ethan and Blair 2026-11-03, citable when relevant)

When Ethan sends an updated pricing/tiers file, it replaces this section: update it here,
keep the date current, and note what changed in the commit message. This file is the only
pricing source the outreach, call-prep and booking-reply skills read. (Source for this
version: "Polymer pricing — November 2026", sent 2026-11-09. It replaced the separate
startup and church price sheets from 2026-10-11.)

One pricing view for both ICPs. No clients yet, so the priority is inbound, not margin:
builds are priced above freelancer pricing and well below agency pricing, with timelines
nobody else puts in writing.

**Outreach never closes a sale or quotes a final price** - every email's CTA is the
20-minute intro call (separate Cal.com link per ICP, see `config/system.yaml`). Public
prices below are fine to set expectations with. **Speed is the edge, so a price always
appears with its timeline**: "$6,500, live in 4 weeks", never the price alone. Don't call
it launch, intro or discount pricing - it's how we work. **Internal** items never appear in
an email.

### Initial builds

| | Sprint | Core | Custom |
|---|---|---|---|
| Price | $2,500 | $6,500 | From $12,000 |
| Scope | 1 long-form page | Up to 6 pages, with CMS setup (blog, case studies, sermons, events) | Scoped. Most church sites with Planning Center + YouTube land here |
| Live in | 2 weeks | 4 weeks | 6-10 weeks, set before start |
| Payment | 100% on signing | 50% on signing / 50% at design approval | 40 / 30 / 30, final payment at launch |
| Included | Custom design, responsive build, basic on-page SEO, 2 revision rounds, 30 days launch support | Same as Sprint | Same + strategy, CMS architecture, migration |

- Same tiers for churches and startups. **The Campaign tier is retired** - churches use
  Sprint for one-pagers (conferences, series, initiatives). **Church Core and the separate
  church prices are gone** - there's one Core and one Custom.
- Where the ICPs differ, it's one line, not a separate price, e.g. integrations:
  "Churches: Planning Center, YouTube · Startups: CRM, scheduling, analytics."
- **A "page" means a unique layout.** CMS items (blog posts, sermons, events, team bios,
  case studies) never count toward a tier's page total, however many there are. CMS adds
  setup work per collection, and migrating a large archive can push a project toward
  Custom, but the item count itself never does.
- Timelines count from the Kickoff Date: the business day after the first payment,
  completed onboarding questionnaire, brand assets and account access are in. Final content
  is due by a Content Due Date set at kickoff.
- Booking terms: if a project can't start for 30+ days after signing, a 25% deposit holds
  the slot; the rest of the first payment is due at work start.
- Capacity: "We take on a limited number of builds each month" is fine to say. Never
  publish slot counts.
- Hosting is billed directly by the platform, not by Polymer.

### Monthly plans

Same plans both ICPs, billed monthly in advance through Stripe, no contract. Ideal for (not
limited to) sites already on Webflow/Webflow Source; also fits Astro, Vercel and other
custom-code sites. A site on a hosted builder (WordPress, Squarespace, Wix, a church-specific
platform) needs a new build first - never pitch a monthly plan as a replacement for that.

| | Care | Grow (most popular) | Partner |
|---|---|---|---|
| Price | $500/mo | $1,000/mo | $2,500/mo |
| First response | 3 business days | 2 business days | 1 business day |
| Scope | Fixes, small edits, content updates | Care + new pages, landing pages, CMS work, small automations | Grow + design collateral, decks, brand work |

- **Partner Plus** ($5,000/mo) is a "talk to us" option for bigger needs, not a standard plan
  card. Fine to mention when a lead clearly needs more than Partner.
- Plans are sold on what's included - uptime monitoring, a monthly site report, priority
  slot access for future builds, integration fixes - not on hours. Churches: Planning
  Center + YouTube monitoring is included.
- Hours don't appear in outward copy (see Internal). Extra 5-hour blocks are $1,000,
  upfront, good for 30 days, no rollover. Upgrade anytime; downgrades take effect at the
  next billing date.

### Internal only - quoted on intro calls, never in an email

These can appear in call-prep briefs and be said on a call. Never in outreach copy, a PR, or
anything published.

| Add-on | Price |
|---|---|
| Extra page (Sprint or Core) | $750 |
| Integration (Planning Center, YouTube, CRM, scheduling, etc.) | $1,500 each |
| Priority start (optional, later) | about +15% |

Example: church Core + Planning Center + YouTube = about $9,500.

### One-off services

- Process audit: $1,000, paid upfront. Credited toward an implementation project signed
  within 30 days.
- Scoped project (automation, API work, fixes): quoted, $1,500 minimum. Under $3,000 paid
  upfront; $3,000+ split 50/50.

### Which offer to lead with

Use the prospect's current site to pick the angle (same signal `scripts/platform_detect.py`
already captures as `new_build_track` vs `subscription_track` - see that script and the
outreach-email skill's Step 0 for exactly how a lead gets tagged):

- **Already on Webflow (or Webflow Source):** best fit for a monthly plan. Startups: lead
  with Grow or Partner. Churches: lead with Care or Grow.
- **On Astro, Vercel, or another custom-code site:** a monthly plan still fits - frame it
  around ongoing updates and support from a dedicated team, not a rebuild.
- **On a hosted builder (WordPress, Squarespace, Wix, a church-specific platform):** lead
  with a new build. Sprint ($2,500, live in 2 weeks) as the low-risk entry point, Core
  ($6,500, live in 4 weeks) as the main offer.
- **Churches on Planning Center** (`[church].churchcenter.com`): still the strongest
  personalization angle - a site built to work with the Planning Center they already run.
  Integrations are no longer included in Core and their price is internal, so emails say
  what we connect to, not what it costs. Fine to cite Core's public price and timeline;
  the integration price is for the call.
- **Multi-campus churches, or startups that are Series B+ or need well past 6 page
  layouts:** Custom. Mention "from $12,000", never a specific quote.

The natural path to pitch, when relevant: start with a build, then stay on a monthly plan
with the same team.

### Other internal items

- Monthly plan hour caps (Care about 3, Grow about 8, Partner 15, Partner Plus 30) and
  15-minute time tracking
- Market reference: freelancers $500-2k per site; small to mid agencies $5-10k for a
  one-pager and $15-40k for 5-8 pages over 8-12 weeks; bigger shops $50k+
- Slot counts (Sprint 1 every 2 weeks, Core 1 every 4 weeks to start; Custom on its own
  schedule)
- The client-goes-silent policy (Content Due Date, pause, restart fees) - it's in the Terms
  of Service, but don't raise it in sales copy
- Friends discount (10%, shown as a line item)
- Internal active-work limits and how the team staffs requests
- Hourly rate for extra meetings outside a plan ($150/hr)
- Any mention of discounts, negotiation room, or "early client" pricing

### PENDING (not yet confirmed - do not cite)

- Whether builds with integrations still require an active Care plan after the 30-day
  launch support window (open item from the source doc, unconfirmed as of 2026-10-11).

## What we sell to each ICP

- **Startups**: a credible, high-craft marketing site shipped fast, without agency bloat
  pricing, on a platform matched to them: their team edits content without a developer
  (Webflow, or Sanity on a custom Astro build), and the site can scale with them.
- **Churches**: websites that integrate with the tools the church already runs on —
  Planning Center / Church Center especially (events, groups, sermons, giving, check-in).
  PENDING: integration calculator scope (waiting on Chris's list of productized modules).

## Proof points

- Fispoke (fintech): full site redesign and migration off Wix, shipped 2026.
  Full case study PENDING — until it exists in knowledge/case-studies/, emails may say
  we redesigned a fintech company's site but may NOT attach numbers or outcomes to it.
- PENDING: everything else. This is the biggest personalization blocker — see
  knowledge/case-studies/README.md for the template.
