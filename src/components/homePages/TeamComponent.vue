<template>
  <q-layout>
    <q-page-container class="flex flex-center page">
      <q-card
        flat
        bordered
        class="my-card row col-12 no-border flex flex-center"
      >
        <q-card-section class="text-center col-12 section-title">
          <div class="text-h3">Equipo</div>
        </q-card-section>
        <q-card-section
          class="row col-12 flex flex-center q-gutter-sm content-card"
        >
          <q-card
            v-for="member in members"
            :key="member.id"
            bordered
            rounded
            style="min-height: 550px; max-width: 420px"
            class="hove-content shadow-9 shadow-up-6 max-w-sm col-sm-12 col-md-4 card-team q-mx-sm"
            flat
          >
            <q-img
              :src="`${companyStore.getBaseUrl}/images/${member.image}`"
              style="width: 400px; height: 400px"
            >
              <div class="social">
                <div class="q-pa-md q-gutter-lg">
                  <q-btn
                    round
                    push
                    :href="member.instagram_link"
                    style="--fa-secondary-opacity: 0.6; background-color: beige"
                    target="_blank"
                  >
                    <i class="fa-brands fa-instagram insta fa-bounce"></i>
                  </q-btn>
                  <q-btn
                    round
                    push
                    glossy
                    class="face"
                    :href="member.facebook_link"
                    target="_blank"
                    ><i class="fa-brands fa-facebook-f fa-lg"></i
                  ></q-btn>
                </div>
              </div>
            </q-img>
            <q-card-section>
              <div class="text-h5 q-mt-sm q-mb-xs text-center">
                {{ member.name }} {{ member.last_name }}
                {{ member.second_last_name }}
              </div>
              <div class="text-caption text-grey text-justify text-center">
                {{ member.intro }}
              </div>
            </q-card-section>
          </q-card>
        </q-card-section>
      </q-card>
    </q-page-container>
  </q-layout>
</template>


<script setup>
import * as homeService from "src/services/HomePage/homeService";
import { useCompanyStore } from "stores/company-store";
import { onMounted, ref } from "vue";

onMounted(() => {
  getMembers();
});

const companyStore = useCompanyStore();
const members = ref();

const getMembers = async () => {
  const response = await homeService.getMembers();
  members.value = response.members;
};
</script>
<style scoped>
.q-layout {
  min-height: auto !important;
  /* margin-top: 25px; */
  padding: 20px;
}
.page {
  padding: 10px;
}
.my-card {
  width: 1250px;
  /* padding: 10px; */
  /* background-color: #0165e1; */
  background-size: cover;
  background-position: center;
}
.content-card {
  min-width: 100%;
  padding: 0;
  margin: 0;
}
.card-team {
  width: 400px;
}
.social {
  left: 0;
  bottom: 0px;
  right: 0;
  height: 50px;
  opacity: 0;
  transition: ease-in-out 0.3s;
  background: rgba(255, 255, 255, 0.85);
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.link {
  background-color: #0e76a8;
  color: #ffffff;
}

.face {
  --fa-secondary-opacity: 0.1;
  background-color: #0165e1;
  color: #ffffff;
}

.twitt {
  background-color: #00acee;
  color: #ffffff;
}

.insta {
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 30px;
  color: #ffffff;
}

.social:hover {
  opacity: 1;
}

.im:hover {
  opacity: 1;
}

.hove-content:hover .social {
  opacity: 1;
}

@media (min-width: 64px) and (max-width: 800px) {
  .social {
    opacity: 1;
  }
}

@media (min-width: 64px) and (max-width: 694px) {
  .col-sm-6 {
    height: auto;
    width: 100% !important;
  }
}
</style>
