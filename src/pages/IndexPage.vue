<template>
  <main>
    <section ref="sectionHome" class="section" id="home">
      <HomeComponent></HomeComponent>
    </section>
    <section ref="sectionAbout" class="section" id="about-us">
      <AboutComponent></AboutComponent>
    </section>
    <section ref="sectionEvents" class="section" id="events">
      <EventsComponent></EventsComponent>
    </section>
    <section ref="sectionTeam" class="section" id="team">
      <TeamComponent></TeamComponent>
    </section>
    <section ref="sectionContact" class="section" id="contact">
      <ContacComponent></ContacComponent>
    </section>
  </main>
</template>

<script>
import AboutComponent from "src/components/AboutComponent.vue";

import EventsComponent from "src/components/EventsComponent.vue";
import HomeComponent from "src/components/HomeComponent.vue";
import TeamComponent from "src/components/TeamComponent.vue";
import ContacComponent from "src/components/ContacComponent.vue";
import { defineComponent, ref, onMounted, onUnmounted } from "vue";
import bus from "src/utils/event-bus";

export default defineComponent({
  name: "MainLayout",
  components: {
    HomeComponent,
    AboutComponent,
    EventsComponent,
    TeamComponent,
    ContacComponent,
  },

  setup() {
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
        threshold: [0.6, 0.6, 0.6],
        rootMargin: '-80px 0px 0px 0px', threshold: 0.2
      });
      observer.observe(sectionHome.value);
      observer.observe(sectionAbout.value);
      observer.observe(sectionEvents.value);
      observer.observe(sectionTeam.value);
      observer.observe(sectionContact.value);
    });

    onUnmounted(() => {
      if (observer) {
        observer.disconnect();
        observer = null;
      }
    });

    return { sectionHome, sectionAbout, sectionEvents, sectionTeam, sectionContact };
  },
});
</script>
