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
        <EventCard
          :address="item.address"
          :description="item.description"
          :end_date="item.end_date"
          :start_date="item.start_date"
        ></EventCard>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import EventCard from "./partials/CardEvent";
import { useEventStore } from "src/stores/events-store";
import { onMounted, ref } from "vue";
onMounted(() => {
  getEvents();
});
const storeEvents = useEventStore();

const getEvents = async () => {
  const data = await storeEvents.getEvents();
  storeEvents.setListEvents(data.events);
};
const search = ref("");
</script>

<style scoped>
</style>
