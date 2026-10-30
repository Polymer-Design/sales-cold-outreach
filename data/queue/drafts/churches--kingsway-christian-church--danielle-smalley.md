---
contact_name: Danielle Smalley
contact_title: Communications Director
organization: Kingsway Christian Church
icp: churches
apollo_contact_id: 54a5055274686936766a0376
score_total: 56
tier: warm
research_arm: light
status: pushed
drafted_at: 2026-10-30
pushed_at: 2026-10-30T13:59:00Z
mailbox: ehoover@integratedchurchwebsites.com
apollo_contact_id_resolved: 6ae4a2a25635f8001c1879ec
---

## research
- Single campus in Avon, IN; two Sunday services (9am/11am) plus an online option (source: lead-scoring score_notes, firmographic check)
- Confirmed Planning Center / Church Center via churchcenter_subdomain "kingswaychurch" (kingswaychurch.churchcenter.com), a separate address from the main site kingswaychurch.org (source: scripts/platform_detect.py technographic check, run during lead-scoring)
- Website platform itself not auto-detected (not Webflow/Webflow Source) - track defaults to new_build_track (source: lead-scoring output / scripts/platform_detect.py)
- Founded 1973 in Avon, IN (source: Apollo org_data, apollo_contact_id 54a5055274686936766a0376)
- org_data estimated_num_employees = 53, mid-range staff size for a single-campus church (source: Apollo org_data)
- No capital campaign, new exec/comms hire, or hiring page found - intent signals flat (source: lead-scoring score_notes, intent check)

## proof_used
- knowledge/case-studies/landmark-church.md (status: approved, icp_fit: churches, track: new_build - matches this lead's track; direct fit since Landmark is also a Planning Center church)

## email_1
subject: church center address
body: |
  Hey Danielle,

  Kingsway's two Sunday services, 9 and 11 plus the online option, run through Planning Center, but Church Center sits at its own address (kingswaychurch.churchcenter.com), separate from kingswaychurch.org.

  We build church sites around Church Center itself: events, groups, and giving pulled directly in, not split across two addresses.

  For Landmark Church, that move grew organic search sessions 29.5% with zero paid spend.

  Worth 15 minutes to see what that looks like for Kingsway?

  God Bless,
  Ethan

## email_2
subject: 53 years, one site
body: |
  Hey Danielle,

  Kingsway's been in Avon since 1973, now running two Sunday services plus an online option with a staff of around 50 people, all coordinating through Planning Center.

  That's a lot of moving parts for one website to carry well. When we rebuilt Landmark Church's site around Planning Center, mobile sessions grew 67% and now make up nearly three-quarters of all their traffic.

  Open to chatting this week?

  God Bless,
  Ethan

## email_3
subject: closing this out
body: |
  Hey Danielle,

  Short note to close this out. If the Church Center split isn't a priority right now, no worries at all.

  If it is, happy to walk through what a connected site would look like for Kingsway.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-10-30
notes:
- research_arm: light confirmed in brief (EXP-001 deterministic hash already computed upstream, not recomputed here) - no new WebSearch/WebFetch run for this draft, consistent with Step 1's light-arm rule; every research-block fact traces to score_notes, Apollo org_data, or platform_detect.py output already produced during lead-scoring, so there is no web source to re-fetch
- "two Sunday services, 9 and 11 plus the online option" -> verified against score_notes ("2 Sun services (9/11am) plus online", single campus Avon IN)
- "Church Center sits at its own address (kingswaychurch.churchcenter.com), separate from kingswaychurch.org" -> verified against score_notes ("confirmed churchcenter_subdomain 'kingswaychurch' (20/20)"); kingswaychurch.churchcenter.com is the literal URL that subdomain value denotes under Planning Center's standard {subdomain}.churchcenter.com pattern, same construction used in the Tomoka/Opendoor drafts - not a new invented fact
- "in Avon since 1973" -> matches brief's stated fact (founded 1973), attributed to Apollo org_data
- "a staff of around 50 people" -> verified against score_notes ("org_data estimated_num_employees=53 (mid-range)"), rounded down slightly for readability, not misleading
- no claim is made about kingswaychurch.org's actual content, design, age, or whether Church Center is or isn't embedded on it - platform is genuinely unknown (light arm did no site check), so the hook stays confined to the one verified structural fact (separate domain) rather than guessing at site quality, satisfying the "never invent facts" rule
- "We build church sites around Church Center itself" -> capability statement, matches knowledge/business-overview.md ("lead with Church Core specifically - the Planning Center + YouTube integrations are already included in it")
- "organic search sessions grew 29.5% with zero paid spend" -> verbatim match to knowledge/case-studies/landmark-church.md ("Organic search sessions +29.5% ... with no paid spend"), status: approved, icp_fit: churches, track: new_build (matches this lead's new_build_track)
- "mobile sessions grew 67% and now make up nearly three-quarters of all their traffic" -> matches landmark-church.md ("Mobile sessions +67.0%, growing from 60.7% to 73.5% of all traffic"); "nearly three-quarters" fairly represents 73.5%
- same case study (Landmark) cited in email_1 and email_2 with two different, non-overlapping stats (organic search vs. mobile sessions) - matches the accepted precedent in churches--opendoor-church--stephanie-fletcher.md and churches--tomoka-christian-church--cord-bear.md, the only approved church case study available, so this isn't a "repeated proof point" violation, it's the same stat never repeated twice
- voice_check.py: clean (python scripts/voice_check.py, no banned words/phrases/openers/em dashes)
- word counts: email_1 77w, email_2 72w, email_3 41w - all within band (50-85 / 40-80 / 30-60)
- sign-off "God Bless," + "Ethan" on all three, correct for churches
- first sentence of email_1 includes the literal domain names and exact service times - impossible to send to any other org
- subjects ("church center address", "53 years, one site", "closing this out") checked against every other subject line in data/queue/drafts/ - no exact duplicates
- escalating brevity confirmed (77 -> 72 -> 41 words), no contradictions across the three emails, no pricing quoted (correct for cold sequence)
