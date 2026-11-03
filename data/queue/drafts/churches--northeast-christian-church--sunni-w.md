---
contact_name: Sunni W
contact_title: Marketing Director
organization: Northeast Christian Church
icp: churches
apollo_contact_id: 631b22a823066a000153416b
score_total: 74
tier: warm
research_arm: light
status: ready
drafted_at: 2026-11-03
---

## research
- Contact icon links to a malformed address, "http://contact.us@necchurch.org," not a working mailto link; footer reads "© 2025 Northeast Christian Church" while sermon image paths are already dated 2026 (source: lead-scoring score_notes, WebFetch of necchurch.org, 2026-11-03)
- Shop link points to an old myshopify.com address over plain http, not https (source: same score_notes WebFetch)
- 2 physical campuses (Brownsboro, Grinstead) plus an "Anywhere Online" option (source: same score_notes WebFetch)
- Confirmed churchcenter_embed (Planning Center) signal; site platform WordPress -> new_build_track (source: scripts/platform_detect.py + church_crawler.py, via lead-scoring)
- research_arm: light (EXP-001) - no new research run this pass; all facts reused from lead-scoring's score_notes.

## proof_used
- knowledge/case-studies/landmark-church.md (new_build, churches icp_fit) - organic search sessions +29.5% with zero paid spend, from connecting Planning Center/Church Center into one real CMS

## email_1
subject: the broken contact link
body: |
  Hey Sunni,

  Northeast's own contact icon links to "http://contact.us@necchurch.org," which isn't a working email address, and the footer still reads "© 2025" while this year's sermon uploads are already live.

  Across two campuses plus online, that's exactly the kind of detail that slips through when the site and Church Center are two separate systems.

  We rebuilt a multi-campus church's site into one connected CMS around Church Center and grew organic search sessions 29.5% with zero paid spend.

  Worth 15 minutes?

  God Bless,
  Ethan

## email_2
subject: the shop link
body: |
  Hey Sunni,

  Northeast's Shop link still points to an old myshopify.com address over plain http, the kind of thing that quietly erodes trust with people landing there from search.

  A rebuild around Church Center means one team keeping details like that current instead of leftover from whatever came before.

  Want to jump on a call?

  God Bless,
  Ethan

## email_3
subject: no pressure, Sunni
body: |
  Hey Sunni,

  If the contact link and shop address are already fixed, no worries at all.

  If not, happy to talk through connecting Northeast's two campuses into one real site around Church Center, even for 15 minutes.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-03
notes:
- Malformed mailto link, copyright year mismatch (2025 footer vs 2026 sermon images), outdated http myshopify link -> verified against the same-session WebFetch of necchurch.org (2026-11-03); not re-fetched a second time since minutes old in this run
- 2 campuses + "Anywhere Online" -> same WebFetch, confirmed
- WordPress + new_build_track, churchcenter_embed confirmed -> lead-scoring output
- Polymer facts: Landmark Church case study numbers (organic search +29.5%, zero paid spend) match knowledge/case-studies/landmark-church.md exactly, track=new_build matches this lead's new_build_track
- scripts/voice_check.py: clean
- Word counts: 83/58/40 - all within band
- One CTA per email, sign-off "God Bless," then "Ethan"
- Cohesion: distinct hooks (mailto/copyright / shop link / closer), escalating brevity, no repeated proof sentence beyond the single case-study citation in email_1 only
- Checked against other same-batch drafts for skeleton reuse: distinct openers and CTA phrasing, no shared sentence shape
