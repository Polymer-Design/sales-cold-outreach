---
contact_name: Corey Spann
contact_title: Communications Director
organization: Countryside Christian Church
icp: churches
apollo_contact_id: 5f549976acf8f8000163c951
score_total: 88
tier: hot
research_arm: light
status: hot_approved
drafted_at: 2026-10-30
---

## research
- Homepage states growth "from 2,000 to nearly 4,000 attendees every Sunday"; nav lists 4 locations (Clearwater, Espanol, Palm Harbor, South Tampa) and Contact Info lists Clearwater, Palm Harbor, South Tampa, and a new "Dunedin Campus (Coming 2027)" (source: https://countryside.cc, re-verified via WebFetch 2026-10-30)
- Giving nav names a "Legacy Campaign" (/legacy-campaign) and "Legacy Wall" (/legacy-wall) (source: https://countryside.cc, re-verified via WebFetch 2026-10-30)
- **Platform correction (caught at fact-check, see below):** score_notes/brief described the site as Subsplash, but WebFetch on 2026-10-30 found the public site is actually built on SnapPages (footer reads "powered by SnapPages Website Builder"; assets served from storage1.snappages.site) - a hosted DIY builder, not Subsplash. Still routes to new_build_track per icp-churches.yaml (hosted builder -> new build), so the track is unaffected, but the Subsplash-specific "app's great, site doesn't match" angle does not apply here; used the "outgrown the DIY builder" angle instead, backed by the literal SnapPages footer credit.
- Confirmed churchcenter subdomain "countryside" belongs to Countryside Christian Church and offers Events, Check-In, and Groups - no Giving module there (source: https://countryside.churchcenter.com, verified via WebFetch 2026-10-30)
- Giving and the church's mobile app run through Pushpay (homepage links a Google Play listing, id=io.pushpay.countrysidechristianchurch); live streaming runs through a separate Church Online Platform page at countrysidecc.online.church (source: https://countryside.cc, verified via WebFetch 2026-10-30)

## proof_used
- knowledge/case-studies/landmark-church.md (structural fit, not platform-identical: Landmark's content was scattered across a template site, Planning Center as system of record, and a separate unsearchable sermon-notes account before Polymer unified it into one connected Webflow + Church Center build - same "several logins, no single hub" problem Countryside has across its SnapPages site, Pushpay app, Church Center page, and Online Church page, even though the specific prior platforms differ)

## email_1
subject: three logins, one church
body: |
  Hey Corey,

  Countryside's site runs on SnapPages, with a separate Pushpay app and Church Center page for check-in and groups, three logins as the Legacy Campaign and a 2027 Dunedin campus need everything pulling together.

  Landmark Church saw organic search sessions grow 29.5% with zero paid spend after we pulled that same kind of scattered setup into one connected Webflow site with Church Center wired in.

  Worth 15 minutes on what that'd look like across four campuses?

  God Bless,
  Ethan

## email_2
subject: 70% off platform costs
body: |
  Hey Corey,

  Four locations are already carrying you from 2,000 to nearly 4,000 people most Sundays, and Dunedin makes it five while the Legacy Campaign is still raising to get there.

  Landmark Church made that same kind of move off a scattered church-tech stack and cut recurring platform costs by about 70%, money a capital campaign season can put to better use.

  Want to jump on a call?

  God Bless,
  Ethan

## email_3
subject: one more thought
body: |
  Hey Corey,

  I'll leave it here. If juggling the SnapPages site, the Pushpay app, and Church Center is working fine while the Legacy Campaign and Dunedin campus move forward, no worries at all.

  If it's actually a drag on either one, happy to talk, even for 15 minutes.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-10-30
notes:
- "from 2,000 to nearly 4,000 attendees every Sunday" -> verified via WebFetch on https://countryside.cc (2026-10-30), homepage states this verbatim
- 4 campus locations / "Dunedin Campus (Coming 2027)" -> verified via WebFetch on https://countryside.cc (2026-10-30): nav lists Clearwater, Espanol, Palm Harbor, South Tampa; Contact Info section separately lists Clearwater, Palm Harbor, South Tampa, and "Dunedin Campus (Coming 2027)"
- "Legacy Campaign" / "Legacy Wall" -> verified via WebFetch, both linked under the Giving nav (/legacy-campaign, /legacy-wall)
- **FAIL caught on first pass, corrected before this verdict:** the brief/score_notes claimed platform: subsplash. Re-fetching the source (Check 1's "re-fetch the source, does it actually say that") found the public site is built on SnapPages ("powered by SnapPages Website Builder" in the footer, assets on storage1.snappages.site), not Subsplash - score_notes' technographic read was wrong on this point. The original draft's entire hook and its "app's great, site doesn't match" Subsplash-specific angle were built on a false premise and would have failed Check 1. Rewrote the research block, proof framing, and all three emails to use the verified facts instead: SnapPages (hosted DIY builder -> "outgrown the DIY builder" angle, still new_build_track per icp-churches.yaml), a separate Pushpay app for giving/mobile (confirmed via the homepage's linked Google Play listing, id=io.pushpay.countrysidechristianchurch), and the Church Center subdomain "countryside" (confirmed via WebFetch on https://countryside.churchcenter.com, 2026-10-30, belongs to this church, offers Events/Check-In/Groups - no Giving module there, so "Church Center for giving and check-in" would have overclaimed; emails now only credit it with check-in/groups)
- Track/proof consistency: new_build_track pitch throughout, no monthly-plan language; knowledge/case-studies/landmark-church.md is track: new_build, icp_fit: churches, status: approved - matches
- "organic search sessions grew 29.5% with zero paid spend" -> matches landmark-church.md "Organic search sessions +29.5% (5,604 -> 7,256) with no paid spend" exactly
- "cut recurring platform costs by about 70%" -> matches landmark-church.md's quotable line "Cut recurring platform costs by roughly 70%, from $3-4k/year down to under $1k/year" and falls inside its "~65-75%" results range
- No PageSpeed claim made (none run under the light arm) and no Polymer-benchmark comparison, so knowledge/pagespeed-benchmark.md status is moot here
- scripts/voice_check.py: clean, zero banned words/phrases/openers/em dashes
- word counts: email_1 80w, email_2 71w, email_3 51w - all within band (50-85 / 40-80 / 30-60)
- sign-off "God Bless," then "Ethan" on all three, churches register per voice-and-tone.md; one CTA per email, no booking link anywhere
- CTA phrasing rotates: "Worth 15 minutes on..." / "Want to jump on a call?" / "happy to talk, even for 15 minutes" - no repeated signature phrase
- cohesion: no proof stat repeated across emails (email_1 uses the 29.5% organic-search number, email_2 uses the ~70% cost-cut number, email_3 recaps with no new number); length escalates down 80 -> 71 -> 51 words
- anti-fingerprint check against other drafts in data/queue/drafts/ (esp. churches--southside-church--wynne-lankford.md, which also cites Landmark Church and the same 29.5%/70% numbers): subject lines ("three logins, one church" / "70% off platform costs" / "one more thought") don't collide with any existing draft; email_1's Landmark sentence was rewritten to lead with the result ("Landmark Church saw organic search sessions grow...") instead of Southside's draft's action-first construction, so the two drafts don't share a sentence skeleton beyond the unavoidable shared facts (same case study, same ICP)
