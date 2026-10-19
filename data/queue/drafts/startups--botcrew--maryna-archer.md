---
contact_name: Maryna Archer
contact_title: Co-Founder & Chief Operating Officer
organization: BotCrew
icp: startups
apollo_contact_id: 60148de1b56698000190cfb5
score_total: 66
tier: warm
status: ready
drafted_at: 2026-10-19
---

## research
- BotCrew calls itself "The AI-native OEM for outdoor work," building Gravion, a rugged utility robot leased with delivery, operator training, and maintenance (source: WebFetch https://botcrew.com, 2026-10-19)
- The site cites 93 deployments across 25 states, manufacturing in Duluth, Minnesota, and membership in the NVIDIA Inception program (source: WebFetch https://botcrew.com, 2026-10-19)
- BotCrew grew from 25 to 32 employees (28% QoQ) as of 2026-02-20, per a market-data profile (source: https://www.caplight.com/company/botcrew)
- botcrew.com mobile load: performance 70/100, LCP 8.8s (source: scripts/pagespeed_check.py --url https://botcrew.com --strategy mobile, run 2026-10-19)
- No careers page or hiring information found (source: WebFetch https://botcrew.com, 2026-10-19)

## proof_used
- knowledge/case-studies/fispoke.md (new_build_track has one approved case study; used as a plain scope description, no vertical-fit claim)

## email_1
subject: 93 deployments, one site
body: |
  Hey Maryna,

  93 Gravion deployments across 25 states is a real footprint for a company that's grown from 25 to 32 people this year.

  botcrew.com takes 8.8 seconds to load on a phone right now, slow enough to lose some of the people checking out an NVIDIA Inception company for the first time.

  We build fixed-price Webflow sites for growth-stage teams, usually live in 30-60 days, with a CMS so deployment numbers and updates don't wait on an engineer.

  Worth 15 minutes?

  Ethan

## email_2
subject: the site behind 25 states of deployments
body: |
  Hey Maryna,

  A construction or solar operator checking out BotCrew for the first time is going to size up the site before they ever see a Gravion unit in person.

  We recently rebuilt a fintech company's site from scratch on Webflow, CMS-driven so a growing team can keep it current without touching code.

  Up for a quick call this week?

  Ethan

## email_3
subject: last one, BotCrew
body: |
  Hey Maryna,

  Last note from me. If the site's keeping up fine as the deployments grow, no worries at all.

  If a faster, easier-to-update one would help, happy to grab 15 minutes.

  Ethan

## fact_check
result: pass
checked_at: 2026-10-19
notes:
- "AI-native OEM for outdoor work... Gravion... lease with delivery, operator training, maintenance" -> re-fetched https://botcrew.com, matches verbatim
- "93 deployments across 25 states, Duluth MN manufacturing, NVIDIA Inception" -> re-fetched https://botcrew.com, confirms all three on the page
- "grew from 25 to 32 employees, 28% QoQ, as of 2026-02-20" -> verified against caplight.com; this data point is ~241 days old as of 2026-10-19 (already scored as past the 180-day trigger window), cited here only as background growth context, not claimed as a fresh trigger
- "8.8 seconds on mobile" -> verified against scripts/pagespeed_check.py output (performance 70, LCP display "8.8 s"); raw fact about the lead's own site only, no comparative claim
- Track/proof consistency: new_build_track lead, Fispoke case study (track: new_build) used only for scope description, no numbers/results borrowed, no vertical-fit claim (fintech != robotics OEM, not claimed as a match)
- No pricing/tier named, CTA is the intro call only, no booking link
- voice_check.py: clean on all three emails
- word counts: email_1 83w, email_2 61w, email_3 33w - all within the 50-85 band
- sign-off: plain "Ethan" (startups)
- checked against other drafts in this run for repeated sentence shapes - distinct hooks and structure, not templated
