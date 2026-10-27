---
contact_name: Matt Gronberg
contact_title: Co-Founder & Chief Operating Officer
organization: Storage Scholars LLC
icp: startups
apollo_contact_id: 6025494605dc8600016998fa
score_total: 64
tier: warm
research_arm: light
status: ready
drafted_at: 2026-10-27
---

## research
- Site runs on Webflow (source: scripts/platform_detect.py --url https://storagescholars.com --icp startups, run 2026-10-26, recorded on the lead at scoring) -> subscription_track
- org_data (Apollo enrichment): 40 employees, founded 2017, industry "logistics & supply chain" - upper end of the 5-50 band, established almost a decade, college student storage/logistics business
- No new research performed beyond the above for this light-research-arm lead, per outreach-email Step 1

## proof_used
- knowledge/business-overview.md#monthly-plans (subscription_track has no approved case study yet; plain capability statement only, per the "no proof yet, write without proof" rule)

## email_1
subject: 9 years, one Webflow site
body: |
  Hey Matt,

  Storage Scholars is 40 people deep into student storage logistics, almost a decade in, still running the marketing site on Webflow.

  That's usually the stage a site turns into a backlog item instead of something actively maintained.

  We run ongoing Webflow support for teams your size: new pages, seasonal campaigns, landing pages, no new project kickoff every time something changes.

  Up for a quick call?

  Ethan

## email_2
subject: move-in season again
body: |
  Hey Matt,

  Storage Scholars runs on a calendar, move-in surges, move-out surges, and a site that can't spin up a page fast for each one is leaving bookings on the table.

  Our monthly plans cover exactly that: a dedicated team building new pages and small updates as the semester demands, no developer hire required.

  Want to jump on a call this week?

  Ethan

## email_3
subject: last one, Storage Scholars
body: |
  Hey Matt,

  I'll stop here.

  Nine years in, the site's clearly not killing the business on its own.

  If it's worth tightening up anyway, grab 15 minutes whenever works.

  Ethan

## fact_check
result: pass
checked_at: 2026-10-27
notes:
- "runs on Webflow" -> matches scripts/platform_detect.py output recorded at scoring (2026-10-26); "40 people", "founded 2017" -> match org_data
- "student storage logistics" -> reasonable, non-speculative description drawn from the company's own name and org_data industry field ("logistics & supply chain"), not an invented narrative detail
- Removed an earlier draft of email_1 that speculated about who originally built the site ("one-person Webflow setup... when Storage Scholars was small") - unverifiable, cut before fact-check per the "never invent or embellish" rule, not something this pass needed to fail on
- Track/proof consistency: subscription_track (confirmed Webflow), plain capability statement from knowledge/business-overview.md#monthly-plans, no case study borrowed (none exists for this track) - correct per the "no proof yet" rule
- Seasonal "move-in/move-out surges" framing in email_2 is general business-model inference (student storage is inherently calendar-driven), not a specific unverified claim about this company - consistent with how Step 3's "problem they're likely in right now" framing is meant to work
- scripts/voice_check.py: clean
- word counts: 68 / 63 / 30 - all within band
- sign-off: plain "Ethan" (startups), one CTA per email, no booking link
- CTA phrasing: "Up for a quick call?" / "Want to jump on a call this week?" / closer - distinct from this batch's other 5 drafts
