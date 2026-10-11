# Polymer — what we are allowed to say about ourselves

Facts agents may cite in outreach. If it's not here or in `knowledge/case-studies/`,
it doesn't go in an email. Items marked PENDING are not citable yet. Items marked
**Internal** never go in an email, PR, or any outward-facing text.

## The basics

- Polymer is a full-service design and Webflow studio, founded 2017, based in New Jersey.
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
- Stack we build on: Webflow, Vercel, or Webflow Source; design in Figma. Ops side:
  Stripe/Trello/Brevo.
- Voice in pricing-adjacent copy: plain, direct, no wordplay, no em dashes (same rule as
  everywhere else, see `knowledge/voice-and-tone.md`).

## Pricing (confirmed 2026-10-11, citable when relevant)

Outreach never closes a sale or quotes a final price - every email's CTA is the 20-minute
intro call (separate Cal.com link per ICP, see `config/system.yaml`). Prices below are
public and fine to set expectations with ("fixed price, starting at $3,000"); **Internal**
items at the bottom never appear in an email.

### Initial builds

Same structure both ICPs. Timelines count from the kickoff date (the discovery meeting).

**Startups & scale-ups:**
- Sprint: $3,000 - one page, 30 days, 100% at signing.
- Core: $9,500 - up to 5 pages, CMS where needed, 60 days, 50% at signing / 50% at design
  approval.
- Custom: from $15,000 - scoped on a follow-up call. 40/30/30 payment, final at launch.

**Churches:**
- Campaign: $3,000 - one page, 30 days, 100% at signing.
- Core: $14,000 - up to 10 pages, **Planning Center + YouTube sermons included**, 60 days,
  50% at signing / 50% at design approval.
- Custom: from $18,000 - scoped on a follow-up call (e.g. multi-campus). 40/30/30 payment,
  final at launch.

**Included in every build:** custom design in Figma, responsive development, basic on-page
SEO at launch, 2 design revision rounds (3 on Custom), set meetings (discovery, design
review, dev review, launch, handoff), 30 days of launch support (free fixes to anything we
built - no free months of a monthly plan). Hosting is billed directly by the platform, not
by Polymer.

**Booking terms:** if a project can't start for 30+ days after signing, a 25% deposit holds
the slot; the rest of the first payment is due at work start.

**Add-ons (public):** Planning Center Events ($1,500, on Church Campaign), YouTube sermons
($1,500, on Church Campaign), Planning Center Groups ($1,500, any church package),
multi-campus filtering (from $2,000, quoted), integration or automation (from $1,500,
quoted).

### Monthly plans

Same four plans both ICPs, billed monthly in advance through Stripe, no contract. Ideal for
(not limited to) sites already on Webflow/Webflow Source; also fits Astro sites, Vercel
sites, and other custom-code sites. A site on a hosted builder (WordPress, Squarespace,
Wix, a church-specific platform) needs a new build first - never pitch a monthly plan as a
replacement for that.

| | Care | Grow | Partner | Partner Plus |
|---|---|---|---|---|
| Price | $500/mo | $1,500/mo | $3,000/mo | $5,000/mo |
| Hours | ~3 | ~10 | 15 | 30 |
| First response | 3 business days | 2 business days | 1 business day | 1 business day |
| Scope | Fixes, small edits, content updates | Care + new pages, landing pages, CMS work, small automations | Grow + design collateral, decks, brand work | Same as Partner |

Uptime monitoring and integration fixes are included and don't use hours. Extra hours: five-
hour blocks for $1,000, upfront, good for 30 days (hours don't roll over). Upgrade anytime;
downgrades take effect at the next billing date. Site-down issues get same-day handling on
Partner.

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
  with a new build. Sprint/Campaign as the low-risk entry point, Core as the main offer.
- **Churches on Planning Center** (`[church].churchcenter.com`): lead with Church Core
  specifically - the Planning Center + YouTube integrations are already included in it,
  which is the strongest personalization angle available.
- **Multi-campus churches, or startups that are Series B+ or already 15+ pages:** Custom.
  Mention a range ("from $18,000"), never a specific quote.

The natural path to pitch, when relevant: start with a build, then stay on a monthly plan
with the same team.

### Internal only - never in an email, PR, or outward-facing text

- Additional-page pricing on entry tiers ($1,500/page, Sprint max 3 pages / Campaign max 2)
- Friends discount (10%, shown as a line item)
- Internal active-work limits and how the team staffs requests
- Hourly rate for extra meetings outside a plan ($150/hr)
- Any mention of discounts, negotiation room, or "early client" pricing

### PENDING (not yet confirmed - do not cite)

- Whether builds with integrations still require an active Care plan after the 30-day
  launch support window (open item from the source doc, unconfirmed as of 2026-10-11).

## What we sell to each ICP

- **Startups**: a credible, high-craft marketing site shipped fast, without agency bloat
  pricing. Webflow (or Webflow Source) means their team can edit content without a
  developer.
- **Churches**: websites that integrate with the tools the church already runs on —
  Planning Center / Church Center especially (events, groups, sermons, giving, check-in).
  PENDING: integration calculator scope (waiting on Chris's list of productized modules).

## Proof points

- Fispoke (fintech): full site redesign and migration off Wix, shipped 2026.
  Full case study PENDING — until it exists in knowledge/case-studies/, emails may say
  we redesigned a fintech company's site but may NOT attach numbers or outcomes to it.
- PENDING: everything else. This is the biggest personalization blocker — see
  knowledge/case-studies/README.md for the template.
