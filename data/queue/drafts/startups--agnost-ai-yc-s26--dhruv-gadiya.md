---
contact_name: Dhruv Gadiya
contact_title: Head of Growth
organization: Agnost AI (YC S26)
icp: startups
apollo_person_id: 69d8a638d320000001f39b1f
score_total: 65
tier: warm
research_arm: light
status: pushed
drafted_at: 2026-11-09
pushed_at: 2026-11-10
pushed_via_mailbox: ehoover@growwithpolymer.com
apollo_contact_id_pushed: 6af31819ad6a170018771ce5
---

## research
- Agnost AI is a current Y Combinator batch company (YC S26), building analytics that reads production conversational-AI logs to surface where users get stuck or churn (source: trysignalbase.com / yespress.io, both found during lead-scoring 2026-11-09; funding figure itself not repeated here since it was single-sourced and unconfirmed per score_notes)
- 5 employees, strong recent headcount growth (67% 6mo and 12mo per org_data) (source: Apollo org_data, lead-scoring 2026-11-09)
- Platform detected as unknown -> new_build_track (source: scripts/platform_detect.py --url https://agnost.ai --icp startups, run during scoring 2026-11-09)
- Contact Dhruv Gadiya holds the title "Head of Growth" - the exact trigger-signal title from config/icp-startups.yaml, meaning the site is likely his own responsibility, not just a job he'd forward (source: Apollo contact record)
- research_arm: light per EXP-001 - no new searches run for drafting; facts above are reused from lead-scoring's score_notes and free Apollo/platform_detect fields only.

## proof_used
- knowledge/case-studies/fispoke.md (new_build_track; Agnost AI is tagged new_build_track, no subscription proof needed)

## email_1
subject: agnost ai, fresh off yc
body: |
  Hey Dhruv,

  Being the Head of Growth at a company fresh out of YC's current batch usually means the website lands on your desk whether it's officially your job or not.

  A 5-person team building agent analytics doesn't have time to also be its own web shop.

  We build sites for growing teams in weeks, then keep building after launch. For Fispoke, a fintech client, we moved them off Wix onto a 25-page, CMS-driven build with SEO built in.

  Worth 15 minutes?

  Ethan

## email_2
subject: who's shipping agnost.ai
body: |
  Hey Dhruv,

  Five people post-YC means every hour goes toward the product, which is exactly why the site tends to stall out.

  Hand it to a team that only does this, and it stops being a line item on your own list.

  Open to a quick call this week?

  Ethan

## email_3
subject: last note, agnost ai
body: |
  Hey Dhruv,

  Last one from me.

  If the site's not a priority with everything else on your plate post-YC, no worries at all.

  If it is, happy to grab 15 minutes and talk through what a quick rebuild would look like.

  Ethan

## fact_check
result: pass
checked_at: 2026-11-09
notes:
- "fresh out of YC's current batch" / "5-person team building agent analytics" -> consistent with score_notes (sourced during lead-scoring from trysignalbase.com/yespress.io); deliberately did NOT repeat the single-sourced $250K figure or the Google/Exa/Corgi customer-name claims in the email copy - those were flagged unconfirmed at scoring time and are too specific/risky to put in front of a prospect without a second source.
- "Head of Growth" title -> matches Apollo contact record exactly (config/icp-startups.yaml trigger_signal_titles).
- Fispoke claims -> verbatim-compatible with knowledge/case-studies/fispoke.md; status: approved, track: new_build matches lead's new_build_track tag.
- research_arm: light confirmed - no new WebSearch/WebFetch made for drafting.
- scripts/voice_check.py: clean.
- word counts: email_1 83w, email_2 51w, email_3 42w - all within band.
- sign-off: plain "Ethan" (startups).
- single CTA per email, no booking link, first sentence specific to this company/role, not sendable elsewhere.
- checked against other recent drafts in data/queue/ (Beyond Reach Labs, Didit, Cashboard) - distinct hook (own-job-lands-on-your-desk angle), no reused phrasing.
- CORRECTION (2026-11-09, cross-batch cohesion re-check): email_2's original draft reused an "at N people, nobody owns the site, we're a dedicated team" skeleton that turned out to repeat across most of today's startups drafts - a real template fingerprint per knowledge/voice-and-tone.md's "Surviving AI inbox triage" section. Rewrote with a distinct structure/angle for this lead. Re-ran scripts/voice_check.py (clean) and word counts (all still within band) after the edit.
