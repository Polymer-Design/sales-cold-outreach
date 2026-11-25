---
contact_name: Mike Teixeira
contact_title: Executive Pastor
organization: BONITA VALLEY COMMUNITY CHURCH
icp: churches
apollo_contact_id: 6244158d3dc07400018968e7
score_total: 73
tier: warm
research_arm: light
status: ready
drafted_at: 2026-11-25
---

## research
- research_arm: light per EXP-001 - no new searches run for drafting; facts below are
  reused from lead-scoring's score_notes only.
- Wednesday service still listed as "[On Break]" (source: lead-scoring score_notes,
  WebFetch bonitavalley.com)
- A past-season Christmas ice-skating event still linked on the site (source: lead-scoring
  score_notes)
- Malformed social link, an email address formatted as a web URL
  ("https://Info@bonitavalley.com/") (source: lead-scoring score_notes)
- Website platform is Subsplash (platform_detect.py) - per icp-churches.yaml this gets the
  "your app's great, the website doesn't match it" angle
- 36 staff (org_data), $2.3M revenue, three Sunday services (source: Apollo org_data)

## proof_used
- knowledge/case-studies/landmark-church.md (new_build_track)

## email_1
subject: the app vs. the website
body: |
  Hey Mike,

  Bonita Valley's app runs on Subsplash, solid on its own, but the website still lists
  Wednesday service as "On Break" and links to last season's Christmas ice skating event.

  That's the kind of thing a returning visitor notices even when staff don't.

  We'd build a site that actually matches the app, kept current instead of carrying old
  content forward. One similar rebuild grew organic search sessions 29.5% with zero paid
  spend.

  Worth 15 minutes?

  God Bless,
  Ethan

## email_2
subject: a broken link on your homepage
body: |
  Hey Mike,

  One of the social icons on Bonita Valley's homepage links to an email address formatted
  as a web address, which just doesn't work.

  We'd build a site your team can keep accurate across all three Sunday services, without
  small breaks like that piling up.

  Open to a quick call this week?

  God Bless,
  Ethan

## email_3
subject: last note, bonita valley
body: |
  Hey Mike,

  Last one from me.

  If the site's in good shape, no worries at all.

  If it's not, happy to grab 15 minutes whenever works.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-25
notes:
- "[On Break]" Wednesday service + past-season Christmas ice-skating link + malformed
  social link -> all match lead-scoring score_notes verbatim, sourced from WebFetch of
  bonitavalley.com the same pipeline run
- Subsplash platform -> confirmed via platform_detect.py, routed per icp-churches.yaml's
  Subsplash-specific angle note
- Landmark Church proof point verbatim-compatible with knowledge/case-studies/landmark-church.md,
  track new_build matches this lead's new_build_track
- No pricing cited
- voice_check.py: pass
- word counts: email_1 70, email_2 47, email_3 25 - all within band
- cohesion: three angles (app/website mismatch + stale content / broken contact link /
  closer), proof used once, research_arm: light correctly reused only score_notes facts
