---
name: booking-reply
description: Draft the reply to an interested lead with the booking link. Approval-first, never auto-sent while approval.interested_reply_email is "required".
---

# Booking reply

Someone said yes. Speed matters now (reply within hours beats within days), but this is
approval-gated until classification accuracy is proven, so draft immediately and get it into
the approval queue fast.

## The email

Read `knowledge/voice-and-tone.md`. Then:

- Warm and genuinely glad, not performatively excited. Ethan's register: "Great, glad this
  landed at the right time." not "Thrilled to connect!!"
- **Answer whatever they actually asked first.** If they asked about pricing, answer it
  plainly from `knowledge/business-overview.md` before the link. Ignoring their question to
  push the calendar reads as automated, which kills the whole thing.
- Then the ask: the booking link from `config/system.yaml` `booking.link`, framed as the
  easy next step ("grab whatever time works: LINK").
- 3-6 sentences total. Same thread, so no re-introduction.
- Sign-off "- Ethan".

If `booking.link` is still REPLACE_ME, stop and flag loudly in the approval PR — do not
draft around a missing link.

## Queue for approval

Write to `data/queue/pending-approval/{icp}--{org-slug}--{person-slug}--booking.md`:

```markdown
---
contact_name:
organization:
icp:
apollo_contact_id:
reply_category: interested
their_reply: |
  (paste their reply verbatim)
status: pending_approval
drafted_at:
---

subject: (their thread's subject, Re: prefixed)
body: |
  ...
```

Then open a PR titled "Booking reply: {name} @ {org}" containing the file, with their
original reply quoted in the PR description so Ethan can approve from his phone in one look.
**Merging the PR is the approval** — the send-approved workflow picks it up from there.
Never call any send API from this skill.
