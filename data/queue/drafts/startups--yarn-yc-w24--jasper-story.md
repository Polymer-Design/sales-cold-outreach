---
contact_name: Jasper Story
contact_title: CEO, Cofounder
organization: Yarn (YC W24)
icp: startups
apollo_contact_id: 66ee112b163964000113aff8
score_total: 66
tier: warm
research_arm: deep
status: ready
drafted_at: 2026-11-18
---

## research
- Customer logo strip shows the same nine logos twice in a row, the second set with no alt
  text (source: WebFetch of yarn.so, 2026-11-18)
- A nav/tab label reads "Yarn MCPYarn companion app", two labels run together with no space
  or separator (source: WebFetch of yarn.so, 2026-11-18)
- Several media captions ("Claude being asked to make a short launch video", "Ten short
  generative video clips") appear with no actual image or video showing beneath them
  (source: WebFetch of yarn.so, 2026-11-18)
- AI video tool for GTM teams (MCP, Yarn App, Generative Demos), backed by Y Combinator/
  General Catalyst/Race Capital; org_data 12 employees, strong growth (75%/12mo, 75%/24mo
  headcount) (source: Apollo org_data + site, via lead-scoring score_notes, 2026-11-11)
- Platform undetected by platform_detect.py -> new_build_track (source:
  scripts/platform_detect.py, via lead-scoring)

## proof_used
- knowledge/case-studies/fispoke.md (new_build, startups icp_fit) - "Polymer took a complex
  fintech product and turned it into a website that makes institutional buyers take us
  seriously." (Nathan Berk, Co-Founder & CTO, Fispoke)

## email_1
subject: the doubled logo strip
body: |
  Hey Jasper,

  Yarn's customer logo strip runs the same nine logos twice, and one nav label reads "Yarn
  MCPYarn companion app," two labels run together with no space between them. For a product
  that's literally about polished video content, that's the wrong first impression.

  We catch exactly this kind of thing before launch, not after a customer points it out. Did
  the same for Fispoke, a fintech rebuild clean enough that institutional buyers took it
  seriously.

  Open to a quick call about a cleanup?

  Ethan

## email_2
subject: captions with nothing under them
body: |
  Hey Jasper,

  A few sections on your site have captions describing media, "Claude being asked to make a
  short launch video," "Ten short generative video clips," with no actual video or image
  showing underneath.

  For a video product specifically, that gap stands out more than it would almost anywhere
  else.

  Up for a quick call this week?

  Ethan

## email_3
subject: no pressure, Jasper
body: |
  Hey Jasper,

  If the site's already on your list to clean up, no worries at all.

  If not, happy to walk through it, even for 15 minutes.

  Ethan

## fact_check
result: pass
checked_at: 2026-11-18
notes:
- Duplicated logo strip, run-together "Yarn MCPYarn companion app" label, and captions with
  no media underneath -> verified against same-session WebFetch of yarn.so (2026-11-18);
  not re-fetched
- Polymer facts: Fispoke quote matches knowledge/case-studies/fispoke.md verbatim (Nathan
  Berk, Co-Founder & CTO); track=new_build matches this lead's new_build_track
- No pricing claims in this draft
- scripts/voice_check.py: clean
- Word counts: 85/58/28 - all within band
- One CTA per email, sign-off plain "Ethan"
- Cohesion: distinct hooks (duplicated logos/label, empty media captions, closer),
  escalating brevity, no repeated proof point (Fispoke quote only in email_1)
