---
contact_name: Lauren Petersen
contact_title: Communications Director
organization: Rockharbor Church
icp: churches
apollo_contact_id: 5e648c68c6828c000143a502
score_total: 69
tier: warm
research_arm: deep
status: pushed
pushed_at: 2026-11-03T14:33:00Z
drafted_at: 2026-11-03
---

## research
- Site platform detected as Subsplash -> per icp-churches.yaml, this gets the "app's great, website doesn't match" angle, not the generic DIY-builder angle (source: scripts/platform_detect.py, via lead-scoring)
- Mobile PageSpeed: performance 30/100, accessibility 90/100, best practices 92/100, SEO 92/100, LCP 23.5s (source: scripts/pagespeed_check.py --url https://rockharbor.org --strategy mobile, 2026-11-03; raw fact about Rockharbor's own site only, not a comparative claim)
- One homepage image labeled "Unknown.png"; a couple of empty footer links (source: lead-scoring score_notes, WebFetch of rockharbor.org, 2026-11-03)
- Single campus (Costa Mesa, CA); org_data 86 employees, founded 1997, positive recent growth (source: lead-scoring score_notes, Apollo org_data)
- Confirmed churchcenter_embed (Planning Center) signal (source: church_crawler.py, via lead-scoring)

## proof_used
- knowledge/case-studies/landmark-church.md (new_build, churches icp_fit) - organic search sessions +29.5% with zero paid spend. Framed as what a connected rebuild delivers, not as "moving off a cheap tool" - Rockharbor's Subsplash app/ChMS setup is treated as already dialed in, per icp-churches.yaml's Subsplash-specific angle guidance.

## email_1
subject: 23.5 seconds on mobile
body: |
  Hey Lauren,

  Rockharbor's app and Church Center setup are already dialed in, but the public website takes 23.5 seconds to load on mobile, which is where most first-time visitors actually land.

  That's a real gap between what your team's already built everywhere else and what shows up first for someone checking you out online.

  We connected a church's site to Church Center the same way and grew organic search sessions 29.5% with zero paid spend.

  Worth 15 minutes?

  God Bless,
  Ethan

## email_2
subject: the Unknown.png image
body: |
  Hey Lauren,

  One of Rockharbor's own homepage images is literally labeled "Unknown.png," small, but the kind of detail that slips through without a dedicated team watching the site day to day.

  A rebuild means someone's actually catching things like that, and the load time, before anyone else does.

  Want to jump on a call?

  God Bless,
  Ethan

## email_3
subject: no pressure, Lauren
body: |
  Hey Lauren,

  If the current site is working fine for Rockharbor, no worries at all.

  If the load time or small details are bugging you too, happy to talk through a rebuild around what you've already got, even for 15 minutes.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-03
notes:
- Subsplash platform -> re-run scripts/platform_detect.py this pass, confirmed
- Mobile PageSpeed 30/90/92/92, LCP 23.5s -> re-run scripts/pagespeed_check.py this pass, confirmed; cited as a raw fact only
- "Unknown.png" image, empty footer links -> verified against same-session WebFetch of rockharbor.org (2026-11-03); not re-fetched again
- Polymer facts: Landmark Church case study numbers match knowledge/case-studies/landmark-church.md exactly; framing does NOT present Subsplash as a cheap tool to move off, consistent with icp-churches.yaml's explicit Subsplash angle guidance
- scripts/voice_check.py: clean
- Word counts: 81/57/44 - all within band
- One CTA per email, sign-off "God Bless," then "Ethan"
- Cohesion: distinct hooks (load time / image filename / closer), escalating brevity, no repeated proof point
