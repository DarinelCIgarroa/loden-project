
<template>
  <q-layout>
    <q-page-container
      class="window-height window-width row justify-center items-center container"
    >
      <div class="column q-pa-lg">
        <div class="row">
          <q-card square class="shadow-24 col-5 col-xs-12 siz-content">
            <q-card-section style="background-color: #26a69a">
              <h4 class="text-h5 text-white q-my-md">Bienvenido(a)</h4>
            </q-card-section>
            <q-card-section>
              <q-form class="q-px-sm q-pt-xl">
                <q-input
                  square
                  clearable
                  v-model="form.email"
                  type="email"
                  lazy-rules
                  label="Correo electronico"
                  autocomplete="current-email"
                  :rules="rulesEmail"
                >
                  <template #prepend>
                    <q-icon name="email" />
                  </template>
                </q-input>
                <q-input
                  square
                  clearable
                  v-model="form.password"
                  lazy-rules
                  label="Contraseña"
                  :type="passwordFieldType"
                  autocomplete="current-password"
                  :rules="rulesPassword"
                >
                  <template #prepend>
                    <q-icon name="lock" />
                  </template>
                  <template #append>
                    <q-icon
                      :name="visibilityIcon"
                      @click="switchVisibility"
                      class="cursor-pointer"
                    />
                  </template>
                </q-input>
              </q-form>
            </q-card-section>

            <q-card-actions class="q-px-lg">
              <q-btn
                unelevated
                size="lg"
                color="secondary"
                @click="submit"
                class="full-width text-white"
                label="Iniciar sesión"
              />
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
import { defineComponent, reactive, ref } from "vue";
import { userStore } from "../../stores/userStore";

export default defineComponent({
  name: "LoginAdmin",

  setup() {
    // const userStore = userStore();
    const form = reactive({
      email: "",
      password: "",
    });

    const visibility = ref(false);
    const passwordFieldType = ref("password");
    const visibilityIcon = ref("visibility");

    const submit = async () => {
      await userStore().getSanctumCookie;
    };

    const switchVisibility = () => {
      visibility.value = !visibility.value;
      passwordFieldType.value = visibility.value ? "text" : "password";
      visibilityIcon.value = visibility.value ? "visibility_off" : "visibility";
    };

    return {
      rulesEmail: [
        (val) =>
          (val && val.length > 0) || "Por favor ingresa un correo electrónico",
      ],
      rulesPassword: [
        (val) => (val && val.length > 0) || "Por favor ingresa una contraseña",
      ],
      form,
      visibilityIcon,
      passwordFieldType,
      switchVisibility,
      submit,
    };
  },
});
</script>
<style scoped>
.container {
  background: linear-gradient(
    -30deg,
    #03a9f4 0%,
    #03a9b3 50%,
    #000000 50%,
    #607d8b 100%
  );
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

@media (min-width: 485px) {
  .siz-content {
    width: 400px;
    height: 540px;
  }
}
</style>
