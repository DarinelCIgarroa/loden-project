<template>
  <div class="scroll-container">
    <main>
      <section id="home" ref="sectionHome" class="section">
        <HomeComponent></HomeComponent>
      </section>
      <section id="about-us" ref="sectionAbout" class="section">
        <AboutComponent></AboutComponent>
      </section>
      <section id="events" ref="sectionEvents" class="section">
        <EventsComponent></EventsComponent>
      </section>
      <section id="contact" ref="sectionContact" class="section">
        <ContactComponent></ContactComponent>
      </section>
      <section id="team" ref="sectionTeam" class="section">
        <TeamComponent></TeamComponent>
      </section>
    </main>
  </div>
</template>

<script setup>
import AboutComponent from "src/components/homePages/AboutComponent.vue";

import EventsComponent from "src/components/homePages/EventsComponent.vue";
import HomeComponent from "src/components/homePages/HomeComponent.vue";
import TeamComponent from "src/components/homePages/TeamComponent.vue";
import ContactComponent from "src/components/homePages/ContactComponent.vue";
import { useCompanyStore } from "stores/company-store";

import { ref, onMounted, onUnmounted } from "vue";
import bus from "src/utils/event-bus";
const companyStore = useCompanyStore();
const sectionHome = ref(null);
const sectionAbout = ref(null);
const sectionEvents = ref(null);
const sectionTeam = ref(null);
const sectionContact = ref(null);

const onIntersection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      bus.emit("section", entry.target.id);
    }
  });
};

let observer = null;

onMounted(() => {
  observer = new IntersectionObserver(onIntersection, {
    threshold: [0.6, 0.6, 0.6, 0.6],
    rootMargin: "0px 0px 0px 0px",
  });
  observer.observe(sectionHome.value);
  observer.observe(sectionAbout.value);
  observer.observe(sectionEvents.value);
  observer.observe(sectionTeam.value);
  observer.observe(sectionContact.value);
  companyStore.setBaseUrl(process.env.BASE_URL);
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
    observer = null;
  }
});
</script>
