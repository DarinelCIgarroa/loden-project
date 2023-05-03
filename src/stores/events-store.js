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
    async getEvents(payload) {
      try {
        const response = eventEvent.index(payload);
        return response;
      } catch (error) {
        notifyError();
      }
    },
    async store(payload) {
      try {
        const response = await eventEvent.store(payload)
        console.log(response)
        /* this.events.unshift(response.event)
         notifySuccess(response.message);
         return response*/
      } catch (error) {
        notifyError()
      }
    },
    setListEvents(payload) {
      this.clearData()
      this.events = payload;
    },
    clearData() {
      this.events = []
    }
  },
  persist: true,
});
