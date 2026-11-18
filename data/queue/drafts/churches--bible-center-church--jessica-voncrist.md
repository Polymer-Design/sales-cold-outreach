---
contact_name: Jessica Voncrist
contact_title: Director, Communications
organization: Bible Center Church
icp: churches
apollo_contact_id: 6ad0743427daa600019fc783
score_total: 68
tier: warm
research_arm: deep
status: ready
drafted_at: 2026-11-18
---

## research
- Homepage has several sections with no content filled in: "Who is Jesus?", "Ask a Question",
  "Find a Place to Serve", and "Follow on Social" are all empty, and the "Latest Message"
  widget shows no actual sermon (source: WebFetch of biblecenterchurch.com, 2026-11-18)
- Giving routes through a bcc.churchcenter.com link (Church Center/Planning Center), but the
  rest of the site doesn't pull from it anywhere else (source: WebFetch of
  biblecenterchurch.com, 2026-11-18)
- "Generations" initiative on the homepage marks "over 80 years" of the church, with its own
  Learn More/Give buttons (source: WebFetch of biblecenterchurch.com, 2026-11-18)
- Two campuses (Southridge, Twin City); org_data 45 staff, founded 1943, $7.8M revenue
  (source: Apollo org_data, via lead-scoring score_notes, 2026-11-17)
- Confirmed churchcenter.com subdomain (Planning Center); platform WordPress -> new_build_track
  (source: scripts/platform_detect.py, via lead-scoring)

## proof_used
- knowledge/case-studies/landmark-church.md (new_build, churches icp_fit) - organic search
  sessions +29.5% and sermon-notes traffic 59 -> 2,799 sessions, from connecting Planning
  Center/Church Center into one real site instead of two disconnected systems

## email_1
subject: a few blank sections
body: |
  Hey Jessica,

  Blank sections, "Who is Jesus?", "Find a Place to Serve," the Latest Message widget, empty
  on Bible Center's homepage. Giving routes through Church Center, the rest of the site
  doesn't talk to it.

  We build church sites around Church Center instead of next to it. For one multi-campus
  church that meant sermon notes jumping from 59 sessions to 2,799 and organic search up
  29.5%, no ad spend.

  Open to 15 minutes to see if it'd help Bible Center too?

  God Bless,
  Ethan

## email_2
subject: the Generations page
body: |
  Hey Jessica,

  You're running Generations as an 80-year milestone, and it's one of the few sections on the
  site that's actually finished. The rest (the "Ask a Question" block, the social links) reads
  like it launched before the content did.

  A rebuild means every section ships scoped and filled in, not patched in later.

  Up for a quick call?

  God Bless,
  Ethan

## email_3
subject: no pressure, Jessica
body: |
  Hey Jessica,

  If the half-finished sections are already on someone's list, no worries at all.

  If not, happy to talk through what a rebuild around Church Center would look like for Bible
  Center, even just for 15 minutes.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-18
notes:
- Blank homepage sections ("Who is Jesus?", "Find a Place to Serve", "Follow on Social",
  empty Latest Message widget) and the bcc.churchcenter.com giving link -> verified against
  same-session WebFetch of biblecenterchurch.com (2026-11-18); not re-fetched again
- Generations 80-year initiative -> same WebFetch, confirmed present with Learn More/Give buttons
- Polymer facts: Landmark Church case study numbers (59 -> 2,799 sermon-notes sessions,
  +29.5% organic search, zero paid spend) match knowledge/case-studies/landmark-church.md
  exactly; anonymized as "one multi-campus church" per that file's own bracketed quotable-line
  phrasing, not named; track=new_build matches this lead's new_build_track
- No pricing claims in this draft
- scripts/voice_check.py: clean
- Word counts: 84/62/41 - all within band
- One CTA per email, sign-off "God Bless," then "Ethan" both emails
- Cohesion: distinct hooks (blank-sections/Church-Center mismatch, Generations vs. unfinished
  sections, closer), escalating brevity, no repeated proof point (case study numbers only in
  email_1, email_2 uses a plain capability statement instead)
