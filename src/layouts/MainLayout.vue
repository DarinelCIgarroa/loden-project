
<template>
  <q-layout view="hHh lpR fFf">
    <q-header
      class="custom-header row justify-around"
      style="font-family: Arial, Helvetica, sans-serif"
    >
      <div class="logo justify-start flex flex-center">
        <q-avatar size="50px">
          <img src="https://cdn.quasar.dev/img/avatar.png" />
        </q-avatar>
        <span class="name-company q-mx-md">{{
          storeCompany.getStateCompany.name
        }}</span>
      </div>
      <nav id="navbar" class="navbar row">
        <ul>
          <q-item
            v-ripple="false"
            exact
            href="#home"
            clickable
            manual-focus
            :class="current_section === 'home' ? 'active' : ''"
            @click="current_section = 'home'"
          >
            <q-item-section no-hover class="li-nav">
              <q-icon class="icon" name="home"></q-icon>
              <span class="text">Inicio</span>
            </q-item-section>
          </q-item>
          <q-item
            v-ripple="false"
            exact
            clickable
            href="#about-us"
            manual-focus
            :class="current_section === 'about-us' ? 'active' : ''"
            @click="current_section = 'about-us'"
          >
            <q-item-section no-hover class="li-nav second li-nav-wide">
              <q-icon class="icon" name="store"></q-icon>
              <span class="text">Nostros</span>
            </q-item-section>
          </q-item>
          <q-item
            v-ripple="false"
            exact
            clickable
            href="#events"
            manual-focus
            :class="current_section === 'events' ? 'active' : ''"
            @click="current_section = 'events'"
          >
            <q-item-section no-hover class="li-nav second li-nav-wide">
              <q-icon class="icon" name="date_range"></q-icon>
              <span class="text">Eventos</span>
            </q-item-section>
          </q-item>
          <q-item
            v-ripple="false"
            exact
            clickable
            manual-focus
            href="#team"
            :class="current_section === 'team' ? 'active' : ''"
            @click="current_section = 'team'"
          >
            <q-item-section no-hover class="li-nav second li-nav-wide">
              <q-icon class="icon" name="fa-solid fa-user-group"></q-icon>
              <span class="text">Equipo</span>
            </q-item-section>
          </q-item>
          <q-item
            v-ripple="false"
            exact
            clickable
            href="#contact"
            manual-focus
            :class="current_section === 'contact' ? 'active' : ''"
            @click="current_section = 'contact'"
          >
            <q-item-section no-hover class="li-nav second li-nav-wide">
              <q-icon class="icon" name="fa-solid fa-file-contract"></q-icon>
              <span class="text">Contacto</span>
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

<script setup>
import { ref } from "vue";
import bus from "src/utils/event-bus";
import { useCompanyStore } from "stores/company-store";

const storeCompany = useCompanyStore();

const current_section = ref();
bus.on("section", (section) => {
  current_section.value = section;
});
</script>

<style scoped>
.custom-header {
  z-index: 997;
  transition: all 0.5s;
  padding: 15px 0;
  background: #000000f5;
}

.custom-header .name-company {
  font-size: 25px;
  line-height: 2.5;
  font-weight: 700;
  letter-spacing: 1px;
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
