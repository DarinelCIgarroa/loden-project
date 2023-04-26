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
        v-for="(item, item_index) in data"
        :key="item_index"
        class="col-md-4 col-lg-4 col-sm-12 col-xs-12"
      >
        <EventCard :data="item"></EventCard>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import EventCard from "../partials/CardEvent.vue";
import { ref } from "vue";

const data = [
  {
    title: "Our Changing Planet",
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 2,
    date: "15 de diciembre del 2023",
    img: "../../../statics/images/inPerson1.jpg",
    chip: "Activo",
    chip_color: "teal",
    chip_class: "text-white absolute-top-right",
  },
  {
    title: "Our Changing Planet",
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 4,
    date: "15 de diciembre del 2023",
    img: "../../../statics/images/inPerson1.jpg",
    chip_color: "teal",
    chip_class: "text-white absolute-top-right",
  },
  {
    title: "Our Changing Planet",
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 2,
    date: "15 de diciembre del 2023",
    img: "../../../statics/images/inPerson1.jpg",
    chip: "Activo",
    chip_color: "teal",
    chip_class: "text-white absolute-top-right",
  },
];

const search = ref("");
</script>

<style scoped>
</style>
