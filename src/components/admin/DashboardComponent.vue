<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated color="bg-grey-8">
      <q-toolbar class="toolbar">
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
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" alt="logo" />
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
      class="bg-white-10 text-dark"
    >
      <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px">
        <q-list>
          <q-item to="/admin/team" active-class="q-item-no-link-highlighting">
            <q-item-section avatar>
              <q-icon name="fa-solid fa-globe" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Compañia</q-item-label>
            </q-item-section>
          </q-item>
          <q-item to="/admin/team" active-class="q-item-no-link-highlighting">
            <q-item-section avatar>
              <q-icon name="diversity_1" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Equipo</q-item-label>
            </q-item-section>
          </q-item>
          <q-item
            to="/admin/messages"
            active-class="q-item-no-link-highlighting"
          >
            <q-item-section avatar>
              <q-icon name="fa-regular fa-message" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Mensajes</q-item-label>
            </q-item-section>
          </q-item>
          <q-item to="/admin/events" active-class="q-item-no-link-highlighting">
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
            <img
              src="https://cdn.quasar.dev/img/boy-avatar.png"
              alt="profile"
            />
          </q-avatar>
          <div class="text-weight-bold">Darinel Cigarroa</div>
          <div>loden@loden.com</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container class="bg-grey-1 q-ma-md">
      <router-view />
    </q-page-container>

    <q-footer reveal class="bg-grey-1 text-white">
      <div class="q-pa-lg flex flex-center">
        <q-pagination
          v-model="currentPage"
          :max="storePagination.getLastPage"
          input
          color="black"
          :boundary-numbers="false"
          input-class="black"
          @click="nextPage"
        ></q-pagination>
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { usePaginationStore } from "src/stores/pagination-store";

const leftDrawerOpen = ref(false);

const storePagination = usePaginationStore();
const currentPage = ref(1);

const nextPage = () => {
  storePagination.setCurrentPage(currentPage.value);
};

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
</script>

<style  scoped>
/* .toolbar {
  background-color: #4e342e !important;
} */
</style>

