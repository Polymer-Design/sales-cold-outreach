---
contact_name: Kent Richardson
contact_title: Director of Communications
organization: New Life Community Church
icp: churches
apollo_contact_id: 54a426e17468693209a8ec30
score_total: 70
tier: warm
research_arm: light
status: ready
drafted_at: 2026-11-06
---

## research
- Confirmed Planning Center (check-in/giving) via churchcenter_subdomain signal (newlifechicago slug, source: data/leads/churches/candidates.csv) - site itself (source: https://newlifecommunity.church) runs on WordPress per platform_detect.py, a separate platform/domain from their Church Center instance - reused from lead-scoring, no new search this pass (research_arm: light)
- org_data: 200 employees, founded 1986 (source: Apollo org_data, data/leads/index.jsonl) - reused, no new search
- score_notes: celebrating 40th anniversary ("Tomorrow God Moves" event, 2026-11-15) - fetched from https://newlifecommunity.church during lead-scoring, reused here, no new fetch this pass

## proof_used
- knowledge/case-studies/landmark-church.md (new_build, icp_fit churches - Church Center integration + sermon notes traffic + cost-savings proof points)

## email_1
subject: one login, not two
body: |
  Hey Kent,

  New Life runs Church Center for check-in and giving, but your main site's a separate WordPress build, so people bounce between two logins for the same information.

  We build church sites around Church Center directly, pulling events, groups, and giving into one connected system.

  For Landmark Church, that move took sermon notes traffic from 59 to 2,799 sessions and grew organic search nearly 30%, with zero paid spend.

  Worth 15 minutes to see what that'd look like for New Life's 40th year?

  God Bless,
  Ethan

## email_2
subject: fixed price, 60 days
body: |
  Hey Kent,

  Different angle: a Church Core build runs $14,000 flat, Planning Center and YouTube sermons already built in, live in 60 days.

  That's the same package that cut Landmark Church's platform costs by about 70%, from $3-4k/year down to under $1k.

  A church coming up on 40 years deserves a site that matches the ceremony, not a bolted-together WordPress theme.

  Want to jump on a call?

  God Bless,
  Ethan

## email_3
subject: no pressure, Kent
body: |
  Hey Kent,

  If the site's not a priority right now, no worries at all.

  If it is, happy to show you what a Church Center-first build would look like for New Life, even for 15 minutes.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-06
notes:
- Church Center (check-in/giving) confirmed via churchcenter_subdomain signal (newlifechicago slug) -> matches data/leads/churches/candidates.csv
- WordPress platform -> matches platform_detect.py output run during lead-scoring this session
- 40th anniversary event -> matches live fetch of https://newlifecommunity.church run during lead-scoring this session (same session, not stale)
- Landmark Church proof: "sermon notes traffic from 59 to 2,799 sessions" -> matches knowledge/case-studies/landmark-church.md verbatim; "organic search nearly 30%" -> matches +29.5% rounded fairly; "zero paid spend" -> matches "with no paid spend"; status approved, track new_build matches, icp_fit churches matches
- Cost-savings proof: "about 70%... down to under $1k" -> matches case study's own quotable line "roughly 70%, from $3-4k/year down to under $1k/year" verbatim
- Pricing: "$14,000 flat... Planning Center and YouTube sermons already built in, live in 60 days" -> matches knowledge/business-overview.md Church Core tier exactly
- scripts/voice_check.py: clean
- Word counts: email_1 82, email_2 66, email_3 32 - all within band (50-85/40-80/30-60)
- One CTA per email, sign-off "God Bless," then "Ethan" throughout (churches)
- Cohesion: three distinct angles (Church Center gap / pricing+cost-savings / closer), escalating brevity, Landmark Church proof used once only (email_1), cost-savings proof used once only (email_2)
