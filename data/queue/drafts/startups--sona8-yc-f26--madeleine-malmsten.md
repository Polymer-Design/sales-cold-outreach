---
contact_name: Madeleine Malmsten
contact_title: Founder
organization: Sona8 (YC F26)
icp: startups
apollo_contact_id: 5e85fbe6c3b6de0001bf51e7
score_total: 74
tier: warm
research_arm: deep
status: pushed
pushed_at: 2026-11-19T13:36:31Z
drafted_at: 2026-11-19
---

## research
- "How it works" nav text runs together into one string, "Sona8 interviews your
  peopleSona8 finds the patternsYou read the Insights" (source: WebFetch of sona8.com,
  2026-11-19)
- The same 12-item testimonial/quote list appears twice on the page, word for word
  (source: WebFetch of sona8.com, 2026-11-19)
- Team cards show duplicated titles, e.g. "Founder/CEOFounder and CEO" and "Previously MIT,
  BCGPreviously MIT, BCG" (source: WebFetch of sona8.com, 2026-11-19)
- "Trusted by winning organisations like" heading sits above an empty row, no logos or names
  (source: WebFetch of sona8.com, 2026-11-19)
- AI voice-interview platform for employee insights (phone/browser interviews, multi-agent
  theme coding), backed by Y Combinator F26; org_data 7 employees, founded 2026 (source:
  Apollo org_data + site, via lead-scoring score_notes, 2026-11-19)
- Platform undetected by platform_detect.py -> new_build_track (source:
  scripts/platform_detect.py, via lead-scoring)

## proof_used
- knowledge/case-studies/fispoke.md (new_build, startups icp_fit) - "We built in SEO, AEO,
  and structured data from scratch, the old Wix site had none of it."

## email_1
subject: the run-together nav text
body: |
  Hey Madeleine,

  Sona8's "How it works" nav runs together into one string with no spaces between the
  three steps, and the same 12-quote testimonial list appears twice on the page, word for
  word.

  For a product that turns messy interviews into clean, organized themes for leaders, a site
  that can't keep its own content straight works against the pitch.

  We build it clean from scratch, nothing shipped twice or run together. Did that for
  Fispoke's fintech rebuild too.

  Worth a quick call about a cleanup?

  Ethan

## email_2
subject: the team cards say it twice
body: |
  Hey Madeleine,

  Your team cards repeat themselves, "Founder/CEOFounder and CEO" under one name,
  "Previously MIT, BCGPreviously MIT, BCG" under the next. And "Trusted by winning
  organisations like" sits above an empty row, no logos.

  Small things alone, but exactly what a buyer checks when deciding whether an AI tool can
  be trusted with their own data.

  Open to chatting this week?

  Ethan

## email_3
subject: no pressure, Madeleine
body: |
  Hey Madeleine,

  If the site's already getting cleaned up, no worries at all.

  If not, happy to walk through it, even for 15 minutes.

  Ethan

## fact_check
result: pass
checked_at: 2026-11-19
notes:
- Run-together nav text, duplicated 12-quote testimonial list, duplicated team-card titles,
  and the empty "Trusted by" row -> verified against same-session WebFetch of sona8.com
  (2026-11-19); not re-fetched
- Polymer facts: no direct Fispoke quote used, only a paraphrased reference ("Did that for
  Fispoke's fintech rebuild too"), consistent with knowledge/case-studies/fispoke.md;
  track=new_build matches this lead's new_build_track
- No pricing claims in this draft
- scripts/voice_check.py: clean (removed a literal quote containing "Insights" that tripped
  the banned-word filter, rephrased without changing the underlying fact)
- Word counts: 83/68/25 - e1/e2 within band, e3 short but matches the established closer
  pattern (see Pango/xPay drafts, same-length precedent accepted)
- One CTA per email, sign-off plain "Ethan"
- Cohesion: distinct hooks (run-together nav/duplicate testimonials, duplicated team
  cards/empty trust row, closer), escalating brevity, no repeated proof point (Fispoke
  reference only in email_1)
