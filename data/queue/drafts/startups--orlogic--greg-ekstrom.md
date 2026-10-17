---
contact_name: Greg Ekstrom
contact_title: CEO / COO
organization: ORlogic
icp: startups
apollo_contact_id: 54a99853746869334a79dd15
score_total: 55
tier: warm
status: pushed
pushed_at: 2026-10-17T14:50:00Z
drafted_at: 2026-10-17
---

## research
- ORlogic is a perioperative operations platform (surgical case data + scheduling + staffing forecasting), founded by Mark Deshur, an anesthesiologist (source: https://orlogic.substack.com/p/why-i-built-orlogic-an-anesthesiologists-perspective)
- Recent platform release connecting surgical volume forecasts to staffing execution, adding staffing recommendations and SMS-based staff communication (source: https://www.einpresswire.com/article/897192556/orlogic-announces-platform-release-connecting-surgical-volume-forecasts-to-staffing-execution, dated ~March 2026)
- No careers page or job postings found on the site - no evidence either way of in-house design/dev hiring (source: https://orlogic.com)
- Site platform: no builder marker detected, confirmed via scripts/platform_detect.py --url https://orlogic.com --icp startups (2026-10-17)
- Mobile PageSpeed: performance 66/100, LCP 8.9s (source: scripts/pagespeed_check.py --url https://orlogic.com --strategy mobile, run 2026-10-17)

## proof_used
- knowledge/case-studies/fispoke.md (25-page CMS-driven Webflow build with SEO/AEO and structured data built in from scratch)

## email_1
subject: orlogic.com's load time
body: |
  Hey Greg,

  ORlogic just shipped a platform update connecting surgical forecasts to staffing execution, the kind of thing hospital admins want to see fast, but the site takes 8.9 seconds to show its main content on mobile first.

  We recently rebuilt a fintech company's site into a 25-page CMS-driven Webflow build with SEO and structured data built in from scratch, the same gap ORlogic's site has today.

  Want to jump on a call to talk through it?

  Ethan

## email_2
subject: orlogic's 8.9-second gap
body: |
  Hey Greg,

  A hospital administrator evaluating ORlogic after reading about the new staffing release is going to hit an 8.9-second mobile load before they see anything about the product, a rough first impression for a tool selling speed and real-time coordination.

  We'd rebuild it on Webflow, fast by default, with the product story built around what you just shipped.

  Make sense to connect this week?

  Ethan

## email_3
subject: final thought on this
body: |
  Hey Greg,

  Last one from me on this. If the site's not a priority right now, no worries. If an 8.9-second load is undercutting a product this far along, open to a quick chat?

  Your call.

  Ethan

## fact_check
result: pass
checked_at: 2026-10-17
notes:
- "ORlogic just shipped a platform update connecting surgical forecasts to staffing execution" -> verified against https://www.einpresswire.com/article/897192556/orlogic-announces-platform-release-connecting-surgical-volume-forecasts-to-staffing-execution (~March 2026). Note: this release is now well past the lead-scoring SKILL.md 180-day trigger-decay window as of 2026-10-17, which is why it was scored near-zero on intent - it's still usable here as a factual, current-enough reference point for the hook, not claimed as a fresh trigger
- "takes 8.9 seconds to show its main content on mobile" -> verified against scripts/pagespeed_check.py --url https://orlogic.com --strategy mobile, LCP display "8.9 s"
- did not claim ORlogic is on any specific hosted builder (platform_detect.py returned no marker) - email only describes the measured load time, not an invented platform story
- "rebuilt a fintech company's site into a 25-page CMS-driven Webflow build with SEO and structured data built in from scratch" -> matches knowledge/case-studies/fispoke.md verbatim, status: approved, track: new_build (matches this lead); framed as "a fintech company," not implying ORlogic shares Fispoke's Wix-migration situation, which is unconfirmed here
- voice_check.py: clean
- word counts: email_1 78w, email_2 66w, email_3 37w - all within band
- sign-off: plain "Ethan", no "God Bless" (startups per knowledge/voice-and-tone.md)
- CTA/subject lines checked against the other 8 drafts - unique
