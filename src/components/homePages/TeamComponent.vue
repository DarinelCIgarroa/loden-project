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
          class="row col-12 flex flex-center q-gutter-md content-card"
        >
          <q-card
            v-for="member in members"
            :key="member.id"
            class="hove-content shadow-9 shadow-up-6 max-w-sm col-xs-12 col-sm-5 col-md-4"
            flat
            bordered
          >
            <q-img src="../../statics/images/team-1.jpg">
              <div class="social">
                <div class="q-pa-md q-gutter-sm">
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
                {{ member.name }}
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

import { onMounted, ref } from "vue";

onMounted(() => {
  getMembers();
});
const members = ref();
const getMembers = async () => {
  const response = await homeService.getMembers();
  members.value = response.members;
};
</script>
<style scoped>
.q-layout {
  min-height: auto !important;
  background-color: rgb(9, 147, 156);
  margin-top: 25px;
  padding: 20px;
}
.page {
  padding: 10px;
  background-color: rgb(114, 23, 199);
}
.my-card {
  background-color: springgreen;
  width: 1250px;
  background-size: cover;
  background-position: center;
  /* padding: 20px; */
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
