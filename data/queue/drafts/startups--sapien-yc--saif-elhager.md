---
contact_name: Saif Elhager
contact_title: Co-Founder & CEO
organization: Sapien (YC)
icp: startups
apollo_contact_id: 610becc6c0f8e7000123e25f
score_total: 58
tier: warm
status: ready
drafted_at: 2026-10-20
---

## research
- Sapien (asksapien.ai, Outrove Inc., YC S25) builds synthetic-population market research, simulating audiences to predict responses to products, prices, and campaigns; site claims 93.3% average accuracy across 19 benchmark tests and offers a "Book a demo" CTA (source: WebFetch https://asksapien.ai, 2026-10-20)
- No careers or jobs page linked on the site (source: WebFetch https://asksapien.ai, 2026-10-20)
- Mobile PageSpeed: performance 58/100, LCP 10.2s (source: scripts/pagespeed_check.py --url https://asksapien.ai --strategy mobile, run 2026-10-20)
- Site platform: no builder marker detected, confirmed via scripts/platform_detect.py --url https://asksapien.ai --icp startups (2026-10-20)

## proof_used
- knowledge/case-studies/fispoke.md (25-page CMS-driven Webflow build with SEO/AEO and structured data built in from scratch)

## email_1
subject: 93.3% accuracy, 10-second load
body: |
  Hey Saif,

  Sapien pitches 93.3% prediction accuracy across 19 benchmarks, and the site making that case takes 10 seconds to load its main content on mobile, a strange first impression for a product built on speed and precision.

  We rebuilt a fintech company's site into a 25-page CMS-driven build with SEO and structured data from scratch, the kind of fix that matches the rest of what Sapien's selling.

  Does a call make sense this week?

  Ethan

## email_2
subject: a demo request, slow first
body: |
  Hey Saif,

  Someone clicking "Book a demo" after seeing Sapien's benchmark numbers is sitting through a 10-second mobile load first, before they've seen anything that backs the claim up.

  We build Webflow sites a founder can keep updating without pulling in an engineer.

  Any interest in connecting this week?

  Ethan

## email_3
subject: one more note, Sapien
body: |
  Hey Saif,

  If the site isn't a priority right now, no worries.

  If a 10-second load is undercutting a strong benchmark story, any interest in talking this week?

  Ethan

## fact_check
result: pass
checked_at: 2026-10-20
notes:
- "Sapien pitches 93.3% prediction accuracy across 19 benchmarks" -> verified against WebFetch of https://asksapien.ai, 2026-10-20: the site itself states a 93.3% average accuracy rate across 19 benchmark tests; attributed as Sapien's own marketing claim, not independently verified or presented as a Polymer claim
- "Book a demo" CTA -> verified against the same WebFetch, 2026-10-20
- "no careers or jobs page linked" -> verified against the same WebFetch, 2026-10-20; a separate WebSearch for a Sapien YC jobs listing only turned up an unrelated, differently-located fintech company of the same name (sapien.ai, not asksapien.ai), so this stays an unconfirmed-either-way default rather than a verified absence
- "takes 10 seconds to load its main content on mobile" / "a 10-second mobile load" -> verified against scripts/pagespeed_check.py --url https://asksapien.ai --strategy mobile (run 2026-10-20): LCP 10.2s, performance 58/100. Raw fact about the lead's own site only
- "a 25-page CMS-driven build with SEO and structured data from scratch" -> matches knowledge/case-studies/fispoke.md (status: approved, track: new_build, matches this lead's new_build_track); used once (email_1 only), not repeated in email_2
- "We build Webflow sites a founder can keep updating without pulling in an engineer" -> matches knowledge/business-overview.md general capability claim
- platform_detect.py returned "unknown" (confirmed 2026-10-20) - no specific hosted-builder claimed
- voice_check.py: clean
- word counts: email_1 76w, email_2 50w, email_3 29w - all within band
- sign-off: plain "Ethan", no "God Bless" (startups)
- CTA/subject phrasing cross-checked against all five prior drafts in this batch - "Worth a quick call?" (exact match to Multiplier's email_3 CTA) and "sound worth a short call?" (too close to CloudForge's "Sound worth 15 minutes?") were both replaced; subjects distinct from the rest of the batch
