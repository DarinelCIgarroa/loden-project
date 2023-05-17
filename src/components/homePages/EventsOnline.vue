<template>
  <q-layout>
    <q-page-container>
      <q-page class="row flex flex-center page">
        <div class="bubbles">
          <span
            v-for="(value, index) in duplicatedBubbleCount"
            :key="index"
            :style="'--i: ' + value"
          ></span>
        </div>
        <div class="col-8 container-counter text-center">
          <div class="col-12 d-flex flex-column">
            <span
              class="home-title text-h3 align-self-stretch text-white text-uppercase"
              >Nombre del evento</span
            >
            <div class="q-mt-lg">
              <div class="row">
                <!-- DAYS -->
                <div
                  class="col-md-3 col-sm-3 col-xs-6 dash-glob"
                  data-scroll-reveal="enter bottom move 25px, after 0.3s"
                >
                  <div class="dash days_dash">
                    <div class="digit">0</div>
                    <div class="digit">0</div>
                    <span class="dash_title">Días</span>
                  </div>
                </div>
                <!-- HOURS -->
                <div
                  class="col-md-3 col-sm-3 col-xs-6 dash-glob"
                  data-scroll-reveal="enter bottom move 25px, after 0.3s"
                >
                  <div class="dash hours_dash">
                    <div class="digit">0</div>
                    <div class="digit">0</div>
                    <span class="dash_title">Horas</span>
                  </div>
                </div>
                <!-- MINUTES -->
                <div
                  class="col-md-3 col-sm-3 col-xs-6 dash-glob"
                  data-scroll-reveal="enter bottom move 25px, after 0.3s"
                >
                  <div class="dash minutes_dash">
                    <div class="digit">0</div>
                    <div class="digit">0</div>
                    <span class="dash_title">Minutos</span>
                  </div>
                </div>
                <!-- SECONDS -->
                <div
                  class="col-md-3 col-sm-3 col-xs-6 dash-glob"
                  data-scroll-reveal="enter bottom move 25px, after 0.3s"
                >
                  <div class="dash seconds_dash">
                    <div class="digit">0</div>
                    <div class="digit">0</div>
                    <span class="dash_title">Segundos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </q-page>
      <q-page class="row flex flex-center">
        <div class="container">
          <div v-for="(event, index) in events" :key="event.id">
            <div class="card col-xs-12 col-sm-6 col-md-4 col-lg-2">
              <div class="box">
                <div class="content">
                  <h2>{{ index }}</h2>
                  <h3>{{ event.name }}</h3>
                  <p>
                    {{ event.description }}
                  </p>
                  <a><span class="btn-info">Más información</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script setup>
import { computed, onMounted, ref, watchEffect } from "vue";
import * as homeService from "src/services/HomePage/homeService";

onMounted(() => {
  getEvents();
});
const events = ref("");

const bubbleCount = ref([
  9, 11, 12, 24, 13, 14, 23, 18, 11, 15, 20, 25, 18, 19, 28,
]);
const getEvents = async () => {
  const response = await homeService.getOnlineEvents();
  events.value = response.events;
};

const duplicatedBubbleCount = computed(() => {
  const { innerWidth } = window;
  let numDuplications = 0;

  if (innerWidth < 688) {
    numDuplications = 1;
  }
  if (innerWidth >= 688 && innerWidth < 1024) {
    numDuplications = 2;
  }
  if (innerWidth >= 1024 && innerHeight < 1200) {
    numDuplications = 3;
  }
  if (innerWidth >= 1200) {
    numDuplications = 5;
  }

  const duplicatedBubbleCount = [...bubbleCount.value];
  for (let i = 1; i < numDuplications; i++) {
    duplicatedBubbleCount.push(...bubbleCount.value);
  }

  return duplicatedBubbleCount;
});

watchEffect(() => {
  duplicatedBubbleCount.value;
});
</script>

<style scoped>
.bubbles {
  background-color: rgb(2, 2, 2);
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  transform: scale(1);
  transform-origin: top left;
}
.bubbles span {
  position: relative;
  width: 18px;
  height: 18px;
  background: #4fc3dc;
  margin: 0 4px;
  border-radius: 50%;
  box-shadow: 0 0 0 10px #4fc3dc44, 0 0 50px #3415be, 0 0 100px #4fc3dc;
  animation: animate 15s linear infinite;
  animation-duration: calc(125s / var(--i));
}

.bubbles span:nth-child(even) {
  background: #ff2d75;
  box-shadow: 0 0 0 10px #ff2d7544, 0 0 50px #ff2d75, 0 0 100px #ff2d75;
}
@keyframes animate {
  0% {
    transform: translateY(100vh) scale(0);
  }
  100% {
    transform: translateY(-10vh) scale(1);
  }
}
.container-counter {
  position: absolute;
  font-family: "alkatra";
}
.dash {
  padding-bottom: 10px;
  position: relative;
  opacity: 1;
}
.dash_title {
  font-size: 16px;
  width: 100%;
  color: #bbbbbb;
  display: block;
  clear: both;
}
.digit {
  color: #f9f9f9;
  font-size: 60px;
  font-weight: 300;
  display: inline-block;
  overflow: hidden;
  text-align: center;
  height: 110px;
  line-height: 110px;
  position: relative;
  vertical-align: middle;
}
.container {
  /* background-color: #cfcfcf; */
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 70%;
  height: auto;
  flex-wrap: wrap;
  padding: 40px 0;
}
.container .card {
  position: relative;
  width: 320px;
  height: 440px;
  box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.05),
    inset -5px -5px 5px rgba(255, 255, 255, 0.5),
    5px 5px 5px rgba(0, 0, 0, 0.05), -5px -5px 5px rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  margin: 30px;
}
.container .card .box {
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
  background: #ebf5fc;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
}
.container .card:hover .box {
  transform: translateY(-50px);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  background: linear-gradient(45deg, #1c6799, #000000);
}
.container .card .box .content {
  padding: 20px;
  text-align: center;
}
.container .card .box .content h2 {
  position: absolute;
  top: -20px;
  right: 30px;
  font-weight: 500;
  font-size: 8em;
  color: rgba(0, 0, 0, 0.02);
  transition: 0.5s;
  pointer-events: none;
}
.container .card:hover .box .content h2 {
  color: rgba(224, 217, 217, 0.466);
}
.container .card .box .content h3 {
  font-size: 1.8em;
  color: #777;
  z-index: 1;
  transition: 0.5s;
}
.container .card .box .content p {
  font-size: 1em;
  font-weight: 300;
  color: #777;
  z-index: 1;
  transition: 0.5s;
}
.container .card:hover .box .content h3,
.container .card:hover .box .content p {
  color: #fff;
}
.container .card .box .content a {
  position: relative;
  display: inline-block;
  padding: 8px 20px;
  background: #03a9f4;
  margin-top: 15px;
  border-radius: 20px;
  color: #fff;
  text-decoration: none;
  font-weight: 400;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0, 0.2);
}
.container .card:hover .box .content a {
  background: #020202;
}
.container .card:hover .box .content .btn-info {
  color: #fff;
}
</style>
