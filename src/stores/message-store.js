import { defineStore } from "pinia";
import { notifyError } from "src/utils/notify";
import * as eventMessage from "src/services/admin/MessageService";
import { ref } from "vue";
//usemesage
export const useMessageStore = defineStore("message", {
  state: () => ({
    messages: ref([]),
  }),
  getters: {
    getListMessages: (state) => state.messages,
  },
  actions: {
    getMessages() {
      try {
        const response = eventMessage.index();
        return response;
      } catch (error) {
        notifyError();
      }
    },
    setMessage(payload) {
      this.messages = payload;
    },
  },
  persist: true,
});
