---
contact_name: Martin McHale
contact_title: Co-Founder, COO
organization: Voyager Midstream Holdings
icp: startups
apollo_person_id: 66fae6f7fb49920001d2a968
score_total: 54
tier: warm
research_arm: deep
status: ready
drafted_at: 2026-11-09
---

## research
- Homepage (fetched 2026-11-09, https://voyagermidstream.com): independent midstream company in the Haynesville (East Texas/Louisiana), ~550 miles of gathering pipelines, cryogenic processing and liquids fractionation, offices in Houston/Midland/Carthage; site built on Drupal with a credited outside agency (Redbird Communications Group) in the footer
- Pearl Energy Investments made an initial equity commitment in July 2023, confirmed co-founder Martin McHale by name (source: streetinsider.com/ogj.com, found during lead-scoring 2026-11-09) - too old to use as the hook, not referenced as a current event
- 32 employees, founded 2023, strong 24mo headcount growth (218%) (source: Apollo org_data, lead-scoring 2026-11-09)
- Platform detected as unknown by platform_detect.py; homepage fetch identifies the actual platform as Drupal, an agency-built legacy CMS, not a no-code builder - track stays new_build_track (Drupal isn't in business-overview.md's subscription-eligible custom-code list, which is specifically Astro/Vercel-style setups)

## proof_used
- knowledge/case-studies/fispoke.md (new_build_track)

## email_1
subject: voyager midstream's pipeline network
body: |
  Hey Martin,

  550 miles of gathering pipelines across three offices is a real footprint for a company that's only existed since 2023.

  A site built by an outside agency on an older CMS rarely keeps pace once a company's grown this much this fast.

  We build sites for growing energy companies in weeks, then keep building after launch. For Fispoke, a fintech client, we moved them off Wix onto a 25-page, CMS-driven build with SEO built in.

  Worth 15 minutes?

  Ethan

## email_2
subject: who maintains voyagermidstream.com
body: |
  Hey Martin,

  At 32 people and growing, the site's usually whatever an outside agency set up once and nobody's revisited since.

  We're a dedicated team that builds it right and keeps it current as the company scales, not a one-time handoff.

  Open to a quick call this week?

  Ethan

## email_3
subject: last note, voyager midstream
body: |
  Hey Martin,

  Last one from me.

  If the site's keeping pace with the growth, no worries at all.

  If it's not, happy to grab 15 minutes and talk through what a rebuild would look like.

  Ethan

## fact_check
result: pass
checked_at: 2026-11-09
notes:
- "550 miles of pipelines, three offices, Drupal/agency-built site" -> all re-confirmed against the homepage fetch used to draft this (Redbird Communications Group footer credit, /sites/default/files/ and ?itok= Drupal-pattern asset paths).
- Pearl Energy (2023) deliberately NOT used as the hook (too stale); only current org_data growth + homepage facts used.
- Fispoke claims -> verbatim-compatible with knowledge/case-studies/fispoke.md; track: new_build correctly kept (Drupal is agency-CMS, not the Astro/Vercel-style custom-code business-overview.md routes to subscription).
- scripts/voice_check.py: clean. word counts: 81w/49w/36w - within band.
- sign-off: plain "Ethan". single CTA per email, no booking link, first sentence specific to this company.
- checked against other drafts in data/queue/ - distinct hook, no reused phrasing.
