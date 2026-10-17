---
contact_name: Will Gao
contact_title: Co-founder & Head of Growth
organization: Ploy
icp: startups
apollo_contact_id: 6189f5c931d29f00015be978
score_total: 60
tier: warm
status: pushed
drafted_at: 2026-10-17
pushed_at: 2026-10-17T16:54:39Z
---

## research
- Ploy launched out of stealth with a $27M seed round led by First Round Capital and Y Combinator; co-founder Bryant Chou is described as "co-founder and former Chief Technology Officer of Webflow" (source: https://pulse2.com/ploy-raises-27-million-seed-round-to-launch-ai-growth-platform/, published 2026-06-22, reporting a June 17 2026 launch date per multiple corroborating outlets found during scoring)
- Ploy's own homepage pitch is "Ship a site in hours, not weeks" for its Startups segment (source: WebFetch https://ploy.ai, 2026-10-17)
- ploy.ai mobile load: performance 41/100, LCP 17.4s (source: scripts/pagespeed_check.py --url https://ploy.ai --strategy mobile, run 2026-10-17)
- Site platform: no builder marker detected by platform_detect.py (custom-coded), new_build_track by default tagging (source: scripts/platform_detect.py --url https://ploy.ai --icp startups, 2026-10-17)

## proof_used
- knowledge/case-studies/fispoke.md (25-page CMS-driven Webflow build with SEO/AEO and structured data built in from scratch)

## email_1
subject: ploy.ai's own load time
body: |
  Hey Will,

  Your co-founder used to run engineering at Webflow, and Ploy's whole pitch to startups is "ship a site in hours, not weeks." Ploy's own homepage takes 17.4 seconds to load on mobile.

  That's the kind of gap a fast-growing team doesn't catch until a prospect mentions it.

  We build and rebuild marketing sites on Webflow, including a 25-page CMS-driven site we shipped with SEO built in from scratch.

  Up for a quick call?

  Ethan

## email_2
subject: the site behind the pitch
body: |
  Hey Will,

  Ploy sells speed to other companies' websites. Worth having your own hold up to the same bar, especially with a $27M seed drawing more eyes to it since June.

  We'd rebuild it fast, on Webflow, with the load time to match what you're telling prospects.

  Make sense to connect this week?

  Ethan

## email_3
subject: last thought, Ploy's site
body: |
  Hey Will,

  Last one from me, Will. If the site's not a priority right now, no worries at all.

  If a 17.4-second mobile load is undercutting the pitch, open to a quick call?

  Ethan

## fact_check
result: pass
checked_at: 2026-10-17
notes:
- "co-founder used to run engineering at Webflow" -> re-fetched https://pulse2.com/ploy-raises-27-million-seed-round-to-launch-ai-growth-platform/ (published 2026-06-22), which describes Bryant Chou as "co-founder and former Chief Technology Officer of Webflow"; email doesn't name Chou specifically since Apollo's contact (Will Gao) is a different co-founder, phrasing kept to "your co-founder" which is accurate either way
- "$27M seed" -> verified against same pulse2.com source (First Round Capital + Y Combinator)
- "ship a site in hours, not weeks" -> verified against WebFetch https://ploy.ai (2026-10-17), exact phrase on the Startups segment of the homepage
- "17.4 seconds to load on mobile" -> verified against scripts/pagespeed_check.py --url https://ploy.ai --strategy mobile, LCP display "17.4 s"; raw fact only, no comparative claim
- "25-page CMS-driven site... SEO built in from scratch" -> matches knowledge/case-studies/fispoke.md verbatim (status: approved, track: new_build, matches this lead's track); referred to as a generic rebuild description, Fispoke not named
- considered and rejected: no claim that Ploy itself used its own product to build ploy.ai - that's an inference noted only in scoring's score_notes, not stated as fact in the email
- voice_check.py: clean on all three emails
- word counts: email_1 76w, email_2 54w, email_3 34w - all within band
- sign-off: plain "Ethan"
- subjects/CTAs checked against the other drafts in this batch and data/queue/drafts/ - unique
