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

// Builds the timeanddate.com converter URL anchored to 9:00 AM in
// America/New_York (p1=746), so it stays correct across US daylight-saving
// changes — the meeting is fixed at 9:00 AM ET.
export function timezoneLink(isoDate) {
  if (!isoDate) return "#";
  const [y, m, d] = isoDate.split("-");
  return `https://www.timeanddate.com/worldclock/fixedtime.html?msg=GeoZarr+SWG&iso=${y}${m}${d}T09&p1=746&ah=1`;
}
