---
contact_name: Cyndi Roberts
contact_title: Communications Director
organization: Montrose Church
icp: churches
apollo_contact_id: 54a4581a7468692cf0fefa3f
score_total: 62
tier: warm
research_arm: deep
status: ready
drafted_at: 2026-11-27
---

## research
- Confirmed Church Center (montrosechurch.churchcenter.com) - "Plan Your Visit" and "View
  All Events" link there; "Give Now" links to a page anchor consistent with a Planning
  Center giving integration (source: WebFetch montrosechurch.org, 2026-11-27)
- "Upcoming Events" section is empty on the homepage; main-nav items "Connect" and "Give"
  point to "#" placeholders; one image's alt text renders raw HTML instead of a
  description; the Christmas-schedule link appears duplicated (source: WebFetch
  montrosechurch.org, 2026-11-27)
- Two campuses: Montrose (2409 Florencita Dr., services 10am/11:30am + 10am online) and
  Pasadena (1480 E Washington Blvd., 9am + 10am online) (source: WebFetch
  montrosechurch.org, 2026-11-27)
- platform_detect.py: unknown -> new_build_track (2026-11-27)
- 2 decision-maker contacts found: Cyndi Roberts (Communications Director, top priority)
  and Dave Roberts (Senior Pastor) - per icp-churches.yaml decision_maker_titles order

## proof_used
- knowledge/case-studies/landmark-church.md (new_build_track)

## email_1
subject: two campuses, one broken nav
body: |
  Hey Cyndi,

  Connect and Give in Montrose's main nav both point to "#", and Upcoming Events is empty across both campus pages.

  You're already running Church Center (montrosechurch.churchcenter.com) for registration and giving. We build sites that pull that straight onto the page, so two campuses show real events and service info instead of dead links.

  We did the same kind of migration for Landmark Church and grew organic search sessions 29.5% with zero paid spend.

  Worth 15 minutes this week?

  God Bless,
  Ethan

## email_2
subject: the Christmas page glitch
body: |
  Hey Cyndi,

  Small thing: the Christmas schedule link on the homepage duplicates itself, and one image's alt text is showing raw code instead of a description.

  Little things like that add up for a two-campus church. Core gets a clean rebuild in 4 weeks for $6,500, fixed price, connected straight to Church Center.

  Worth a quick call this week?

  God Bless,
  Ethan

## email_3
subject: no pressure, Cyndi
body: |
  Hey Cyndi,

  If the site's working fine across both campuses, no worries at all.

  If the broken nav and empty events page are on your list, happy to talk through Core, even for 15 minutes.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-27
notes:
- Empty events section, dead "#" nav links, raw-HTML alt text, duplicated Christmas link, two-campus addresses/times -> all verified directly via this session's own WebFetch of montrosechurch.org (2026-11-27)
- Church Center subdomain (montrosechurch.churchcenter.com) -> verified same fetch
- Core $6,500/live in 4 weeks -> matches business-overview.md exactly
- Landmark Church organic search +29.5% (5,604 -> 7,256), zero paid spend -> matches knowledge/case-studies/landmark-church.md exactly, track new_build matches Montrose's new_build_track
- scripts/voice_check.py: clean
- Word counts: email_1 75, email_2 ~48, email_3 ~32
