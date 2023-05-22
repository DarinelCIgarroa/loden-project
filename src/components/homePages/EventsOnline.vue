<template>
  <div style="min-height: 100vh">
    <q-carousel v-model="slide" arrows animated style="min-height: 100vh">
      <q-carousel-slide
        v-for="(event, index) in events"
        :key="event.id"
        :name="String(index)"
        :img-src="`${storeCompany.getBaseUrl}/images/${event.image}`"
        class="carousel"
      >
        <div class="bubbles">
          <span
            v-for="(value, i) in duplicatedBubbleCount"
            :key="i"
            :style="'--i: ' + value"
          ></span>
        </div>
        <div class="content">
          <div class="custom-caption absolute-left flex flex-center column">
            <div class="text-h2 title-event">{{ event.title }}</div>
            <div class="text-subtitle1 q-my-md">
              <span>
                {{ event.description }}
              </span>
            </div>
            <q-btn
              class="btn-more q-my-md"
              rounded
              color="primary"
              size="size"
              label="Saber más"
            ></q-btn>
          </div>
          <div class="container">
            <div class="container-counter text-center">
              <!-- DAYS -->
              <div
                class="col-md-3 col-sm-3 col-xs-6 dash-glob q-mx-md"
                data-scroll-reveal="enter bottom move 25px, after 0.3s"
              >
                <div class="dash days_dash">
                  <div class="digit">{{ timeRemaining.days }}</div>
                  <span class="dash_title">Días</span>
                </div>
              </div>
              <!-- HOURS -->
              <div
                class="col-md-3 col-sm-3 col-xs-6 dash-glob q-mx-md"
                data-scroll-reveal="enter bottom move 25px, after 0.3s"
              >
                <div class="dash hours_dash">
                  <div class="digit">{{ timeRemaining.hours }}</div>
                  <span class="dash_title">Horas</span>
                </div>
              </div>
              <!-- MINUTES -->
              <div
                class="col-md-3 col-sm-3 col-xs-6 dash-glob q-mx-md"
                data-scroll-reveal="enter bottom move 25px, after 0.3s"
              >
                <div class="dash minutes_dash">
                  <div class="digit">{{ timeRemaining.minutes }}</div>
                  <span class="dash_title">Minutos</span>
                </div>
              </div>
              <!-- SECONDS -->
              <div
                class="col-md-3 col-sm-3 col-xs-6 dash-glob q-mx-md"
                data-scroll-reveal="enter bottom move 25px, after 0.3s"
              >
                <div class="dash seconds_dash">
                  <div class="digit">{{ timeRemaining.seconds }}</div>
                  <span class="dash_title">Segundos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>
<script setup>
import { onMounted, ref, computed } from "vue";
import * as homeService from "src/services/HomePage/homeService";
import {
  differenceInSeconds,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
} from "date-fns";
import { useCompanyStore } from "stores/company-store";
// CONSTANTS
const storeCompany = useCompanyStore();
const timeRemaining = ref({});
const events = ref("");
const slide = ref("0");
const bubbleCount = ref([
  9, 11, 12, 24, 13, 14, 23, 18, 11, 15, 20, 25, 18, 19, 28,
]);
// MOUNTED
onMounted(async () => {
  await getEvents();
  setInterval(() => {
    calculateTimeRemaining();
  }, 1000);
});
// METHODS
const getEvents = async () => {
  const response = await homeService.getOnlineEvents();
  events.value = response.events;
};
const calculateTimeRemaining = () => {
  const now = new Date();
  const endDate = new Date(events.value[slide.value].start_date);
  const secondsRemaining = differenceInSeconds(endDate, now);
  const days = differenceInDays(endDate, now).toString().padStart(2, "0");
  const hours = (differenceInHours(endDate, now) % 24)
    .toString()
    .padStart(2, "0");
  const minutes = (differenceInMinutes(endDate, now) % 60)
    .toString()
    .padStart(2, "0");
  const seconds = (secondsRemaining % 60).toString().padStart(2, "0");

  timeRemaining.value = {
    days,
    hours,
    minutes,
    seconds,
  };
};
// COMPUTERS
const duplicatedBubbleCount = computed(() => {
  const { innerWidth } = window;
  let numDuplications = 1;

  if (innerWidth >= 688) {
    numDuplications = 2;
  }
  if (innerWidth >= 1200) {
    numDuplications = 4;
  }

  const duplicatedBubbleCount = [...bubbleCount.value];
  for (let i = 1; i < numDuplications; i++) {
    duplicatedBubbleCount.push(...bubbleCount.value);
  }

  return duplicatedBubbleCount;
});
</script>

<style scoped>
.content {
  /* background-color: green; */
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
}
.content .custom-caption {
  /* background-color: blueviolet; */
  width: 50%;
  text-align: center;
  padding: 20px;
  color: white;
  position: relative;
}
.content .container {
  /* background-color: #05adca; */
  width: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bubbles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
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
  margin: 0 8px;
  border-radius: 50%;
  box-shadow: 0 0 0 10px #a900af44, 0 0 50px #a900af, 0 0 100px #a900af;
  animation: animate 15s linear infinite;
  animation-duration: calc(125s / var(--i));
}
.bubbles span:nth-child(even) {
  background: #2dc3ff;
  box-shadow: 0 0 0 10px #0a85aa44, 0 0 50px #2dbcff, 0 0 100px #2dbcff;
}
.container-counter {
  /* background-color: brown; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-family: "alkatra";
}
.text-subtitle1 span {
  font-size: 20px;
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
  color: #ffffff;
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
@keyframes animate {
  0% {
    transform: translateY(100vh) scale(0);
  }
  100% {
    transform: translateY(-10vh) scale(1);
  }
}
@media (max-width: 1200px) {
  .content .custom-caption {
    /* background-color: blueviolet; */
    width: 100%;
  }
  .content .container {
    /* background-color: #05adca; */
    width: 100%;
  }
}
@media (max-width: 1024px) {
}
@media (max-width: 768px) {
  .title-event {
    font-size: 25px;
  }
  .bubbles span {
    margin: 0 4px;
  }
  .digit {
    font-size: 40px;
  }
}
@media (max-width: 320px) {
  .title-event {
    font-size: 10px;
  }
  .custom-caption .text-subtitle1 {
    font-size: 17px;
  }
}
</style>
