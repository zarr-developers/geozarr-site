<script setup>
import { ref, computed } from "vue";
import { toLocalISODate, nextMeeting, timezoneLink } from "./meeting.js";

const now = ref(new Date());

const link = computed(() =>
  timezoneLink(toLocalISODate(nextMeeting(now.value)))
);
</script>

<template>
  <a :href="link" target="_blank" rel="noopener"><slot>time-zone converter</slot></a>
</template>
