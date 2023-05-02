import { defineStore } from "pinia";
import { notifyError, notifySuccess } from "src/utils/notify";
import * as MessageService from "src/services/admin/MessageService";
import { ref } from "vue";

export const useMessageStore = defineStore("message", {
  state: () => ({
    messageList: ref([]),
  }),
  getters: {
    getListMessages: (state) => state.messageList,
  },
  actions: {
    getMessages(payload) {
      try {
        const response = MessageService.index(payload);
        return response;
      } catch (error) {
        notifyError();
      }
    },
    async deleteMessage(idMessage) {
      try {
        const response = await MessageService.destroy(idMessage.value)
        const filter = this.messageList.filter((message) => message.id != response.messageItem.id)
        this.messageList = filter
        notifySuccess(response.message)
      } catch (error) {
        notifyError(error.response.data.message)
      }
    },
    setMessage(payload) {
      this.messageList = payload;
    },
  },
  persist: true,
});
