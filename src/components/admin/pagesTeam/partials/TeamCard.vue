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
          {{ name }}
        </q-item-label>
        <q-item-label caption>
          {{ occupation }}
        </q-item-label>
        <q-item-label class="text-grey-8">
          {{ email }}
        </q-item-label>
      </q-item-section>

      <q-item-section side>
        <q-item-label>
          <q-btn
            size="sm"
            flat
            round
            icon="fab fa-facebook"
            class="bg-indigo-7 text-white"
          />
        </q-item-label>
        <q-item-label>
          <q-btn
            size="sm"
            flat
            round
            icon="fab fa-twitter"
            class="bg-info text-white"
          />
        </q-item-label>
      </q-item-section>
    </q-item>

    <q-separator></q-separator>
    <q-card-section style="min-width: 200px">
      <div class="q-pa-sm text-grey-8">Intro : {{ intro }}</div>
    </q-card-section>
  </q-card>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  intro: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
</style>
