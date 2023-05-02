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
        <div v-for="item in storeMessage.getListMessages" :key="item.id">
          <MessageCard :data="item"> </MessageCard>
        </div>
      </q-list>
    </q-card>
  </q-page>
</template>

<script setup>
import MessageCard from "./partials/messageCard";
import { useMessageStore } from "src/stores/message-store";
import { onMounted, watch } from "vue";
import { usePaginationStore } from "src/stores/pagination-store";

const storePagination = usePaginationStore();

onMounted(() => {
  getMessage();
});

watch(
  () => storePagination.getCurrentPage,
  () => {
    getMessage();
  }
);
const storeMessage = useMessageStore();
const getMessage = async () => {
  const response = await storeMessage.getMessages({
    page: storePagination.getCurrentPage,
    rows_page: storePagination.getRowPage,
  });

  storePagination.setLastPage(response.messages.last_page);
  storeMessage.setMessage(response.messages.data);
};
</script>
