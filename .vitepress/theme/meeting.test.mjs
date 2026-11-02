// Run with: node .vitepress/theme/meeting.test.mjs
import assert from "node:assert/strict";
import { nextMeeting, toLocalISODate, timezoneLink, meetingTimeLabel } from "./meeting.js";

const next = (iso) => toLocalISODate(nextMeeting(new Date(iso + "T12:00:00")));

assert.equal(next("2026-10-07"), "2026-11-19"); // skips Nov 3, the usual first Tuesday
assert.equal(next("2026-11-02"), "2026-11-19");
assert.equal(next("2026-11-19"), "2026-11-19");
assert.equal(next("2026-11-20"), "2026-12-01"); // back to first Tuesday
assert.equal(next("2026-09-15"), "2026-10-06");
assert.equal(meetingTimeLabel("2026-11-19"), "11:00 AM ET");
assert.equal(meetingTimeLabel("2026-12-01"), "9:00 AM ET");
assert.match(timezoneLink("2026-11-19"), /iso=20261119T11&/);
assert.match(timezoneLink("2026-12-01"), /iso=20261201T09&/);
console.log("meeting.js ok");
