---
contact_name: Elvis Jusupovic
contact_title: Head of Growth Marketing
organization: StreetTalk
icp: startups
apollo_contact_id: 63158cfd400e7b000145fbf5
score_total: 62
tier: warm
status: ready
drafted_at: 2026-10-20
---

## research
- StreetTalk is a street-interview ad agency ("Conversation Creative"), formerly 203 Media, rebranded Dec 2025 with Jesse Eisenberg (ex-Tinuiti Chief Growth Officer) as CEO; has run 10,000+ interviews for 150+ brands including Dr. Squatch and Masa Chips (source: WebSearch 2026-10-20, netinfluencer.com / PR Newswire profile)
- Careers page (streettalk.com/careers) lists 9 open roles across 4 cities (Host Talent, Field Producer, Editor) - actively hiring in production, zero designer/frontend/web-dev roles among them (source: WebFetch https://streettalk.com/careers, 2026-10-20)
- Mobile PageSpeed: performance 50/100, LCP 17.9s (source: scripts/pagespeed_check.py --url https://streettalk.com --strategy mobile, run 2026-10-20)
- Site platform: no builder marker detected, confirmed via scripts/platform_detect.py --url https://streettalk.com --icp startups (2026-10-20)

## proof_used
- knowledge/case-studies/fispoke.md (25-page CMS-driven Webflow build with SEO/AEO and structured data built in from scratch)

## email_1
subject: a creative agency's slow site
body: |
  Hey Elvis,

  StreetTalk sells brands on fast, authentic creative, and the site pitching that work takes almost 18 seconds to load on mobile, which is exactly the gap a brand's own marketing team would catch first.

  We rebuilt a fintech company's site into a 25-page CMS-driven build with SEO and structured data from scratch, the kind of fix an agency's own front door needs.

  Does a quick call make sense?

  Ethan

## email_2
subject: hiring producers, not a faster site
body: |
  Hey Elvis,

  StreetTalk's hiring producers and editors across four cities right now, which means more brand pitches running through a site that's still an 18-second load on mobile before anyone sees the work.

  We build Webflow sites your team can publish to without touching code, so the site keeps pace with the hiring.

  Open to connecting this week?

  Ethan

## email_3
subject: quick follow-up, StreetTalk
body: |
  Hey Elvis,

  If the site isn't a priority while you're scaling the team, no worries.

  If an 18-second mobile load is costing pitches, worth a conversation?

  Ethan

## fact_check
result: pass
checked_at: 2026-10-20
notes:
- "StreetTalk sells brands on fast, authentic creative" / rebrand and CEO details -> verified against netinfluencer.com and PR Newswire StreetTalk profile (via WebSearch 2026-10-20): 203 Media rebranded to StreetTalk Dec 2025, Jesse Eisenberg (ex-Tinuiti Chief Growth Officer) named CEO, "Conversation Creative" positioning, 10,000+ interviews for 150+ brands including Dr. Squatch and Masa Chips. Not used as a fresh trigger in the copy (it's ~10 months old, past the decay window used in scoring) - used only as background description, not claimed as recent news
- "StreetTalk's hiring producers and editors across four cities right now" -> verified against WebFetch of https://streettalk.com/careers, 2026-10-20: 9 open roles (Host Talent, Field Producer, Editor) across Miami, LA, NYC, Atlanta, and remote; zero designer/frontend/web-dev roles among them
- "takes almost 18 seconds to load on mobile" / "an 18-second mobile load" -> verified against scripts/pagespeed_check.py --url https://streettalk.com --strategy mobile (run 2026-10-20): LCP 17.9s, performance 50/100. Raw fact about the lead's own site, no Polymer-benchmark comparison made
- "a 25-page CMS-driven build with SEO and structured data from scratch" -> matches knowledge/case-studies/fispoke.md (status: approved, track: new_build, matches this lead's new_build_track)
- "We build Webflow sites your team can publish to without touching code" -> matches knowledge/business-overview.md general capability claim, not re-citing Fispoke's specific numbers a second time
- platform_detect.py returned "unknown" (confirmed 2026-10-20) - email doesn't claim a specific hosted-builder platform
- voice_check.py: clean
- word counts: email_1 71w, email_2 59w, email_3 27w - all within band
- sign-off: plain "Ethan", no "God Bless" (startups)
- CTA/subject phrasing cross-checked against Aibrary, Multiplier, and Cars & Bids drafts in this batch - "up for a short call?" was changed to "worth a conversation?" after spotting a converging "a short call?" ending pattern across those three drafts; subjects distinct from the rest of the batch
