---
contact_name: Patrice Cameau
contact_title: Director of Communications & Marketing
organization: Zion Church
icp: churches
apollo_contact_id: 57d74a70a6da985bb024d541
score_total: 70
tier: warm
research_arm: deep
status: ready
drafted_at: 2026-11-16
---

## research
- Four physical campuses (Fort Washington, Greenbelt, Landover, Woodbridge) plus an online "Zion Anywhere" campus; admin offices in Greenbelt, MD (source: zionchurch.org, WebFetch 2026-11-16, per score_notes)
- Confirmed churchcenter.com subdomain (Planning Center), a separate page system from the main site (source: church_crawler / platform_detect.py, per score_notes)
- Local congregation led by Senior Pastor Keith Battle, not a parachurch org (confirmed at scoring despite Apollo's "nonprofit organization management" industry tag) (source: zionchurch.org, WebFetch 2026-11-16, per score_notes)
- org_data: 230 employees, founded 2007, $19.8M revenue (source: Apollo org_data, per score_notes)
- Site platform: unknown -> new_build_track (source: scripts/platform_detect.py, per score_notes)

## proof_used
- knowledge/business-overview.md (Core tier: $6,500, live in 4 weeks, builds around Planning Center + YouTube - plain capability statement; Landmark Church's multi-campus case study deliberately not reused here, already used for a different multi-campus lead in this batch)

## email_1
subject: five campuses, one Zion
body: |
  Hey Patrice,

  Zion runs four campuses, Fort Washington, Greenbelt, Landover, and Woodbridge, plus an online "Zion Anywhere" campus, all through Planning Center's own churchcenter.com page, separate from the main site.

  That's five distinct congregations for one website to represent clearly. We build church sites around Church Center so every campus and service time lives in one connected place.

  Worth 15 minutes to talk through what that'd look like for Zion?

  God Bless,
  Ethan

## email_2
subject: your online front door
body: |
  Hey Patrice,

  Following up. Running an online campus alongside four physical ones means the website isn't just marketing, for some of your people it's the actual front door to Zion.

  Our Core tier builds around Planning Center and YouTube directly, live in about 4 weeks, $6,500 flat.

  Worth a quick call on it?

  God Bless,
  Ethan

## email_3
subject: last one from me
body: |
  Hey Patrice,

  Last one from me. Five campuses, one of them fully online, is a lot to manage without adding a website project on top.

  If it ever becomes the priority, I'd love to show you what a Church Center-connected rebuild could look like for Zion.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-16
notes:
- "Four campuses (Fort Washington, Greenbelt, Landover, Woodbridge) plus online Zion Anywhere" -> sourced to same-day WebFetch of zionchurch.org (2026-11-16, during today's scoring pass, recorded in score_notes/research block) - current, not stale
- "Planning Center... separate page system from the main site" -> confirmed via the same fetch
- Step 0 local-congregation confirmation carried over from scoring (not re-litigated in copy - draft doesn't mention the industry-tag discrepancy at all, keeps it internal)
- Pricing: "Core... $6,500... about 4 weeks... Planning Center and YouTube" -> matches knowledge/business-overview.md exactly, current Nov 2026 pricing
- Track/proof consistency: new_build_track lead; plain capability statement, no case study borrowed
- voice_check.py: clean (no banned words/phrases/openers, no em dashes)
- Word counts: email_1 73w, email_2 56w, email_3 49w - within band, escalating brevity holds
- Cohesion: checked against this run's other drafts (Orangewood, Church At Viera, Rock City - all churches) - distinct subjects; proof point (plain Core-tier capability statement) not identical wording to the other two, each ties pricing to a different specific detail (transition / newest campus / online campus)
