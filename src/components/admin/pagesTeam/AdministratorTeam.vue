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
import { onMounted, ref } from "vue";
import { notifyError } from "src/utils/notify";
import { useTeamStore } from "src/stores/team-store";

const teamStore = useTeamStore();

onMounted(() => {
  getTeam();
});

const data = ref([]);

const getTeam = async () => {
  try {
    const response = await TeamService.index();
    teamStore.setTeam(response);
    data.value = response;
  } catch (error) {
    notifyError(error);
  }
};
</script>
