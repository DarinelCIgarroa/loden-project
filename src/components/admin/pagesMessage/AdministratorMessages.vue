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
        <q-item v-ripple clickable>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">Brunch this weekend?</q-item-label>
            <q-item-label caption lines="2">
              <span class="text-weight-bold">Janet</span>
              -- I'll be in your neighborhood doing errands this weekend. Do you
              want to grab brunch?
            </q-item-label>
          </q-item-section>

          <q-item-section side top> 1 min ago </q-item-section>
        </q-item>
        <q-item v-ripple clickable>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">Brunch this weekend?</q-item-label>
            <q-item-label caption lines="2">
              <span class="text-weight-bold">Janet</span>
              -- I'll be in your neighborhood doing errands this weekend. Do you
              want to grab brunch?
            </q-item-label>
          </q-item-section>

          <q-item-section side top> 1 min ago </q-item-section>
        </q-item>

        <q-separator inset="item" />
      </q-list>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: "CardHeader",
};
</script>

<style scoped>
</style>
