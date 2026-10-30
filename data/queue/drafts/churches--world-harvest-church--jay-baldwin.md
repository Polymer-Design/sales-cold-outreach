---
contact_name: Jay Baldwin
contact_title: Executive Director
organization: World Harvest Church
icp: churches
apollo_contact_id: 54a3814c7468693209af9800
score_total: 74
tier: warm
research_arm: light
status: ready
drafted_at: 2026-10-30
---

## research
- Confirmed Church Center presence: churchcenter subdomain found by the crawler (source: data/leads/churches/crawled.csv, https://whc.life, signal "churchcenter_subdomain", crawled 2026-10-28; corroborated in score_notes technographic 20/20)
- Homepage footer shows an unfilled "© yyyy" copyright placeholder (source: https://our.whc.life footer, per score_notes intent signal)
- Single documented physical campus (Canal Winchester, OH) plus an unquantified home-group network "across the Columbus area"; Sun 10am + Wed 7pm services, Sun 9am fellowship groups (source: https://our.whc.life, via score_notes firmographic from the church crawler's pass)
- Site platform: platform_detect.py returned "unknown" for whc.life itself rather than the actual content target (our.whc.life) -> new_build_track assigned by default per outreach-email Step 0 routing (source: score_notes technographic / data/leads/index.jsonl)
- research_arm: light - no new WebSearch/WebFetch run per outreach-email Step 1; built entirely from lead-scoring's score_notes plus free org_data/crawler fields

## proof_used
- knowledge/case-studies/landmark-church.md (track: new_build, icp_fit: churches - matches this lead's new_build_track)

## email_1
subject: the blank footer year
body: |
  Hey Jay,

  World Harvest already runs on Church Center, but the footer at our.whc.life still reads "© yyyy," so nobody's touched the main site in a while.

  We build church sites around Church Center itself, not bolted on separately. For Landmark Church, that kind of rebuild cut recurring platform costs by roughly 70%, from $3-4k/year to under $1k/year.

  Open to chatting about it this week?

  God Bless,
  Ethan

## email_2
subject: more than the site shows
body: |
  Hey Jay,

  Between Sunday service, Wednesday night, fellowship groups, and a home-group network across Columbus, World Harvest has more going on each week than its website shows.

  We'd rebuild the site around Church Center so it's all in one place. Landmark Church grew organic search sessions 29.5% with zero paid spend after a similar rebuild.

  Up for a quick call?

  God Bless,
  Ethan

## email_3
subject: no pressure either way
body: |
  Hey Jay,

  I won't make this a habit. If a site refresh isn't where World Harvest's attention needs to be right now, that's completely fair, no more notes from me after this.

  If it is, and that blank copyright year's been bugging you too, I've got time this week.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-10-30
notes:
- "World Harvest already runs on Church Center" -> verified against data/leads/churches/crawled.csv (https://whc.life, signal "churchcenter_subdomain", crawled 2026-10-28) and score_notes technographic 20/20 "confirmed churchcenter_embed signal"; claim kept generic (no specific modules named, e.g. events/giving) since no fresh site fetch was done under the light research arm and score_notes doesn't specify modules
- "the footer at our.whc.life still reads '© yyyy'" -> verified verbatim against score_notes intent line, which cites source: our.whc.life footer, scored same day (2026-10-30) as this draft - no staleness risk
- "more going on each week than its website shows" (Sunday service, Wednesday night, fellowship groups, home-group network across Columbus) -> verified against score_notes firmographic line ("Sun 10am + Wed 7pm services + Sun 9am fellowship groups" + "unquantified home-group network 'across the Columbus area'"), same-day score; deliberately did not cite org_data estimated_num_employees=220 in the email copy since score_notes itself flags it as an uncertain size proxy, not a number to state back to the lead
- "cut recurring platform costs by roughly 70%, from $3-4k/year to under $1k/year" -> matches knowledge/case-studies/landmark-church.md quotable line verbatim ("Cut recurring platform costs by roughly 70%, from $3-4k/year down to under $1k/year"), status: approved, track: new_build, icp_fit: churches - matches this lead's new_build_track, no numbers altered
- "organic search sessions grow 29.5% with zero paid spend" -> matches knowledge/case-studies/landmark-church.md verbatim ("Organic search sessions +29.5% ... with no paid spend"), same case study, different stat than email_1 so no repeated proof point across the sequence
- no PageSpeed/comparative claims made (none run - correct for research_arm: light, which skips Step 2's PageSpeed call unless scoring already ran it; it didn't)
- track/proof consistency: new_build_track lead, landmark-church.md tagged track: new_build - matches
- scripts/voice_check.py: clean (no banned words/phrases/openers, no em dashes)
- word counts: email_1 68w, email_2 63w, email_3 52w - all within band (50-85/40-80/30-60) and escalating brevity holds (68 -> 63 -> 52)
- sign-off: "God Bless," then "Ethan" on all three (churches), greeting "Hey Jay," on its own line, blank-line paragraph breaks throughout - matches voice-and-tone.md
- one CTA per email, none stacked; no booking link in any email
- cohesion: no repeated proof stat across the sequence, first sentence of email_1 names World Harvest and our.whc.life specifically (not sendable to another org)
- cross-draft check against today's other in-flight drafts (data/queue/drafts/churches--countryside-christian-church--corey-spann.md, data/queue/drafts/churches--covenant-church--robby-sheets.md, plus churches--ten-mile-christian-church--stephen-durr.md): original subject/CTA choices collided ("one church, two systems" vs. their "two systems"/"two campuses" subjects; "one last thing" was an exact duplicate of ten-mile-christian-church's email_3 subject; "Worth 15 minutes"/"Want to jump on a call this week?" were already each used by a sibling draft) - all four reworked to "the blank footer year" / "more than the site shows" / "no pressure either way" and "Open to chatting about it this week?" / "Up for a quick call?" to avoid same-batch template fingerprinting
