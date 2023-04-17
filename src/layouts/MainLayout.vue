<template>
  <q-layout view="hHh lpR fFf">
    <q-header
      class="custom-header row justify-around"
      style="font-family: Arial, Helvetica, sans-serif"
    >
      <div class="logo">
        <h1><a href="index.html">LONDEN</a></h1>
      </div>
      <nav id="navbar" class="navbar row">
        <ul>
          <q-item
            to="/"
            exact
            clickable
            v-ripple="false"
            manual-focus
            active-class="my-menu-link"
          >
            <q-item-section no-hover class="li-nav" data-url="home"
              >Inicio</q-item-section
            >
          </q-item>
          <q-item
            to="/about-us"
            exact
            clickable
            v-ripple="false"
            manual-focus
            active-class="my-menu-link"
          >
            <q-item-section no-hover class="li-nav" data-url="about-us"
              ><span class="a-nav">Acerca De</span></q-item-section
            >
          </q-item>
          <q-item
            to="/Ejemp-us"
            exact
            clickable
            v-ripple="false"
            manual-focus
            active-class="my-menu-link"
          >
            <q-item-section no-hover class="li-nav" data-url="team"
              ><span class="a-nav">Equipo</span></q-item-section
            >
          </q-item>
          <q-item
            to=""
            exact
            clickable
            v-ripple="false"
            manual-focus
            active-class="my-menu-link"
          >
            <q-item-section no-hover class="li-nav" data-url="events"
              ><span class="a-nav">Eventos</span></q-item-section
            >
          </q-item>
          <q-item
            to=""
            exact
            clickable
            v-ripple="false"
            manual-focus
            active-class="my-menu-link"
          >
            <q-item-section no-hover class="li-nav" data-url="contact"
              ><span class="a-nav">Contacto</span></q-item-section
            >
          </q-item>
        </ul>
      </nav>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

export default defineComponent({
  name: "MainLayout",

  setup() {
    return {};
  },
});

</script>

<style scoped>
.custom-header {
  z-index: 997;
  transition: all 0.5s;
  padding: 15px 0;
  background: #000000f5;
}

.custom-header .logo h1 {
  font-size: 25px;
  margin: 0;
  padding: 0;
  line-height: 2.5;
  font-weight: 700;
  letter-spacing: 1px;
}

.custom-header .logo h1 a,
.custom-header .logo h1 a:hover {
  color: #ffffff;
  text-decoration: none;
}

.custom-header .logo img {
  padding: 0;
  margin: 0;
  max-height: 40px;
}

.nav-link {
  text-decoration: none;
}

.navbar {
  padding: 0;
}

.navbar ul {
  position: relative;
  margin: 0;
  padding: 0;
  display: flex;
  /* list-style: none; */
  align-items: center;
}

.navbar .li-nav {
  width: 50px;
  height: 45px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon {
  transition: 0.5s;
  font-size: 2.5em;
}

.text {
  display: inline-block;
  position: absolute;
  font-weight: 800;
  font-size: 0.8em;
  color: #ffffff;
  transition: 0.5s;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transform: translateY(0px);
  opacity: 0;
}

.active .icon {
  transform: translateY(-8px);
  color: rgb(44, 157, 192);
  /* font-size: 2.8em; */
}

.active .text {
  transform: translateY(20px);
  opacity: 1;
}
</style>
