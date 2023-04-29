<template>
  <q-page class="q-pa-sm">
    <div class="row q-col-gutter-lg">
      <div
        v-for="item in data"
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
import { onMounted, watch, ref } from "vue";
import { notifyError } from "src/utils/notify";
import { useTeamStore } from "src/stores/team-store";
import { usePaginationStore } from "src/stores/pagination-store";

const teamStore = useTeamStore();
const storePagination = usePaginationStore();
const data = ref([]);
// const pagination = ref({
//   currentPage: 1,
//   rowsPage: 2,
//   lastPage: 5,
// });

onMounted(() => {
  getTeam();
});

watch(
  () => storePagination.getCurrentPage,
  () => {
    console.log("watchhhhhhhhhhhhhhhhhhhhhhhh");
    // hacer algo con la variable actualizada
  }
);
const getTeam = async () => {
  try {
    console.log("ok", storePagination.getCurrentPage);
    const response = await TeamService.index({
      page: storePagination.getCurrentPage,
      rows_page: storePagination.getRowPage,
    });
    console.log("response", response);
    storePagination.setLastPage = response.pagination.last_page;
    data.value = response.members.data;
    teamStore.setTeam(data.value);
  } catch (e) {
    notifyError("error al obtener los registros");
  }
};
</script>
