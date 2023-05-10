<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      elevated
      color="bg-grey-8"
      :class="{ 'bg-dark': $q.dark.isActive }"
    >
      <q-toolbar class="toolbar">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title>
          <span class="text-uppercase"
            >ADMINISTRACIÓN {{ companyStore.getStateCompany.name }}</span
          >
        </q-toolbar-title>
        <q-space />
        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn round flat>
            <q-avatar size="26px">
              <img
                :src="`${companyStore.getBaseUrl}/images/${companyStore.getStateCompany.logo}`"
                alt="logo"
              />
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
          <q-item
            to="/admin/company"
            active-class="q-item-no-link-highlighting"
          >
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
              :src="`${companyStore.getBaseUrl}/images/${companyStore.getStateCompany.logo}`"
              alt="profile"
            />
          </q-avatar>
          <div class="text-weight-bold">
            {{ companyStore.getStateCompany.name }}
          </div>
          <div>{{ companyStore.getStateCompany.email }}</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container class="q-ma-md" :class="{ 'bg-dark': $q.dark.isActive }">
      <router-view />
    </q-page-container>

    <q-footer
      v-if="!$route.meta.hideFooter"
      reveal
      class="bg-grey-1 text-white"
    >
      <div
        class="q-pa-lg flex flex-center"
        :class="{ 'bg-dark': $q.dark.isActive }"
      >
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
import { ref, onMounted } from "vue";
import { usePaginationStore } from "src/stores/pagination-store";
import { useCompanyStore } from "stores/company-store";
import { notifyError } from "src/utils/notify";

const leftDrawerOpen = ref(false);

const storePagination = usePaginationStore();
const companyStore = useCompanyStore();
const currentPage = ref(1);

onMounted(async () => {
  try {
    await getCompany();
    await getLogo();
  } catch (e) {
    notifyError();
  }
});

const getCompany = async () => {
  await companyStore.getDataCompany();
};
const getLogo = async () => {
  await companyStore.getCompanyLogo();
};
//actualiza los
const nextPage = () => {
  storePagination.setCurrentPage(currentPage.value);
};

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
//mandamos a llamar nuestra ruta.
onMounted(() => {
  companyStore.setBaseUrl(process.env.BASE_URL);
});
</script>


