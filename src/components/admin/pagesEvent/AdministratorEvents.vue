<template>
  <q-page class="q-pa-sm">
    <div class="col">
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
      <div class="q-ma-md row justify-end">
        <q-icon
          name="fa-solid fa-circle-plus fa-beat"
          color="teal"
          size="3em"
          style="cursor: pointer"
          @click="createItem()"
        ></q-icon>
      </div>
    </div>
    <div class="row q-col-gutter-sm">
      <div
        v-for="item in storeEvents.getListEvents"
        :key="item.id"
        class="col-md-4 col-lg-4 col-sm-12 col-xs-12"
        @update-event="($event) => updateEvent($event)"
      >
        <EventCard :data="item"></EventCard>
      </div>
      <DialogCreated
        v-if="activateCreation"
        :status="activateCreation"
        :data-update="dataUPdate"
        @events-dialog-create="changesEventsDialogCreate"
      >
      </DialogCreated>
    </div>
  </q-page>
</template>

<script setup>
import EventCard from "./partials/CardEvent";
import { useEventStore } from "src/stores/events-store";
import DialogCreated from "./partials/CreateEvent";
import { usePaginationStore } from "src/stores/pagination-store";
import { onMounted, ref, watch } from "vue";
import { notifyError } from "src/utils/notify";
const activateCreation = ref(false);
onMounted(() => {
  getEvents();
});
const storeEvents = useEventStore();
const storePagination = usePaginationStore();

watch(
  () => storePagination.getCurrentPage,
  () => {
    getEvents();
  }
);
const getEvents = async () => {
  try {
    const response = await storeEvents.getEvents({
      page: storePagination.getCurrentPage,
      rows_page: storePagination.getRowPage,
    });
    storePagination.setLastPage(response.events.last_page);
    storeEvents.setListEvents(response.events.data);
  } catch (e) {
    notifyError();
  }
};
const search = ref("");
const dataUPdate = ref([]);

const createItem = () => {
  dataUPdate.value = [];
  activateCreation.value = true;
};
const updateEvent = (data) => {
  dataUPdate.value = data;
  activateCreation.value = true;
};
const changesEventsDialogCreate = (value) => {
  activateCreation.value = value;
};
</script>

<style scoped>
</style>
