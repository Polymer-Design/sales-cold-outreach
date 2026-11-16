---
contact_name: Vonda Westmoreland
contact_title: Director of Communications
organization: Orangewood Church
icp: churches
apollo_contact_id: 5f49bbd6367bc400014b3639
score_total: 72
tier: warm
research_arm: light
status: pushed
pushed_at: 2026-11-16T13:34:26Z
pushed_via_mailbox: ethan@integratedchurchwebsites.com
apollo_contact_id_pushed: 6afb06613211c400106bb149
drafted_at: 2026-11-16
---

## research
- Confirmed churchcenter.com subdomain (Planning Center check-in/giving), a separate page system from the main site (source: church_crawler / platform_detect.py, per score_notes)
- Homepage promotes an active "Generations" capital/facilities campaign - a forward-looking initiative to expand space for the church and its ministries, with a campaign video; no dollar goal or date given (source: orangewood.org, WebFetch 2026-11-16, per score_notes)
- Site platform: WordPress -> new_build_track (source: scripts/platform_detect.py, per score_notes)
- Single location, 1300 W Maitland Blvd, Maitland, FL; founded 1976; org_data estimated_num_employees: 21 (source: orangewood.org + Apollo org_data, per score_notes)

## proof_used
- knowledge/case-studies/landmark-church.md (organic search sessions +29.5% with zero paid spend - new_build, status: approved, matches this lead's new_build_track)

## email_1
subject: orangewood + planning center
body: |
  Hey Vonda,

  Saw Orangewood runs Planning Center through its own churchcenter.com page, separate from your main site, so people split between two platforms for service times, groups, and giving.

  With Generations underway, that's exactly the kind of moment a connected site pays off. We rebuilt Landmark Church's site around Church Center and grew their organic search 29.5%, with zero paid spend.

  Worth 15 minutes to see if that'd work for Orangewood?

  God Bless,
  Ethan

## email_2
subject: on the timing
body: |
  Hey Vonda,

  Following up on Orangewood's site. With Generations raising money for the building, I get it if a big website spend isn't top of mind right now.

  That's part of why we price the way we do: a new site built around your Planning Center setup lands in about 4 weeks, $6,500 flat, no surprise scope.

  Worth a quick call to see if the timing works?

  God Bless,
  Ethan

## email_3
subject: no pressure from here
body: |
  Hey Vonda,

  Last note on this one. If the website's not a priority while Generations is the focus, I get it completely.

  If it is, happy to show you what a Church Center-connected rebuild would look like for Orangewood.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-16
notes:
- "Generations... forward-looking initiative to expand space" -> re-verified via WebFetch https://orangewood.org 2026-11-16: page reads "Generations is a forward-looking initiative to establish expanded spaces for Orangewood Church," plus a "Leading into the next 50" heading and a "GENERATIONS CAMPAIGN" video link - current as of today's fetch, draft doesn't overclaim a dollar goal or date since none was given
- "runs Planning Center through its own churchcenter.com page, separate from your main site" -> re-verified: homepage GIVE/Account/registration/Prayer Request links all route to churchcenter.com infrastructure, distinct from the WordPress main site - accurate characterization, not an invented behavioral claim
- "organic search 29.5%, with zero paid spend" -> matches knowledge/case-studies/landmark-church.md verbatim ("Organic search sessions +29.5%... with no paid spend"), status: approved, icp_fit: churches, track: new_build matches this lead's new_build_track - no number altered
- Pricing: "$6,500 flat... about 4 weeks" -> matches knowledge/business-overview.md Core tier exactly ("$6,500... Live in 4 weeks"), current Nov 2026 pricing, not a retired tier
- Track/proof consistency: new_build_track lead, proof and pricing both pulled from new_build-track sources - no subscription-track borrowing
- No PageSpeed/comparative claims made (research_arm: light - correctly skipped)
- voice_check.py: clean (no banned words/phrases/openers, no em dashes)
- Word counts: email_1 74w, email_2 70w, email_3 42w - all within band (e1 50-85, e2 40-80, e3 30-60), escalating brevity holds
- Cohesion: checked subjects/proof against other drafts in data/queue/drafts/ - email_2's subject was originally "building while you build," an exact duplicate of churches--discovery-church--hannah-whipple.md's email_2 subject; changed to "on the timing" to avoid the collision. "orangewood + planning center" / "on the timing" / "no pressure from here" are not reused verbatim elsewhere in the queue
