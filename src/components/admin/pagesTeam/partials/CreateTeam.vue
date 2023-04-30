<template>
  <q-dialog v-model="dialogVisible">
    <q-card style="min-width: 700px">
      <q-card-section>
        <div class="title">Crear nuveo integrante del equipo</div>
      </q-card-section>
      <q-card-section style="max-height: 50vh" class="scroll">
        <q-form ref="myForm" class="q-gutter-md" @reset="onReset">
          <div class="row col-12">
            <q-input
              v-model="form.name"
              class="col-xs-12 col-sm-6 col-md-6 q-pa-xs"
              outlined
              label="Nombre"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Este campo es requerido',
              ]"
            ></q-input>
            <q-input
              v-model="form.lastName"
              class="col-xs-12 col-sm-6 col-md-6 q-pa-xs"
              outlined
              label="Primer apellido"
              lazy-rules
              style="max-width: 100%"
              :rules="[
                (val) => (val && val.length > 0) || 'Este campo es requerido',
              ]"
            ></q-input>
          </div>
          <div class="row col-12">
            <q-input
              v-model="form.secondLastName"
              class="col-xs-12 col-sm-6 col-md-6 q-pa-xs"
              outlined
              label="Segundo apellido"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Este campo es requerido',
              ]"
            ></q-input>
            <q-input
              v-model="form.email"
              class="col-xs-12 col-sm-6 col-md-6 q-pa-xs"
              outlined
              label="Correo eléctronico"
              lazy-rules
              style="max-width: 100%"
              :rules="[
                (val) => (val && val.length > 0) || 'Este campo es requerido',
              ]"
            ></q-input>
          </div>
          <div class="row col-12">
            <q-input
              v-model="form.phoneNumber"
              class="col-xs-12 col-sm-6 col-md-6 q-pa-xs"
              outlined
              label="Número de telefono"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Este campo es requerido',
              ]"
            ></q-input>
            <q-input
              v-model="form.instagramLink"
              class="col-xs-12 col-sm-6 col-md-6 q-pa-xs"
              outlined
              label="Enlace de instagram"
              lazy-rules
              style="max-width: 100%"
              :rules="[
                (val) => (val && val.length > 0) || 'Este campo es requerido',
              ]"
            ></q-input>
          </div>
          <div class="row col-12">
            <q-input
              v-model="form.facebookLink"
              class="col-xs-12 col-sm-6 col-md-6 q-pa-xs"
              outlined
              label="Enlace de facebook"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Este campo es requerido',
              ]"
            ></q-input>
            <q-input
              v-model="form.occupation"
              class="col-xs-12 col-sm-6 col-md-6 q-pa-xs"
              outlined
              label="Descripción"
              lazy-rules
              style="max-width: 100%"
              :rules="[
                (val) => (val && val.length > 0) || 'Este campo es requerido',
              ]"
            ></q-input>
          </div>
          <div class="row col-12">
            <q-input
              v-model="form.intro"
              class="col-12"
              outlined
              clearable
              type="textarea"
              color="red-12"
              label="Descripción del integrante"
            ></q-input>
          </div>
        </q-form>
      </q-card-section>

      <q-separator></q-separator>

      <q-card-actions align="right">
        <q-btn v-close-popup flat label="Cancelar" color="dark"></q-btn>
        <q-btn
          v-close-popup
          flat
          color="secondary"
          label="Crear"
          @click="onSubmit()"
        ></q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { computed, ref } from "vue";

const emit = defineEmits(["statusDialogCreate"]);
const status = ref(true);
const form = ref({
  name: null,
  lastName: null,
  secondLastName: null,
  email: null,
  phoneNumber: null,
  instagramLink: null,
  facebookLink: null,
  intro: null,
  occupation: null,
});

const dialogVisible = computed({
  get() {
    return status.value;
  },
  set(value) {
    if (!value) {
      emit("statusDialogCreate", value);
      return value;
    }
  },
});
const onSubmit = () => {
  console.log("subbmit");
  this.$refs.myForm.validate().then((isValid) => {
    if (isValid) {
      // Todos los campos son válidos, enviar el formulario
      // ...
    } else {
      // Mostrar un mensaje de error al usuario
      this.$q.notify({
        color: "negative",
        message: "Debe llenar todos los campos requeridos",
      });
    }
  });
};
const onReset = () => {
  form.value = [];
};
</script>
<style scoped>
.title {
  position: relative;
  margin: 0;
  padding: 5px;
  font-size: 20px;
  font-weight: 700;
}
.title::before {
  content: "";
  position: absolute;
  left: 4;
  margin: 0px 20px 0px 0px;
  bottom: 0;
  height: 3.5px;
  width: 60px;
  background: linear-gradient(135deg, #71b7e6, #9b59b6);
}
</style>

