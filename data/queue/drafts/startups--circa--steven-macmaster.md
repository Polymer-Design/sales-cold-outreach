---
contact_name: Steven Macmaster
contact_title: Cofounder & COO
organization: Circa
icp: startups
apollo_contact_id: 66fde136a00d8e0001fd9b48
score_total: 63
tier: warm
research_arm: deep
status: ready
drafted_at: 2026-11-13
---

## research
- WebFetch of circa.ai (2026-11-13, lead-scoring): a life-cycle-assessment (sustainability)
  modeling platform, Gesserit, now in public beta, with 2.5M+ datapoints, 500+ models
  created, and 4,300+ data providers across library integrations (ecoinvent, Federal LCA
  Commons, Building Transparency EC3, Carbon Minds, REEL LCI)
- Usage-based pricing live on the site: free modeling, $0.95/datapoint for licensed data,
  $99/mo per seat for Circa Pro AI features (source: WebFetch circa.ai, 2026-11-13)
- PageSpeed mobile (scripts/pagespeed_check.py --url https://circa.ai, run 2026-11-13):
  performance 67/100, mixed signal (LCP 2.6s is fine, speed index 14.0s is slow) - not
  clean enough to cite as a single, unambiguous weak-site fact, so not used in copy
- 19 employees, flat recent headcount growth (source: Apollo org_data, lead-scoring
  2026-11-13)
- Platform detected as unknown -> new_build_track (source: scripts/platform_detect.py
  --url https://circa.ai --icp startups, lead-scoring 2026-11-13)

## proof_used
- knowledge/business-overview.md (plain capability statement - no approved case study fits
  this vertical; Fispoke is fintech, not a close enough match to cite as a comparable)

## email_1
subject: circa's public beta
body: |
  Hey Steven,

  Going public with Gesserit while the data library is already past 2.5M points and 500
  models is a lot of real product to represent on a marketing site.

  A beta launch like that usually outpaces whoever on the team has time to keep the site
  matching what the product can actually do.

  We build sites for growing teams fast, on a platform your team can run without pulling an
  engineer off the product.

  Worth 15 minutes?

  Ethan

## email_2
subject: who's updating circa.ai
body: |
  Hey Steven,

  At 19 people with a product this data-heavy, there's usually no one whose actual job is
  the website, it rides on whoever has spare time.

  That's the exact gap we fill: a dedicated team that builds it right once and keeps
  maintaining it, so it never competes with shipping product.

  Open to a quick call this week?

  Ethan

## email_3
subject: last note, circa
body: |
  Hey Steven,

  Last one from me.

  If circa.ai is already keeping pace with what Gesserit can do now, no worries at all.

  If it's not, happy to grab 15 minutes and talk through what fixing that would look like.

  Ethan

## fact_check
result: pass
checked_at: 2026-11-13
notes:
- "Gesserit...2.5M points and 500 models" -> matches WebFetch of circa.ai (2026-11-13):
  2.5M+ datapoints, 500+ models created.
- "public beta" -> matches circa.ai's "Now in public beta" label.
- "19 people" -> matches org_data exactly.
- No case study cited - plain capability statement per outreach-email Step 2 (no
  sustainability/LCA-vertical case study exists; Fispoke is fintech, not a close enough
  match). No pricing cited (Circa's own pricing mentioned only in the research block, not
  in the email copy).
- PageSpeed data gathered but deliberately NOT used in copy - mixed signal (good LCP, slow
  speed index), not a clean single fact, so excluded rather than cherry-picked.
- Track/proof consistency: new_build_track lead, no proof used - consistent (nothing to
  mismatch).
- scripts/voice_check.py: clean. Word counts: email_1 ~70w, email_2 ~46w, email_3 ~31w -
  within band, escalating brevity.
- Sign-off: plain "Ethan" (startups). One CTA per email, rotated phrasing, no booking link.
- First sentence specific to this company (Gesserit beta + data-library scale), not
  sendable elsewhere.
