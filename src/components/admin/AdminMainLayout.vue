<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title> ADMINISTRACIÓN LODEN </q-toolbar-title>
        <q-space />
        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn round flat>
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
          </q-btn>
          <q-btn
            class="q-mr-xs"
            flat
            round
            :icon="$q.dark.isActive ? 'nights_stay' : 'wb_sunny'"
            @click="$q.dark.toggle()"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-10 text-white"
    >
      <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px">
        <q-list>
          <q-item to="/directory" active-class="q-item-no-link-highlighting">
            <q-item-section avatar>
              <q-icon name="diversity_1" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Equipo</q-item-label>
            </q-item-section>
          </q-item>
          <q-item to="/CardHeader" active-class="q-item-no-link-highlighting">
            <q-item-section avatar>
              <q-icon name="fa-regular fa-message" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Mensajes</q-item-label>
            </q-item-section>
          </q-item>
          <q-item to="/Ecommerce" active-class="q-item-no-link-highlighting">
            <q-item-section avatar>
              <q-icon name="fa-regular fa-calendar" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Eventos</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top"
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          <div class="text-weight-bold">Razvan Stoenescu</div>
          <div>rstoenescu@info.com</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container class="bg-grey-2">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
const leftDrawerOpen = ref(false);
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
</script>

