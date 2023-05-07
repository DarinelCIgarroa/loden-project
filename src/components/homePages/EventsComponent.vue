<template>
  <q-page-container class="page flex flex-center">
    <q-card flat bordered class="my-card row col-12 no-border justify-center">
      <q-card-section class="text-center col-12 section-title">
        <span class="text-h3">NUESTROS EVENTOS</span>
      </q-card-section>
      <q-card-section class="row col-12 section-online">
        <div class="col-xs-12 col-sm-12 col-md-6">
          <q-parallax
            class="img-online"
            src="https://cdn.quasar.dev/img/parallax2.jpg"
          >
          </q-parallax>
        </div>

        <div class="events-content col-xs-12 col-sm-12 col-md-6">
          <div class="col-xs-12 col-sm-6 col-md-6">
            <div class="text-center text-weight-bolder" style="font-size: 17px">
              <span
                >Voluptatem dignissimos provident quasi corporis voluptates sit
                assumenda.</span
              >
            </div>
            <br />
            <div class="text-center content-text">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
            </div>
          </div>
          <div
            class="event-info row justify-start q-mt-md col-xs-12 col-sm-12 col-md-6"
          >
            <div class="col-2 flex flex-center content-icon">
              <q-avatar
                size="60px"
                font-size="40px"
                color="primary"
                text-color="white"
                icon="directions"
              ></q-avatar>
            </div>
            <div class="row column col-10 content-text">
              <span class="text-weight-bold content-title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                doloremqu
              </span>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                doloremqu
              </span>
            </div>
            <div class="content-icon col-2 flex flex-center">
              <q-avatar
                size="60px"
                font-size="40px"
                color="primary"
                text-color="white"
                icon="directions"
              ></q-avatar>
            </div>
            <div class="content-text row column col-10">
              <span class="text-weight-bold content-title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                doloremqu
              </span>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                doloremqu
              </span>
            </div>
            <div class="col-12 text-center q-mt-md" style="font-size: 18px">
              <span
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                porro vitae aspernatur labore officia provident, ullam at nam
                alias, explicabo neque nihil corporis enim dolores temporibus
                impedit quasi et minima.</span
              >
            </div>
          </div>
        </div>
      </q-card-section>
      <q-card-section class="row col-12 section-in-person">
        <div class="col-xs-12 col-sm-12 col-md-6">
          <q-parallax
            class="img-online"
            src="https://cdn.quasar.dev/img/parallax2.jpg"
          >
          </q-parallax>
        </div>

        <div class="events-content col-xs-12 col-sm-12 col-md-6">
          <div class="col-xs-12 col-sm-6 col-md-6">
            <div class="text-center text-weight-bolder" style="font-size: 17px">
              <span
                >Voluptatem dignissimos provident quasi corporis voluptates sit
                assumenda.</span
              >
            </div>
            <br />
            <div class="text-center content-text">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
            </div>
          </div>
          <div
            class="event-info row justify-start q-mt-md col-xs-12 col-sm-12 col-md-6"
          >
            <div class="col-2 flex flex-center content-icon">
              <q-avatar
                size="60px"
                font-size="40px"
                color="primary"
                text-color="white"
                icon="directions"
              ></q-avatar>
            </div>
            <div class="row column col-10 content-text">
              <span class="text-weight-bold content-title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                doloremqu
              </span>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                doloremqu
              </span>
            </div>
            <div class="content-icon col-2 flex flex-center">
              <q-avatar
                size="60px"
                font-size="40px"
                color="primary"
                text-color="white"
                icon="directions"
              ></q-avatar>
            </div>
            <div class="content-text row column col-10">
              <span class="text-weight-bold content-title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                doloremqu
              </span>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                doloremqu
              </span>
            </div>
            <div class="col-12 text-center" style="font-size: 18px">
              <span
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                porro vitae aspernatur labore officia provident, ullam at nam
                alias, explicabo neque nihil corporis enim dolores temporibus
                impedit quasi et minima.</span
              >
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page-container>
</template>
<script setup>
</script>

<style scoped>
.page {
  padding: 0 !important;
  margin: 0 !important;
}
.my-card {
  width: 1250px;
  background-size: cover;
  background-position: center;
}
.img-online {
  min-height: 100%;
}
.content-title {
  font-size: 17px;
}
.events-content {
  padding: 50px 20px;
}
.content-icon {
  padding: 20px !important;
}
.content-text {
  font-size: 15px;
  padding: 10px;
  text-align: justify;
}
.section-in-person {
  display: flex;
  flex-direction: row-reverse;
}

@media (min-width: 64px) and (max-width: 800px) {
  .section-title span {
    font-size: 15px;
  }
  .social {
    opacity: 1;
  }
}

@media (min-width: 64px) and (max-width: 694px) {
  .img-online {
    max-height: 400px !important;
  }
  .section-title span {
    font-size: 35px;
  }
  .event-info {
    flex-direction: column;
    align-items: center;
  }
  .content-icon {
    min-width: 100%;
  }
  .content-text {
    min-width: 100%;
  }
}

@media (max-width: 1536px) {
  .my-card {
    max-width: 390px;
    padding: 15px;
  }
  .padding-xl {
    padding-left: 20px 16px !important;
  }
}
</style>
