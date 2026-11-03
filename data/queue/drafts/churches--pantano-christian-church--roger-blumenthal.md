---
contact_name: Roger Blumenthal
contact_title: Executive Pastor
organization: Pantano Christian Church
icp: churches
apollo_contact_id: 6129dc676f0aa200012344f2
score_total: 59
tier: warm
research_arm: light
status: ready
drafted_at: 2026-11-03
---

## research
- Homepage nav splits into Houghton, Benson, Español, Online, and Pantano Anywhere sections, each a separate destination (source: lead-scoring score_notes, WebFetch of pantano.church, 2026-11-03)
- A dated upcoming event: a Rocky Point, Mexico trip running November 5-8, 2026 (source: same score_notes WebFetch)
- Confirmed churchcenter_embed (Planning Center) signal; site platform WordPress -> new_build_track (source: scripts/platform_detect.py + church_crawler.py, via lead-scoring)
- research_arm: light (EXP-001) - no new research run this pass; all facts reused from lead-scoring's score_notes.

## proof_used
- knowledge/case-studies/landmark-church.md (new_build, churches icp_fit) - organic search sessions +29.5% with zero paid spend, from connecting Planning Center directly into a church's site

## email_1
subject: five sections, one church
body: |
  Hey Roger,

  Pantano's nav splits into Houghton, Benson, Español, Online, and Pantano Anywhere, each pointing somewhere different, while Church Center runs separately underneath for check-in and groups.

  That's a lot of doors for one visitor to pick between before they ever get to a service time.

  We connected Planning Center directly into a church's site and grew organic search sessions 29.5% with zero paid spend.

  Worth 15 minutes?

  God Bless,
  Ethan

## email_2
subject: the Rocky Point trip
body: |
  Hey Roger,

  Pantano's got a Rocky Point trip running November 5 through 8, on top of five nav sections pointing in five different directions.

  A connected build means new events like that go up in minutes instead of waiting on whoever manages the site.

  Want to jump on a call?

  God Bless,
  Ethan

## email_3
subject: no pressure, Roger
body: |
  Hey Roger,

  If the current site setup is working fine for Pantano, no worries at all.

  If not, happy to talk through connecting it with Church Center into one build, even for 15 minutes.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-03
notes:
- Nav sections (Houghton, Benson, Español, Online, Pantano Anywhere), Rocky Point trip Nov 5-8 2026 -> verified against same-session WebFetch of pantano.church (2026-11-03); not re-fetched again. Note: "Houghton"/"Benson" are cited only as nav-section labels, not asserted as campuses, since the source WebFetch didn't confirm a campus count - avoids overclaiming beyond what was actually observed
- WordPress + new_build_track, churchcenter_embed confirmed -> lead-scoring output
- Polymer facts: Landmark Church case study numbers match knowledge/case-studies/landmark-church.md exactly, track=new_build matches
- scripts/voice_check.py: clean
- Word counts: 71/53/37 - all within band
- One CTA per email, sign-off "God Bless," then "Ethan"
- Cohesion: distinct hooks (nav sections / dated trip / closer), escalating brevity, no repeated proof point
