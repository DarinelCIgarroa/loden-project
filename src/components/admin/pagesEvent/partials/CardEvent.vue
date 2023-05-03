<template>
  <q-card class="">
    <q-img :src="`http://127.0.0.1:8000/storage${data.image}`" height="160px">
      <q-chip></q-chip>
    </q-img>
    <div></div>
    <q-card-section>
      <q-btn
        style="top: 0; right: 12px; transform: translateY(-50%)"
        size="sm"
        round
        icon="fa-solid fa-pen-to-square"
        class="bg-teal text-white absolute"
        @click="updateEvent()"
      />
    </q-card-section>

    <q-card-section>
      <div class="text-h6">
        {{ data.address }}
      </div>
      <div class="text-subtitle1 text-justify q-mt-sm">
        {{ data.description }}
      </div>
      <div></div>
    </q-card-section>
    <q-card-section class="q-py-xl">
      <q-card-actions align="around">
        <div class="q-gutter-lg">
          <q-badge rounded color="red">{{ data.start_date }}</q-badge>
          <span>-</span>
          <q-badge rounded>{{ data.end_date }}</q-badge>
        </div>
        <q-separator dark />
        <q-btn
          push
          round
          size="sm"
          icon="fa-solid fa-trash"
          class="bg-negative text-white q-mx-xs"
          @click="deleteIntegrant()"
        />
      </q-card-actions>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
const emit = defineEmits(["updateEvent"]);
function updateEvent() {
  emit("updateEvent", props.data);
}
</script>

<style scoped>
</style>
