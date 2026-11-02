export function toLocalISODate(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

// First Tuesday of the given month (month is 0-indexed; overflow rolls over).
export function firstTuesday(year, month) {
  const first = new Date(year, month, 1);
  const dayOfWeek = first.getDay(); // 0=Sun
  const tue = dayOfWeek <= 2 ? 1 + (2 - dayOfWeek) : 1 + (9 - dayOfWeek);
  return new Date(year, month, tue);
}

// One-off moves away from the first-Tuesday 9:00 AM ET slot, keyed by
// "YYYY-MM". `hour` is in America/New_York.
const OVERRIDES = {
  "2026-11": { date: "2026-11-19", hour: 11 },
};

// The meeting date for the given month (0-indexed; overflow rolls over).
export function meetingInMonth(year, month) {
  const first = new Date(year, month, 1);
  const override = OVERRIDES[toLocalISODate(first).slice(0, 7)];
  if (!override) return firstTuesday(year, month);
  return new Date(override.date + "T00:00:00");
}

// Start hour (ET) of the meeting on the given ISO date.
export function meetingHour(isoDate) {
  const override = isoDate && OVERRIDES[isoDate.slice(0, 7)];
  return override && override.date === isoDate ? override.hour : 9;
}

// "9:00 AM ET"-style label for the meeting on the given ISO date.
export function meetingTimeLabel(isoDate) {
  const h = meetingHour(isoDate);
  return `${h % 12 || 12}:00 ${h < 12 ? "AM" : "PM"} ET`;
}

// Next meeting that is today or in the future. Rolls into the following
// month once the current month's meeting has passed.
export function nextMeeting(now) {
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let d = meetingInMonth(now.getFullYear(), now.getMonth());
  if (d < today) d = meetingInMonth(now.getFullYear(), now.getMonth() + 1);
  return d;
}

// Builds the timeanddate.com converter URL anchored to the meeting hour in
// America/New_York (p1=746), so it stays correct across US daylight-saving
// changes.
export function timezoneLink(isoDate) {
  if (!isoDate) return "#";
  const [y, m, d] = isoDate.split("-");
  const hh = String(meetingHour(isoDate)).padStart(2, "0");
  return `https://www.timeanddate.com/worldclock/fixedtime.html?msg=GeoZarr+SWG&iso=${y}${m}${d}T${hh}&p1=746&ah=1`;
}
