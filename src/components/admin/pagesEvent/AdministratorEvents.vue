<template>
  <q-page class="q-pa-sm">
    <div>
      <q-card class="no-border no-shadow bg-transparent">
        <q-card-section class="q-pa-sm">
          <q-input
            v-model="search"
            rounded
            outlined
            placeholder="Buscar evento"
          >
            <template #append>
              <q-icon v-if="search === ''" name="search" />
              <q-icon
                v-else
                name="clear"
                class="cursor-pointer"
                @click="search = ''"
              />
            </template>
          </q-input>
        </q-card-section>
      </q-card>
    </div>
    <div class="row q-col-gutter-sm">
      <div
        v-for="item in storeEvents.getListEvents"
        :key="item.id"
        class="col-md-4 col-lg-4 col-sm-12 col-xs-12"
      >
        <EventCard :data="item"></EventCard>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import EventCard from "./partials/CardEvent";
import { useEventStore } from "src/stores/events-store";
import { onMounted, ref, watch } from "vue";
import { usePaginationStore } from "src/stores/pagination-store";
const storePagination = usePaginationStore();

onMounted(() => {
  getEvents();
});
watch(
  () => storePagination.getCurrentPage,
  () => {
    getEvents();
  }
);

const storeEvents = useEventStore();

const getEvents = async () => {
  const response = await storeEvents.getEvents({
    page: storePagination.getCurrentPage,
    rows_page: storePagination.getRowPage,
  });
  storePagination.setLastPage(response.events.data.last_page);
  storeEvents.setListEvents(response.events.data.data);
};
const search = ref("");
</script>

<style scoped>
</style>
