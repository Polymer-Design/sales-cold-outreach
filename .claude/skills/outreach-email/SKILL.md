---
name: outreach-email
description: Research a lead and draft their 3-email cold sequence in Ethan's voice. Use for every lead that clears the scoring tier cutoff.
---

# Outreach email drafting

The goal: an email that reads like a human researched this company and wrote it by hand.
Because that is literally what you're doing, minus the hand.

## Step 1 — Research (before writing a word)

Collect 3-6 concrete, current facts about the lead. Every fact needs a source URL.
- Their website (what's on it, what's broken, what's dated, what platform it runs on)
- Churches: their churchcenter.com pages (what modules they use: giving, events, groups,
  check-in), sermon series, campus count, recent announcements
- Startups: funding announcements, product launches, job postings (especially marketing/web
  roles), founder posts, press
- The specific person: their role, anything they've said or published

Write these into the draft file's `research` block (format below). Weak research = weak
email. If you can't find one specific, current, non-obvious fact, flag the lead for skip
rather than writing a generic email.

## Step 2 — Pick the proof

From `knowledge/case-studies/` (status: approved, icp_fit matches) plus
`knowledge/business-overview.md`. One proof point per email, the most relevant, not the most
impressive. If no approved case study fits, use a plain capability statement from the
business overview and nothing more.

## Step 3 — Write the sequence

Read `knowledge/voice-and-tone.md` first, every time. Then read `config/playbook.yaml`
`active` and follow it — those values (subject style, first-line angle, length target, CTA
style, proof style, send time) are the current split-test winners. If this lead is enrolled
in a running experiment (check `data/experiments.md`), use that lead's assigned arm instead
of the playbook default for the variable under test, and record the arm on the draft.

The four-part structure maps onto a very short email; the parts are beats, not paragraphs:

1. **Grab attention** — sentence one is a specific observation about THEM from your research.
   Not a compliment, an observation. It should be impossible to send to any other company.
2. **Generate interaction** — connect that observation to a problem or moment they're likely
   in right now. One or two sentences.
3. **Create desire** — the proof point. What we did for someone like them, stated flat, real
   numbers only.
4. **Call to action** — one ask: the intro call. Low-pressure phrasing beats assumptive
   closes ("worth 15 minutes?" not "grab time on my calendar here").

**Constraints:** body 50-110 words. Subject 2-5 words, lowercase-leaning, specific, no
clickbait ("your event pages", "the new site"). No greeting beyond "Hey [first name],".
Sign-off "- Ethan" or nothing.

**Email 2** (day +3): new angle, not a "just bumping this". Reference a different research
fact or a different proof point. 40-80 words. Sent as a reply in the same thread.
**Email 3** (day +7): the closer. Shortest of the three. Give them an easy out and one final
reason. 30-60 words. "If the site's not a priority this year, no worries. If it is..." energy,
in Ethan's phrasing, not that literal template.

## Step 4 — Queue for fact-check

Write the draft to `data/queue/drafts/{icp}--{org-slug}--{person-slug}.md`:

```markdown
---
contact_name:
contact_title:
organization:
icp: startups | churches
apollo_contact_id: # if known
score_total:
tier:
status: drafted
drafted_at:
---

## research
- fact one (source: URL)
- fact two (source: URL)

## proof_used
- knowledge/case-studies/fispoke.md OR knowledge/business-overview.md#section

## email_1
subject:
body: |
  ...

## email_2
...

## email_3
...
```

Then invoke the fact-check-email skill on it. A draft never advances with status: drafted.

## Never

- Never send-ready an email whose first line could be sent to a different company.
- Never invent or embellish facts, numbers, client names, or outcomes.
- Never mention AI, automation, or "came across your website" filler.
- Never write to a lead flagged do-not-contact or previously "not interested".
