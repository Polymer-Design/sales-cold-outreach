---
contact_name: Michele Barnes
contact_title: Business Administrator
organization: Real Life Christian Church
icp: churches
apollo_contact_id: 57de5105a6da987b3509b34a
score_total: 58
tier: warm
research_arm: light
status: ready
drafted_at: 2026-10-30
---

## research
- 3 physical campuses (Clermont, Mount Dora, Orlando) under the tagline "One Church, multiple locations," but no service times, capacity, or ministry breadth found on the homepage (source: score_notes, homepage checked directly during lead-scoring, scored_at 2026-10-30)
- Confirmed Planning Center / Church Center: churchcenter_subdomain "reallife" -> reallife.churchcenter.com (source: score_notes, technographic check during lead-scoring, scored_at 2026-10-30; subdomain format per scripts/church_crawler.py's `{slug}.churchcenter.com` convention)
- Site platform: WordPress -> new_build_track (source: platform field recorded on the lead during lead-scoring, scored_at 2026-10-30)
- org_data estimated_num_employees=56, mid-range for a 3-campus org (source: Apollo org_data, recorded during lead-scoring)
- Michele Barnes, Business Administrator, verified email - only decision-maker contact found on this org (source: data/leads/index.jsonl, Apollo people-search enrichment)
- research_arm: light per EXP-001 (data/experiments.md) - no new searches run. All facts above are reused from lead-scoring's score_notes and free Apollo/org_data/platform fields only, per outreach-email skill Step 1.

## proof_used
- knowledge/case-studies/landmark-church.md (recurring platform costs cut ~70%, a multi-campus church - chosen over the org's organic-search stat since it speaks directly to a Business Administrator's budget/ops lens, and to avoid repeating the same proof sentence already used in several other recent church drafts in data/queue/drafts/)

## email_1
subject: three campuses, one gap
body: |
  Hey Michele,

  "One Church, multiple locations" is Real Life's line across Clermont, Mount Dora, and Orlando, with Church Center confirmed live at reallife.churchcenter.com, but the homepage skips service times, capacity, and ministry info for all three.

  When we rebuilt Landmark Church's site, another multi-campus church, around Church Center, their recurring platform costs dropped about 70%, from $3-4k a year to under $1k.

  Up for a quick call about what that'd look like for three campuses?

  God Bless,
  Ethan

## email_2
subject: who updates three campuses
body: |
  Hey Michele,

  Real Life's site runs on WordPress, not Church Center, so someone has to manually update three campuses in one system while giving, groups, and events live in another.

  At 56 people total, that's rarely anyone's full-time job. It's whoever has room on their plate that week.

  We wire the site straight into Church Center, so campus updates happen once, not three separate times by hand.

  Could we grab a few minutes this week?

  God Bless,
  Ethan

## email_3
subject: last note, real life
body: |
  Hey Michele,

  Last one from me. If the website's not the priority this year with three campuses to run, no worries at all.

  If the Church Center gap is actually a headache for your team, let me know and we can find 15 minutes this week.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-10-30
notes:
- "3 physical campuses (Clermont, Mount Dora, Orlando)" and tagline "One Church, multiple locations" -> verified against data/leads/index.jsonl score_notes verbatim ("3 physical campuses (Clermont, Mount Dora, Orlando), 'One Church, multiple locations'"), scored_at 2026-10-30, same day
- "no service times, capacity, or ministry breadth" on the homepage -> verified against score_notes verbatim ("no service times/capacity/ministry breadth found on homepage")
- "Church Center confirmed live at reallife.churchcenter.com" -> verified against score_notes ("confirmed churchcenter_subdomain 'reallife' (20/20)"); URL constructed from the confirmed slug per scripts/church_crawler.py's documented `{slug}.churchcenter.com` convention, not a new fetch (light arm compliant)
- "site runs on WordPress" -> verified against data/leads/index.jsonl "platform": "wordpress"
- "56 people total" -> verified against data/leads/index.jsonl org_data.estimated_num_employees = 56
- Michele Barnes as the only contact -> verified against data/leads/index.jsonl contacts array (single entry, Business Administrator, email_status verified)
- "recurring platform costs dropped about 70%, from $3-4k a year to under $1k" -> verbatim-compatible with knowledge/case-studies/landmark-church.md quotable line ("Cut recurring platform costs by roughly 70%, from $3-4k/year down to under $1k/year"); status: approved, icp_fit: churches, track: new_build, matches this lead's new_build_track - no numbers altered
- "Landmark Church, another multi-campus church" -> supported by the same file's own quotable line ("Moved [a multi-site church] off Subsplash...") and situation section (two physical locations) - not an invented descriptor
- No PageSpeed claim made and none needed verifying - light arm correctly skipped it (scoring didn't run it either)
- No pricing/tier quoted for Polymer's own services (new-build pricing for multi-campus churches is scope-on-a-call per knowledge/business-overview.md, correctly left out of the cold sequence)
- Track/proof consistency: new_build_track lead (WordPress, a hosted builder, per business-overview.md "lead with a new build"), all three emails pitch a rebuild/integration, never a monthly plan - consistent
- research_arm: light recorded in frontmatter; confirmed no new WebSearch/WebFetch calls made - every fact traces to score_notes, data/leads/index.jsonl org_data/platform fields, or knowledge/case-studies/landmark-church.md
- scripts/voice_check.py: clean, no banned words/clichés/openers/em dashes
- word counts (recomputed programmatically): email_1 78w, email_2 78w, email_3 49w - all within band (50-85/40-80/30-60), email_1 and email_2 both under the 80-word aim
- sign-off: "God Bless," then "Ethan" on all three (churches) - correct
- single CTA per email, no booking link anywhere, greeting/blank-line paragraph formatting matches voice-and-tone.md
- first sentence (their own "One Church, multiple locations" tagline + the three named campuses) is sendable to no other org
- proof point (Landmark's platform-cost cut) deliberately used instead of the 29.5%-organic-search stat, which already appears in 4+ other church drafts currently in data/queue/drafts/ (covenant-church, opendoor-church, southside-church, tomoka-christian-church) - avoids a repeated proof sentence across the queue and fits Michele's Business Administrator role better than a marketing/SEO stat
- CTA phrasing checked against the other 9 church/startup drafts currently in data/queue/drafts/ for repeated skeletons ("worth 15 minutes?", "open to chatting...", "want to jump on a call...", and "make sense to connect..." each already appear 2-4 times in the queue): all three CTAs here ("Up for a quick call about...", "Could we grab a few minutes this week?", "let me know and we can find 15 minutes this week") use different constructions, including one non-question statement-style close, to avoid adding to those patterns
- cohesion: escalating brevity (78 / 78 / 49 words), proof point not repeated across the three emails, each email introduces a distinct fact (homepage/tagline gap -> WordPress/ownership diffusion -> closer), reads as one thread
