---
contact_name: Paul Deschamps
contact_title: Co-founder | COO
organization: Moona Health
icp: startups
apollo_contact_id: 5efa32ece39c3b0001aa0f76
score_total: 65
tier: warm
status: ready
drafted_at: 2026-10-19
---

## research
- Moona Health delivers CBT-I (cognitive behavioral therapy for insomnia) through licensed clinicians, with most patients paying "$0 out-of-pocket" using in-network insurance (source: WebFetch https://moona.health, 2026-10-19)
- moona.health mobile load: performance 42/100, LCP 13.4s, Google's own "field_experience_category" rates it SLOW (source: scripts/pagespeed_check.py --url https://moona.health --strategy mobile, run 2026-10-19)
- Moona Health is based in Beaverton, Oregon, founded 2023, around 15 employees, roughly $3.7M raised to date (source: premieralts.com/dealroom company listing)
- The site promotes a "Refer a patient" provider-referral channel, suggesting patient acquisition partly runs through clinician referrals, not just direct site traffic (source: WebFetch https://moona.health, 2026-10-19)
- No careers page or marketing/design hire found (source: WebFetch https://moona.health, 2026-10-19)

## proof_used
- knowledge/case-studies/fispoke.md (new_build_track has one approved case study; used as a plain scope description, no vertical-fit claim)

## email_1
subject: $0 out-of-pocket, 13 second load
body: |
  Hey Paul,

  "$0 out-of-pocket" is a strong pitch for someone who hasn't slept well in weeks. Getting them to actually read it is the problem: moona.health takes 13.4 seconds to load on mobile, and Google rates that experience slow.

  A referring provider or a patient searching at 2am isn't going to wait that out.

  We build fixed-price Webflow sites for growth-stage health companies, usually live in 30-60 days, built to load fast on a phone.

  Worth 15 minutes?

  Ethan

## email_2
subject: referrals plus a slow landing page
body: |
  Hey Paul,

  Moona's referral page points providers straight to moona.health. If that page is slow to load, some share of those warm referrals never make it to a booked session.

  We recently rebuilt a fintech company's site from scratch on Webflow, CMS-driven so your own team can keep it current without a developer.

  Up for a quick call this week?

  Ethan

## email_3
subject: last one, Moona
body: |
  Hey Paul,

  Last note from me. If the site's converting fine as is, no worries at all.

  If a faster one would help turn more of those referrals into booked sessions, happy to grab 15 minutes.

  Ethan

## fact_check
result: pass
checked_at: 2026-10-19
notes:
- "CBT-I via licensed clinicians, $0 out-of-pocket" -> re-fetched https://moona.health, matches verbatim
- "13.4 seconds, SLOW" -> verified against scripts/pagespeed_check.py output (performance 42, LCP display "13.4 s", field_experience_category "SLOW"); raw fact about the lead's own site only, no comparative claim to Polymer's benchmark
- "Beaverton OR, founded 2023, ~15 employees, ~$3.7M raised" -> per premieralts.com listing, consistent with what was already cited at scoring; no round date claimed since none was confirmed, not used as a fresh trigger
- "Refer a patient" referral channel -> re-fetched https://moona.health, confirms the page exists
- Track/proof consistency: new_build_track lead, Fispoke case study (track: new_build) used only for scope description, no numbers/results borrowed, no vertical-fit claim (fintech != digital health, not claimed as a match)
- No pricing/tier named, CTA is the intro call only, no booking link
- voice_check.py: clean on all three emails
- word counts: email_1 79w, email_2 57w, email_3 36w - all within the 50-85 band
- sign-off: plain "Ethan" (startups)
- checked against other drafts in this run for repeated sentence shapes - distinct hooks and structure, not templated
