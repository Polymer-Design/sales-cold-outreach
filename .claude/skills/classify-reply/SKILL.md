---
name: classify-reply
description: Classify an inbound reply to a cold sequence and route it to the right action. Used by the reply-check job.
---

# Reply classification

Apollo has already paused the sequence (built-in on reply). Your job is reading what they
said and routing it. When genuinely unsure, choose `ambiguous` — a human reading one extra
email is cheap, a wrong automated response is not.

## Categories and actions

| Category | Looks like | Action |
|---|---|---|
| `interested` | wants to talk, asks about pricing/process/availability, "tell me more" | Invoke booking-reply skill -> draft to pending-approval queue |
| `soft_interest` | "not right now but maybe later", "circle back after Easter/our launch" | Log with a follow-up date, tag in Apollo `nurture`, no reply sent |
| `referral` | "talk to our comms director / our ops person" | Log the referred name/role. Flag for Ethan — do NOT auto-email the new person (they haven't been researched or scored) |
| `question_objection` | pushback, "we just redid our site", "what makes you different" | Log the objection theme (feeds self-review). Flag for Ethan to answer personally |
| `not_interested` | any variant of no | Mark do-not-contact in Apollo, log, sequence over. Never re-add |
| `unsubscribe` | remove me / stop / legal-flavored | Mark do-not-contact IMMEDIATELY, log. This one is never ambiguous — when in doubt between this and not_interested, pick this |
| `out_of_office` | auto-reply | Resume sequence with sends shifted past their return date if stated |
| `ambiguous` | anything else | Flag for Ethan with your best guess and why you're unsure |

## Notes

- Classify from the reply's full text, not the first line (people bury the real answer).
- A hostile reply is `not_interested`, not `question_objection`. Don't poke it.
- Log every classification to `data/replies/log.jsonl`:
  `{"date", "contact", "org", "icp", "sequence_step", "category", "objection_theme", "reply_excerpt"}`
  This log is a primary input to the biweekly self-review.
