
<template>
  <q-layout>
    <q-page-container class="window-height window-width row justify-center items-center container">
      <div class="column q-pa-lg">
        <div class="row">
          <q-card square class="shadow-24 col-5 col-xs-12 siz-content">
            <q-card-section style="background-color: #26A69A;">
              <h4 class="text-h5 text-white q-my-md">Bienvenido(a)</h4>

            </q-card-section>
            <q-card-section>
              <q-form class="q-px-sm q-pt-xl">
                <q-input square clearable v-model="email" type="email" lazy-rules label="Correo electronico"
                  autocomplete="current-email" :rules="rulesEmail">
                  <template v-slot:prepend>
                    <q-icon name="email" />
                  </template>
                </q-input>
                <q-input square clearable v-model="password" lazy-rules label="Contraseña" :type="passwordFieldType"
                  autocomplete="current-password" :rules="rulesPassword">
                  <template v-slot:prepend>
                    <q-icon name="lock" />
                  </template>
                  <template v-slot:append>
                    <q-icon :name="visibilityIcon" @click="switchVisibility" class="cursor-pointer" />
                  </template>
                </q-input>
              </q-form>
            </q-card-section>

            <q-card-actions class="q-px-lg">
              <q-btn unelevated size="lg" color="secondary" @click="submit" class="full-width text-white"
                label="Iniciar sesión" />
            </q-card-actions>
            <q-card-section class="text-center q-pa-sm">
              <p class="text-grey-6">¿Olvidaste la contraseña?</p>
            </q-card-section>
          </q-card>
        </div>
      </div>

    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'LoginAdmin',

  setup() {
    const email = ref('')
    const password = ref('')
    const visibility = ref(false)
    const visibilityIcon = ref('visibility')
    const passwordFieldType = ref('password')

    const submit = (() => {
      console.log('submit');
    })
    const switchVisibility = (() => {
      visibility.value = !visibility.value
      passwordFieldType.value = visibility.value ? 'text' : 'password'
      visibilityIcon.value = visibility.value ? 'visibility_off' : 'visibility'
    })
    return {
      rulesEmail: [
        val => (val && val.length > 0) || 'Por favor ingresa un correo electrónico'
      ],
      rulesPassword: [
        val => (val && val.length > 0) || 'Por favor ingresa una contraseña'
      ],
      visibility,
      visibilityIcon,
      passwordFieldType,
      password,
      email,
      switchVisibility,
      submit
    }
  }
})
</script>
<style scoped>
.container {
  background: linear-gradient(-30deg, #03a9f4 0%, #03a9b3 50%, #000000 50%, #607d8b 100%);
  animation: animate 10s linear infinite;
}

@keyframes animate {
  0% {
    filter: hue-rotate(0deg);
  }

  100% {
    filter: hue-rotate(360deg);
  }
}

@media (min-width: 410px) {
  .siz-content {
    width: 400px;
    height: 540px;
  }
}
</style>
