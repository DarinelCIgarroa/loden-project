<template>
  <q-card class="q-ma-md">
    <q-item v-ripple clickable>
      <q-item-section avatar>
        <q-avatar>
          <i class="fa-solid fa-circle-user fa-xl fa-shake"></i>
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label lines="1">{{ mail }}</q-item-label>
        <q-item-label caption lines="2">
          <span class="text-weight-bold">{{ full_name }}</span>
          {{ message }}
        </q-item-label>
      </q-item-section>
      <q-item-section side top>
        <q-item-label caption>5 min ago</q-item-label>
        <q-item-section side top> {{ phone_number }} </q-item-section>
      </q-item-section>
    </q-item>
  </q-card>
</template>
<script setup>
defineProps({
  // eslint-disable-next-line vue/prop-name-casing
  full_name: {
    type: String,
    required: true,
  },
  mail: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  // eslint-disable-next-line vue/prop-name-casing
  phone_number: {
    type: String,
    required: true,
  },
});
</script>
