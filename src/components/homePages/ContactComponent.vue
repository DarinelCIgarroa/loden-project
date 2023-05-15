<template>
  <q-layout>
    <q-page-container class="flex flex-center">
      <q-card flat>
        <q-card-section class="text-center col-12 section-title">
          <div class="text-h3">Contacto</div>
        </q-card-section>
        <q-card-section class="row col-12 container">
          <div
            class="col-xs-12 col-sm-12 col-md-6 q-pa-md contact-info"
            color="primary"
          >
            <h3 class="text-white">Infomación de contacto</h3>
            <q-list class="flex flex-center">
              <q-item class="q-my-sm">
                <q-icon
                  name="fa-solid fa-location-dot"
                  color="white"
                  size="3em"
                ></q-icon>
                <q-item-section>
                  <q-item-label class="label-info text-white q-ml-md"
                    >Fraccionamiento las flores calle orquidea Manzana 9, lote
                    8</q-item-label
                  >
                  <q-item-label
                    class="text-white"
                    style="font-size: 14px"
                    caption
                    lines="1"
                    >Direccion</q-item-label
                  >
                </q-item-section>
              </q-item>
              <q-item class="q-my-sm">
                <q-icon
                  name="fa-solid fa-envelope"
                  color="white"
                  size="3em"
                ></q-icon>
                <q-item-section>
                  <q-item-label class="label-info text-white q-ml-md"
                    >Fraccionamiento las flores calle orquidea Manzana 9, lote
                    8</q-item-label
                  >
                  <q-item-label
                    class="text-white"
                    style="font-size: 14px"
                    caption
                    lines="1"
                    >Direccion</q-item-label
                  >
                </q-item-section>
              </q-item>
              <q-item class="q-my-sm">
                <q-icon
                  name="fa-solid fa-phone"
                  color="white"
                  size="3em"
                ></q-icon>
                <q-item-section>
                  <q-item-label class="label-info text-white q-ml-md"
                    >Fraccionamiento las flores calle orquidea Manzana 9, lote
                    8</q-item-label
                  >
                  <q-item-label
                    class="text-white"
                    style="font-size: 14px"
                    caption
                    lines="1"
                    >Direccion</q-item-label
                  >
                </q-item-section>
              </q-item>
            </q-list>
            <div class="q-gutter-x-sm q-my-xl">
              <q-icon
                class="q-mx-md"
                name="fa-brands fa-facebook"
                color="white"
                size="3.5em"
              ></q-icon>
              <q-icon
                class="q-mx-md"
                name="fa-brands fa-instagram"
                color="white"
                size="3.5em"
              ></q-icon>
              <q-icon
                class="q-mx-md"
                name="fa-brands fa-twitter"
                color="white"
                size="3.5em"
              ></q-icon>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6 contact-form">
            <h2>Enviar un mensaje</h2>
            <div class="row col-12 form-box">
              <div class="content-form">
                <div class="col-xs-12 col-sm-12 col-md-12 input-box w50">
                  <q-input
                    v-model="form.full_name"
                    class="input"
                    label="Nombre completo"
                    :rules="[
                      (val) =>
                        /^([a-zA-ZÁÉÍÚÓáéíóúñÑ] {0,1})+[a-zA-ZÁÉÍÚÓáéíóúñÑ]*$/.test(
                          val
                        ) || 'Solo acepta texto y 1 espacio',
                      (val) =>
                        (val && val.length > 0) || 'Este campo es requerido',
                    ]"
                  >
                    <template #prepend>
                      <q-icon
                        class="q-mx-sm"
                        name="fa-regular fa-user"
                      ></q-icon>
                    </template>
                  </q-input>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-12 input-box w50">
                  <q-input
                    v-model="form.phone_number"
                    class="input"
                    label="Número de teléfono"
                    mask="### ###  ####"
                    :rules="[
                      (val) =>
                        (val && val.length > 0) || 'Este campo es requerido',
                    ]"
                  >
                    <template #prepend>
                      <q-icon class="q-mx-sm" name="phone_iphone"></q-icon>
                    </template>
                  </q-input>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-12 input-box w50">
                  <q-input
                    v-model="form.mail"
                    class="input"
                    label="Correo electrónico"
                    :rules="[
                      (val) =>
                        (val && val.length > 0) || 'Este campo es requerido',
                      (val) =>
                        /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{3,6})$/.test(
                          val
                        ) || 'Correo electrónico no válido',
                    ]"
                  >
                    <template #prepend>
                      <q-icon
                        class="q-mx-sm"
                        name="fa-regular fa-envelope"
                      ></q-icon>
                    </template>
                  </q-input>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-12 input-box w50">
                  <q-select
                    v-model="form.eventId"
                    label="Evento de interes"
                    :rules="[(val) => !!val || 'Este campo es requerido']"
                    map-options
                    emit-value
                    option-value="id"
                    option-label="name"
                    :options="options"
                    clearable
                  />
                </div>
                <div class="col-xs-12 col-sm-12 col-md-12 input-box w100">
                  <q-input
                    v-model="form.message"
                    filled
                    clearable
                    type="textarea"
                    :rules="[
                      (val) =>
                        (val && val.length > 0) || 'Este campo es requerido',
                      (val) =>
                        /^([A-Za-z0-9áÁéÉíÍóÓúÚñ#./,] {0,1})+[A-Za-z0-9áÁéÉíÍóÓúÚñ#./,]*$/.test(
                          val
                        ) || 'Solo aceptan tipo correos',
                    ]"
                    label="Envía un mensaje"
                  ></q-input>
                </div>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-12">
                <q-btn
                  style="min-width: 150px"
                  class="submit"
                  unelevated
                  rounded
                  type="submit"
                  color="primary"
                  label="Enviar"
                  size="md"
                  @click="submit"
                ></q-btn>
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-page-container>
  </q-layout>
