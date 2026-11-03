---
contact_name: Neil Gregory
contact_title: Creative Director
organization: Southland Christian Church
icp: churches
apollo_contact_id: 67225a467bb8e50001d591b6
score_total: 69
tier: warm
research_arm: deep
status: pushed
pushed_at: 2026-11-03T14:33:00Z
drafted_at: 2026-11-03
---

## research
- Mobile PageSpeed: performance 37/100, accessibility 96/100, best practices 100/100, SEO 92/100, LCP 22.8s (source: scripts/pagespeed_check.py --url https://southland.church --strategy mobile, 2026-11-03; raw fact about Southland's own site only, not a comparative claim)
- 5 campuses (Danville, Georgetown, Lexington, Nicholasville, Richmond) across Central Kentucky, self-described as "one church meeting in multiple locations" (source: lead-scoring score_notes, WebFetch of southland.church, 2026-11-03)
- Confirmed on Squarespace -> new_build_track per icp-churches.yaml's "outgrown the DIY builder" angle (source: scripts/platform_detect.py, via lead-scoring)
- Confirmed churchcenter_subdomain "southlandchristian" (source: church_crawler.py, via lead-scoring)
- org_data 200 employees, founded 1956 (source: Apollo org_data, via lead-scoring)

## proof_used
- knowledge/case-studies/landmark-church.md (new_build, churches icp_fit) - organic search sessions +29.5% with zero paid spend, from connecting Planning Center/Church Center into one real CMS

## email_1
subject: 22 seconds on mobile
body: |
  Hey Neil,

  Southland's site takes 22.8 seconds to load on mobile, the device most people checking service times across five campuses are actually using.

  That's a lot of friction for "one church meeting in multiple locations" to ask someone to sit through before they see a time or address.

  We rebuilt a multi-campus church's site into one connected CMS around Church Center and grew organic search sessions 29.5% with zero paid spend.

  Worth 15 minutes?

  God Bless,
  Ethan

## email_2
subject: five campuses, one template
body: |
  Hey Neil,

  Squarespace is a solid starting point, but five campuses across Central Kentucky is a lot to ask one template site to represent clearly.

  A connected build means each campus gets its own clear page, built around Church Center instead of a one-size-fits-all template.

  Want to jump on a call?

  God Bless,
  Ethan

## email_3
subject: no pressure, Neil
body: |
  Hey Neil,

  If Squarespace is handling five campuses fine, no worries at all.

  If the load time or campus pages are a pain point, happy to talk through a rebuild, even for 15 minutes.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-03
notes:
- Mobile PageSpeed 37/96/100/92, LCP 22.8s -> re-run scripts/pagespeed_check.py this pass, confirmed; cited as a raw fact only
- 5 campuses + "one church meeting in multiple locations" quote, Squarespace platform -> verified against same-session WebFetch of southland.church (2026-11-03); not re-fetched again
- Polymer facts: Landmark Church case study numbers match knowledge/case-studies/landmark-church.md exactly, track=new_build matches
- scripts/voice_check.py: clean
- Word counts: 78/54/37 - all within band
- One CTA per email, sign-off "God Bless," then "Ethan"
- Cohesion: distinct hooks (load time / template-vs-5-campuses / closer), escalating brevity, no repeated proof point
