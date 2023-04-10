<template>
  <main>
    <section class="section" id="home">
      <HomeComponent></HomeComponent>
    </section>
    <section class="section" id="about-us">
      <AboutComponent></AboutComponent>
    </section>
    <section class="section" id="contact"></section>
  </main>
</template>

<script>
import AboutComponent from 'src/components/AboutComponent.vue'
import HomeComponent from 'src/components/HomeComponent.vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',
  components: {
    HomeComponent,
    AboutComponent
  },
  setup() {
    return {

    };
  }
})
</script>
<style scoped></style>
