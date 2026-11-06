---
contact_name: Jim Hobbs
contact_title: Executive Pastor
organization: Oak Pointe Church
icp: churches
apollo_contact_id: 54a4604c7468693209bbf142
score_total: 68
tier: warm
research_arm: light
status: ready
drafted_at: 2026-11-06
---

## research
- Confirmed Planning Center (check-in/giving) via churchcenter_subdomain signal (oakpointe slug, source: data/leads/churches/candidates.csv)
- platform_detect.py -> subsplash -> new_build_track, "app's great, site doesn't match it" angle per icp-churches.yaml - reused from lead-scoring, no new fetch this pass (research_arm: light)
- Multi-site: 5 locations (Novi, Milford, Village Church, 7West, Hill City) per score_notes, fetched during lead-scoring, reused here
- org_data: 65 employees, founded 1997 - reused from org_data, no new search

## proof_used
- knowledge/case-studies/landmark-church.md (new_build, icp_fit churches - active users/sessions growth proof point, different stat than used on other church drafts this run)

## email_1
subject: one site, 5 locations
body: |
  Hey Jim,

  Running Church Center across 5 campuses (Novi, Milford, Village Church, 7West, Hill City) means your website has to do real work keeping each location's events and times straight, not just look good.

  We build multi-campus sites around exactly that kind of structure.

  A similar rebuild took Landmark Church's active users up 31% and sessions up nearly 40% in 90 days.

  Open to a quick call to talk through what that'd look like for Oak Pointe?

  God Bless,
  Ethan

## email_2
subject: a Custom build, 5 campuses
body: |
  Hey Jim,

  Multi-campus builds here start at $18,000 (Custom tier), scoped around your specific locations: fixed price, split 40/30/30 with the rest due at launch, your team fully in control of edits once it's live.

  Does a short call make sense sometime this week?

  God Bless,
  Ethan

## email_3
subject: no pressure, Jim
body: |
  Hey Jim,

  If the site's working fine across all 5 locations, no worries at all.

  If keeping them straight is still a hassle, happy to talk through a Custom build, even for 15 minutes.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-06
notes:
- Church Center confirmed via churchcenter_subdomain signal -> matches data/leads/churches/candidates.csv
- 5 campuses (Novi, Milford, Village Church, 7West, Hill City) -> matches live fetch of https://oakpointe.org run during lead-scoring this session
- Landmark Church proof: "active users up 31% and sessions up nearly 40% in 90 days" -> matches +31.3%/+39.6% in knowledge/case-studies/landmark-church.md; status approved, track new_build, icp_fit churches match; different stat than used on New Life/Bethany/Highland drafts this run to avoid repeated-proof fingerprinting
- Pricing: "$18,000 (Custom tier)... 40/30/30 with the rest due at launch" -> matches knowledge/business-overview.md Custom tier and payment terms exactly; multi-campus Custom guidance followed ("mention a range, never a specific quote")
- scripts/voice_check.py: clean
- Word counts: email_1 80, email_2 47, email_3 37 - all within band (50-85/40-80/30-60)
- One CTA per email, sign-off "God Bless," then "Ethan" throughout
- Cohesion: three distinct angles (multi-campus structure / Custom pricing+terms / closer), escalating brevity, proof point used once only; sentence structure/CTA phrasing varied from this run's other church drafts
