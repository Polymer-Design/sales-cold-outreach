import { test } from "node:test";
import assert from "node:assert/strict";
import { funnelStats, type FunnelEvent } from "./data.ts";

const at = "2026-11-04T00:00:00Z";

test("direct bookings stay out of the outreach funnel and rates", () => {
  const events: FunnelEvent[] = [
    { at, email: "a@x.com", stage: "emailed" },
    { at, email: "b@x.com", stage: "emailed" },
    { at, email: "d1@y.com", stage: "booked", source: "direct" },
    { at, email: "d2@y.com", stage: "booked", source: "direct" },
  ];
  const s = funnelStats(events);
  assert.equal(s.counts.emailed, 2);
  assert.equal(s.counts.booked, 0);
  assert.equal(s.bookedRate, 0);
  assert.equal(s.leadsTotal, 2);
  assert.equal(s.bookedTotal, 2);
  assert.equal(s.bookedDirect, 2);
  assert.equal(s.bookedFromOutreach, 0);
  assert.equal(s.bookedFromOutreachPct, 0);
});

test("a booking from someone we emailed counts as outreach", () => {
  const events: FunnelEvent[] = [
    { at, email: "a@x.com", stage: "emailed" },
    { at, email: "a@x.com", stage: "booked", source: "outreach" },
    { at, email: "b@x.com", stage: "emailed" },
    { at, email: "b@x.com", stage: "booked" }, // no source recorded, but we emailed them
    { at, email: "d@y.com", stage: "booked", source: "direct" },
  ];
  const s = funnelStats(events);
  assert.equal(s.counts.emailed, 2);
  assert.equal(s.counts.booked, 2);
  assert.equal(s.bookedRate, 100);
  assert.equal(s.bookedTotal, 3);
  assert.equal(s.bookedFromOutreach, 2);
  assert.equal(s.bookedFromOutreachPct, 66.7);
});
