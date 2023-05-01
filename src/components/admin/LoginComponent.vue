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
                  v-model="form.email"
                  square
                  clearable
                  type="email"
                  lazy-rules
                  label="Correo electronico"
                  autocomplete="current-email"
                  :rules="[(val) => !!val || 'El campo es requerido']"
                >
                  <template #prepend>
                    <q-icon name="email" />
                  </template>
                </q-input>
                <q-input
                  v-model="form.password"
                  square
                  clearable
                  lazy-rules
                  label="Contraseña"
                  :type="passwordFieldType"
                  autocomplete="current-password"
                  :rules="[(val) => !!val || 'El campo es requerido']"
                >
                  <template #prepend>
                    <q-icon name="lock" />
                  </template>
                  <template #append>
                    <q-icon
                      :name="visibilityIcon"
                      class="cursor-pointer"
                      @click="switchVisibility"
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
                class="full-width text-white"
                label="Iniciar sesión"
                @click="submit"
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

<script setup>
import { user } from "src/stores/user-store";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const store = user();
//const newevent = event();
const form = reactive({
  email: "",
  password: "",
});

const visibility = ref(false);
const passwordFieldType = ref("password");
const visibilityIcon = ref("visibility");

const switchVisibility = () => {
  visibility.value = !visibility.value;
  passwordFieldType.value = visibility.value ? "text" : "password";
  visibilityIcon.value = visibility.value ? "visibility_off" : "visibility";
};

const submit = async () => {
  await store.getSanctumCookie();
  const response = await store.login(form);
  store.setUser(response);
  router.push("/admin/dashboard");
};
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
