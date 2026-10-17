---
contact_name: Christian Lansang
contact_title: Head of Operations and Growth
organization: Dialogue AI
icp: startups
apollo_contact_id: 5d620c9ff6512549e1881347
score_total: 57
tier: warm
status: pushed
drafted_at: 2026-10-17
pushed_at: 2026-10-17T16:54:39Z
---

## research
- dialogueai.com's homepage logo wall includes Block, Cash App, Meta, TikTok, Google, Wayfair, Nextdoor, Kalshi, and Discord, with featured case studies on Wayfair, Kalshi, and Doctronic (source: WebFetch https://dialogueai.com, 2026-10-17)
- Dialogue AI raised a $6M seed round led by Lightspeed Venture Partners (source: https://www.businesswire.com/news/home/20251017535146/en/Dialogue-AI-Closes-%246M-Seed-Round-to-Bring-Live-AI-led-Customer-Research-to-Every-Team, dated 2025-10-17) - over a year old as of this draft, cited only as a factual funding reference, not a fresh trigger
- dialogueai.com mobile load: performance 50/100, LCP 7.8s (source: scripts/pagespeed_check.py --url https://dialogueai.com --strategy mobile, run 2026-10-17)
- Site platform: no builder marker detected by platform_detect.py, new_build_track by default tagging (source: scripts/platform_detect.py --url https://dialogueai.com --icp startups, 2026-10-17)

## proof_used
- knowledge/case-studies/fispoke.md (25-page CMS-driven Webflow build with SEO/AEO and structured data built in from scratch)

## email_1
subject: big logos, slow load
body: |
  Hey Christian,

  Dialogue AI's homepage runs a logo wall with Meta, Google, Wayfair, and Block on it, the kind of roster that makes a prospect take you seriously before reading a word.

  7.8 seconds is how long that same homepage takes to load on mobile, long enough for that impression to fade before the page finishes.

  We did the same kind of rebuild for a fintech company: 25 pages, a real CMS, SEO and structured data from day one.

  Worth connecting for 15 minutes?

  Ethan

## email_2
subject: faster pages for Wayfair, Kalshi
body: |
  Hey Christian,

  The Wayfair and Kalshi case studies on Dialogue AI's site are strong proof. A 7.8-second mobile load is the thing standing between a visitor and actually reading them.

  We'd rebuild the site on Webflow so your team can publish new case studies without waiting on an engineer, and visitors see them fast.

  Up for a quick call this week?

  Ethan

## email_3
subject: last thought, Dialogue AI
body: |
  Hey Christian,

  Last one from me. If the site's not a priority right now, no worries.

  If a 7.8-second mobile load is costing you some of that Wayfair-and-Meta credibility, open to chatting, even briefly?

  Ethan

## fact_check
result: pass
checked_at: 2026-10-17
notes:
- "logo wall with Meta, Google, Wayfair, and Block" -> verified against WebFetch https://dialogueai.com (2026-10-17), full logo list includes all four plus others; four chosen as a representative subset, not misrepresenting
- "Wayfair and Kalshi case studies" -> verified against same WebFetch, featured case studies listed are Wayfair, Kalshi, and Doctronic
- "$6M seed... Lightspeed Venture Partners" -> verified against https://www.businesswire.com/news/home/20251017535146/en/Dialogue-AI-Closes-%246M-Seed-Round-to-Bring-Live-AI-led-Customer-Research-to-Every-Team (2025-10-17); not cited as a recent trigger (already >180 days old, scored 0), only as background in the research block, not stated as new in the email copy
- "7.8 seconds to load on mobile" -> verified against scripts/pagespeed_check.py --url https://dialogueai.com --strategy mobile, LCP display "7.8 s"; raw fact only, no comparative claim
- "25 pages, a real CMS, SEO and structured data from day one" -> matches knowledge/case-studies/fispoke.md verbatim (status: approved, track: new_build, matches this lead's track); referred to as "a fintech company," Fispoke not named
- voice_check.py: clean on all three emails
- word counts: email_1 85w, email_2 62w, email_3 35w - all within band
- sign-off: plain "Ethan"
- subjects/CTAs checked against the other drafts in this batch and data/queue/drafts/ - unique
