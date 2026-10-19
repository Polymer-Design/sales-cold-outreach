---
contact_name: Chuck Harris
contact_title: Founder, COO
organization: KORIO
icp: startups
apollo_contact_id: 66f335f2c1eb3000018c58b2
score_total: 67
tier: warm
status: ready
drafted_at: 2026-10-19
---

## research
- Korio (korioclinical.com) sells RTSM (randomization and trial supply management) software for clinical trials, with project managers who stay with a study from kickoff through closeout (source: WebFetch https://korioclinical.com, 2026-10-19)
- Korio raised a Series A in September 2024 led by BIP Ventures, with existing investors Excelerate Health Ventures and Boston Millennia Partners, following a $6.8M round in October 2023 (source: https://pulse2.com/korio-randomization-trial-supply-management-company-raises-series-a-funding, https://seedtable.com/companies/korio/funding-rounds/series-a-2024-09)
- korioclinical.com mobile load: performance 54/100, LCP 15.7s (source: scripts/pagespeed_check.py --url https://korioclinical.com --strategy mobile, run 2026-10-19)
- The homepage has unfilled statistic counters showing "0 +" for clinical trials, years of experience, countries, and therapeutic areas (source: WebFetch https://korioclinical.com, 2026-10-19)
- No careers page or marketing/design hire found (source: WebFetch https://korioclinical.com, 2026-10-19)

## proof_used
- knowledge/case-studies/fispoke.md (new_build_track has one approved case study; used as a plain scope description, no vertical-fit claim)

## email_1
subject: the "0 +" on your homepage
body: |
  Hey Chuck,

  Korio's homepage has a stat counter for clinical trials run, years of experience, and countries, all showing "0 +" right now, which undersells a Series A-backed RTSM company.

  It also takes 15.7 seconds to load on a phone, a rough first impression for a sponsor evaluating vendors.

  We recently rebuilt a fintech company's site from scratch on Webflow, CMS-driven so your own team can keep stats and content current without a developer.

  Worth 15 minutes?

  Ethan

## email_2
subject: what a sponsor sees first
body: |
  Hey Chuck,

  A sponsor comparing RTSM vendors is going to size up korioclinical.com before ever getting on a call with your team. Right now that first look undersells the Series A and the track record behind it.

  We build fixed-price Webflow sites for growth-stage teams, usually live in 30-60 days, built to load fast and stay current without an engineer in the loop.

  Up for a quick call this week?

  Ethan

## email_3
subject: last one, Korio
body: |
  Hey Chuck,

  Last note from me. If the site's doing its job fine for sponsor evaluations, no worries.

  If a faster, more current one would help close that gap, happy to grab 15 minutes.

  Ethan

## fact_check
result: pass
checked_at: 2026-10-19
notes:
- "RTSM software... project managers from kickoff through closeout" -> re-fetched https://korioclinical.com, matches verbatim
- "Series A Sept 2024, BIP Ventures, Excelerate Health Ventures, Boston Millennia Partners, prior $6.8M Oct 2023 round" -> verified against pulse2.com and seedtable.com; dated 2024, not used as a fresh trigger (already scored >180 days old), cited only as background credibility, not claimed as recent
- "15.7 seconds on mobile" -> verified against scripts/pagespeed_check.py output (performance 54, LCP display "15.7 s"); raw fact about the lead's own site only, no comparative claim
- "0 + stat counters" -> re-fetched https://korioclinical.com, confirms unfilled counters for clinical trials/years/countries/therapeutic areas showing "0 +"
- Track/proof consistency: new_build_track lead, Fispoke case study (track: new_build) used only for scope description, no numbers/results borrowed, no vertical-fit claim (fintech != clinical trial SaaS, not claimed as a match)
- No pricing/tier named, CTA is the intro call only, no booking link
- voice_check.py: clean on all three emails
- word counts: email_1 78w, email_2 71w, email_3 35w - all within the 50-85 band
- sign-off: plain "Ethan" (startups)
- checked against other drafts in this run for repeated sentence shapes - distinct hooks and structure, not templated
