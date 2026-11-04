---
contact_name: Mike Klockenbrink
contact_title: Executive Pastor Business Administration / HR
organization: Lakeside Church
icp: churches
apollo_contact_id: 54abd85a7468692ca19b3a11
score_total: 72
tier: warm
research_arm: light
status: pushed
drafted_at: 2026-11-04
pushed_at: 2026-11-04T13:30:00Z
mailbox: ethan@integratedchurchwebsites.com
apollo_contact_id_resolved: 6aeb3426e4f844001cf92494
---

## research
- CMS navigation artifacts appear as literal visible text on the site, including "Folder: Connect," "Folder: Kids," and "Back" (source: lead-scoring score_notes, WebFetch of lakesidechurch.com, 2026-11-04)
- The site calls an event a "Thanksgiving Pie Drive" in copy, but the event itself is titled "Frozen Pie Drive" (source: same score_notes)
- Two Young Adults events overlap in age range (18-24 and 25-30) while sharing an "18-25" URL slug (source: same score_notes)
- Single campus (Folsom, CA), 3 Sun services (8:15/9:45/11:15am) (source: same score_notes)
- Confirmed churchcenter_subdomain, Planning Center signal (source: scripts/church_crawler.py via lead-scoring)
- Platform confirmed Squarespace -> new_build_track (source: scripts/platform_detect.py via lead-scoring)
- research_arm: light - no new research run this pass, per EXP-001; built from score_notes plus free Apollo/platform fields only.

## proof_used
- knowledge/case-studies/landmark-church.md (new_build, icp_fit churches - organic search sessions +29.5% with zero paid spend)

## email_1
subject: "folder: connect"
body: |
  Hey Mike,

  A few spots on Lakeside's site show raw labels like "Folder: Connect" and "Folder: Kids" instead of real page names.

  Small thing, but it's the kind of leftover that builds up fast on a page-builder tool nobody's actively maintaining.

  We moved Landmark Church onto a connected Webflow CMS and grew their organic search sessions 29.5%, zero paid spend.

  Worth 15 minutes to talk through what that could look like for Lakeside?

  God Bless,
  Ethan

## email_2
subject: the pie drive, two names
body: |
  Hey Mike,

  Lakeside's copy calls it a "Thanksgiving Pie Drive," but the event itself is titled "Frozen Pie Drive," and two Young Adults events overlap on age range.

  Those are easy misses on Squarespace, and a dedicated team catches them before anyone registers for the wrong one.

  Want to jump on a call?

  God Bless,
  Ethan

## email_3
subject: no pressure, Mike
body: |
  Hey Mike,

  If the folder labels and event mismatches are already on someone's list, no worries at all.

  If not, happy to talk through what a dedicated team on Lakeside's site would look like, even for 15 minutes.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-04
notes:
- "Folder: Connect"/"Folder: Kids" artifacts, Thanksgiving/Frozen Pie Drive naming mismatch, overlapping Young Adults age-range events -> verified against score_notes, sourced to the same-session WebFetch of lakesidechurch.com (2026-11-04, lead-scoring pass); light arm, not re-fetched this pass per EXP-001
- Single campus, 3 Sun services -> same score_notes
- Planning Center confirmed via church crawler; Squarespace -> new_build_track per lead-scoring
- Landmark Church proof matches knowledge/case-studies/landmark-church.md quotable line verbatim; status approved, track new_build matches, icp_fit churches matches
- scripts/voice_check.py: clean
- Word counts: email_1 76, email_2 56, email_3 41 - all within band (50-85/40-80/30-60)
- One CTA per email, sign-off "God Bless," then "Ethan" throughout
- Cohesion: three distinct hooks (folder-label leakage / event naming mismatch / closer), escalating brevity, proof used once only (email_1)
