---
contact_name: Susan Wang
contact_title: Head of Growth & Operations
organization: Botlearn｜Aibrary
icp: startups
apollo_contact_id: 60cba07103643f0001ba97e6
score_total: 71
tier: warm
status: ready
drafted_at: 2026-10-20
---

## research
- Aibrary 2.0 launched Sept 23, 2025 as "the world's first Agentic AI for Lifelong Learning," a consumer AI learning app with iOS/Android apps (source: https://www.globenewswire.com/news-release/2025/09/23/3154718/0/en/AI-Library-for-Personal-Growth-Aibrary-Introduces-the-World-s-First-Agentic-AI-for-Lifelong-Learning.html)
- Homepage text has no explanatory body copy about what the product does beyond the title and tagline - just "Aibrary 2.0" / "Your AI Learning Companion" and a few "personalized" audio episode labels (source: WebFetch https://aibrary.ai, 2026-10-20)
- Mobile PageSpeed: performance 61/100, LCP 29.2s (source: scripts/pagespeed_check.py --url https://aibrary.ai --strategy mobile, run 2026-10-20)
- Real headcount growth this year: Caplight reports 50% QoQ growth to 15 employees as of 2026-07-06 (source: Caplight via WebSearch, 2026-10-20), consistent with org_data's 163.6% 6-month growth figure
- Site platform: no builder marker detected, confirmed via scripts/platform_detect.py --url https://aibrary.ai --icp startups (2026-10-20)

## proof_used
- knowledge/case-studies/fispoke.md (25-page CMS-driven Webflow build with SEO/AEO and structured data built in from scratch)

## email_1
subject: aibrary's thin homepage
body: |
  Hey Susan,

  Aibrary 2.0 launched as agentic AI for lifelong learning, but the homepage never explains what that means. No body copy, just a title and a tagline, and it takes 29 seconds to load the main content on mobile.

  We rebuilt a fintech company's site into a 25-page CMS-driven Webflow build with SEO and structured data built in from scratch, the kind of story a relaunch like 2.0 needs.

  Worth 15 minutes?

  Ethan

## email_2
subject: growing fast, thin story
body: |
  Hey Susan,

  Aibrary's adding headcount fast this year, Caplight had you up 50% in a quarter, and a learning app scaling that quickly needs a homepage that can keep up. Right now yours leans on a title and a tagline with nothing underneath.

  We build Webflow sites your own team can publish and edit without a developer.

  Up for a quick call?

  Ethan

## email_3
subject: last one on this
body: |
  Hey Susan,

  Last note from me. If the homepage isn't a priority with everything else moving at Aibrary, no worries.

  If a 29-second mobile load is quietly costing downloads mid-growth, open to a short call?

  Ethan

## fact_check
result: pass
checked_at: 2026-10-20
notes:
- "Aibrary 2.0 launched as agentic AI for lifelong learning" -> verified against globenewswire.com press release dated 2025-09-23 (title: "AI Library for Personal Growth: Aibrary Introduces the World's First Agentic AI for Lifelong Learning"); used as a current-enough factual anchor for what the product is, not claimed as a fresh trigger (scored 0 intent credit for this specific item on the same basis)
- "the homepage never explains what that means. No body copy, just a title and a tagline" -> verified against WebFetch of https://aibrary.ai, 2026-10-20: no explanatory product copy beyond the "Aibrary 2.0" title and "Your AI Learning Companion" tagline
- "takes 29 seconds to load the main content on mobile" -> verified against scripts/pagespeed_check.py --url https://aibrary.ai --strategy mobile (run 2026-10-20): LCP 29.2s, performance 61/100. Raw fact about the lead's own site, no comparison to Polymer's benchmark made
- "added headcount fast this year, Caplight had you up 50% in a quarter" -> verified against Caplight data (via WebSearch 2026-10-20) reporting 50% QoQ growth to 15 employees as of 2026-07-06; consistent direction with org_data's independently-sourced 163.6% 6-month Apollo growth figure
- "a 25-page CMS-driven Webflow build with SEO and structured data built in from scratch" -> matches knowledge/case-studies/fispoke.md verbatim (status: approved, track: new_build, matches this lead's new_build_track); framed as "a fintech company," not implying Aibrary shares Fispoke's situation
- "We build Webflow sites your own team can publish and edit without a developer" -> matches knowledge/business-overview.md "What we sell to each ICP" ("Webflow... means their team can edit content without a developer"), a general capability statement, not re-citing Fispoke's specific numbers in email_2 (avoids repeating the same proof point twice)
- voice_check.py: clean
- word counts: email_1 74w, email_2 63w, email_3 36w - all within band, brevity escalates toward email_3
- sign-off: plain "Ethan", no "God Bless" (startups per knowledge/voice-and-tone.md)
- track consistency: new_build_track lead, pitches a rebuild, proof case study tagged track: new_build - consistent
- subject lines and structure checked against other drafts in this batch - distinct hooks and phrasing, no repeated CTA phrasing across this batch's emails so far
