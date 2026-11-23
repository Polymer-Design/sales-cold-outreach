---
contact_name: Jeremy Portmann
contact_title: Executive Director of Administration
organization: Olive Baptist Church
icp: churches
apollo_contact_id: 54a93f237468692d1c575e0f
score_total: 65
tier: warm
research_arm: deep
status: ready
drafted_at: 2026-11-23
---

## research
- Site platform: Webflow -> subscription_track (source: lead-scoring score_notes
  2026-11-11); no subscription-track case study exists yet, drafted with a plain capability
  statement per outreach-email Step 0 / knowledge/case-studies/README.md
- Tap-to-call phone link is written with escaped parentheses in the href
  (tel:\(850\)476-1932), which may prevent it from dialing correctly on some phones (source:
  WebFetch olivebaptist.org, 2026-11-23)
- Campus map PDF is still named "Olive_web_map_2024" (source: WebFetch olivebaptist.org,
  2026-11-23)
- Footer reads "All Rights Reserved." with no year or organization name; "Connection
  Groups"/"Connection groups" capitalization is inconsistent across the site (source:
  WebFetch olivebaptist.org, 2026-11-23)
- Two campuses (Pensacola + Warrington), ~3,500 average Sunday attendance (source:
  lead-scoring score_notes 2026-11-11, thealabamabaptist.org)

## proof_used
- knowledge/business-overview.md#monthly-plans (plain capability statement - no
  subscription-track case study exists yet per knowledge/case-studies/README.md)

## email_1
subject: the phone link may not dial
body: |
  Hey Jeremy,

  Olive's tap-to-call link is written with escaped parentheses in the code, which can keep
  some phones from dialing it correctly, and the campus map PDF is still named "2024."

  Across two campuses, that's the kind of detail that's easy to miss but costs someone an
  actual phone call. Our monthly plans catch exactly that: small fixes and content updates,
  handled without adding headcount.

  Worth 15 minutes?

  God Bless,
  Ethan

## email_2
subject: "connection groups" or "Groups"?
body: |
  Hey Jeremy,

  The footer just reads "All Rights Reserved," with no year or church name, and "Connection
  Groups" is capitalized one place and not another. Small, but across two campuses it adds
  up.

  A monthly plan means someone's actually checking details like that regularly, instead of
  letting them pile up.

  Open to a quick call this week?

  God Bless,
  Ethan

## email_3
subject: last note, olive baptist
body: |
  Hey Jeremy,

  Last one from me.

  If the site's getting the attention it needs across both campuses, no worries at all.

  If the small stuff (the phone link, the footer) is worth a look, happy to grab 15 minutes
  whenever works.

  God Bless,
  Ethan

## fact_check
result: pass
checked_at: 2026-11-23
notes:
- Malformed tel: link, outdated map PDF filename, incomplete footer, inconsistent
  "Connection Groups" capitalization -> verified against WebFetch of olivebaptist.org this
  same session
- No case study cited - plain capability statement per outreach-email Step 0 (subscription
  track has no approved case study yet). No pricing cited; "monthly plans" referenced only
  generically, no tier name or dollar figure.
- Track/proof consistency: subscription_track lead, no new-build case study borrowed.
- voice_check.py: pass
- word counts: email_1 71, email_2 60, email_3 44 - all within band
- cohesion: three angles (phone-link/map detail / footer+capitalization detail / closer),
  sign-off "God Bless," + "Ethan" correct
