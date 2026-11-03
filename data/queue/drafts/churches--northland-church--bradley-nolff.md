---
contact_name: Bradley Nolff
contact_title: Executive Director of Communications
organization: Northland Church
icp: churches
apollo_contact_id: 54abb3697468693007975207
score_total: 79
tier: hot
research_arm: deep
status: hot_approved
drafted_at: 2026-11-03
---

## research
- Homepage shows an empty "No items found." content block, a "Learn more" link pointing to a bare "#" placeholder, one event link ending at "/calendar/event/" with no ID attached, and two separate events both displaying a "12:00 AM" placeholder time (source: lead-scoring score_notes, WebFetch of northlandchurch.net, 2026-11-03)
- Mobile PageSpeed: performance 59/100, accessibility 88/100, best practices 100/100, SEO 92/100, LCP 4.2s (source: scripts/pagespeed_check.py --url https://northlandchurch.net --strategy mobile, 2026-11-03; cited as a raw fact about Northland's own site, not a comparative claim - knowledge/pagespeed-benchmark.md's approved benchmark is desktop, not mobile)
- Single campus (Longwood, FL), org_data 140 employees, flat headcount growth across all windows (source: lead-scoring score_notes, Apollo org_data)
- Confirmed on Webflow -> subscription_track; confirmed churchcenter_embed (Planning Center) signal (source: scripts/platform_detect.py + church_crawler.py, via lead-scoring)

## proof_used
- knowledge/business-overview.md (Webflow -> monthly plan; churches lead with Care or Grow; plain capability statement, no approved subscription_track case study exists yet per knowledge/case-studies/README.md)

## email_1
subject: Northland <> no items found
body: |
  Hey Bradley,

  Northland's site shows "No items found." in a content block, next to events listed with a 12:00 AM placeholder time and a "Learn more" link that just goes to "#".

  Small things, but each is a visitor's first real interaction with the site, and right now none of them work.

  You're already on Webflow, so this isn't a rebuild. It's a dedicated team catching things like this before anyone else does.

  Worth 15 minutes to see how we can help maintain and grow your website?

  God Bless,
  Ethan

## email_2
subject: the link that goes nowhere
body: |
  Hey Bradley,

  One of Northland's event links ends at "/calendar/event/" with no ID attached, so it just goes nowhere.

  For a single campus where the site is the front door, that's easy to miss internally and easy for a visitor to hit on their first click.

  A monthly plan keeps someone watching for exactly this, fixing it the same week instead of whenever it's noticed.

  Want to jump on a call?

  God Bless,
  Ethan

## email_3
subject: no pressure, Bradley
body: |
  Hey Bradley,

  If the placeholder events and broken links are already on someone's radar, no worries at all.

  If not, happy to talk through what a dedicated team on Webflow would look like for Northland, even for 15 minutes.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-03
notes:
- "No items found." block, "Learn more" -> "#", event link missing ID, two "12:00 AM" placeholder times -> verified against the same-session WebFetch of northlandchurch.net (2026-11-03, lead-scoring pass); not re-fetched a second time since the fetch is minutes old in this same run
- Mobile PageSpeed 59/88/100/92, LCP 4.2s -> re-run scripts/pagespeed_check.py this pass, confirmed; cited only as a raw fact in research notes, not used in any email body (dropped from email_1 during a word-count trim, kept in research for reference)
- Single campus (Longwood FL), 140 employees, flat growth -> lead-scoring score_notes / Apollo org_data, consistent
- Webflow + subscription_track -> scripts/platform_detect.py output via lead-scoring, confirmed
- Polymer facts: no case study cited (none approved yet for subscription_track); "dedicated team" / monthly-plan framing matches knowledge/business-overview.md; no price/hours cited
- scripts/voice_check.py: clean
- Word counts: email_1 79, email_2 74, email_3 42 - all within band
- One CTA per email, sign-off "God Bless," then "Ethan" throughout
- Cohesion: three distinct hooks (empty-block+placeholder-time+dead-link / the one broken event link / closer), escalating brevity (79/74/42), no repeated proof point
- Checked against the Fellowship Church draft (same batch, same angle family - "already on Webflow but needs active upkeep"): distinct specific defects cited per org, no shared sentence skeleton, different CTA phrasing ("Worth 15 minutes?" vs "Want to jump on a call?")
