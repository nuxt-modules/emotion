import { defineNuxtPlugin } from "#app";
import { hydrate } from "@emotion/css";

export default defineNuxtPlugin((nuxtApp) => {
  if (window.$emotionSSRIds) {
    const ids = window.$emotionSSRIds;
    hydrate(ids);
  }
});
