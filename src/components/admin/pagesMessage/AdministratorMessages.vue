<template>
  <q-page class="q-pa-sm">
    <q-card>
      <q-card-section class="row">
        <div class="text-h6 text-weight-bolder text-grey-8">
          Lista de mensajes
        </div>
      </q-card-section>
      <q-separator></q-separator>
      <q-list>
        <di v-for="item in storeMessage.getListMessages" :key="item.id">
          <MessageCard
            :full_name="item.full_name"
            :mail="item.mail"
            :message="item.message"
            :phone_number="item.phone_number"
          >
          </MessageCard>
        </di>
      </q-list>
    </q-card>
  </q-page>
</template>

<script setup>
import MessageCard from "./partials/messageCard";
import { useMessageStore } from "src/stores/message-store";
import { onMounted } from "vue";

onMounted(() => {
  getMessage();
});

const storeMessage = useMessageStore();
const getMessage = async () => {
  const response = await storeMessage.getMessages();
  storeMessage.setMessage(response.messages);
};
</script>
