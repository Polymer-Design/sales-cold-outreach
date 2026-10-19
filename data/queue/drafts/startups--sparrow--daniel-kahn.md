---
contact_name: Daniel Kahn
contact_title: COO and Co-founder
organization: Sparrow
icp: startups
apollo_contact_id: 66fa7e44676dfc0001f7b6d5
score_total: 60
tier: warm
status: ready
drafted_at: 2026-10-19
---

## research
- Sparrow (sparrowfi.business) sells a marketing/engagement platform for credit unions: automated onboarding, re-engagement, personalized offers, cross-sell campaigns, ROI measurement, and 200+ pre-built journeys (source: WebFetch https://sparrowfi.business, 2026-10-19)
- Site claims 140+ credit union customers and $90B+ in combined assets; named customers include PenFed, Idaho Central, Red Canoe, Century, CUTX, Community (source: WebFetch https://sparrowfi.business, 2026-10-19)
- A Sparrow-Envisant partnership release (2025-02-24, cubroadcast.com, cited during scoring) put the customer count near 85 via CUNA Strategic Services at that time - the current site's 140+ figure shows real growth since, though that release itself is well past the 180-day scoring window and isn't used as a fresh trigger here
- Platform detected as unknown -> new_build_track (source: scripts/platform_detect.py --url https://sparrowfi.business --icp startups, run 2026-10-19)
- sparrowfi.business mobile load: performance 67/100, LCP 5.2s (source: scripts/pagespeed_check.py --url https://sparrowfi.business --strategy mobile, run 2026-10-19)

## proof_used
- knowledge/case-studies/fispoke.md (new_build_track's one approved case study; used as a plain scope description, no vertical-fit claim)

## email_1
subject: 140 credit unions, one load time
body: |
  Hey Daniel,

  Sparrow backs 140+ credit unions managing over $90 billion in assets, institutions that scrutinize every vendor touching member data.

  Right now sparrowfi.business takes 5.2 seconds to load on a phone, which is a lot of patience to ask from someone doing that due diligence.

  We build fixed-price Webflow sites for growth-stage teams, usually live in 30-60 days, with a CMS so your team can keep it current without a developer.

  Worth 15 minutes?

  Ethan

## email_2
subject: all those member journeys
body: |
  Hey Daniel,

  Sparrow ships 200+ pre-built journeys credit unions use to onboard and re-engage members, real operational depth for a product this specific.

  None of that shows up in how fast the site itself feels once a prospect actually lands on it.

  We recently rebuilt a fintech client's site from scratch on Webflow, CMS-driven so a growing team can keep it current without touching code.

  Up for a quick call this week?

  Ethan

## email_3
subject: closing the loop, Sparrow
body: |
  Hey Daniel,

  I'll leave it here.

  140+ credit unions is proof Sparrow's doing the hard part right, so if the website's not a priority this year, that's fair.

  If it is, I'd love 15 minutes to walk through what a rebuild could look like.

  Ethan

## fact_check
result: pass
checked_at: 2026-10-19
notes:
- "140+ credit unions, $90B+ in assets, named customers" -> matches WebFetch of sparrowfi.business verbatim
- "200+ pre-built journeys" -> confirmed via WebFetch of sparrowfi.business
- Feb 2025 Envisant/~85-customer figure is used only as background growth context, not claimed as a fresh trigger (correctly scored 0/30 on intent for this reason)
- "5.2 seconds to load on a phone" -> verified against scripts/pagespeed_check.py output (LCP display "5.2 s", performance 67); raw fact about the lead's own site, no comparative claim
- Track/proof consistency: new_build_track lead (platform unknown), Fispoke case study used only as a generic rebuild/CMS scope description, no numbers borrowed, no claim Sparrow is in fintech
- No pricing/tier named, single CTA per email, no booking link
- scripts/voice_check.py: clean, no banned words/phrases/em dashes
- word counts: email_1 76w, email_2 73w, email_3 45w - all within band
- sign-off: plain "Ethan" (startups)
- checked against this run's other drafts - closer (email_3) uses distinct phrasing ("I'll leave it here") rather than reusing "last note from me" from the Lavior/Aura drafts in this same batch
