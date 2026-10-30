---
contact_name: Onyi Chukwuma
contact_title: Chief Operating Officer & Co-Founder
organization: MMARA
icp: startups
apollo_contact_id: 57d512e4a6da9853ee9d0ea8
score_total: 55
tier: warm
research_arm: light
status: ready
drafted_at: 2026-10-30
---

## research
- org_data (Apollo enrichment): 7 employees, founded 2023, industry "health, wellness & fitness" (source: data/leads/index.jsonl org_data, recorded during lead-scoring, scored_at 2026-10-27)
- Platform: webflow (scripts/platform_detect.py) -> subscription_track (source: data/leads/index.jsonl score_notes/track, scored_at 2026-10-27)
- Onyi Chukwuma holds the combined title "Chief Operating Officer & Co-Founder" (source: Apollo contact data, apollo_id 57d512e4a6da9853ee9d0ea8)
- No funding/press signal found for MMARA/themmara.com (lead-scoring's WebSearch came back with no matching company, intent scored 0/30); not cited anywhere in this sequence (source: data/leads/index.jsonl score_notes, scored_at 2026-10-27)
- research_arm: light - no new WebSearch/WebFetch run this step. Every fact above is reused from lead-scoring's score_notes/org_data or free Apollo contact fields, per outreach-email skill Step 1. Nothing else (site content, press, hiring) was looked up.

## proof_used
- knowledge/business-overview.md#monthly-plans (subscription_track has no approved case study yet per knowledge/case-studies/README.md; plain capability statement only, per the "no proof yet, write without proof" rule)

## email_1
subject: running two jobs at once
body: |
  Hey Onyi,

  Running MMARA as both COO and co-founder at seven people means the website is whichever job you had the least time for this week.

  It's already live on Webflow, so the fix isn't a new site, it's finally having someone whose job is keeping this one current.

  Our Grow plan puts a small team on retainer instead, handling content swaps and new pages as they come up, billed flat each month.

  Worth a quick call?

  Ethan

## email_2
subject: three years, little attention
body: |
  Hey Onyi,

  Health and wellness buyers research harder than most before they trust a brand, so the site carries more weight than most places.

  Three years and seven people in, the site's probably had less attention than almost anything else MMARA's built since launch.

  A monthly plan covers that, new pages and updates landing as MMARA needs them, not bundled into a one-off project each time.

  Open to connecting this week?

  Ethan

## email_3
subject: before I close this out
body: |
  Hey Onyi,

  I'll leave this here.

  Running a seven-person health and wellness company leaves little room for a side project like the website, and that's a fair place to land.

  If it ever becomes worth a look, I'm around, happy to find 15 minutes.

  Ethan

## fact_check
result: pass
checked_at: 2026-10-30
notes:
- "7 employees, founded 2023, health, wellness & fitness" -> verified against data/leads/index.jsonl org_data (estimated_num_employees: 7, founded_year: 2023, industry: "health, wellness & fitness") and matches score_notes verbatim
- "Onyi Chukwuma, Chief Operating Officer & Co-Founder" -> matches data/leads/index.jsonl contacts[0] exactly (name, title, apollo_id 57d512e4a6da9853ee9d0ea8, email_status verified); email_1's "both COO and co-founder" is a plain restatement of that title, not an embellishment
- Platform webflow -> subscription_track confirmed in data/leads/index.jsonl (platform: webflow, track: subscription_track); no new platform_detect.py run needed, nothing to override
- "No funding/press signal" -> matches score_notes ("Intent 0/30: WebSearch found no company matching this name/domain"); no funding, raise, or press claim appears anywhere in any of the three emails
- Track/proof consistency: subscription_track lead, all three emails pitch the Grow monthly plan / ongoing retainer work, never a rebuild; email_1 explicitly frames it as "the fix isn't a new site." No case study borrowed - knowledge/case-studies/README.md confirms the library is empty except the template, so no subscription_track case study exists yet; proof point is a plain capability statement from knowledge/business-overview.md#monthly-plans only
- Grow plan claims ("small team on retainer," "content swaps and new pages as they come up," "billed flat each month") -> verbatim-compatible with knowledge/business-overview.md's Monthly Plans table and "Already on Webflow... Startups: lead with Grow or Partner" guidance; no price, hour count, or contract term cited, so nothing to mismatch against the table's $1,500/mo / ~10 hrs figures
- No PageSpeed, pricing tier dollar amount, or any Internal-only business-overview item appears anywhere in the sequence
- research_arm: light recorded in frontmatter; confirmed no new WebSearch/WebFetch calls were made for this draft - every fact traces to data/leads/index.jsonl (org_data, score_notes, contacts) or the Apollo contact record already on file, per outreach-email skill Step 1
- scripts/voice_check.py: clean, no banned words/phrases/openers/em dashes
- word counts (script-verified): email_1 78w, email_2 72w, email_3 45w - all within band (e1 50-85 aim <80, e2 40-80, e3 30-60), brevity decreases across the sequence
- sign-off: plain "Ethan" all three emails (correct for startups, no "God Bless" leakage)
- single CTA per email, no booking link anywhere; CTA phrasing rotated ("Worth a quick call?" / "Open to connecting this week?" / embedded "happy to find 15 minutes" in the closer) and avoids the exact phrasing used in this batch's most recently committed sibling drafts (Peakflo's "Make sense to connect?", Visual Feeder's "Make sense to connect?"/"Want to jump on a call?", TenYour's "Want to jump on a call?"/"Make sense to connect?", SMITH&SAINT's "Make sense to connect for 15 minutes?"/"Open to chatting this week?", Revella's "Open to chatting this week?"/"Want to jump on a call?")
- first sentence (combined COO/co-founder title at a 7-person company, named MMARA) is a specific combination not sendable to another company
- Caught and fixed one skeleton collision during this pass: email_2's original second paragraph ("a site from the early days is usually the last thing that gets revisited while the team and everything else keeps moving") echoed startups--university-bridge--hayward-majors.md's email_1 almost exactly ("A WordPress site from the early days tends to stay exactly as it was while everything else about the org changes around it") - same "site from the early days" phrase and "everything else...changes/moves" close. Rewrote to "Three years and seven people in, the site's probably had less attention than almost anything else MMARA's built since launch," and updated the subject line from "the site from year one" to "three years, little attention" to match; re-ran voice_check.py and word count after the edit
- Checked proof-point sentence and opening-line construction against the other light-arm subscription_track siblings already in data/queue/drafts/ (startups--ever-ledger--ashley-aviram.md, startups--aviaryai--blesson-abraham.md, startups--theysaid-ai-user-testing-feedback--chris-hicken.md, startups--storage-scholars-llc--matt-gronberg.md) - all four open with a "{company}'s already on Webflow, so the fix isn't a rebuild" skeleton; this draft's opener instead leads with the combined COO/co-founder title, and the subscription-plan sentence ("small team on retainer... billed flat each month") avoids reusing TheySaid's near-identical "new pages, updates, small builds" phrasing
- Cohesion: no repeated proof-point sentence across the sequence; each email uses a different angle (combined title + team size in e1, industry-specific trust bar + attention gap in e2, closer in e3); word counts decrease 78 -> 72 -> 45
