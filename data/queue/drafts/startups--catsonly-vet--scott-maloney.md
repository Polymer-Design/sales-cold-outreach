---
contact_name: Scott Maloney
contact_title: COO & Founder
organization: CatsOnly.vet
icp: startups
apollo_contact_id: 66f24a2cdc0e890001bb12ec
score_total: 65
tier: warm
status: pushed
drafted_at: 2026-10-17
pushed_at: 2026-10-17T16:54:39Z
---

## research
- CatsOnly's own site confirms its first feline-only hospital, in Aurora CO (Stanley Marketplace), is now open (source: WebFetch https://catsonly.vet, 2026-10-17, "Our first hospital is now open in Aurora, Colorado")
- The Aurora hospital is a 5,300-square-foot site with four exam rooms that doesn't allow dogs on-site (source: https://coloradobiz.com/catsonly-veterinary-hospital-open-feline-only-aurora/, dated 2026-07-20, reporting the planned August opening)
- A second Denver-area location is targeted for early 2027 (source: https://www.veterinarypracticenews.com/new-feline-only-organizations-aims-close-gap-veterinary-care/, re-verified 2026-10-17)
- Membership pricing starts at $249/year (source: https://coloradobiz.com/catsonly-veterinary-hospital-open-feline-only-aurora/, dated 2026-07-20)
- catsonly.vet's homepage mobile load: performance 76/100, LCP 5.1s (source: scripts/pagespeed_check.py --url https://catsonly.vet --strategy mobile, run 2026-10-17)
- Site platform: no builder marker detected (source: scripts/platform_detect.py --url https://catsonly.vet --icp startups, 2026-10-17)
- The "CatsOnly App" is described on their site as a supporting tool for records, messaging, and scheduling, not the core marketing site (source: WebFetch https://catsonly.vet, 2026-10-17)

## proof_used
- knowledge/case-studies/fispoke.md (25-page CMS-driven Webflow build with SEO/AEO and structured data built in from scratch)

## email_1
subject: the second CatsOnly location
body: |
  Hey Scott,

  Congrats on Aurora opening, with a second Denver-area location planned for early 2027. Going from one hospital to a small chain means the site needs to carry more: location pages, membership sign-ups, room to grow.

  It takes 5.1 seconds to load on mobile, a rough first impression for someone deciding whether to trust a new vet with their cat.

  We recently rebuilt a fintech company's site into a 25-page CMS-driven Webflow build with SEO built in from scratch.

  Worth 15 minutes?

  Ethan

## email_2
subject: one site, more locations
body: |
  Hey Scott,

  Most vet groups don't think about their website until they're opening location two and realize the current site wasn't built to scale past one.

  A CMS-driven site means your team can add a new location page, hours, and provider bios without waiting on a developer every time CatsOnly opens a new hospital.

  That's the exact setup we build for growing teams. Want to talk it through this week?

  Ethan

## email_3
subject: last note, CatsOnly
body: |
  Hey Scott,

  Last one from me. If the site's not a priority while you're focused on getting location two open, totally get it.

  If a faster, easier-to-expand site would help as CatsOnly grows, happy to jump on a quick call.

  Ethan

## fact_check
result: pass
checked_at: 2026-10-17
notes:
- "first feline-only hospital in Aurora, CO is now open" -> verified against WebFetch https://catsonly.vet (2026-10-17), which states the hospital is open; ColoradoBiz (2026-07-20) corroborates the venue (Stanley Marketplace) and planned August opening
- "second Denver-area location planned for early 2027" -> re-fetched https://www.veterinarypracticenews.com/new-feline-only-organizations-aims-close-gap-veterinary-care/, confirms "A second location is planned for the Denver area, with a target of early 2027"
- "$249/year" membership -> verified against ColoradoBiz article ("annual memberships starting at $249")
- "5.1 seconds to load on mobile" -> verified against scripts/pagespeed_check.py --url https://catsonly.vet --strategy mobile, LCP display "5.1 s"; cited as a raw fact only, no comparative claim to Polymer's own benchmark
- "25-page CMS-driven Webflow build with SEO built in from scratch" -> matches knowledge/case-studies/fispoke.md verbatim (status: approved, track: new_build, matches this lead's track); referred to as "a fintech company," Fispoke not named
- did not claim any specific platform for catsonly.vet (platform_detect.py returned no marker) - email only describes measured load time
- voice_check.py: clean on all three emails
- word counts: email_1 84w, email_2 71w, email_3 41w - all within band
- sign-off: plain "Ethan" (startups, no "God Bless")
- subjects/CTAs checked against the other drafts in data/queue/drafts/ - unique, no repeated CTA phrasing within this batch
