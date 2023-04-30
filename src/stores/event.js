import { defineStore } from "pinia";
import * as eventServie from "src/services/HomePage/eventService.js";
import { notifyError } from "src/utils/notify";

export const event = defineStore("event", {
  id: "event",
  state: () => ({
    event: [],
  }),
  getters: {
    getevents: (state) => state.event,
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
