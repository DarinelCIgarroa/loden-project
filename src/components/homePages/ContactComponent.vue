<template>
  <q-page-container class="page flex flex-center">
    <q-card flat bordered class="my-card row col-12 no-border justify-center">
      <q-form @reset="clearForm">
        <q-card-section class="text-center col-12 section-title">
          <div class="text-h3">Contacto</div>
        </q-card-section>
        <q-card-section class="section">
          <div class="container">
            <div class="contact-info">
              <div>
                <h2>Infomación de contacto</h2>
                <ul class="info">
                  <li>
                    <span
                      ><q-icon size="md" class="img" name="face"></q-icon
                    ></span>
                    <span>Ciudad de México, 12312, 1231</span>
                  </li>
                  <li>
                    <span
                      ><q-icon size="md" class="img" name="mail"></q-icon
                    ></span>
                    <span>loden@gmail.com</span>
                  </li>
                  <li>
                    <span
                      ><q-icon size="md" class="img" name="call"></q-icon
                    ></span>
                    <span>9612365046</span>
                  </li>
                </ul>
              </div>
              <ul class="sci">
                <li>
                  <a href="#"
                    ><q-icon
                      color="white"
                      class="img"
                      size="xl"
                      name="fa-brands fa-facebook"
                    ></q-icon
                  ></a>
                </li>
                <li>
                  <a href="#"
                    ><q-icon
                      color="white"
                      class="img"
                      size="xl"
                      name="fa-brands fa-instagram"
                    ></q-icon
                  ></a>
                </li>
                <li>
                  <a href="#"
                    ><q-icon
                      color="white"
                      class="img"
                      size="xl"
                      name="fa-brands fa-twitter"
                    ></q-icon
                  ></a>
                </li>
              </ul>
            </div>
            <div class="contact-form">
              <h2>Enviar un mensaje</h2>
              <div class="form-box">
                <div class="input-box w50">
                  <q-input
                    v-model="form.full_name"
                    class="input"
                    outlined
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
                <div class="input-box w50">
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
                <div class="input-box w50">
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
                        ) || 'Solo aceptan tipo correos',
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
                <div class="input-box w50">
                  <q-select
                    v-model="form.eventId"
                    label="Evento de interes"
                    :rules="[(val) => !!val || 'Este campo es requerido']"
                    outlined
                    map-options
                    emit-value
                    option-value="id"
                    option-label="name"
                    :options="options"
                    clearable
                  />
                </div>
                <div class="input-box w100">
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
                <div class="input-box w100">
                  <q-btn
                    class="submit"
                    unelevated
                    rounded
                    type="submit"
                    color="primary"
                    label="Enviar"
                    @click="submit"
                  ></q-btn>
                </div>
              </div>
            </div>
          </div>
        </q-card-section>
      </q-form>
    </q-card>
  </q-page-container>
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
.page {
  padding: 0 !important;
  margin: 0 !important;
}
.my-card {
  width: 1400px;
  background-size: cover;
  background-position: center;
}
.section {
  display: flex;
  justify-content: center;
  align-items: center;
}

.section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
}

.container {
  position: relative;
  min-width: 1400px;
  min-height: 720px;
}

.container .contact-info {
  position: absolute;
  top: 40px;
  width: 350px;
  height: calc(100% - 80px) !important;
  background: #1c6799;
  z-index: 1;
  padding: 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.15);
}

.container .contact-info h2 {
  color: #fff;
  font-size: 24px;
  font-weight: 500;
  margin: 0;
}

.container .contact-info ul.info {
  position: relative;
  /* background-color: red; */
  margin: 10px 0;
}

.container .contact-info ul.info li {
  position: relative;
  list-style: none;
  display: flex;
  margin: 5px 0;
  cursor: pointer;
  align-items: flex-start;
}

.container .contact-info ul.info span {
  color: #fff;
  margin: 8px;
}

.container .contact-info ul.info li span:nth-child(1) {
  width: 30px;
  min-width: 30px;
}

.container .contact-info ul.info li span:nth-child(1) .img {
  max-width: 100%;
  font-size: 25px !important;
}

.container .contact-info ul.sci {
  position: relative;
  display: flex;
}

.container .contact-info ul.sci li {
  list-style: none;
  margin-right: 15px;
}

.container .contact-info ul.sci li a {
  text-decoration: none;
}

.container .contact-form {
  position: absolute;
  padding: 70px 50px;
  padding-left: 250px;
  margin-left: 150px;
  width: calc(100% - 150px);
  height: 100%;
  background: #fff;
  box-shadow: 0 50px 50px rgba(0, 0, 0, 0.25);
}

.container .contact-form h2 {
  color: #0f3959;
  font-size: 24px;
  font-weight: 500;
}

.container .contact-form .form-box {
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 10px;
}

.container .contact-form .form-box .input-box {
  position: relative;
  margin-bottom: 35px;
}

.container .contact-form .form-box .input-box.w50 {
  width: 47%;
}

.container .contact-form .form-box .input-box.w100 {
  width: 100%;
}

.container .contact-form .form-box .input-box .input {
  width: 100%;
  resize: none;
  padding: 5px 0;
  font-weight: 300;
  /* background-color: yellow; */
  color: #333;
  border: none;
  outline: none;
}

.container .contact-form .form-box .input-box span {
  position: absolute;
  left: 0;
  padding: 5px 0;
  pointer-events: none;
  font-size: 18px;
  font-weight: 300;
  transition: 0.3s;
}

.container .contact-form .form-box .input-box input:focus ~ span,
.container .contact-form .form-box .input-box input:valid ~ span {
  transform: translateY(-20px);
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 1px;
  color: #0f3959;
  font-weight: 500;
}

.container .contact-form .form-box .input-box .submit {
  position: relative !important;
  background: #0f3959 !important;
  border: none !important;
  max-width: 160px !important;
  width: 160px;
  padding: 12px !important;
}

.container .contact-form .form-box .input-box .submit:hover {
  background: #18b991;
}

@media (max-width: 1200px) {
  .container {
    width: 90%;
    min-width: auto;
    margin: 20px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
  }

  .container .contact-info {
    top: 0;
    height: 500px;
    position: relative;
    box-shadow: none;
  }

  .container .contact-form {
    position: relative;
    width: calc(100% - 350xp);
    padding-left: 0;
    margin-left: 0;
    padding: 40px;
    height: 550px;
    box-shadow: none;
  }

  @media (max-width: 1024px) {
    .container {
      width: 85%;
      min-width: auto;
      margin: 20px;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
    }

    .container .contact-info {
      top: 0;
      height: 500px;
      position: relative;
      box-shadow: none;
    }

    .container .contact-form {
      position: relative;
      width: calc(100% - 350xp);
      padding-left: 0;
      margin-left: 0;
      padding: 40px;
      height: 550px;
      box-shadow: none;
    }
  }

  @media (max-width: 991px) {
    .section:before {
      display: none;
    }

    .container {
      min-height: auto;
      display: flex;
      flex-direction: column-reverse;
    }

    .container .contact-form {
      width: 100%;
      height: auto;
    }

    .container .contact-info {
      width: 100%;
      height: auto;
      flex-direction: row;
    }

    .container .contact-info ul.sci {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media (max-width: 600px) {
    .container .contact-form {
      padding: 25px;
    }

    .container .contact-info {
      padding: 25px;
      flex-direction: column;
      align-items: flex-start;
    }

    .container .contact-info ul.sci {
      margin-top: 40px;
    }

    .container .contact-form .form-box .input-box.w50 {
      width: 100%;
    }
  }
}
</style>
