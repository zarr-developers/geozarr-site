<script setup>
import { ref, computed } from "vue";
import { toLocalISODate, firstTuesday, timezoneLink } from "./meeting.js";

const now = ref(new Date());

// Next first-Tuesday meeting that is today or in the future.
const nextMeeting = computed(() => {
  const n = now.value;
  const today = new Date(n.getFullYear(), n.getMonth(), n.getDate());
  let d = firstTuesday(n.getFullYear(), n.getMonth());
  if (d < today) d = firstTuesday(n.getFullYear(), n.getMonth() + 1);
  return toLocalISODate(d);
});

const link = computed(() => timezoneLink(nextMeeting.value));
</script>

<template>
  <a :href="link" target="_blank" rel="noopener"><slot>time-zone converter</slot></a>
</template>
