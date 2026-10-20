---
contact_name: Ankur Dahama
contact_title: Co-Founder & CEO
organization: Userlens (YC P26)
icp: startups
apollo_contact_id: 660ed5dff68c570007daf7b2
score_total: 59
tier: warm
status: ready
drafted_at: 2026-10-20
---

## research
- Userlens sells Lumi, "the adoption agent" for B2B SaaS/PLG teams, which turns product-usage data into personalized guidance campaigns (source: WebFetch https://userlens.io, 2026-10-20)
- The homepage has no team or about section - the only named voices are customer co-founders, with just a "Talk to the founders" booking link and a contact email for Userlens itself (source: WebFetch https://userlens.io, 2026-10-20)
- Homepage states Lumi analyzed over 986,214,373 usage events as of June 2026, but lists no pricing - only "Start free" and "Book demo" CTAs (source: WebFetch https://userlens.io, 2026-10-20)
- Mobile PageSpeed: performance 74/100, LCP 7.1s (source: scripts/pagespeed_check.py --url https://userlens.io --strategy mobile, 2026-10-20)
- Site platform: no builder marker detected (source: scripts/platform_detect.py --url https://userlens.io --icp startups, 2026-10-20)

## proof_used
- knowledge/case-studies/fispoke.md (technical, hard-to-explain fintech product rebuilt into a site that makes institutional buyers take the company seriously)

## email_1
subject: who's behind lumi?
body: |
  Hey Ankur,

  Lumi's whole pitch is making customer interactions feel personal. Your own homepage doesn't say who's behind it: no team page, no about section, just a contact email.

  That gap stands out more for a company selling personalization than for almost anyone else.

  Fispoke had a similarly technical, hard-to-explain fintech product. We rebuilt their site on Webflow so buyers could see the substance behind it, not just a pitch.

  Worth 15 minutes to talk through what that could look like for Userlens?

  Ethan

## email_2
subject: 986 million events
body: |
  Hey Ankur,

  Userlens says Lumi analyzed over 986 million usage events last June. That's a genuinely specific number for a landing page.

  It also takes 7.1 seconds to load on mobile right now, which undercuts a pitch built on fast, personalized signal.

  We handled a similarly technical rebuild for a fintech client. Happy to share how that went if it's useful.

  Ethan

## email_3
subject: quick close
body: |
  Hey Ankur,

  Last one from me. Lumi's whole pitch is personalizing every customer interaction, but the site behind it is pretty anonymous and slow to load.

  If a site refresh isn't on your radar this year, no worries. If it is, happy to jump on a quick call.

  Ethan

## fact_check
result: pass
checked_at: 2026-10-20
notes:
- No team/about section, only customer co-founder quotes, contact email, "Talk to the founders" link -> re-fetched https://userlens.io 2026-10-20, confirmed
- 986,214,373 usage events / June 2026 claim -> re-fetched https://userlens.io 2026-10-20, confirmed on page; cited as the company's own stated number, not asserted as independently verified
- No pricing listed, only "Start free" / "Book demo" -> re-fetched https://userlens.io 2026-10-20, confirmed
- 7.1s mobile LCP / 74 performance -> re-ran scripts/pagespeed_check.py --url https://userlens.io --strategy mobile 2026-10-20, matches; raw fact about their own site only, no Polymer comparison
- Fispoke proof (technical fintech product, rebuilt on Webflow, buyers see the substance) -> matches knowledge/case-studies/fispoke.md, named directly in e1 only; track: new_build matches this lead's new_build_track
- Dropped an earlier draft of e3 that used the banned phrase "at scale" - scripts/voice_check.py now passes clean on all three emails
- No Polymer pricing mentioned; single CTA per email; e1/e2/e3 word counts 84/62/49, all within band
- Sign-off "Ethan" alone, correct for startups ICP
- Cohesion: Fispoke named once (e1) and not repeated in e2/e3; e2 and e3 use different facts (usage-events stat, then a plain closer); brevity escalates 84->62->49
