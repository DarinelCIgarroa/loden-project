
<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="custom-header row justify-around" style="font-family: Arial, Helvetica, sans-serif;">
      <div class="logo">
        <h1><a href="index.html">LONDEN</a></h1>
      </div>
      <nav id="navbar" class="navbar row">
        <ul>
          <q-item exact clickable v-ripple="false" manual-focus :class="current_section === 'home' ? 'active' : ''"
            @click="current_section = 'home'">
            <q-item-section no-hover class="li-nav">
              <q-icon class="icon" name="home"></q-icon>
              <span class="text">Inicio</span>
            </q-item-section>
          </q-item>
          <q-item exact clickable v-ripple="false" manual-focus :class="current_section === 'about-us' ? 'active' : ''"
            @click="current_section = 'about-us'">
            <q-item-section no-hover class="li-nav second li-nav-wide">
              <q-icon class="icon" name="store"></q-icon>
              <span class="text">Nostros</span>
            </q-item-section>
          </q-item>
          <q-item exact clickable v-ripple="false" manual-focus :class="current_section === 'events' ? 'active' : ''"
            @click="current_section = 'events'">
            <q-item-section no-hover class="li-nav second li-nav-wide">
              <q-icon class="icon" name="date_range"></q-icon>
              <span class="text">Eventos</span>
            </q-item-section>
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
  padding: 15px 0;
  background: #000000f5;
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

.li-nav-wide {
  width: 100px;
  /* ajusta el ancho según tus necesidades */
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
