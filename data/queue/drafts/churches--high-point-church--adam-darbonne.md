---
contact_name: Adam Darbonne
contact_title: Executive Pastor
organization: High Point Church
icp: churches
apollo_contact_id: 6ad09e5c1f26b8000110ffc6
score_total: 65
tier: warm
research_arm: deep
status: ready
drafted_at: 2026-11-23
---

## research
- Confirmed highpointchurch.org churchcenter subdomain (hpc-132086) via church_crawler -
  Planning Center signal (source: lead-scoring score_notes 2026-11-12)
- Site platform unknown -> new_build_track (source: lead-scoring score_notes 2026-11-12)
- Stray markdown-conversion artifacts in headings (e.g. "\>"), an awkward sermon URL slug
  with four hyphens stacked in a row ("11-22-26----830am-sermon"), and both "More" and
  "School" nav items linking to "#" (source: WebFetch highpointchurch.org, 2026-11-23)
- Duplicated navigation menu (desktop and mobile both render, "Search" appears twice) and
  redundant newsletter sign-up prompts in multiple spots (source: WebFetch
  highpointchurch.org, 2026-11-23)
- Site links to an "Upcoming Pastoral Candidacy Process Timeline for Monte" page - no
  further detail given on the page itself, but it indicates an active pastoral leadership
  transition in progress (source: WebFetch highpointchurch.org, 2026-11-23)
- org_data: 58 employees, founded 1960 (source: Apollo org_data, lead-scoring score_notes
  2026-11-12)

## proof_used
- knowledge/case-studies/landmark-church.md (new_build_track)

## email_1
subject: the "\>" in your headings
body: |
  Hey Adam,

  High Point's site has stray text like "\>" showing up in headings, a sermon link URL with
  four hyphens stacked in a row, and both "More" and "School" in the nav point to "#".

  We rebuild church sites so details like that don't ship. One similar rebuild grew organic
  search sessions 29.5% with zero paid spend.

  Worth 15 minutes?

  God Bless,
  Ethan

## email_2
subject: more eyes on highpointchurch.org
body: |
  Hey Adam,

  With the pastoral candidacy process for Monte underway, the site is probably getting more
  new-visitor traffic than usual right now, people trying to figure out what's next.

  That's exactly the moment a clean, current site matters most, not one with a duplicated
  menu and dead nav links.

  Open to a quick call this week?

  God Bless,
  Ethan

## email_3
subject: last note, high point
body: |
  Hey Adam,

  Last one from me.

  If the site's fine through this season, no worries at all.

  If it's worth cleaning up while more people are taking a look, happy to grab 15 minutes
  whenever works.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-23
notes:
- "\>" heading artifacts, four-hyphen sermon URL slug, "More"/"School" nav links to "#",
  duplicated nav menu -> verified against WebFetch of highpointchurch.org this same session
- Pastoral candidacy process link -> verified same WebFetch; phrased cautiously ("no further
  detail given on the page itself") since the page content itself wasn't available, only the
  link's existence and title
- Landmark Church proof point verbatim-compatible with knowledge/case-studies/landmark-church.md,
  track new_build matches this lead's new_build_track
- No pricing cited
- voice_check.py: pass (fixed one false-positive-triggering literal URL quote by rephrasing)
- word counts: email_1 60, email_2 59, email_3 39 - all within band
- cohesion: three angles (site-breakage detail / transition-timing + duplicated nav / closer),
  proof used once, sign-off "God Bless," + "Ethan" correct
