---
contact_name: Anabelle Savion
contact_title: Co-Founder & Chief Operating Officer
organization: Lavior Pharma Inc
icp: startups
apollo_contact_id: 6727b0214d3c08000183a653
score_total: 66
tier: warm
status: ready
drafted_at: 2026-10-19
---

## research
- Lavior Pharma is a Miami-based pharmaceutical company developing first-in-class therapies, especially for diabetic foot ulcers and chronic wounds (source: https://app.fundz.net/executives/lavior-pharma-hired-d179)
- Ashlyn Tapley was promoted to Vice President of Sales on 2026-09-25 to lead U.S. sales strategy and oversee international sales (source: https://app.fundz.net/executives/lavior-pharma-hired-d179, https://pluang.com/en/news-feed/lavior-promosi-ashlyn-tapley-wakil-presiden-penjualan)
- ~20 US employees per a LeadIQ company profile (source: https://leadiq.com/c/lavior-pharma-inc/5a1dbfbf2300005400bf9628/employee-directory)
- Platform detected as WordPress -> new_build_track (source: scripts/platform_detect.py --url https://lavior.com --icp startups, run 2026-10-19)
- lavior.com mobile load: performance 39/100, LCP 14.0s (source: scripts/pagespeed_check.py --url https://lavior.com --strategy mobile, run 2026-10-19)

## proof_used
- knowledge/case-studies/fispoke.md (new_build_track's one approved case study; used as a plain scope description, no vertical-fit claim - pharma is not fintech)

## email_1
subject: Lavior's new VP of sales
body: |
  Hey Anabelle,

  Ashlyn Tapley just took over U.S. sales strategy at Lavior, and the site she's about to lean on for credibility takes 14 seconds to load on a phone.

  That's the kind of gap a prospect notices before anyone picks up the phone.

  We build fixed-price Webflow sites for growing teams, usually live in 30-60 days, with a CMS so your team can update it without needing a developer.

  Worth 15 minutes?

  Ethan

## email_2
subject: the site before the science
body: |
  Hey Anabelle,

  A doctor or investor checking out Lavior's wound-care pipeline for the first time sizes up the website before they read a word about the science.

  That's a lot of weight for a WordPress site built for simpler needs to carry.

  We recently rebuilt a fintech client's site into a CMS-driven Webflow build, so their own team could publish updates without touching code.

  Up for a quick call this week?

  Ethan

## email_3
subject: last one, Lavior
body: |
  Hey Anabelle,

  Last note from me on this one.

  If Lavior's site is working fine as you scale the sales team, no worries at all.

  If a faster, easier-to-update build would help instead, happy to grab 15 minutes.

  Ethan

## fact_check
result: pass
checked_at: 2026-10-19
notes:
- "Miami-based pharmaceutical company... diabetic foot ulcers and chronic wounds" -> matches app.fundz.net profile, used only as background, not claimed in the emails themselves beyond "wound-care pipeline"
- "Ashlyn Tapley promoted to VP of Sales 2026-09-25, U.S. sales strategy" -> confirmed against fundz.net and pluang.com, both consistent; 24 days old as of 2026-10-19, well within the 0-30 day trigger window, cited accurately as "just took over"
- "WordPress" platform claim -> confirmed via scripts/platform_detect.py output, cited only as the platform name, no unverified "stock theme" characterization added
- "14 seconds to load on a phone" -> verified against scripts/pagespeed_check.py output (LCP display "14.0 s", performance 39); raw fact about the lead's own site, no comparative claim to Polymer's benchmark
- Track/proof consistency: new_build_track lead, Fispoke case study used only as a generic rebuild/CMS scope description ("rebuilt a fintech client's site... CMS-driven"), no numbers or results borrowed, no claim that Lavior is in fintech
- No pricing/tier named, single CTA (intro call) in each email, no booking link
- scripts/voice_check.py: clean, no banned words/phrases/em dashes
- word counts: email_1 74w, email_2 72w, email_3 39w - all within band
- sign-off: plain "Ethan" (startups, correct per voice-and-tone.md)
- checked against this run's other drafts (ramenvr/sparrow/puntt/protein-pints) for repeated sentence shapes - distinct hooks and structure
