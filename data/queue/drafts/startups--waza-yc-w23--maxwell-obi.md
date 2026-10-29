---
contact_name: Maxwell Obi
contact_title: Co-founder & CEO
organization: Waza (YC W23)
icp: startups
apollo_contact_id: 66f4d3ddfae045000143fd6d
score_total: 57
tier: warm
research_arm: deep
status: ready
drafted_at: 2026-10-29
---

## research
- Waza is a global payments and treasury platform letting businesses in emerging markets pay in USD/EUR/GBP to 100+ countries, with a dashboard for vendor/invoice reconciliation (source: WebFetch https://waza.co, 2026-10-29)
- Homepage claims "military-grade" fraud detection and ISO/PCI DSS compliance (source: WebFetch https://waza.co, 2026-10-29)
- $8M raised Aug 2024 (seed equity + debt, YC among investors), reported profitable since Q4 2023 (source: lead's score_notes)
- Mobile PageSpeed: performance 73/100, LCP 4.8s (source: scripts/pagespeed_check.py --url https://waza.co --strategy mobile, 2026-10-29)
- Platform: unknown (scripts/platform_detect.py) -> new_build_track

## proof_used
- knowledge/case-studies/fispoke.md (fintech vertical fit - institutional trust via a rebuilt site)

## email_1
subject: waza's $8m and your site
body: |
  Hey Maxwell,

  $8M raised and profitable since Q4 2023 is a lot of credibility to put in front of a finance buyer, and your homepage still takes close to 5 seconds to load on mobile, right where a lot of your business owners check it.

  We moved a fintech platform off Wix onto a CMS-driven Webflow build so their own team could publish without touching code, and buyers started taking them seriously.

  Open to connecting this week?

  Ethan

## email_2
subject: trust at the treasury layer
body: |
  Hey Maxwell,

  A payments platform asking businesses to route treasury through it is a trust sell before anything else, and the site is doing a lot of that convincing on its own.

  A fixed-price build gets that first impression right without slowing down the product.

  Up for a quick chat?

  Ethan

## email_3
subject: last one, waza
body: |
  Hey Maxwell,

  Last note from me on this one.

  If the site's already earning that trust with the businesses you're serving, no need to reply.

  If it's not quite there, happy to talk whenever works this week.

  Ethan

## fact_check
result: pass
checked_at: 2026-10-29
notes:
- "$8M raised and profitable since Q4 2023" -> matches lead's score_notes (launchbaseafrica.com, africaprivateequitynews.com, thebridgeclub.beehiiv.com); removed an earlier draft's unsourced "enterprise clients" phrasing since that specific term wasn't confirmed in the research block
- "close to 5 seconds to load on mobile" -> re-ran scripts/pagespeed_check.py --url https://waza.co --strategy mobile 2026-10-29, LCP 4.8s; raw fact about their own site, no Polymer-benchmark comparison
- Fispoke proof -> matches knowledge/case-studies/fispoke.md verbatim-compatible quotable line; track: new_build matches this lead's new_build_track
- scripts/voice_check.py: clean
- word counts: 78 / 51 / 38 - all within band
- sign-off: plain "Ethan", one CTA per email, no booking link
- Cohesion: Fispoke proof appears once (e1) only
- CTA phrasing changed from the original "fits Waza?" templated skeleton (shared with Cleva) to avoid a detectable company-name-swap fingerprint across the batch
