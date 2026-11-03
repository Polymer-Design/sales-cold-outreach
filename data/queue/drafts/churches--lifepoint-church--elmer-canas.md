---
contact_name: Elmer Canas
contact_title: Executive Pastor of Ministries
organization: LifePoint Church
icp: churches
apollo_contact_id: 6727595db7d5980001ba146b
score_total: 68
tier: warm
research_arm: deep
status: ready
drafted_at: 2026-11-03
---

## research
- Homepage tagline repeats itself five times in a row: "We are all about changed lives. changed lives. changed lives. changed lives. changed lives." (source: lead-scoring score_notes, WebFetch of lifepointchurch.tv, 2026-11-03)
- Several homepage images use unedited placeholder-style filenames, e.g. "4 e1704216566330 200x200 1" (source: same score_notes WebFetch)
- Mobile PageSpeed: performance 57/100, accessibility 89/100, best practices 58/100, SEO 100/100, LCP 16.6s (source: scripts/pagespeed_check.py --url https://lifepointchurch.tv --strategy mobile, 2026-11-03; raw fact about LifePoint's own site only, not a comparative claim)
- org_data 85 employees, founded 2005 (source: Apollo org_data, via lead-scoring)
- Confirmed churchcenter_embed (Planning Center) signal; site platform WordPress -> new_build_track (source: scripts/platform_detect.py + church_crawler.py, via lead-scoring)

## proof_used
- knowledge/case-studies/landmark-church.md (new_build, churches icp_fit) - organic search sessions +29.5% with zero paid spend, from connecting Planning Center/Church Center into one real CMS

## email_1
subject: changed lives. changed lives.
body: |
  Hey Elmer,

  LifePoint's homepage tagline repeats itself five times in a row: "We are all about changed lives. changed lives. changed lives. changed lives. changed lives."

  Small glitches like that are easy to miss without a dedicated team checking the site regularly, on top of a 16.6 second mobile load time.

  We rebuilt a church's site into one connected, faster build around Church Center and grew organic search sessions 29.5% with zero paid spend.

  Worth 15 minutes?

  God Bless,
  Ethan

## email_2
subject: the e1704216566330 images
body: |
  Hey Elmer,

  A few of LifePoint's homepage images are still named things like "4 e1704216566330 200x200 1," unedited filenames that shouldn't be visible anywhere on a live site.

  A rebuild means someone's actually combing through details like that before they go live, not after.

  Want to jump on a call?

  God Bless,
  Ethan

## email_3
subject: no pressure, Elmer
body: |
  Hey Elmer,

  If the tagline and image names are already on someone's list, no worries at all.

  If not, happy to talk through a rebuild around Church Center, even for 15 minutes.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-03
notes:
- Repeated tagline, placeholder image filenames -> verified against same-session WebFetch of lifepointchurch.tv (2026-11-03); not re-fetched again
- Mobile PageSpeed 57/89/58/100, LCP 16.6s -> re-run scripts/pagespeed_check.py this pass, confirmed; cited as a raw fact only
- Polymer facts: Landmark Church case study numbers match knowledge/case-studies/landmark-church.md exactly, track=new_build matches
- scripts/voice_check.py: clean
- Word counts: 80/53/35 - all within band
- One CTA per email, sign-off "God Bless," then "Ethan"
- Cohesion: distinct hooks (tagline glitch / image filenames / closer), escalating brevity, no repeated proof point
