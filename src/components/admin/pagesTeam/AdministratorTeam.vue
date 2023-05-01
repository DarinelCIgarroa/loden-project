<template>
  <q-page class="q-pa-sm">
    <div class="q-ma-md row justify-end">
      <q-icon
        name="fa-solid fa-circle-plus fa-beat"
        color="teal"
        size="3em"
        style="cursor: pointer"
        @click="createItem()"
      ></q-icon>
    </div>
    <div class="row q-col-gutter-lg">
      <div
        v-for="item in teamStore.getTeamList"
        :key="item.id"
        class="xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12"
      >
        <TeamCard
          :data="item"
          @update-integrant="($event) => updateIntegrant($event)"
          @remove-integrant="($event) => removeIntegrant($event)"
        ></TeamCard>
      </div>
      <DialogCreated
        v-if="activateCreation"
        :status="activateCreation"
        :data-update="dataUPdate"
        @status-dialog-create="changeStatusDialogCreate"
      ></DialogCreated>
    </div>
  </q-page>
</template>

<script setup>
import TeamCard from "./partials/TeamCard.vue";
import * as TeamService from "src/services/admin/TeamService";
import { onMounted, watch, ref } from "vue";
import { notifyError } from "src/utils/notify";
import { useTeamStore } from "src/stores/team-store";
import { usePaginationStore } from "src/stores/pagination-store";
import DialogCreated from "./partials/CreateTeam.vue";

const teamStore = useTeamStore();
const storePagination = usePaginationStore();
const activateCreation = ref(false);
onMounted(() => {
  getTeam();
});

watch(
  () => storePagination.getCurrentPage,
  () => {
    getTeam();
  }
);
const dataUPdate = ref([]);
const getTeam = async () => {
  try {
    const response = await TeamService.index({
      page: storePagination.getCurrentPage,
      rows_page: storePagination.getRowPage,
    });
    storePagination.setLastPage(response.members.last_page);
    teamStore.setTeam(response.members.data);
  } catch (e) {
    notifyError(e);
  }
};
const changeStatusDialogCreate = (value) => {
  activateCreation.value = value;
};

const createItem = () => {
  dataUPdate.value = [];
  activateCreation.value = true;
};
const updateIntegrant = (data) => {
  dataUPdate.value = data;
  activateCreation.value = true;
};
const removeIntegrant = (data) => {
  teamStore.delete(data.id);
};
</script>
