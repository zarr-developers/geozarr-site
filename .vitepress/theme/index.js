import DefaultTheme from "vitepress/theme";
import { h } from "vue";
import RoadmapTracker from "./RoadmapTracker.vue";
import MeetingBanner from "./MeetingBanner.vue";
import MeetingTimeLink from "./MeetingTimeLink.vue";
import "./style.css";

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      "layout-top": () => h(MeetingBanner),
    });
  },
  enhanceApp({ app }) {
    app.component("RoadmapTracker", RoadmapTracker);
    app.component("MeetingTimeLink", MeetingTimeLink);
  },
};
