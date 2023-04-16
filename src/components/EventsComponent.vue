<template>
  <q-layout>
    <q-page-container class="flex flex-center q-mx-sm" style="max-height: 850px;">
      <q-page>
        <q-card flat bordered class="row my-card q-mt-lg no-border justify-center">
          <q-card-section class="text-center col-12 section-title">
            <div class="text-h3">CONOCE NUESTROS EVENTOS</div>
          </q-card-section>
          <q-card-section class="col-6 q-mt-xl row justify-center section-face-to-face">
            <q-parallax class="parallax rounded-borders" src="../statics/images/inPerson44.jpg">
              <div class="absolute-bottom text-subtitle2 text-center text-white q-pb-md">
                <span class="text-h4 q-mx-sm" style="font-family: Tinos-italic;">Eventos precensiales</span>
              </div>
            </q-parallax>
            <q-card-section class="info-description">
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minima natus quam possimus est voluptas
                porro
                soluta, culpa laudantium nobis placeat et aperiam ut, iure officiis nihil ipsam quibusdam.</span>
              <br>
              <q-btn class="q-mt-md" unelevated rounded color="primary" label="ver eventos"></q-btn>
            </q-card-section>
          </q-card-section>
          <q-card-section class="col-6 q-mt-xl row justify-center section-face-to-face">
            <q-parallax class="parallax rounded-borders" src="../statics/images/online88.jpg">
              <div class="absolute-bottom text-subtitle2 text-center text-white q-pb-md">
                <span class="text-h4 q-mx-sm" style="font-family: Tinos-italic;">Eventos en linea</span>
              </div>
            </q-parallax>
            <q-card-section class="info-description">
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minima natus quam possimus est voluptas
                porro
                soluta, culpa laudantium nobis placeat et aperiam ut, iure officiis nihil ipsam quibusdam.</span>
              <br>
              <q-btn class="q-mt-md" unelevated rounded color="primary" label="ver eventos"></q-btn>
            </q-card-section>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script>
// import { onMounted } from 'vue';
import 'animate.css/animate.min.css';

export default {
  setup() {


  },
}
</script>

<style scoped>
.my-card {
  /* background-color: aliceblue; */
  width: 1250px;
  background-size: cover;
  background-position: center;
}

.section-face-to-face {
  margin-top: 60px;
  height: auto;
  position: relative;
  z-index: 1;
  transition: all 300ms;
  border-radius: 0px 0px 20px 20px;
}

.info-description {
  padding: 20px;
  margin-top: -220px;
  position: relative;
  z-index: -1;
  width: 530PX;
  border-radius: 0px 0px 20px 20px;
  transition: all 400ms cubic-bezier(0.5, 0, 0, 1);
}

.parallax {
  border-radius: 20px 20px 20px 20px;
  height: 450px;
  transition: all 400ms cubic-bezier(0.5, 0, 0, 1);
}

.section-face-to-face:hover .parallax {
  margin-top: -40px;
  border-radius: 20px 20px 0px 0px;
  height: 530PX;
  width: 530PX;
}

.section-face-to-face:hover .info-description {
  background-color: #e0dddd4f;
  margin-top: 0;
  font-size: 17px;
}
</style>
