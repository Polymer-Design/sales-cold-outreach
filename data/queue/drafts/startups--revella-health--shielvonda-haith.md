---
contact_name: Shielvonda Haith
contact_title: COO & Co-Founder
organization: Revella Health
icp: startups
apollo_contact_id: 66f7798a27096c000135f71e
score_total: 56
tier: warm
research_arm: light
status: pushed
drafted_at: 2026-10-30
pushed_at: 2026-10-30T13:59:50Z
mailbox: ethan@growwithpolymer.com
apollo_contact_id_resolved: 6ae4a2d43c1c5c0018f04fa5
---

## research
- Healthcare AI company, backed by two accelerators: Techstars Physical Health and Prosper HealthTech, per a gener8tor founder interview surfaced during lead-scoring's Step 4 (source: lead-scoring score_notes, data/leads/index.jsonl, scored 2026-10-30)
- org_data: 8 employees, headcount growth 6mo=0%, 12mo=50%, 24mo=28.6% (source: Apollo org_data, data/leads/index.jsonl, scored 2026-10-30)
- platform_detect.py returned unknown with no in-house dev/design signal found -> new_build_track (source: data/leads/index.jsonl score_notes/track, scored 2026-10-30)
- The same gener8tor interview mentions Revella "preparing to launch a six-state initiative with providers" - undated, so used only as a hedged, present-tense mention, not a confirmed/fresh trigger (source: lead-scoring score_notes, data/leads/index.jsonl, scored 2026-10-30)
- Funding figures conflict wildly across aggregators ($50M outlier vs. $538K vs. $1.22M, likely a similarly-named company) - not cited anywhere in this sequence per score_notes' own low-confidence call

research_arm: light - no new search run this step; every fact above was already surfaced during lead-scoring's Step 4 or sits in free Apollo/org_data/platform_detect fields, reused per the outreach-email skill's Step 1.

## proof_used
- knowledge/business-overview.md#initial-builds (new_build_track; no approved case study fits a healthcare vertical, so a plain capability statement only, per the "no proof yet, write without proof" rule - no case study named, no numbers borrowed)

## email_1
subject: revella's two accelerators
body: |
  Hey Shielvonda,

  Revella went through both Techstars Physical Health and Prosper HealthTech, two accelerators built for exactly this stage, and your headcount's up 50% in the past year.

  That kind of growth usually outpaces whatever site got built before either accelerator started.

  We build fixed-price sites for small healthcare teams like yours, on a platform your team can run without a developer, live in 30-60 days.

  Open to chatting this week?

  Ethan

## email_2
subject: revella's six-state push
body: |
  Hey Shielvonda,

  If Revella's six-state push with providers is still in motion, the site's one more thing that has to keep pace.

  Most teams at 8 people don't have anyone owning the website, so it runs on whatever shipped early through growth like yours.

  We handle that end to end, design through launch, on a platform your team runs without a developer, usually live inside two months.

  Want to jump on a call?

  Ethan

## email_3
subject: closing this out
body: |
  Hey Shielvonda,

  This is my last email on this.

  Revella's clearly busy scaling right now, so if a new site isn't on the radar, that's completely reasonable.

  If it is, or becomes one down the line, just say the word and I'll send over some times.

  Ethan

## fact_check
result: pass
checked_at: 2026-10-30
notes:
- "backed by Techstars Physical Health and Prosper HealthTech, healthcare AI company" -> matches data/leads/index.jsonl score_notes verbatim ("healthcare AI company confirmed via WebSearch (gener8tor founder interview, Techstars Physical Health / Prosper HealthTech accelerator backing)"); research_arm: light means no re-fetch of the underlying gener8tor interview itself, only the already-scored claim, consistent with the arm's rule
- "headcount's up 50% in the past year" -> matches data/leads/index.jsonl org_data (organization_headcount_twelve_month_growth: 0.5); "8 people" matches estimated_num_employees: 8
- "six-state push with providers" (email_2) -> matches score_notes ("preparing to launch a six-state initiative with providers"); score_notes flags this undated and low-confidence, so the draft hedges it ("if ... is still in motion") rather than asserting it as a current/confirmed trigger - correct treatment, not overstated
- Disputed funding figures ($50M/$538K/$1.22M) -> not cited anywhere in any of the three emails, correctly omitted per score_notes' own low-confidence call
- new_build_track confirmed via data/leads/index.jsonl (track: new_build_track, platform: unknown); all three emails pitch a build only, no monthly-plan/subscription language anywhere
- No case study named; proof point is a plain capability statement from knowledge/business-overview.md (fixed-price build, 30-60 day timeline matching Sprint/Core, platform the client's team runs without a developer) - no healthcare-specific case study exists, so no vertical-fit claim is made and no numbers are borrowed from Fispoke (fintech, and Fispoke is PENDING on numbers/outcomes regardless)
- No pricing tier or dollar figure named anywhere, consistent with "Internal only" and "which offer to lead with" sections of business-overview.md
- scripts/voice_check.py: clean, no banned words/phrases/openers/em dashes
- word counts: email_1 72w, email_2 74w, email_3 47w - all within band (50-85/40-80/30-60)
- sign-off: plain "Ethan" all three (startups register); greeting/paragraph formatting matches voice-and-tone.md
- single CTA per email, rotated phrasing ("open to chatting this week?", "want to jump on a call?", easy-out close in email_3), no booking link anywhere
- first sentence of email_1 (two named accelerators + exact growth stat) is not sendable to any other company
- checked against recently committed sibling startup drafts (startups--patientdesk-ai-yc-w26--oncel-ozgul.md, startups--stack-health-inc--alex-frommeyer.md, both also research_arm: light, new_build/subscription analogues) for repeated skeletons: email_3's original subject "last one, revella" duplicated the "last one/note, {company}" skeleton used in both of those drafts' email_3 subjects, so it was rewritten to "closing this out" before this check; body sentence shapes and CTA phrasing distinct from both sibling drafts

