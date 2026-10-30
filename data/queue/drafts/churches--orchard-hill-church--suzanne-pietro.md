---
contact_name: Suzanne Pietro
contact_title: Director of Communications
organization: Orchard Hill Church
icp: churches
apollo_contact_id: 66fac574d7530900017ddad8
score_total: 66
tier: warm
research_arm: deep
status: ready
drafted_at: 2026-10-30
---

## research
- 8 locations (Wexford, Strip District, Butler, Bridgeville, Beaver Valley, Mars/Gibsonia, The Hill at Heinz, Campus Pathway) under "One Church. Multiple Locations," 3 streamed weekend services (Sat 5pm, Sun 9/10:45am) (source: https://orchardhillchurch.com, reused from score_notes)
- Site platform: Squarespace, confirmed via scripts/platform_detect.py --url https://orchardhillchurch.com --icp churches (run 2026-10-30) -> new_build_track
- Confirmed churchcenter_subdomain orchardhillchurchpa: the site's "Give Now" button routes to orchardhillchurchpa.churchcenter.com/giving, the prayer request form routes to orchardhillchurchpa.churchcenter.com/people/forms/729163, and event registrations/groups route to the same Church Center subdomain - giving, groups, signups, and prayer requests all live off orchardhillchurch.com itself (source: https://orchardhillchurch.com/give and https://orchardhillchurchpa.churchcenter.com, checked 2026-10-30)
- Mobile PageSpeed: LCP volatile run to run (34.0s on first check, 38.5s on a re-check minutes later; performance score 35-44/100 across both) but consistently well over 30 seconds (source: scripts/pagespeed_check.py --url https://orchardhillchurch.com --strategy mobile, both runs 2026-10-30)
- Current featured sermon: "Navigating Life Challenges #2 - Navigating Desire" (Genesis 39) (source: https://orchardhillchurch.com, checked 2026-10-30)

## proof_used
- knowledge/case-studies/landmark-church.md (Church Center / Planning Center pulled directly into the site; organic search sessions +29.5% with zero paid spend)
- knowledge/business-overview.md#initial-builds (Church Core: Planning Center + YouTube sermons included, the named offer for a church already on Planning Center but on a hosted builder)

## email_1
subject: orchard hill's two front doors
body: |
  Hey Suzanne,

  Orchard Hill's Church Center handles giving, groups, signups, and prayer requests, but none of it lives on orchardhillchurch.com, across all eight campuses.

  We build sites around Church Center, so people don't have to leave the site to do any of it. Pulling Planning Center events and groups straight into Landmark Church's site grew their organic search sessions 29.5% with zero paid spend.

  Worth 15 minutes to talk through what that could look like here?

  God Bless,
  Ethan

## email_2
subject: squarespace vs 8 campuses
body: |
  Hey Suzanne,

  Running eight campuses off Squarespace means Orchard Hill's homepage is doing more than the builder was made for, and on mobile it takes over 30 seconds to show its main content.

  Our Church Core build comes with Planning Center and YouTube sermon hosting built in from day one: a site made for a multi-campus church instead of bolted onto a page builder.

  Open to a quick call this week?

  God Bless,
  Ethan

## email_3
subject: no worries, orchard hill
body: |
  Hey Suzanne,

  Last note on this. If Orchard Hill's current setup across eight campuses is working fine, no worries at all.

  If giving and groups living on a separate site from orchardhillchurch.com is more friction than it's worth, up for a quick call?

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-10-30
notes:
- "8 locations" (Wexford, Strip District, Butler, Bridgeville, Beaver Valley, Mars/Gibsonia, The Hill at Heinz, Campus Pathway) and "3 streamed weekend services" (Sat 5pm, Sun 9/10:45am) -> re-fetched https://orchardhillchurch.com fresh, matches exactly
- "none of it lives on orchardhillchurch.com" (giving, groups, signups, prayer requests) -> re-fetched https://orchardhillchurch.com/give (Give Now -> orchardhillchurchpa.churchcenter.com/giving, no Squarespace-native payment) and https://orchardhillchurchpa.churchcenter.com (giving/groups/calendar/signups/login all present) independently twice, both confirm
- "prayer request form" -> re-fetched main site, Request Prayer link -> orchardhillchurchpa.churchcenter.com/people/forms/729163, matches draft exactly
- Site platform Squarespace / new_build_track -> re-ran scripts/platform_detect.py --url https://orchardhillchurch.com --icp churches, same result both times
- PageSpeed claim: FIRST PASS CAUGHT A PROBLEM - re-running scripts/pagespeed_check.py --url https://orchardhillchurch.com --strategy mobile a second time returned LCP 38.5s / performance 44, materially different from the first run's 34.0s / 35. Citing an exact "34 seconds" was too fragile given that run-to-run volatility. Fixed: email_2 now says "over 30 seconds," which both runs support, and the research block records both readings honestly instead of picking one. Re-verified voice_check.py and word counts after the edit - still clean, still within band.
- Current sermon title -> re-fetched, matches, dated today, not used as a claim in copy (background only)
- "29.5%" organic search figure -> matches knowledge/case-studies/landmark-church.md verbatim ("+29.5% (5,604 -> 7,256) with no paid spend"), status: approved, track: new_build - matches this lead's new_build_track, direct-fit proof (both moved Church Center/Planning Center off a disconnected setup)
- "Church Core...Planning Center and YouTube sermon hosting" -> matches knowledge/business-overview.md Core tier ("Planning Center + YouTube sermons included"); no price or page count cited, phrased as what Polymer's build includes, not a claim about the lead's current setup
- Track/proof consistency: new_build_track lead, both proof points (Landmark case study + Church Core capability) are new-build material, no subscription-track content borrowed
- voice_check.py: clean (no banned words/phrases/openers, no em dashes)
- word counts: email_1 79w, email_2 74w, email_3 46w - all within band
- Check 3 judgment: first sentence of email_1 names the org's domain and eight-campus count, sendable to no other org; one CTA each, rotated phrasing ("worth 15 minutes to talk through...", "open to a quick call this week?", "up for a quick call?" - caught and fixed an awkward double "worth...worth" collision between email_1 and the original email_3 draft); correct "God Bless,"/"Ethan" sign-off on all three
- Check 4 cohesion: three different beats (Church Center/Landmark proof -> Squarespace/Church Core capability -> closer with no new claims), no repeated proof point, length escalates downward (79/74/46); subject lines ("orchard hill's two front doors", "squarespace vs 8 campuses", "no worries, orchard hill") checked against every other subject currently in data/queue/drafts/ - no duplicates or template-shaped repeats
