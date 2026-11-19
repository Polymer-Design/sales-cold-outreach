---
contact_name: Meredith Pitts
contact_title: Communications Director
organization: Northwest Christian Church
icp: churches
apollo_contact_id: 6154e420b72f8f0001161ae5
score_total: 68
tier: warm
research_arm: deep
status: ready
drafted_at: 2026-11-19
---

## research
- Homepage headline cuts off mid-sentence, "Loving God and Loving People in," followed by a
  stray dash and no campus name filled in (source: WebFetch of mynw.cc, 2026-11-19)
- Events, giving, and prayer-request links route out to Planning Center
  (mynw.churchcenter.com), the member app/dashboard lives on a separate thestudioc.org
  domain, and the livestream lives on a third domain, northwestlive.online.church (source:
  WebFetch of mynw.cc, 2026-11-19)
- "Vision Initiative" card appears twice on the homepage with identical text; the full nav
  menu repeats in a block further down the page; the Instagram link href is doubled inside
  itself (source: WebFetch of mynw.cc, 2026-11-19)
- 38 staff, 3 campuses (Newberg, McMinnville, Tigard) (source: Apollo org_data + WebFetch of
  mynw.cc, via lead-scoring score_notes, 2026-11-19)
- Confirmed churchcenter.com subdomain (mynw), flagship Planning Center signal; own site
  platform=wordpress -> new_build_track (source: scripts/platform_detect.py +
  scripts/church_crawler.py, via lead-scoring)

## proof_used
- knowledge/case-studies/landmark-church.md (new_build, churches icp_fit) - "Organic search
  sessions +29.5% (5,604 -> 7,256) with no paid spend" after connecting a church's site to
  Planning Center.

## email_1
subject: Loving God and Loving People in
body: |
  Hey Meredith,

  Your homepage headline cuts off mid-sentence, "Loving God and Loving People in," then a
  stray dash with no campus name. Events, giving, and prayer requests all route out to
  Planning Center, the member app sits on a separate thestudioc.org domain, and the
  livestream lives on a third, online.church.

  We've built that kind of connected Planning Center site before, for another multi-campus
  church, and organic search sessions grew almost 30% in the three months after launch.

  Worth a quick call about a cleanup?

  God Bless,
  Ethan

## email_2
subject: the vision card, twice
body: |
  Hey Meredith,

  Your Vision Initiative card appears twice on the homepage with identical text, and the
  full navigation menu repeats itself in a block further down the page. Even your Instagram
  link is doubled inside itself, a broken href pointing to the same URL twice.

  That's the kind of detail people notice right before they decide whether to trust a church
  with their giving information.

  Open to chatting this week?

  God Bless,
  Ethan

## email_3
subject: no pressure, Meredith
body: |
  Hey Meredith,

  If the site's already getting cleaned up, no worries at all.

  If not, happy to walk through it, even for 15 minutes.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-19
notes:
- Broken hero headline, PC/member-tool/livestream domain fragmentation, duplicated Vision
  Initiative card, duplicated nav, doubled Instagram href -> verified against same-session
  WebFetch of mynw.cc (2026-11-19); not re-fetched
- Polymer facts: "almost 30%" is a loose paraphrase of knowledge/case-studies/landmark-church.md's
  "Organic search sessions +29.5% (5,604 -> 7,256) with no paid spend" - no numbers invented,
  track=new_build matches this lead's new_build_track; did not claim Northwest migrated off
  Subsplash (they didn't - platform=wordpress), only cited the PC-integration result
- No pricing claims in this draft
- scripts/voice_check.py: clean
- Word counts: 84/68/25 - e1/e2 within band, e3 matches the established short-closer
  precedent (Pango/xPay/Sona8 drafts)
- One CTA per email, sign-off "God Bless," then "Ethan" on all three (church convention)
- Cohesion: distinct hooks (headline/domain fragmentation, duplicated card/nav/link, closer),
  escalating brevity, no repeated proof point (Landmark Church stat only in email_1)
