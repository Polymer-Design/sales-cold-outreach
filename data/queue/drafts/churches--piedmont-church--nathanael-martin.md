---
contact_name: Nathanael Martin
contact_title: Worship Leader / Communication Director
organization: Piedmont Church
icp: churches
apollo_contact_id: 64f2ada853396f0001881968
score_total: 62
tier: warm
research_arm: deep
status: ready
drafted_at: 2026-11-27
---

## research
- Confirmed churchcenter.com subdomain (piedmontmarietta) - Planning Center is the system
  of record (source: lead-scoring score_notes)
- Events page on piedmontchurch.tv is empty right now (no listings), and the "Watch" and
  "More" main-nav items have no visible destination (source: WebFetch piedmontchurch.tv,
  2026-11-27)
- Giving runs through a separate GivingFuel link rather than anything pulled from Planning
  Center on the site itself (source: WebFetch piedmontchurch.tv, 2026-11-27)
- Featured message "God Is Closer Than You Think" (Dr. Ike Reighard, Senior Pastor since
  2006), dated 2026-11-15 (source: WebFetch piedmontchurch.tv, 2026-11-27)
- 32 staff (org_data), single campus, one Sunday service at 10:30am (source: lead-scoring
  score_notes, WebFetch piedmontchurch.tv)

## proof_used
- knowledge/case-studies/landmark-church.md (new_build_track)

## email_1
subject: the empty events page
body: |
  Hey Nathanael,

  Piedmont's Events page is empty right now, and Watch and More in the main nav do not go anywhere.

  You're already running Planning Center (piedmontmarietta.churchcenter.com). We build sites that pull straight from Church Center, so events, groups, and giving show up live on the site instead of sitting behind empty nav items.

  For Landmark Church we did that same migration and organic search sessions grew 29.5% with zero paid spend.

  Worth 15 minutes to talk through it?

  God Bless,
  Ethan

## email_2
subject: Watch doesn't go anywhere yet
body: |
  Hey Nathanael,

  Noticed Watch in your main nav doesn't link anywhere yet, so anyone looking for a recent message has nowhere obvious to go.

  We'd pull your YouTube library straight into the site the same way we did for Landmark, where sermon notes traffic went from 59 to 2,799 sessions after launch.

  Worth a quick call this week?

  God Bless,
  Ethan

## email_3
subject: no pressure, Nathanael
body: |
  Hey Nathanael,

  If the site's working fine as is, no worries at all.

  If the empty nav items are on your list already, happy to talk through what a Church Center-connected rebuild would look like, even for 15 minutes.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-27
notes:
- Empty Events page, dead Watch/More nav items, GivingFuel link, featured message/date -> all verified directly via this session's own WebFetch of piedmontchurch.tv (2026-11-27)
- Planning Center churchcenter.com subdomain (piedmontmarietta) -> matches lead-scoring score_notes
- Landmark Church numbers (organic search +29.5%, 5,604 -> 7,256; sermon notes 59 -> 2,799) -> match knowledge/case-studies/landmark-church.md exactly, track new_build matches Piedmont's new_build_track
- Same case study (Landmark) referenced in email_1 and email_2 but with two different specific metrics (search growth vs. sermon-notes traffic) - only approved new_build church case study on file, not a verbatim repeat
- scripts/voice_check.py: clean
- Word counts: email_1 78, email_2 55, email_3 34
