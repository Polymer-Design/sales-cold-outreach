---
contact_name: Chalmers Brown
contact_title: Co-Founder & CEO
organization: Jarmin (YC F25)
icp: startups
apollo_contact_id: 6116734a48534a000116f525
score_total: 59
tier: warm
status: pushed
drafted_at: 2026-10-20
pushed_at: 2026-10-20T18:11:58Z
---

## research
- Jarmin's homepage tagline for its AI "employees" is "Ramp-up in days, not months" (source: WebFetch https://jarmin.ai, 2026-10-20)
- The homepage names no customers, case studies, or performance metrics - its main credibility claim is "Built by engineers from Meta, Apple, AWS, Lockheed Martin, and JPMorganChase" (source: WebFetch https://jarmin.ai, 2026-10-20)
- Mobile PageSpeed: performance 61/100, LCP 7.1s (source: scripts/pagespeed_check.py --url https://jarmin.ai --strategy mobile, 2026-10-20)
- Apollo org_data shows headcount roughly doubling in the past 6 months and ~4x over 12 months (source: Apollo org_data, ingested 2026-10-19)
- Site platform: no builder marker detected (source: scripts/platform_detect.py --url https://jarmin.ai --icp startups, 2026-10-20)

## proof_used
- knowledge/case-studies/fispoke.md (technical, hard-to-explain product rebuilt into a site built so the client's own team could keep publishing)

## email_1
subject: ramp-up in days?
body: |
  Hey Chalmers,

  Jarmin's pitch is "ramp-up in days, not months." Your own homepage takes 7.1 seconds to load on mobile, the opposite impression on a first visit.

  You've also roughly quadrupled headcount this year, leaving less time to maintain the site itself.

  A fintech client had the same gap: strong product, thin site. We rebuilt it on Webflow so their team could keep it updated without a developer.

  Worth 15 minutes to see if that fits where Jarmin is right now?

  Ethan

## email_2
subject: pedigree, no proof yet
body: |
  Hey Chalmers,

  Jarmin leans on pedigree: engineers from Meta, Apple, AWS, Lockheed Martin, JPMorganChase. No customer names or results anywhere on the site yet.

  That's a reasonable trust signal, but buyers comparing AI "employees" for a role will eventually want proof it worked somewhere.

  We build sites for technical products like this one, where the job is making a hard-to-explain idea click fast for someone skimming on a phone.

  Open to chatting this week?

  Ethan

## email_3
subject: quick close
body: |
  Hey Chalmers,

  Last note. Strong pedigree, several roles live, but still nothing on the site proving any of it worked for a real customer yet.

  If that's not a priority right now, no worries. If it is, happy to grab 15 minutes.

  Ethan

## fact_check
result: pass
checked_at: 2026-10-20
notes:
- "Ramp-up in days, not months" tagline -> re-fetched https://jarmin.ai 2026-10-20, confirmed exact phrase
- No customer names/case studies/metrics, "Built by engineers from Meta, Apple, AWS, Lockheed Martin, and JPMorganChase" -> re-fetched https://jarmin.ai 2026-10-20, confirmed
- 7.1s mobile LCP / 61 performance -> re-ran scripts/pagespeed_check.py --url https://jarmin.ai --strategy mobile 2026-10-20, matches; raw fact about their own site only, no Polymer comparison
- "roughly quadrupled headcount this year" -> Apollo org_data organization_headcount_twelve_month_growth: 3.0 (i.e. +300%, a ~4x multiple), ingested 2026-10-19; math checks out
- Fispoke proof (technical/hard-to-explain product, rebuilt on Webflow, team can update without a developer) -> matches knowledge/case-studies/fispoke.md; track: new_build matches this lead's new_build_track
- No Polymer pricing mentioned; single CTA per email; e1/e2/e3 word counts 82/75/43, all within band
- Sign-off "Ethan" alone, correct for startups ICP
- Cohesion: the fintech-client proof appears once (e1, unnamed to vary from the Userlens draft which names Fispoke); e2 uses a plain capability statement instead; brevity escalates 82->75->43; sentence construction varies from the Adentris and Userlens drafts rather than reusing the same proof-sentence shape
