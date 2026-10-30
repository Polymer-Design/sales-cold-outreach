---
contact_name: Jay Davis
contact_title: Co-Founder and Chief Operations Officer
organization: Champion Health Plan
icp: startups
apollo_contact_id: 65f3c26981eac2000769d265
score_total: 64
tier: warm
research_arm: deep
status: ready
drafted_at: 2026-10-30
---

## research
- championhmo.com's homepage currently runs 2026 and 2027 plan-year links side by side, with a banner announcing "2027 Agent Certification is Live!" (source: WebFetch https://championhmo.com, 2026-10-30)
- Benefit links are inconsistent across the page: the hero links to /transportation/ and /hearing/, the nav links to /transportation-benefit/ and /hearing-benefit/, and some plan cards (e.g. Champion Select) only have 2026 links even as 2027 content rolls out (source: WebFetch https://championhmo.com, 2026-10-30)
- Mobile PageSpeed: performance 51/100, LCP 20.1s (source: scripts/pagespeed_check.py --url https://championhmo.com --strategy mobile, 2026-10-30)
- Site platform: WordPress -> new_build_track (source: scripts/platform_detect.py --url https://championhmo.com --icp startups, 2026-10-30)
- Recent hiring is operational/broker-facing - Provider Relations Rep, Contract Specialist, Broker Account Managers - no marketing or dev hire, consistent with no in-house build capability (source: lead score_notes, lead-scoring Step 4 WebSearch)
- 37 employees, 65.2% headcount growth over 12 months, healthcare/benefits industry (source: lead score_notes / org_data)

## proof_used
- knowledge/case-studies/fispoke.md (CMS-driven multi-product structure - applies to a plan lineup spanning two states, two plan years, and ten+ plan families)

## email_1
subject: two plan years, one page
body: |
  Hey Jay,

  Champion's homepage right now mixes 2026 and 2027 plan links, and a couple of benefit pages split across two different URL patterns.

  That's what happens when plan pages get built by hand each year, right as brokers are sending people in to check if they qualify.

  We built Fispoke's six product lines onto one CMS-driven structure so new pages publish without copying old ones by hand. Same problem, same fix.

  Worth 15 minutes to see what that looks like for Champion?

  Ethan

## email_2
subject: 20 seconds on mobile
body: |
  Hey Jay,

  Champion's homepage takes just over 20 seconds to load on mobile, and mobile is where most people checking "do I qualify" will open it this time of year.

  You've also been staffing up Broker Account Managers, which means more people pointing more traffic at that same slow page.

  A fixed-price rebuild fixes the speed and the plan-page sprawl in one pass, not a patch on the WordPress site underneath.

  Up for a quick call?

  Ethan

## email_3
subject: no worries either way
body: |
  Hey Jay,

  Last one from me. Two plan years and a 20-second mobile load are both still live on championhmo.com heading into the busiest stretch of enrollment season.

  Totally fine to let it ride if it's not a priority right now. If you'd rather fix it, a 15-minute call is all I'm asking for.

  Ethan

## fact_check
result: pass
checked_at: 2026-10-30
notes:
- 2026 and 2027 plan links appearing side by side (most plan families have both years live, Champion Select only has 2026) -> re-fetched https://championhmo.com 2026-10-30 independently (second WebFetch call, not reused from drafting), confirmed per-plan year breakdown
- Hero vs nav benefit link mismatch (/transportation/ hero vs /transportation-benefit/ nav; /hearing/ hero vs /hearing-benefit/ nav) -> re-fetched https://championhmo.com 2026-10-30, confirmed exact hrefs
- "2027 Agent Certification is Live! Certify today on our new Agent Portal." banner -> re-fetched and quote matches verbatim
- Mobile PageSpeed LCP ~20s, performance ~51-53/100 -> re-ran scripts/pagespeed_check.py --url https://championhmo.com --strategy mobile 2026-10-30, got 20.2s/53 (first run was 20.1s/51; minor run-to-run Lighthouse variance, draft only cites the rounded "just over 20 seconds" / "20-second," not a false-precision decimal, so both runs support the claim); raw fact about their own site only, no Polymer benchmark comparison made
- Platform: WordPress -> new_build_track -> re-ran scripts/platform_detect.py --url https://championhmo.com --icp startups 2026-10-30, confirmed
- Broker Account Manager / Provider Relations / Contract Specialist hiring, no marketing or dev hire -> matches this lead's score_notes verbatim, correctly attributed to lead-scoring's own WebSearch rather than re-run
- Fispoke "six product lines" onto "one CMS-driven structure" -> matches knowledge/case-studies/fispoke.md exactly ("a CMS-driven product suite (six product lines)"); case study status: approved; track: new_build matches this lead's new_build_track (Check 2 track/proof consistency: pass)
- No Polymer pricing quoted; "fixed-price rebuild" phrase matches the approved positioning line in knowledge/business-overview.md ("A fixed price...")
- No PageSpeed comparative claim (no "our clients average X") anywhere in the three emails
- scripts/voice_check.py: clean, zero banned words/phrases/openers/em dashes
- Word counts: e1 84 (band 50-85), e2 77 (band 40-80), e3 55 (band 30-60) - all in band
- One CTA per email, sign-off "Ethan" alone (correct, startups ICP, no "God Bless")
- First sentence of e1 (the 2026/2027 link mismatch) is unsendable to any other company
- Cohesion: Fispoke proof named once (e1) only, not repeated; e2 and e3 draw on different facts (load time + broker hiring, then a closing recap) without restating the proof point; brevity escalates 84 -> 77 -> 55
- Caught on first adversarial pass and rewrote before pass/fail: e3's first draft used the "If [x], no worries. If [y], happy to..." skeleton, which is close to verbatim what startups--waza-yc-w23--maxwell-obi.md and startups--userlens-yc-p26--ankur-dahama.md (both already-committed sibling drafts) used for their own e3 closers. Rewrote e3's structure (plain statement + "Totally fine to let it ride..." / "If you'd rather fix it...") to break the shared skeleton per voice-and-tone.md's "Surviving AI inbox triage" rule before counting this as a pass, not after.
