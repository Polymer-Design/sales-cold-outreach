---
contact_name: Kevin Henson
contact_title: Executive Pastor
organization: WoodsEdge Community Church
icp: churches
apollo_contact_id: 54ab045874686908c8bd261e
score_total: 85
tier: hot
research_arm: deep
status: ready
drafted_at: 2026-11-25
---

## research
- Website platform is Subsplash (platform_detect.py, 2026-11-25) - per icp-churches.yaml
  this gets the "your app's great, the website doesn't match it" angle, not the DIY-builder
  angle
- Confirmed churchcenter.com subdomain (church_crawler signal) - Planning Center is the
  system of record (source: lead-scoring score_notes)
- Two specific, dated Christmas events: "Christmas services on December 23 and 24" and
  "Christmas on the Lawn, on December 13" (source: WebFetch woodsedge.org, 2026-11-25)
- English (9am/11am) and Spanish (1pm) services at one address (source: WebFetch
  woodsedge.org, 2026-11-25)
- Several main-nav items use placeholder ("#") links (source: WebFetch woodsedge.org,
  2026-11-25)
- 100 staff (org_data), founded 1994 (source: Apollo org_data)

## proof_used
- knowledge/case-studies/landmark-church.md (new_build_track)

## email_1
subject: the app vs. the website
body: |
  Hey Kevin,

  WoodsEdge's app runs on Subsplash, which is solid, but the website behind it doesn't
  carry the same weight, right as Christmas on the Lawn and your Christmas services both
  land this month.

  We'd build a site that matches what the app already does well, still tied to Planning
  Center underneath.

  One similar rebuild grew organic search sessions 29.5% with zero paid spend.

  Worth 15 minutes?

  God Bless,
  Ethan

## email_2
subject: christmas on the lawn, first impressions
body: |
  Hey Kevin,

  Anyone checking Christmas on the Lawn or the Christmas services before showing up is
  hitting a site with several nav links going nowhere right now.

  We'd rebuild that experience to match the app, pulling straight from Planning Center so
  both English and Spanish service info stay current without extra manual work.

  Open to a quick call this week?

  God Bless,
  Ethan

## email_3
subject: last note, woodsedge
body: |
  Hey Kevin,

  Last one from me.

  If the site's matching the app and the Christmas push fine, no worries at all.

  If it's not, happy to grab 15 minutes whenever works.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-25
notes:
- Subsplash platform -> confirmed via platform_detect.py 2026-11-25, routed per
  icp-churches.yaml's Subsplash-specific angle note
- "Christmas services on December 23 and 24" / "Christmas on the Lawn, on December 13" ->
  re-verified via WebFetch of woodsedge.org 2026-11-25
- English/Spanish service times -> re-verified via same WebFetch
- Placeholder nav links -> re-verified via same WebFetch
- Landmark Church proof point verbatim-compatible with knowledge/case-studies/landmark-church.md,
  track new_build matches this lead's new_build_track
- No pricing cited
- voice_check.py: pass
- word counts: email_1 66, email_2 50, email_3 27 - all within band
- cohesion: three angles (app/website mismatch + Christmas timing / first-impressions nav
  issue / closer), proof used once, correct Subsplash-specific framing throughout
