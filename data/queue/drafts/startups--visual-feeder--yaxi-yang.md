---
contact_name: Yaxi Yang
contact_title: Co-founder, COO
organization: Visual Feeder
icp: startups
apollo_contact_id: 66f3cdad47398e0001efea46
score_total: 56
tier: warm
research_arm: deep
status: ready
drafted_at: 2026-10-30
---

## research
- Visual Feeder is an immersive DOOH (digital out-of-home) network using projection mapping, motion-responsive graphics, and gesture/AR on retail storefront windows; homepage lists 300+ premium retail window locations "and growing" and shows client logos for Nike, adidas, Paramount Pictures, the NBA, TikTok, Lyft, Live Nation, and The New School/Parsons (source: WebFetch https://visualfeeder.com, 2026-10-30)
- Engagement analytics (impressions, dwell time) are offered as sensors "available upon request" rather than surfaced live on the site itself (source: WebFetch https://visualfeeder.com, 2026-10-30)
- Firmographic, reused from score_notes (lead-scoring, not re-researched): 16 employees, flat ~6-7% headcount growth across 6/12/24mo, founded 2020, confirmed real Chicago projection-mapping ad-tech company co-founded by Yaxi Yang, Co-founder/COO (exact title match)
- Note: score_notes also found a $1.7M seed (May 2022) and a $100K DePaul investment (2023); both are real but 3+ years old, already correctly scored 0/30 for being past the 180-day decay window. Not used here as a trigger or implied to be recent.
- Platform: webflow, confirmed at scoring via scripts/platform_detect.py -> subscription_track. Not re-detected in this pass, reused as-is.
- Mobile PageSpeed: performance 98/100, accessibility 100/100, best practices 96/100, SEO 92/100, LCP 1.7s (scripts/pagespeed_check.py --url https://visualfeeder.com --strategy mobile, 2026-10-30) - site is already fast and clean, nothing weak to flag; logged per Step 1 but not used as a hook or pain point.

## proof_used
- knowledge/business-overview.md (Monthly plans / "Which offer to lead with" - Webflow lead, lead with Grow or Partner; plain capability statement, no approved subscription_track case study exists yet per knowledge/case-studies/README.md)

## email_1
subject: 300 locations and counting
body: |
  Hey Yaxi,

  Visual Feeder's site already lists Nike, adidas, the NBA, and TikTok as clients, on top of 300+ retail window locations and growing.

  Keeping that roster and location count current is a content job on its own, especially with a 16-person team running the rest.

  This isn't a rebuild, you're already on Webflow. It's about a dedicated team on the Grow plan, shipping new campaigns and locations as fast as you land them.

  Make sense to connect?

  Ethan

## email_2
subject: available upon request
body: |
  Hey Yaxi,

  Visual Feeder builds real-time, motion-responsive installations, but the engagement numbers behind them, impressions, dwell time, only show up "upon request," not on the site itself.

  For brands evaluating 300+ locations, that's one extra step between them and a yes.

  A monthly plan is built for exactly this: small, ongoing additions like a live stats panel or new campaign case studies, without a new project every time.

  Want to jump on a call?

  Ethan

## email_3
subject: no rush on this
body: |
  Hey Yaxi,

  No worries if a site refresh isn't on your list right now, plenty of 16-person teams have bigger fires.

  But between the client roster and 300+ locations, Visual Feeder's site is carrying more weight than most, worth a quick call before it falls behind?

  Ethan

## fact_check
result: pass
checked_at: 2026-10-30
notes:
- "300+ premium retail window locations and growing" -> re-fetched https://visualfeeder.com (fresh pass, independent of the drafting fetch): page states "over 300+ premium retail window locations and growing" and repeats "a growing network of over 300+ locations" - confirmed
- Client roster (Nike, adidas, NBA, TikTok, etc.) -> re-fetched; confirmed an "Our Clients" section displays these eight logos (identified by filename, no alt text/visible brand names in page text). Judged citable: the section exists specifically to show these companies as clients, which is what "already lists ... as clients" describes to a site visitor - not an invented claim
- "advanced analytics sensors (available upon request) to measure impressions, dwell time, and engagement" -> re-fetched, confirmed verbatim; draft's paraphrase + direct quote of "upon request" is accurate and not overclaimed
- Motion-responsive / real-time / gesture / AR capability claims (email_2) -> re-fetched, confirmed: "motion-responsive graphics, holograms, 3D anamorphic visuals, AR layers", "motion tracking, gesture recognition, and real-time content responsiveness"
- Firmographic facts (16 employees, founded 2020, flat growth, Chicago, Yaxi Yang co-founder/COO) -> sourced from lead-scoring's score_notes per task instructions (not re-researched, re-scoring explicitly out of scope); lead-scoring's own Step 4 already did the sourced WebSearch verification for these
- Confirmed the 2022 seed round and 2023 DePaul investment (both correctly scored 0/30 as stale in score_notes) are NOT cited anywhere in any of the three emails - no stale funding presented as current
- PageSpeed (98/100/96/92, LCP 1.7s) logged in research per Step 1 but intentionally not used in any email - site has nothing weak to cite, and no comparative Polymer-benchmark claim was made, so no pagespeed-benchmark.md check needed
- Track/proof consistency: subscription_track lead - both email_1 and email_2 pitch the monthly plan (Grow) and ongoing work, never a rebuild; email_1 explicitly states "This isn't a rebuild." "Grow" matches knowledge/business-overview.md's Monthly plans table (startups lead with Grow or Partner on Webflow); no price/hours cited so nothing to mismatch. No case study claimed or borrowed - knowledge/case-studies/README.md confirms no subscription_track case study exists yet, plain capability statement used instead, consistent with proof_used
- scripts/voice_check.py: clean (no banned words/clichés/openers, no em dashes)
- Word counts (script-verified): email_1 79, email_2 75, email_3 47 - all within band (50-85/40-80/30-60), all under the 80-word aim except email_2 at 75 which is also fine
- One CTA per email, no booking link, sign-off plain "Ethan" (startups, no "God Bless"); greeting/paragraph-break formatting matches voice-and-tone.md
- Cohesion: three distinct hooks (client roster + locations / analytics gated behind a request / closer urgency), no repeated proof point verbatim, brevity decreases 79 -> 75 -> 47
- Checked against the two most comparable recent drafts (startups--apero-health-y-combinator--nick-shelly.md and startups--sendtowin--sam-edwards.md, both subscription/webflow-adjacent): CTA phrasing rotated and distinct from both ("Make sense to connect?" / "Want to jump on a call?" / embedded closer question vs. their "Worth connecting on this?" / "Want to grab 15 minutes?" / "Worth 15 minutes?" / "Up for a quick call this week?"); subjects distinct, no "last one, {org}" reuse for email_3
- Caught and fixed one skeleton collision during this pass: email_1's first draft of the proof paragraph read "You're already on Webflow, so this isn't a rebuild," which mirrored apero's "you're already on Webflow, so the fix isn't a rebuild" too closely (same cause-then-conclusion shape). Rewrote to invert the clause order ("This isn't a rebuild, you're already on Webflow...") before finalizing; re-ran voice_check.py and word count after the edit (79 words, clean)
