<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex flex-center page">
        <div class="container text-center">
          <div class="col-12 d-flex flex-column">
            <span class="home-title text-h2 align-self-stretch text-white">
              Haga crecer sus ingresos con Londen</span
            >
            <div class="q-mt-lg">
              <span
                class="text-h5 concatetx text-italic q-mt-lg text-white input"
                >Somos un equipo de trading talentosos, hacemos crecer tu dinero
                de manera segura</span
              >
            </div>
            <div class="q-mt-lg">
              <transition
                appear
                transition-duration="73000"
                enter-active-class="animated bounceInUp"
                leave-active-class="animated bounceOutRight"
              >
                <q-btn
                  to="/login"
                  size="lg"
                  rounded
                  color="white"
                  text-color="black"
                  label="Empezar ahora"
                ></q-btn>
              </transition>
            </div>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script setup>
</script>

<style scoped>
.page {
  background-color: black;
  background-image: url("../../statics/images/Home/home6.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.8;
}
.normal_gradient {
  background: linear-gradient(145deg, rgba(66, 66, 66, 0.767) 15%, #3498db 80%);
}

.dark_gradient {
  background: linear-gradient(145deg, rgb(139, 11, 90) 15%, #000000 70%);
}

.container {
  position: absolute;
  font-family: "alkatra";
}

.input {
  display: inline-block;
  overflow: hidden;
  border-right: 0.15em solid rgb(24, 23, 23);
  white-space: nowrap;
  margin: 0 auto;
  animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
}

@keyframes typing {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }

  50% {
    border-color: rgb(17, 17, 17);
  }
}

@media (min-width: 713px) and (max-width: 911px) {
  .concatetx {
    font-size: 20px;
  }
}

@media (min-width: 500px) and (max-width: 713px) {
  .concatetx {
    font-size: 15px;
  }
}

@media (min-width: 400px) and (max-width: 500px) {
  .concatetx {
    font-size: 11px;
  }
}

@media (max-width: 400px) {
  .concatetx {
    font-size: 9px;
  }
}
</style>