</template>
<script setup>
import { reactive, ref, onMounted } from "vue";
import { event } from "stores/event";
import * as serviceEmail from "src/services/HomePage/emailServices.js";
import * as serviceEvent from "src/services/HomePage/eventService.js";
import { notifySuccess, notifyError } from "src/utils/notify.js";
const options = ref([]);
onMounted(() => {
  getEvents();
  allEvents();
});
const newEvents = event();

const form = reactive({
  full_name: null,
  phone_number: null,
  mail: null,
  event_id: null,
  message: null,
});
const submit = async () => {
  try {
    const response = await serviceEmail.submitEmail(form);
    if (response.success) {
      notifySuccess(response.success.message);
      clearForm();
      return true;
    }
    notifyError(response.data.message);
  } catch (error) {
    for (const key in error.response.data.errors) {
      error.response.data.errors[key].forEach((errorMessage) => {
        notifyError(errorMessage);
      });
    }
  }
};
const clearForm = () => {
  form.full_name = "";
  form.phone_number = "";
  form.mail = "";
  form.event_id = "";
  form.message = "";
};
const getEvents = async () => {
  const response = await serviceEvent.getEvent();
  options.value = response.events;
};
const allEvents = async () => {
  const value = await serviceEvent.getEvents();
  newEvents.setevents(value);
};
</script>

<style scoped>
.q-layout {
  min-height: auto !important;
  padding: 20px;
}
.page {
  padding: 10px;
}
.my-card {
  width: 1250px;
  background-size: cover;
  background-position: center;
}
.container {
  background-color: #ffffff;
  position: relative;
  width: 1250px;
  min-height: 550px;
  display: flex;
}
.contact-info {
  position: absolute;
  top: 40px;
  width: 320px;
  /* margin-left: -15px; */
  height: calc(100% - 80px) !important;
  background: #1c6799;
  z-index: 1;
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.15);
}
.contact-info h3 {
  font-size: 25px;
}
.label-info {
  font-size: 16px;
}
.contact-form {
  padding: 70px 50px;
  padding-left: 250px;
  margin-left: 150px;
  width: calc(100% - 145px);
  height: 100%;
  background: #fff;
  /* box-shadow: 0 50px 50px rgba(0, 0, 0, 0.25); */
}
.contact-form h2 {
  font-size: 30px;
}
.content-form {
  min-width: 100%;
}
/* @media (max-width: 600px) {
  .contact-info {
    position: relative;
    top: 0px;
    width: 100%;
  }
  .contact-info h2 {
    font-size: 25px;
  }
  .contact-form {
    padding: 70px 50px;
    margin-left: 0px;
    width: 100%;
    padding: 25px;
  }
  .contact-form h2 {
    font-size: 30px;
  }
  .contact-info .label-info {
    font-size: 12px !important;
  }
} */
@media (max-width: 600px) {
  .container {
    flex-direction: column-reverse;
    width: auto;
  }
  .content-form {
    min-width: 100%;
  }
  .contact-info {
    position: relative;
    top: 0px;
    width: 60%;
  }
  .contact-info h2 {
    font-size: 25px;
  }
  .contact-form {
    padding: 70px 50px;
    margin-left: 0px;
    width: 100%;
    padding: 25px;
  }
  .contact-form h2 {
    font-size: 30px;
  }
  .contact-info .label-info {
    font-size: 12px !important;
  }
}
@media (max-width: 720px) {
  .container {
    flex-direction: column-reverse;
  }
  .contact-info {
    position: relative;
    top: 0px;
    width: 100%;
  }
  .contact-info h2 {
    font-size: 25px;
  }
  .contact-form {
    padding: 70px 50px;
    margin-left: 0px;
    width: 100%;
    padding: 25px;
  }
  .contact-form h2 {
    font-size: 30px;
  }
  .contact-info .label-info {
    font-size: 12px !important;
  }
}
</style>
