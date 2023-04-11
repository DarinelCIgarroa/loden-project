<template>
  <main>
    <section class="section" id="home">
      <HomeComponent></HomeComponent>
    </section>
    <section class="section" id="about-us">
      <AboutComponent></AboutComponent>
    </section>
    <section class="section" id="contact"></section>
    <section class="section" id="ejemp">
      <Ejempont></Ejempont>
    </section>
  </main>
</template>

<script>
import AboutComponent from "src/components/AboutComponent.vue";
import HomeComponent from "src/components/HomeComponent.vue";
import Ejempont from "src/components/ejemComponent.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",
  components: {
    HomeComponent,
    AboutComponent,
    Ejempont,
  },
  setup() {
    return {};
  },
});
</script>
<style scoped></style>
