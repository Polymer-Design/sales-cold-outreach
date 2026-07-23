# Case study brief — what to build (for your separate working session)

This is the single biggest lever on email quality. The drafter can only cite what's in
`knowledge/case-studies/`, so the emails are exactly as convincing as this folder. Even
2-3 real ones (at least one per ICP) changes everything.

## Where it should live (recommendation)

**Markdown files in this repo, one per case study** (`knowledge/case-studies/`), not Google
Drive as the source of truth. Reasons:
- The agents read from the repo, not Drive. A Drive doc would need a sync step that can drift.
- Git gives you version history and the fact-check gate reads the exact approved text.
- Numbers are pinned to a commit, so "approved" means approved.

**Google Drive is fine as your drafting scratchpad** — collect the messy raw material there
with the team, then the finalized, client-approved version becomes a markdown file here. If
you'd rather edit in Drive long-term, we can add a small sync script later, but don't block on
that. Start with markdown.

Use the template already in `knowledge/case-studies/_template.md`. A case study isn't citable
until its frontmatter says `status: approved`.

## What to pull for each past project

For every project worth citing, dig up:

1. **The situation** — what they had before, what was broken, what triggered the project.
   (Old platform, slow load, couldn't self-edit, launch/rebrand pressure, campaign, etc.)
2. **What you built** — concrete scope with real numbers: pages, integrations, migration size,
   and especially **timeline** ("shipped in 5 weeks"). Speed is a core Polymer claim, so
   timeline is gold.
3. **Measurable results** — the hard part. Chase anything you can actually verify:
   - Conversion: demo requests, form fills, contact-form submissions, giving signups,
     event registrations — before vs. after.
   - Traffic / engagement: sessions, bounce rate, time on page, mobile share.
   - Speed / technical: PageSpeed score, load time before/after.
   - Business: deals influenced, close rate on the new site, a quote from the client.
   - Operational: "their team now edits the site without us" (Webflow self-serve is a real
     selling point even without a number).
   If a project has **no** hard number, still write it up — a clean "here's what we built and
   how fast" story is citable. Just never attach an invented number to it.

## Priority order for your session

1. **One startup/scale-up case study with a real conversion or speed number.** This unlocks
   the whole startup ICP. Fispoke (the fintech redesign) is the obvious first candidate —
   pull whatever real metrics exist from that project.
2. **One church case study**, ideally tied to Church Center integration and/or a campaign,
   with any giving/engagement number you can verify.
3. A second of each, so the split tests have proof variety to test.

## How to feed it results over time

Two inputs keep case studies fresh, and they're different jobs:
- **New projects** → when a build ships, add a new markdown case study (or fill in results a
  few weeks post-launch once data exists).
- **Ongoing performance data** → if you have analytics access to client sites, update the
  results section with current numbers. Keep the client-approved line separate from raw data
  you're still verifying.

For the separate chat: bring the project list + any analytics/screenshots/client quotes you
have, and have Claude help turn each into the template format, flagging which numbers are
verified vs. need confirmation before they go `status: approved`.

## The proof-tiering that matters for outreach

Rank each case study's quotable line by strength so the drafter reaches for the best fit:
- **Strongest:** specific number + named-ish outcome ("giving signups up after a mid-campaign
  rebuild").
- **Middle:** speed/scope ("full site + migration in 5 weeks").
- **Baseline:** capability only ("we build church sites around Church Center"). Already
  available from the business overview; a real case study should beat this.
