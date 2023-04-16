<template>
  <main>
    <section ref="sectionHome" class="section" id="home">
      <HomeComponent></HomeComponent>
    </section>
    <section ref="sectionAbout" class="section" id="about-us">
      <AboutComponent></AboutComponent>
    </section>
    <section ref="sectionEvents" class="section" id="events">
      <eventsComponent></eventsComponent>
    </section>
  </main>
</template>

<script>
import AboutComponent from 'src/components/AboutComponent.vue'
import EventsComponent from 'src/components/EventsComponent.vue'
import HomeComponent from 'src/components/HomeComponent.vue'
import { defineComponent, ref, onMounted, onUnmounted } from 'vue'
import bus from 'src/utils/event-bus';

export default defineComponent({
  name: 'MainLayout',
  components: {
    HomeComponent,
    AboutComponent,
    EventsComponent
  },
  setup() {
    const sectionHome = ref(null);
    const sectionAbout = ref(null);
    const sectionEvents = ref(null);

    const onIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log(entry.target.id);
          bus.emit('section', entry.target.id);
        }
      });
    };

    let observer = null;

    onMounted(() => {
      observer = new IntersectionObserver(onIntersection, { threshold: [0.6, 0.6, 0.6] });
      observer.observe(sectionHome.value);
      observer.observe(sectionAbout.value);
      observer.observe(sectionEvents.value);
    });


    onUnmounted(() => {
      if (observer) {
        observer.disconnect();
        observer = null;
      }
    });

    return { sectionHome, sectionAbout, sectionEvents };
  }
})
</script>
