---
contact_name: Eric Wendt
contact_title: Director of Digital Content & Communications
organization: Christ Community Church
icp: churches
apollo_contact_id: 54a13b9069702d2d7f339f01
score_total: 65
tier: warm
research_arm: deep
status: pushed
drafted_at: 2026-11-23
pushed_at: 2026-11-23T13:37:02Z
pushed_via_mailbox: ethan@integratedchurchwebsites.com
apollo_contact_id_resolved: 6b04417346aa4b00208e8837
---

## research
- Site platform: Webflow -> subscription_track (source: lead-scoring score_notes 2026-11-12,
  scripts/platform_detect.py); no subscription-track case study exists yet, drafted with a
  plain capability statement per outreach-email Step 0 / knowledge/case-studies/README.md
- Footer reads "© 0000"; the "Watch Now" link points to "#"; the "Upcoming Classes & Events"
  page shows "No items found." (source: WebFetch cccomaha.org, 2026-11-23)
- Inconsistent capitalization/typos: "Middle SChool," "RenEwal & Care," "we are all for
  jesus" (lowercase) vs. "Jesus" elsewhere, "Plan a Visit" vs. "Plan A Visit" (source:
  WebFetch cccomaha.org, 2026-11-23)
- Church Center is linked only from the prayer-request form (cccomaha.churchcenter.com);
  Events/Give/Groups all route to internal pages instead, and the site's own app listing
  references Subsplash ("thechurchapp"), not Church Center (source: WebFetch cccomaha.org,
  2026-11-23)
- org_data: 64 employees, founded 1921, $4.1M revenue (source: Apollo org_data, lead-scoring
  score_notes 2026-11-12)

## proof_used
- knowledge/business-overview.md#monthly-plans (plain capability statement - no
  subscription-track case study exists yet per knowledge/case-studies/README.md)

## email_1
subject: the footer says "© 0000"
body: |
  Hey Eric,

  Christ Community's footer still reads "© 0000," the Watch Now button links to "#," and
  the Upcoming Classes & Events page shows "No items found."

  Running Webflow already means none of that needs a rebuild, just someone keeping the
  day-to-day details current. That's what our monthly plans cover: small fixes and content
  updates, without adding headcount for it.

  Worth 15 minutes?

  God Bless,
  Ethan

## email_2
subject: "Middle SChool" and "jesus"
body: |
  Hey Eric,

  Little things like "Middle SChool" and "we are all for jesus" lowercase are easy to miss
  day to day, but they're the first thing a new visitor notices on the page.

  A monthly plan means someone's actually looking at cccomaha.org regularly, catching
  details like that instead of leaving them for whenever there's time.

  Open to a quick call this week?

  God Bless,
  Ethan

## email_3
subject: last note, christ community
body: |
  Hey Eric,

  Last one from me.

  If the site's getting the attention it needs as is, no worries at all.

  If the small stuff (the footer, the empty events page) is worth a second look, happy to
  grab 15 minutes whenever works.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-23
notes:
- "© 0000" footer, dead "Watch Now" link, empty "Upcoming Classes & Events" page, the
  specific typos cited -> verified against WebFetch of cccomaha.org this same session
- Church Center linked only from the prayer form, not Events/Give/Groups -> verified same
  WebFetch
- No case study cited - plain capability statement per outreach-email Step 0 (subscription
  track has no approved case study yet). No pricing cited; "monthly plans" referenced only
  generically, no tier name or dollar figure - matches the Menlo Church precedent.
- Track/proof consistency: subscription_track lead, no new-build case study borrowed.
- voice_check.py: pass
- word counts: email_1 66, email_2 65, email_3 45 - all within band
- cohesion: three angles (footer/dead-link breakage / typo detail / closer), sign-off
  "God Bless," + "Ethan" correct
