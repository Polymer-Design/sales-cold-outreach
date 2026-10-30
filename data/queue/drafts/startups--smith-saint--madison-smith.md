---
contact_name: Madison Smith
contact_title: Co-Founder, COO
organization: SMITH&SAINT
icp: startups
apollo_contact_id: 67cf0777b550eb0001139f93
score_total: 59
tier: warm
research_arm: light
status: pushed
drafted_at: 2026-10-30
pushed_at: 2026-10-30T13:59:39Z
mailbox: ethan@growwithpolymer.com
apollo_contact_id_resolved: 6ae4a2cabd8665000cd76fab
---

## research
- SMITH&SAINT is a marketing/advertising agency, 18 employees, founded 2017 (source: Apollo org_data, recorded on the lead during lead-scoring, scored_at 2026-10-30)
- Headcount growth 12mo +23.1%, 24mo +45.5%, flat (0%) over the trailing 6 months (source: Apollo org_data, same lead-scoring record, scored_at 2026-10-30)
- Platform confirmed WordPress, no in-house dev signal found in Apollo's org data -> new_build_track (source: scripts/platform_detect.py output, recorded in score_notes during lead-scoring, scored_at 2026-10-30)
- Madison Smith, Co-Founder & COO, is the only verified decision-maker contact on this org; no marketing/growth hire exists in Apollo's contact data, so per icp-startups.yaml's decision_maker_titles, the Founder/COO is the correct direct contact (source: Apollo contact data, apollo_id 67cf0777b550eb0001139f93)
- research_arm: light per EXP-001 (data/experiments.md) - no new WebSearch/WebFetch run. All facts above are reused from lead-scoring's score_notes plus the free org_data/platform_detect fields already on the lead record, per outreach-email skill Step 1.

## proof_used
- knowledge/case-studies/fispoke.md (new_build_track, status: approved - SMITH&SAINT is tagged new_build_track, matches)

## email_1
subject: smith&saint's own site
body: |
  Hey Madison,

  SMITH&SAINT builds campaigns for other brands, but your own site runs on WordPress with no developer on the team.

  That's a strange split for 18 people growing 45% in two years: clients get a dedicated team, the agency's own site doesn't.

  We build sites growing teams can run themselves, like Fispoke's: a 25-page CMS build their own team could publish from without a developer.

  Make sense to connect for 15 minutes?

  Ethan

## email_2
subject: who updates smithandsaint.com
body: |
  Hey Madison,

  Agencies are usually the last ones to update their own site, a client deadline always wins first.

  SMITH&SAINT's site has sat on WordPress through 45% growth in two years, with nobody on the 18-person team whose job is keeping it current.

  We'd build it the way your team would pitch it to a client: something they can edit directly, no developer, no queue to get in.

  Open to chatting this week?

  Ethan

## email_3
subject: last note, smith&saint
body: |
  Hey Madison,

  Last one from me.

  If the WordPress site is working fine as is, no worries at all.

  If it's overdue for the kind of overhaul your team would tell a client they needed, let's find 15 minutes.

  Ethan

## fact_check
result: pass
checked_at: 2026-10-30
notes:
- "18 employees, founded 2017, marketing/advertising agency" -> verified against data/leads/index.jsonl org_data for smithandsaint.com (estimated_num_employees: 18, founded_year: 2017, industry: "marketing & advertising") and matches score_notes verbatim
- "Headcount growth 12mo +23.1%, 24mo +45.5%, flat 6mo" -> verified against the same org_data record (organization_headcount_twelve_month_growth: 0.2307692307692308 -> 23.1%, twenty_four_month_growth: 0.4545454545454545 -> 45.5%, six_month_growth: 0.0); email copy rounds 45.5% to "45%", consistent rounding with precedent (e.g. Sunlight draft rounding 54.5% to 55%)
- "runs on WordPress with no developer on the team" -> matches score_notes "confirmed WordPress, no in-house dev signal" and lead record platform: wordpress, track: new_build_track
- "SMITH&SAINT builds campaigns for other brands" (email_1) -> plain, non-specific paraphrase of the confirmed Apollo industry classification "marketing & advertising"; no specific client, campaign, or number invented
- Madison Smith is the sole, correct contact: apollo_contact_id 67cf0777b550eb0001139f93 matches the lead record; no marketing/growth hire exists on this org per Apollo contact data, so per icp-startups.yaml decision_maker_titles the Founder/COO is the direct contact, consistent with the lead brief
- Fispoke claims ("25-page CMS build their own team could publish from without a developer") -> verbatim-compatible with knowledge/case-studies/fispoke.md ("up to 25 pages, including a CMS-driven product suite... CMS templates for Team, Insights, and Careers so Fispoke's team can publish without touching code"); status: approved, track: new_build matches this lead's new_build_track. No numbers invented, no pricing or tier named (internal-only pricing correctly omitted)
- Track/proof consistency: new_build_track lead, all three emails pitch a new build/overhaul, never a monthly plan or retainer; case study is new_build-tagged - consistent
- No PageSpeed claim made (light arm correctly skipped it per outreach-email Step 1 - scoring didn't run it either, nothing to cite)
- research_arm: light recorded in frontmatter; confirmed no new WebSearch/WebFetch calls were made, only score_notes plus free org_data/platform_detect/Apollo contact fields already on the lead record, per outreach-email skill Step 1
- scripts/voice_check.py: clean, no banned words/phrases/openers/em dashes
- word counts: email_1 74w, email_2 74w, email_3 40w - all within band (e1 50-85 aim <80, e2 40-80, e3 30-60)
- sign-off: plain "Ethan" all three emails (correct for startups)
- single CTA per email, no booking link anywhere; CTA phrasing rotates ("make sense to connect for 15 minutes?", "open to chatting this week?", "let's find 15 minutes") and avoids the "worth 15 minutes?" / "happy to grab 15 minutes" phrases already used repeatedly across the three most-recently-committed startup drafts (Sunlight, The Travel Foundry, Patientdesk.ai)
- first sentence (agency running its own site on WordPress with no developer) is a specific combination not sendable to another company
- cohesion: no repeated proof point across the sequence (Fispoke cited once, in email_1 only); each email uses a different fact/angle (agency-vs-own-site irony + proof in e1, who-maintains-it + offer in e2, closer in e3); brevity holds across the sequence (e3 clearly shortest)
- checked against recently-committed sibling startup drafts (data/queue/drafts/startups--sunlight-yc-s22--guy-ziv.md, startups--the-travel-foundry--trey-evans.md, startups--patientdesk-ai-yc-w26--oncel-ozgul.md) for repeated sentence shapes - caught and rewrote an initial email_2 draft that mirrored Sunlight's "At N people, there's no one whose job is the website" skeleton too closely; final version uses a different construction ("Agencies are usually the last ones to update their own site...")
