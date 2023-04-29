import { defineStore } from "pinia";
import * as eventServie from "src/services/HomePage/eventService.js";
import { notifyError } from "src/utils/notify";

export const event = defineStore("event", {
  id: "event",
  state: () => ({
    event: [],
  }),
  getters: {
    getoption: (state) => state.option,
  },
  actions: {
    getEvents() {
      try {
        const response = eventServie.getEvents();
        this.setevents(response);
        return response;
      } catch (error) {
        notifyError;
      }
    },
    setevents(payload) {
      this.event = payload;
    },
  },
  persist: true,
});
