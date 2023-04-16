
<template>
  <q-layout view="hHh lpR fFf">

    <q-header class="custom-header row justify-around" style="font-family: Arial, Helvetica, sans-serif;">

      <div class="logo">
        <h1><a href="index.html">LONDEN</a></h1>
      </div>

      <nav id="navbar" class="navbar">
        <ul>
          <q-item exact clickable v-ripple="false" manual-focus :class="current_section === 'home' ? 'my-menu-link' : ''">
            <q-item-section no-hover class="li-nav"><span class="a-nav">inicio</span></q-item-section>
          </q-item>
          <q-item exact clickable v-ripple="false" manual-focus
            :class="current_section === 'about-us' ? 'my-menu-link' : ''">
            <q-item-section no-hover class="li-nav"><span class="a-nav">Acerca
                De</span></q-item-section>
          </q-item>
          <q-item exact clickable v-ripple="false" manual-focus :class="current_section === 'team' ? 'my-menu-link' : ''">
            <q-item-section no-hover class="li-nav"><span class="a-nav">Equipo</span></q-item-section>
          </q-item>
          <q-item exact clickable v-ripple="false" manual-focus
            :class="current_section === 'events' ? 'my-menu-link' : ''">
            <q-item-section no-hover class="li-nav"><span class="a-nav">Eventos</span></q-item-section>
          </q-item>
          <q-item exact clickable v-ripple="false" manual-focus
            :class="current_section === 'contact' ? 'my-menu-link' : ''">
            <q-item-section no-hover class="li-nav"><span class="a-nav">Contacto</span></q-item-section>
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
import { defineComponent, onMounted, ref } from 'vue'
import bus from 'src/utils/event-bus';

export default defineComponent({
  name: 'MainLayout',

  setup() {
    const current_section = ref()
    bus.on('section', (section) => {
      current_section.value = section
    });

    return {
      current_section
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
