---
contact_name: Alex Marantelos
contact_title: Co-Founder & CEO
organization: Intryc (YC S24)
icp: startups
apollo_person_id: 66f151641b2642000174621b
apollo_contact_id: 6ad90228a35fcf0018a02628
score_total: 57
tier: warm
research_arm: deep
status: pushed
drafted_at: 2026-10-21
pushed_at: 2026-10-21T18:19:24Z
mailbox: ethan@growwithpolymer.com
---

## research
- Intryc is a CX quality platform (AI scorecards, AutoQA, coaching, training simulations); homepage leads with "The 90% Accuracy Promise" (a money-back guarantee on AutoQA accuracy) (source: WebFetch https://intryc.com, 2026-10-21)
- Homepage cites enterprise logos (Deel, Preply, Blueground), a 4.8 G2 rating from 30+ reviews, SOC 2/GDPR/HIPAA badges, and "one-click integration with 40+ apps" (source: WebFetch https://intryc.com, 2026-10-21)
- Site asset paths (`/_next/image`, `dpl_` deployment IDs, Vercel-style build) indicate a Next.js/Vercel build, not a hosted builder - per outreach-email skill Step 0, this overrides the scored `new_build_track` tag to **subscription_track** (knowledge/business-overview.md extends the monthly plan to "Astro sites, Vercel sites, and other custom-code sites"). No designer/agency credit in the footer. (source: WebFetch https://intryc.com, 2026-10-21)
- Mobile PageSpeed: performance 52/100, LCP 11.6s (source: scripts/pagespeed_check.py --url https://intryc.com --strategy mobile, run 2026-10-21) - a real, poor score, notably at odds with a product whose core pitch is a guaranteed-accuracy/quality promise
- Confirms lead-scoring's existing note (score_notes, scored 2026-10-19): the Jan 2025 seed round is long decayed; no newer funding/press found during this draft's own research either

## proof_used
- knowledge/business-overview.md#monthly-plans (subscription_track override per above; no approved case study is subscription-tagged yet, plain capability statement only, no tier/price named)

## email_1
subject: the 90% promise
body: |
  Hey Alex,

  Intryc backs its QA scores with a 90% Accuracy Promise, money back if you miss it. Your own homepage loads in 11.6 seconds on mobile, a 52/100 performance score.

  That's a gap between the product promise and the site experience, easy to miss internally, impossible to miss for a prospect on their phone.

  We run ongoing support for growing teams' marketing sites: performance, new pages, fresh proof points, no new project kickoff required.

  Worth 15 minutes?

  Ethan

## email_2
subject: deel, preply, blueground
body: |
  Hey Alex,

  Deel, Preply, Blueground: real enterprise logos, a 4.8 on G2, SOC 2 and HIPAA badges, one-click integration with 40+ apps. Intryc's proof points are stacking up fast.

  A site juggling that much trust signal needs to load, and perform, as well as the product it's representing.

  We keep growing teams' sites fast and current, same team, ongoing, no new kickoff required for every update.

  Up for a quick call this week?

  Ethan

## email_3
subject: last one, intryc
body: |
  Hey Alex,

  Last note from me.

  If the site loads fine for everyone else, ignore this entirely.

  If 11.6 seconds on mobile is news to you, happy to grab 15 minutes and talk through a fix.

  Ethan

## fact_check
result: pass
checked_at: 2026-10-21
notes:
- "The 90% Accuracy Promise" / money-back guarantee -> re-fetched https://intryc.com, banner confirmed verbatim
- "Deel, Preply, Blueground" logos, "4.8 on G2," SOC 2/HIPAA badges, "one-click integration with 40+ apps" -> re-fetched, all confirmed verbatim on the homepage
- "11.6 seconds on mobile, 52/100 performance" -> verified against scripts/pagespeed_check.py output exactly (largest_contentful_paint display "11.6 s", performance_score_0_100: 52) - raw fact about the lead's own site, no comparative claim
- Track override to subscription_track: re-confirmed `/_next/image` and Vercel-style deployment paths (Next.js signature), no hosted-builder markers - knowledge/business-overview.md "On Astro, Vercel, or another custom-code site: a monthly plan still fits" supports the override; copy pitches ongoing support only, never a rebuild, no case study or tier/price named
- No pricing number or specific tier named anywhere in the sequence
- scripts/voice_check.py: clean, no banned words/phrases/em dashes
- word counts: email_1 79w, email_2 74w, email_3 37w - all within band
- sign-off: plain "Ethan" (startups)
- single CTA per email, no booking link, first sentence (the accuracy promise vs. the site's own load time) specific to this company and not sendable elsewhere
- checked against other recent drafts in data/queue/ for repeated sentence shapes - distinct hook/structure; the LCP stat is stated precisely once (email_1) and referenced only generally in email_3's closer, not restated as a new claim
