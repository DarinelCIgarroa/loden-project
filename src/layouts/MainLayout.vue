
<template>
  <q-layout view="hHh lpR fFf">

    <q-header class="custom-header row justify-around" style="font-family: Arial, Helvetica, sans-serif;">

      <div class="logo">
        <h1><a href="index.html">LONDEN</a></h1>
        <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a> -->
      </div>

      <nav id="navbar" class="navbar">
        <ul>
          <q-item to="/" exact clickable v-ripple="false" manual-focus active-class="my-menu-link">
            <q-item-section no-hover class="li-nav" data-url="home">Inicio</q-item-section>
          </q-item>
          <q-item to="/about-us" exact clickable v-ripple="false" manual-focus active-class="my-menu-link">
            <q-item-section no-hover class="li-nav" data-url="about-us"><span class="a-nav">Acerca
                De</span></q-item-section>
          </q-item>
          <q-item to="" exact clickable v-ripple="false" manual-focus active-class="my-menu-link">
            <q-item-section no-hover class="li-nav" data-url="team"><span class="a-nav">Equipo</span></q-item-section>
          </q-item>
          <q-item to="" exact clickable v-ripple="false" manual-focus active-class="my-menu-link">
            <q-item-section no-hover class="li-nav" data-url="events"><span class="a-nav">Eventos</span></q-item-section>
          </q-item>
          <q-item to="" exact clickable v-ripple="false" manual-focus active-class="my-menu-link">
            <q-item-section no-hover class="li-nav" data-url="contact"><span
                class="a-nav">Contacto</span></q-item-section>
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
import { defineComponent, ref } from 'vue'

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

export default defineComponent({
  name: 'MainLayout',


  setup() {
    return {
    }
  }
})
</script>

<style scoped>
/*--------------------------------------------------------------
# Header
--------------------------------------------------------------*/
.custom-header {
  z-index: 997;
  transition: all 0.5s;
  padding: 20px 0;
  background: #000000f5;
}

.custom-header.header-scrolled {
  box-shadow: 0px 2px 15px rgba(124, 6, 85, 0.904);
  padding: 12px 0;
}

.custom-header .logo h1 {
  font-size: 30px;
  margin: 0;
  padding: 0;
  line-height: 1.5;
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

/*--------------------------------------------------------------
# Navigation Menu
--------------------------------------------------------------*/
/**
* Desktop Navigation
*/
.nav-link {
  text-decoration: none;
}

.navbar {
  padding: 0;
}

.navbar ul {
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  align-items: center;
}

.navbar .li-nav {
  position: relative;
}

.my-menu-link {
  color: white;
  font-size: 17px;
  border-bottom: 2.5px solid #3f899bf3;
}
</style>
