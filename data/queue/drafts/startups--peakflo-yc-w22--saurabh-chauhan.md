---
contact_name: Saurabh Chauhan
contact_title: Founder & CEO
organization: Peakflo (YC W22)
icp: startups
apollo_contact_id: 683589b6c137f00001d9af35
score_total: 55
tier: warm
research_arm: deep
status: ready
drafted_at: 2026-10-30
---

## research
- Peakflo's own domain on file (peakflo.ai) 302-redirects to peakflo.co. `scripts/platform_detect.py` confirms WordPress on both peakflo.ai and peakflo.co, matching lead-scoring's recorded platform, so `new_build_track` is confirmed, not overridden (source: WebFetch https://peakflo.ai, 2026-10-30; `python scripts/platform_detect.py --url https://peakflo.ai --icp startups` and `--url https://peakflo.co --icp startups`, run 2026-10-30)
- The live homepage (peakflo.co/peakflo-ai) now leads with "Agentic workflows that automate and execute your back-office operations," naming five AI agent products (Orchestrator, Voice Agent, Browser Agent, WhatsApp Agent, Spend Agent) in place of the older straight AP/AR-automation pitch; footer reads "© 2025 by Peakflo" (source: WebFetch https://peakflo.co/peakflo-ai, 2026-10-30)
- Customer logos shown on the live site include AboitizPower, Hitachi, Carousell, SB Finance, Meratus, and Ninja Van - enterprise and mid-market finance buyers (source: WebFetch https://peakflo.co/peakflo-ai, 2026-10-30)
- Chased score_notes' flagged "TechCrunch mentions newer fundraising activity but gives no amount/date": re-fetched the TechCrunch article directly (techcrunch.com/?p=2347712, Alex Wilhelm, published 2022-07-05 6:00pm PDT). It covers only the original $4.1M seed ("the rest of the $4.1 million that Peakflo has raised to date came later, in a round that closed a few weeks back") - no newer round. Cross-checked fintech.global, Caplight, and VCBacked plus a direct search for 2025/2026 Peakflo funding news; nothing newer surfaces anywhere. Confirmed there is no fresher funding fact available - not claimed anywhere in the copy below, consistent with lead-scoring's 0 intent score (source: WebFetch https://techcrunch.com/?p=2347712, 2026-10-30; WebSearch "Peakflo TechCrunch funding 2025 2026 Series A raise", 2026-10-30; WebSearch "Peakflo rebrand OR acquired OR merger peakflo.co 2025", 2026-10-30)
- Mobile PageSpeed on the live site: performance 28/100, LCP 65.6s (source: `scripts/pagespeed_check.py --url https://peakflo.co --strategy mobile`, run 2026-10-30) - raw fact about their own site, used as supporting evidence only, not the opener

## proof_used
- knowledge/case-studies/fispoke.md (track: new_build, icp_fit: startups, status: approved) - direct quote from the "Quotable lines" section

## email_1
subject: peakflo's agentic pivot
body: |
  Hey Saurabh,

  Peakflo's homepage just repositioned around agentic AI: an orchestrator, a voice agent, a browser agent, automating back-office work.

  Sharp pitch, but the site is still WordPress and takes 65.6 seconds to paint on mobile, a rough first look for a finance team at Hitachi or AboitizPower.

  We did something similar for Fispoke, another fintech company. Their co-founder's words: "Polymer took a complex fintech product and turned it into a website that makes institutional buyers take us seriously."

  Make sense to connect?

  Ethan

## email_2
subject: two domains, one platform
body: |
  Hey Saurabh,

  peakflo.ai now forwards to peakflo.co, footer dated 2025, so somebody's been in there this year rebuilding the pitch around agentic AI.

  The platform didn't get the same update: still WordPress, still the kind of builder that looks out of place next to the Hitachi and AboitizPower logos on the page.

  We build fixed-price sites matched to where a company's headed, live in weeks, same team after launch to keep building.

  Open to chatting this week?

  Ethan

## email_3
subject: one more from me, Saurabh
body: |
  Hey Saurabh,

  I'll leave it here unless I hear from you.

  If WordPress is fine for now while the agentic pitch is the priority, that's a fair call.

  If a faster, better-matched site would help that pitch land with buyers like Hitachi and AboitizPower, want to jump on a call?

  Ethan

## fact_check
result: pass
checked_at: 2026-10-30
notes:
- "Peakflo's homepage repositioned around agentic AI: orchestrator, voice agent, browser agent" -> re-fetched https://peakflo.co/peakflo-ai (via the peakflo.ai redirect), confirmed verbatim ("Agentic workflows that automate and execute your back-office operations") plus the five named agent products
- "peakflo.ai now forwards to peakflo.co" -> re-confirmed via WebFetch (302 redirect) and `python scripts/platform_detect.py --url https://peakflo.ai` / `--url https://peakflo.co`, both return platform: wordpress, track: new_build_track - matches lead-scoring's recorded platform, no stale-tag override needed
- "footer dated 2025" -> re-fetched, footer reads "© 2025 by Peakflo", verbatim
- "Hitachi, AboitizPower" logos -> re-fetched, both present on the live homepage among the customer logo set
- "65.6 seconds to paint on mobile" -> verified against `scripts/pagespeed_check.py --url https://peakflo.co --strategy mobile` output (largest_contentful_paint display "65.6 s", performance 28/100); raw fact about the lead's own site only, no comparative claim to Polymer's benchmark - compliant with the PageSpeed citation rule regardless of pagespeed-benchmark.md's approved status
- score_notes' flagged "TechCrunch mentions newer fundraising activity but gives no amount/date" -> chased down and resolved: re-fetched techcrunch.com/?p=2347712 (Alex Wilhelm, 2022-07-05) directly, confirmed it covers only the original $4.1M seed, no newer round; cross-checked fintech.global, Caplight, VCBacked, and a direct funding/rebrand search turned up nothing newer. No funding claim of any kind appears in the copy - correctly treated as unconfirmed and left out
- Fispoke quote ("Polymer took a complex fintech product and turned it into a website that makes institutional buyers take us seriously.") -> matches knowledge/case-studies/fispoke.md verbatim, attributed to Nathan Berk, Co-Founder & CTO; case study status: approved, track: new_build, icp_fit: startups - matches this lead's new_build_track, no numbers/results borrowed beyond the quote itself
- Caught and fixed on this pass: original draft said "We did the same for Fispoke," which could misread as claiming Fispoke was also a WordPress-to-rebuild situation (it was actually a Wix migration) - reworded to "We did something similar for Fispoke" so the claim is accurate without overspecifying a platform match that isn't true
- Polymer positioning line ("fixed-price sites... live in weeks... same team after launch to keep building") -> verbatim-compatible with knowledge/business-overview.md positioning line ("A fixed price. A live site in weeks. The same team to keep it growing."); no specific tier/price named; no mention of Webflow anywhere in the sequence, correctly following the 2026-10-26 pitch-rule correction (Peakflo is on WordPress, not Webflow, so naming Webflow would misrepresent what's being offered) - several recent sibling drafts in data/queue/ (e.g. parametric, sendtowin, korio) predate that correction and do name Webflow; this draft does not repeat that
- Track/proof consistency: new_build_track lead (confirmed above), Fispoke case study tagged track: new_build - correct pairing, no subscription-track language anywhere
- `python scripts/voice_check.py`: clean, no banned words/phrases/openers/em dashes
- word counts: email_1 84w, email_2 78w, email_3 51w - all within band (e1 50-85, e2 40-80, e3 30-60)
- sign-off: plain "Ethan" each email (startups, cold 1-3)
- single CTA per email, no booking link anywhere, first sentence of email_1 (the agentic-AI reposition) and email_2 (the domain redirect) are both specific to Peakflo and not sendable to any other company
- checked against recent drafts in data/queue/drafts/ for repeated sentence shapes: email_3 deliberately avoids the "Last note from me... no worries... happy to grab 15 minutes" skeleton used in at least four recent sibling drafts (patientdesk-ai, parametric, sendtowin, korio); email_1 CTA uses "Make sense to connect?" instead of "Worth 15 minutes?" (used by multiple siblings) to reduce cross-draft phrase repetition; proof point (Fispoke) appears once only, in email_1, not reused in email_2/3
