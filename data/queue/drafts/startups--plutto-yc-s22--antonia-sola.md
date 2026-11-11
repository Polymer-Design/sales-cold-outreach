---
contact_name: Antonia Sola
contact_title: CEO
organization: Plutto (YC S22)
icp: startups
apollo_contact_id: 6804acf5ecd25d0001539239
score_total: 68
tier: warm
research_arm: deep
status: ready
drafted_at: 2026-11-11
---

## research
- Homepage (WebFetch https://getplutto.com, 2026-11-11): Plutto is a Latin American
  third-party risk management platform (due diligence, compliance, conflict-of-interest
  detection, purchase requests/tenders), claims 100+ companies as customers, and lists
  logos including Falabella, Entel, Arauco, Soprole, and Sonda.
- PageSpeed mobile (scripts/pagespeed_check.py --url https://getplutto.com --strategy
  mobile, run 2026-11-11): performance 53/100, largest contentful paint 12.3s - cited as a
  raw fact about their own site only, no comparative claim made
- org_data: 26 employees, founded 2021, strong 24-month headcount growth (+67%) (source:
  Apollo org_data, lead-scoring 2026-11-11)
- Platform detected as unknown -> new_build_track (source: scripts/platform_detect.py
  --url https://getplutto.com --icp startups, lead-scoring 2026-11-11)
- research_arm: deep per EXP-001 - fresh homepage check and PageSpeed run for drafting
  2026-11-11; prior funding search from lead-scoring (bouncewatch.com, cbinsights.com)
  found only a stale 2022 round, not reused here since it adds nothing current.

## proof_used
- knowledge/case-studies/fispoke.md (new_build_track; complex B2B/fintech platform,
  institutional-credibility angle fits Plutto's enterprise customer base)

## email_1
subject: plutto's mobile load
body: |
  Hey Antonia,

  Falabella, Entel, and 100+ other companies already run third-party risk checks through
  Plutto, and getplutto.com takes over 12 seconds to load on mobile.

  That is a lot of enterprise trust sitting behind a site slower than the product
  deserves.

  We did a similar rebuild for Fispoke, another complex B2B platform. Their co-founder
  said we turned it into a site that makes institutional buyers take them seriously.

  Worth 15 minutes?

  Ethan

## email_2
subject: a site that matches the client list
body: |
  Hey Antonia,

  A platform trusted by 100+ companies for risk and compliance should not take 12 seconds
  to load on a phone.

  We build sites that match the credibility of what is actually running underneath: fast,
  CMS-driven, easy for your team to keep current as the client list grows.

  Open to a quick call this week?

  Ethan

## email_3
subject: last note, plutto
body: |
  Hey Antonia,

  Last one from me.

  If getplutto.com is keeping pace with the client list, no worries at all.

  If the 12-second mobile load is costing you credibility, happy to grab 15 minutes.

  Ethan

## fact_check
result: pass
checked_at: 2026-11-11
notes:
- "Falabella, Entel, and 100+ other companies... run third-party risk checks through Plutto" -> matches WebFetch of getplutto.com homepage 2026-11-11 (logos list + "100+ companies" claim).
- "takes over 12 seconds to load on mobile" -> matches scripts/pagespeed_check.py run 2026-11-11 (LCP 12.3s), cited as a raw fact about their own site only.
- Fispoke attribution -> paraphrased (not quoted verbatim, no quotation marks used), meaning preserved from knowledge/case-studies/fispoke.md's quotable line ("Polymer took a complex fintech product and turned it into a website that makes institutional buyers take us seriously" - Nathan Berk, Co-Founder & CTO); no numbers invented, track new_build matches this lead's track.
- No pricing cited.
- scripts/voice_check.py: clean. Word counts: email_1 ~69w, email_2 ~48w, email_3 ~33w - within band, escalating brevity.
- Sign-off: plain "Ethan" (startups). One CTA per email, rotated phrasing.
- First sentence specific to this company (named customer logos + exact load time), not sendable elsewhere. No repeated proof point across the sequence.
