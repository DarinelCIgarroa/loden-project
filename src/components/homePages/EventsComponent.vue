<template>
  <q-page-container class="flex flex-center">
    <q-page>
      <br />
      <q-card
        flat
        bordered
        class="my-card row q-px-lg q-mt-lg no-border justify-center"
      >
        <q-card-section
          class="text-center col-md-12 col-sm-12 col-xs-3 section-title"
        >
          <div class="text-h3">CONOCE NUESTROS EVENTOS</div>
        </q-card-section>
        <div class="row justify-center content-center padding-xl margen-conten">
          <div class="col-lg-5 col-xl-6 col-md-5 col-sm-5 col-xs-7 q-pl-lg">
            <q-card-section
              class="col q-mx-lg row justify-center section-face-to-face"
            >
              <q-parallax
                class="parallax rounded-borders"
                src="../../statics/images/inPerson44.jpg"
              >
                <div
                  class="absolute-bottom text-subtitle2 text-center text-white q-pb-md"
                >
                  <span
                    class="text-h4 q-mx-sm"
                    style="font-family: Tinos-italic"
                    >Eventos precensiales</span
                  >
                </div>
              </q-parallax>
              <q-card-section class="info-description col-xs-7">
                <span
                  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  minima natus quam possimus est voluptas porro soluta, culpa
                  laudantium nobis placeat et aperiam ut, iure officiis nihil
                  ipsam quibusdam.</span
                >
                <br />
                <q-btn
                  class="q-mt-md"
                  unelevated
                  rounded
                  color="primary"
                  label="ver eventos"
                ></q-btn>
              </q-card-section>
            </q-card-section>
          </div>

          <div class="col-lg-5 col-xl-6 col-md-5 col-sm-5 col-xs-7 q-pl-lg">
            <q-card-section
              class="col q-mx-lg q-mt-xl row justify-center section-face-to-face"
            >
              <q-parallax
                class="parallax rounded-borders"
                src="../../statics/images/online88.jpg"
              >
                <div
                  class="absolute-bottom text-subtitle2 text-center text-white q-pb-md"
                >
                  <span
                    class="text-h4 q-mx-sm"
                    style="font-family: Tinos-italic"
                    >Eventos en linea</span
                  >
                </div>
              </q-parallax>
              <q-card-section class="info-description col-xs-7">
                <span
                  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  minima natus quam possimus est voluptas porro soluta, culpa
                  laudantium nobis placeat et aperiam ut, iure officiis nihil
                  ipsam quibusdam.</span
                >
                <br />
                <q-btn
                  class="q-mt-md"
                  unelevated
                  rounded
                  color="primary"
                  label="ver eventos"
                ></q-btn>
              </q-card-section>
            </q-card-section>
          </div>
        </div>
      </q-card>
    </q-page>
  </q-page-container>
</template>
<script setup>
import "animate.css/animate.min.css";
</script>

<style scoped>
.my-card {
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
  width: 530px;
  border-radius: 0px 0px 20px 20px;
  transition: all 400ms cubic-bezier(0.5, 0, 0, 1);
}

.parallax {
  border-radius: 20px 20px 20px 20px;
  height: 350px !important;
  transition: all 400ms cubic-bezier(0.5, 0, 0, 1);
}

.section-face-to-face:hover .parallax {
  margin-top: -40px;
  border-radius: 20px 20px 0px 0px;
  height: 530px;
  width: 530px;
}

.section-face-to-face:hover .info-description {
  background-color: #e0dddd4f;
  margin-top: 0;
  font-size: 17px;
}

@media (min-width: 845px) and (max-width: 1000px) {
  .margen-conten {
    margin-left: 7%;
    margin-right: 8%;
  }
}

@media (min-width: 90px) and (max-width: 875px) {
  .margen-conten {
    margin-left: 114px;
    margin-right: 121px;
  }

  .section-face-to-face {
    transition: none;
  }

  .info-description {
    padding: 22px;
    margin-top: 0px !important;
    width: 530px;
  }

  .section-face-to-face .parallax {
    margin-top: 40px !important;
  }
}

@media (min-width: 52px) and (max-width: 512px) {
  .info-description {
    padding: 20px;
    width: 293px;
  }

  .text-h3 {
    font-size: 19px;
  }
}
</style>
