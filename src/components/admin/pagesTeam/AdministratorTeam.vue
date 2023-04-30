<template>
  <q-page class="q-pa-sm">
    <div class="row q-col-gutter-lg">
      <div
        v-for="item in teamStore.getTeamList"
        :key="item.id"
        class="xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12"
      >
        <DirectoryCard
          :name="item.name"
          :email="item.email"
          :intro="item.intro"
          :occupation="item.occupation"
        ></DirectoryCard>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import DirectoryCard from "./partials/TeamCard.vue";
import * as TeamService from "src/services/admin/TeamService";
import { onMounted, watch } from "vue";
import { notifyError } from "src/utils/notify";
import { useTeamStore } from "src/stores/team-store";
import { usePaginationStore } from "src/stores/pagination-store";

const teamStore = useTeamStore();
const storePagination = usePaginationStore();

onMounted(() => {
  getTeam();
});

watch(
  () => storePagination.getCurrentPage,
  () => {
    getTeam();
  }
);
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
</script>
