<template>
  <q-card>
    <q-item>
      <q-item-section avatar>
        <q-avatar size="60px" class="shadow-10">
          <img
            alt="img-profile"
            src="https://avatars3.githubusercontent.com/u/34883558?s=400&u=09455019882ac53dc69b23df570629fd84d37dd1&v=4"
          />
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label class="text-grey-8 text-weight-bold">
          {{ data.name }}
        </q-item-label>
        <q-item-label caption>
          {{ data.occupation }}
        </q-item-label>
        <q-item-label class="text-grey-8">
          {{ data.email }}
        </q-item-label>
      </q-item-section>

      <q-item-section side>
        <q-item-label>
          <q-btn
            :href="data.facebook_link"
            target="_blank"
            size="md"
            flat
            round
            icon="fab fa-facebook"
            class="bg-indigo-7 text-white"
          />
        </q-item-label>
        <q-item-label>
          <q-btn
            :href="data.instagram_link"
            target="_blank"
            size="md"
            flat
            round
            icon="fa-brands fa-instagram"
            class="bg-pink-8 text-white"
          />
        </q-item-label>
      </q-item-section>
    </q-item>

    <q-separator></q-separator>
    <q-card-section class="row column" style="min-width: 200px">
      <div class="q-pa-sm text-grey-8">Intro : {{ data.intro }}</div>
      <div>
        <q-btn
          size="sm"
          flat
          round
          icon="fa-solid fa-pen-to-square"
          class="bg-teal text-white"
          @click="updateIntegrant()"
        />
        <q-btn
          size="sm"
          flat
          round
          icon="fa-solid fa-trash"
          class="bg-negative text-white q-mx-xs"
          @click="deleteIntegrant()"
        />
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
const emit = defineEmits(["updateIntegrant", "removeIntegrant"]);

function updateIntegrant() {
  emit("updateIntegrant", props.data);
}
function deleteIntegrant() {
  console.log("remove");
  emit("removeIntegrant", props.data);
}
</script>
