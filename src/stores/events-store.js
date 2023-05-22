import { defineStore } from "pinia";
import { notifyError, notifySuccess } from "src/utils/notify";
import * as eventEvent from "src/services/admin/EventsService";
import { ref } from "vue";
export const useEventStore = defineStore("events", {
  state: () => ({
    events: ref([]),
    search: ref(""),
  }),
  getters: {
    getListEvents: (state) => state.events,
    getSearch: (state) => state.search,
  },
  actions: {
    getEvents(payload) {
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
        notifySuccess();
        return response
      } catch (error) {
        Object.values(error.response.data.errors).flat().forEach((error) => notifyError(error))
      }
    },
    async update(payload, id) {
      try {
        const response = await eventEvent.update(payload, id)
        const index = this.events.findIndex((event) => event.id === id);
        this.events.splice(index, 1, response.event)
        notifySuccess()
        return response
      } catch (error) {
        Object.values(error.response.data.errors).flat().forEach((error) => notifyError(error))
      }
    },
    async remove(idEvent) {
      try {
        const response = await eventEvent.destroy(idEvent);
        const filter = this.events.filter((Element) => Element.id != response.event.id)
        this.events = filter;
        notifySuccess(response.message)
      } catch (error) {
        notifyError()
      }
    },
    setListEvents(payload) {
      this.events = payload;
    }, addevents(payload) {
      this.events.push(payload)
    },
  },
  persist: true,
});
