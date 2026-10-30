---
contact_name: Darla Turpin
contact_title: Communications Director
organization: Crossroads Christian Church
icp: churches
apollo_contact_id: 676a4c0abe78940001cf71f2
score_total: 65
tier: warm
research_arm: deep
status: ready
drafted_at: 2026-10-30
---

## research
- Church Center at cccgo.churchcenter.com exposes check-in, giving, groups, events, and signups modules (source: https://cccgo.churchcenter.com, checked 2026-10-30); cccgo.com's own giving and groups pages don't embed any of it - the "GIVE NOW"/recurring-giving buttons on cccgo.com/giving and the "GET CONNECTED" signup button on cccgo.com/groups both link out to cccgo.churchcenter.com forms (source: https://cccgo.com/giving, https://cccgo.com/groups, checked 2026-10-30)
- Sermons are hosted on a separate media.cccgo.com subdomain and the livestream on a separate live.cccgo.com subdomain, neither embedded on cccgo.com itself (source: https://cccgo.com, https://cccgo.com/giving, checked 2026-10-30)
- Footer reads "©2024 Crossroads Christian Church" - about two years stale (source: https://cccgo.com, checked 2026-10-30)
- Mobile PageSpeed: performance 50/100, LCP 21.9s (source: scripts/pagespeed_check.py --url https://cccgo.com --strategy mobile, run 2026-10-30)
- Site platform not a major builder Polymer auto-detects; confirmed via scripts/platform_detect.py --url https://cccgo.com --icp churches (2026-10-30) -> unknown, new_build_track
- One physical campus (Newburgh, IN) plus an online campus, Sunday services at 9:00 and 10:45 AM, serving the tri-state Evansville/Newburgh/Henderson area (source: https://cccgo.com, checked 2026-10-30)

## proof_used
- knowledge/case-studies/landmark-church.md (Sermon Notes sessions 59 -> 2,799 after Planning Center's sermon library was pulled directly into the site)
- knowledge/business-overview.md#pricing (Church Core tier: Planning Center + YouTube sermons included)

## email_1
subject: cccgo's four separate sites
body: |
  Hey Darla,

  Crossroads runs full Church Center at cccgo.churchcenter.com, check-in, giving, groups, events, signups, but cccgo.com's own giving and groups pages link out to it instead of pulling any of that in. Sermons and the livestream live on two more separate subdomains.

  We build church sites around Church Center itself. When we pulled Planning Center's sermon library directly into Landmark Church's site, Sermon Notes sessions went from 59 to 2,799.

  Worth 15 minutes?

  God Bless,
  Ethan

## email_2
subject: two years behind
body: |
  Hey Darla,

  cccgo.com takes 21.9 seconds to show its main content on mobile, and the footer still reads ©2024, about two years stale now.

  Our Church Core build comes with Planning Center and the YouTube sermon library wired directly into the site, not bolted on as an add-on after the fact.

  Open to chatting this week?

  God Bless,
  Ethan

## email_3
subject: I'll stop here
body: |
  Hey Darla,

  Last note. Crossroads serves two congregations, in person at Newburgh and online, through a main site that's currently the slowest part of reaching either one.

  If the site's not a priority this year, no worries. If it is, up for a quick call?

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-10-30
notes:
- "Church Center at cccgo.churchcenter.com exposes check-in, giving, groups, events, signups" -> re-fetched https://cccgo.churchcenter.com (2026-10-30), all five modules present in nav
- "cccgo.com's own giving and groups pages link out to it instead of pulling any of that in" -> re-fetched https://cccgo.com/giving (GIVE NOW / recurring-giving buttons all point to cccgo.churchcenter.com, no embedded form) and https://cccgo.com/groups (GET CONNECTED button points to a cccgo.churchcenter.com form) - confirmed, not embedded
- original research pass also flagged cccgo.com's "Be with God / Be with Others / Be Sent" nav items as dead "#" links - re-fetched and found they are standard dropdown parent toggles with working submenus underneath, not broken; this claim was dropped from the draft before it ever reached email copy (research block and all three emails rewritten to drop it) - caught on this pass before it could ship
- "Sermons... on a separate media.cccgo.com subdomain and the livestream on... live.cccgo.com" -> confirmed on https://cccgo.com/giving (sermon series embeds point to media.cccgo.com) and https://cccgo.com (live.cccgo.com livestream link)
- "footer still reads ©2024" -> confirmed on https://cccgo.com (2026-10-30); ~2 years stale is a fair characterization today (2026-10-30)
- "cccgo.com takes 21.9 seconds to show its main content on mobile" -> verified against scripts/pagespeed_check.py --url https://cccgo.com --strategy mobile, run 2026-10-30, LCP numeric_ms 21859 ("21.9 s" display) - raw fact about the lead's own site, no comparative claim made, so knowledge/pagespeed-benchmark.md's approved status isn't even needed here
- "Sermon Notes sessions went from 59 to 2,799" -> matches knowledge/case-studies/landmark-church.md verbatim ("Sermon Notes sessions 59 → 2,799"), status: approved, track: new_build, icp_fit: churches - matches this lead's new_build_track and ICP, direct-fit (both leads' pain point is sermon content living off the main site)
- "Our Church Core build comes with Planning Center and the YouTube sermon library wired directly into the site" -> matches knowledge/business-overview.md Core tier ("Planning Center + YouTube sermons included"); scoped to "Our Church Core build" specifically, not overclaimed as every tier/package
- platform/track: scripts/platform_detect.py --url https://cccgo.com --icp churches -> unknown, new_build_track; matches the lead data provided and the pricing/case-study choices above
- no PageSpeed comparative claim against Polymer's own benchmark anywhere in the sequence
- voice_check.py: clean
- word counts: email_1 76w, email_2 59w, email_3 48w - all within band (e1 50-85, e2 40-80, e3 30-60)
- first sentence of email_1 names the org's own churchcenter subdomain, sendable to no other org; one CTA per email ("Worth 15 minutes?" / "Open to chatting this week?" / "up for a quick call?" - all distinct within this thread); correct "God Bless,"/"Ethan" sign-off on all three; escalating brevity (76 -> 59 -> 48)
- checked email_1's original CTA ("Worth 15 minutes to talk through what that'd look like for Crossroads?") against other drafts in data/queue/drafts/ and found it was a near-exact match to the same elaborated skeleton already used in churches--tomoka-christian-church--cord-bear.md, churches--kingsway-christian-church--danielle-smalley.md, churches--orchard-hill-church--suzanne-pietro.md, and startups--userlens-yc-p26--ankur-dahama.md ("Worth 15 minutes to [verb] what that'd/could look like for/here [org]?") - shortened to the bare canonical "Worth 15 minutes?" to avoid adding another instance of that repeated sentence shape
- proof points not repeated across the sequence (Landmark case study in email_1, plain Church Core capability statement in email_2, no new proof in the email_3 closer); no contradictions between emails
