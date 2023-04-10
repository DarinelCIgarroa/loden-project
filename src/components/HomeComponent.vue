<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex flex-center">
        <div id="particles-js" :class="$q.dark.isActive ? 'dark_gradient' : 'normal_gradient'"></div>
        <div class="container text-center">
          <div class="col-12 d-flex flex-column">
            <span class="home-title text-h2 align-self-stretch text-white">Haga crecer sus ingresos con
              Londen</span>
            <div class="q-mt-lg">
              <span class="text-h5 text-italic q-mt-lg text-white">Somos un equipo de trading talentosos, hacemos crecer
                tu dinero de manera segura</span>
            </div>
            <div class="q-mt-lg">
              <q-btn size="lg" rounded color="white" text-color="black" label="Empezar ahora"></q-btn>
            </div>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script>
import { onMounted } from 'vue';
export default {
  setup() {
    onMounted(() => {
      particlesJS("particles-js", {
        "particles": {
          "number": {
            "value": 30,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "onclick": {
              "enable": false,
              "mode": "repulse"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 207.079689136843,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      });
    })
  },
}
</script>

<style scoped>
#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
}

.normal_gradient {
  background: linear-gradient(145deg, rgb(116, 118, 119) 15%, #3f899bf3 70%);
}

.dark_gradient {
  background: linear-gradient(145deg, rgb(139, 11, 90) 15%, #000000 70%);
}

.container {
  position: absolute;
  font-family: 'alkatra';
}
</style>
