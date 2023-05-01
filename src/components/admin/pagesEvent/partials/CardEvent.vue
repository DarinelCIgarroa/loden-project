<template>
  <q-card class="">
    <q-img :src="`http://127.0.0.1:8000/storage${image}`" height="160px">
      <q-chip></q-chip>
    </q-img>
    <div></div>
    <q-card-section>
      <q-btn
        fab
        color="teal-10"
        icon="fas fa-eye"
        padding="sm"
        class="absolute"
        style="top: 0; right: 12px; transform: translateY(-50%)"
      />
    </q-card-section>

    <q-card-section>
      <div class="text-h6">
        {{ address }}
      </div>
      <div class="text-subtitle1 text-justify q-mt-sm">
        {{ description }}
      </div>
      <div></div>
    </q-card-section>
    <q-card-section class="q-py-xl">
      <div class="col-12" style="min-height: 40px">
        <div class="q-gutter-md">
          <q-badge rounded color="red">{{ start_date }}</q-badge>
          <span>-</span>
          <q-badge rounded>{{ end_date }}</q-badge>
        </div>
        <span class="float-right q-mx-xl">
          <q-btn
            class="glossy"
            round
            color="deep-orange"
            icon="local_activity"
          />
        </span>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
defineProps({
  // eslint-disable-next-line vue/prop-name-casing
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  // eslint-disable-next-line vue/prop-name-casing
  end_date: {
    type: String,
    required: true,
  },
  // eslint-disable-next-line vue/prop-name-casing
  start_date: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
</style>
