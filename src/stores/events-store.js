import { defineStore } from "pinia";
import { notifyError } from "src/utils/notify";
import * as eventEvent from "src/services/admin/EventsService";
import { ref } from "vue";
export const useEventStore = defineStore("events", {
  state: () => ({
    events: ref([]),
  }),
  getters: {
    getListEvents: (state) => state.events,
  },
  actions: {
    getEvents() {
      try {
        const response = eventEvent.index();
        return response;
      } catch (error) {
        notifyError();
      }
    },
    setListEvents(payload) {
      this.events = payload;
    },
  },
  persist: true,
});
