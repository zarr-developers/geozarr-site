<script setup>
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from "vue";

const now = ref(new Date());
const dismissed = ref(false);
const bannerRef = ref(null);

function updateHeight() {
  const height = bannerRef.value ? bannerRef.value.offsetHeight : 0;
  document.documentElement.style.setProperty(
    "--vp-layout-top-height",
    `${height}px`
  );
}

function clearHeight() {
  document.documentElement.style.setProperty("--vp-layout-top-height", "0px");
}

onMounted(() => {
  dismissed.value =
    sessionStorage.getItem("meeting-banner-dismissed") === date.value;
  nextTick(updateHeight);
  window.addEventListener("resize", updateHeight);
});

onUnmounted(() => {
  clearHeight();
  window.removeEventListener("resize", updateHeight);
});

watch(dismissed, (val) => {
  if (val) clearHeight();
});

const date = computed(() => {
  const d = meetingDate(now.value);
  return d ? d.toISOString().slice(0, 10) : null;
});

const isToday = computed(() => {
  if (!date.value) return false;
  return now.value.toISOString().slice(0, 10) === date.value;
});

const label = computed(() => (isToday.value ? "Today" : "Tomorrow"));

const formattedDate = computed(() => {
  if (!date.value) return "";
  const d = new Date(date.value + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
});

const timezoneLink = computed(() => {
  if (!date.value) return "#";
  const [y, m, d] = date.value.split("-");
  return `https://www.timeanddate.com/worldclock/fixedtime.html?msg=GeoZarr+SWG+Meeting&iso=${y}${m}${d}T16&p1=1440&ah=1`;
});

function dismiss() {
  dismissed.value = true;
  sessionStorage.setItem("meeting-banner-dismissed", date.value);
}

/**
 * Returns the first-Wednesday meeting date if `now` falls on that Wednesday
 * or the day before it. Otherwise returns null.
 */
function meetingDate(now) {
  const year = now.getFullYear();
  const month = now.getMonth();

  // Find first Wednesday of this month
  const first = new Date(year, month, 1);
  const dayOfWeek = first.getDay(); // 0=Sun
  const wed = dayOfWeek <= 3 ? 1 + (3 - dayOfWeek) : 1 + (10 - dayOfWeek);
  const meetingDay = new Date(year, month, wed);

  const today = new Date(year, month, now.getDate());
  const diffDays = (meetingDay - today) / 86400000;

  if (diffDays === 0 || diffDays === 1) {
    return meetingDay;
  }
  return null;
}
</script>

<template>
  <div v-if="date && !dismissed" ref="bannerRef" class="meeting-banner">
    <div class="meeting-banner-content">
      <span class="meeting-banner-text">
        <strong>{{ label }}:</strong> GeoZarr SWG Monthly Meeting — {{ formattedDate }} at
        <a
          :href="timezoneLink"
          target="_blank"
          rel="noopener"
        >16:00 UTC</a>
      </span>
      <a class="meeting-banner-link" href="https://hackmd.io/OHnmcpWLTCyo7gs-0KtHPw" target="_blank" rel="noopener">Meeting details + agenda</a>
      <button class="meeting-banner-close" @click="dismiss" aria-label="Dismiss banner">&times;</button>
    </div>
  </div>
</template>

<style scoped>
.meeting-banner {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: var(--vp-z-index-layout-top);
  background: var(--vp-c-brand-soft);
  border-bottom: 1px solid var(--vp-c-brand-1);
  padding: 8px 16px;
  text-align: center;
  font-size: 14px;
  line-height: 1.5;
}

.meeting-banner-content {
  max-width: 1152px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

.meeting-banner a {
  color: var(--vp-c-brand-1);
  font-weight: 500;
  text-decoration: underline;
}

.meeting-banner a:hover {
  color: var(--vp-c-brand-3);
}

.meeting-banner-close {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: var(--vp-c-text-2);
  padding: 0 4px;
  line-height: 1;
  margin-left: 4px;
}

.meeting-banner-close:hover {
  color: var(--vp-c-text-1);
}
</style>
