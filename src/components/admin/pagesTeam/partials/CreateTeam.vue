<template>
  <q-dialog v-model="dialogVisible">
    <q-card style="width: 800px">
      <q-card-section>
        <div class="title">{{ titleDynamic }}</div>
      </q-card-section>
      <q-card-section style="max-height: 50vh" class="scroll">
        <q-form
          ref="formTeam"
          enctype="multipart/form-data"
          class="q-gutter-md"
          @reset="onReset"
        >
          <div class="row col-12">
            <q-input
              v-model="form.name"
              class="col-xs-12 col-sm-6 col-md-6 q-pa-xs"
              outlined
              label="Nombre"
              :rules="[
                (val) => (val && val.length > 0) || 'Este campo es requerido',
              ]"
            />
            <q-input
              v-model="form.last_name"
              class="col-xs-12 col-sm-6 col-md-6 q-pa-xs"
              outlined
              label="Primer apellido"
              style="max-width: 100%"
              :rules="[
                (val) => (val && val.length > 0) || 'Este campo es requerido',
              ]"
            ></q-input>
          </div>
          <div class="row col-12">
            <q-input
              v-model="form.second_last_name"
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
              label="Correo electrónico"
              :rules="[
                (val) => (val && val.length > 0) || 'Este campo es requerido',
                (val) =>
                  /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{3,6})$/.test(val) ||
                  'Solo aceptan tipo correos',
              ]"
            ></q-input>
          </div>
          <div class="row col-12">
            <q-input
              v-model="form.phone_number"
              class="col-xs-12 col-sm-6 col-md-6 q-pa-xs"
              outlined
              mask="### ###  ####"
              label="Número de telefono"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Este campo es requerido',
              ]"
            ></q-input>
            <q-input
              v-model="form.instagram_link"
              class="col-xs-12 col-sm-6 col-md-6 q-pa-xs"
              outlined
              label="Enlace de instagram"
              lazy-rules
              style="max-width: 100%"
              :rules="[
                (val) => (val && val.length > 0) || 'Este campo es requerido',
                (val) =>
                  /(?:(?:http|https):\/\/)?(?:www\.)?(?:instagram\.com|instagr\.am)\/([A-Za-z0-9-_\.]+)?/.test(
                    val
                  ) || 'Solo aceptan rutas de instagram',
              ]"
            ></q-input>
          </div>
          <div class="row col-12">
            <q-input
              v-model="form.facebook_link"
              class="col-xs-12 col-sm-6 col-md-6 q-pa-xs"
              outlined
              label="Enlace de facebook"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Este campo es requerido',
                (val) =>
                  /(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w\-]*\/)?(?:profile.php\?id=(?=\d.*))?([\w\-]*)?/.test(
                    val
                  ) || 'Solo aceptan rutas de facebook',
              ]"
            ></q-input>
            <q-input
              v-model="form.occupation"
              class="col-xs-12 col-sm-6 col-md-6 q-pa-xs"
              outlined
              label="Ocupación"
              lazy-rules
              style="max-width: 100%"
              :rules="[
                (val) => (val && val.length > 0) || 'Este campo es requerido',
              ]"
            ></q-input>
          </div>
          <div class="row col-12">
            <q-file
              v-model="form.image"
              filled
              class="col-xs-12 col-sm-6 col-md-6 q-pa-xs"
              accept=".png,.jpge,.jpg, image/*"
            >
              <template #prepend>
                <q-icon name="cloud_upload" />
              </template>
            </q-file>
          </div>
          <div class="row col-12">
            <q-input
              v-model="form.intro"
              :rules="[
                (val) => (val && val.length > 0) || 'Este campo es requerido',
              ]"
              class="col-12"
              outlined
              clearable
              type="textarea"
              label="Descripción del integrante"
            ></q-input>
          </div>
        </q-form>
      </q-card-section>

      <q-separator></q-separator>

      <q-card-actions align="right" class="q-ma-md">
        <q-btn v-close-popup flat label="Cancelar" color="dark"></q-btn>
        <q-btn
          :label="buttonDynamic"
          type="submit"
          color="primary"
          @click="validate()"
        ></q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { notifyWarning } from "src/utils/notify";
import { computed, ref, defineEmits, onMounted } from "vue";
import { useTeamStore } from "stores/team-store";

const teamStore = useTeamStore();
const emit = defineEmits(["statusDialogCreate", "updateTeam"]);
const formTeam = ref(null);
const status = ref(true);

const props = defineProps({
  dataUpdate: {
    type: Object,
    default: null,
  },
});

onMounted(() => {
  if (props.dataUpdate.id !== undefined) {
    form.value = props.dataUpdate;
  }
});

const form = ref({
  name: null,
  last_name: null,
  second_last_name: null,
  email: null,
  phone_number: null,
  instagram_link: null,
  facebook_link: null,
  intro: null,
  occupation: null,
  image: [],
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

const titleDynamic = computed({
  get() {
    return form.value.id
      ? "Actualizar el integrante del equipo"
      : "Crear nuveo integrante del equipo";
  },
});

const buttonDynamic = computed({
  get() {
    return form.value.id ? "Actualizar" : "Crear";
  },
});
const store = async () => {
  const response = await teamStore.store(form.value);
  return response;
};

const update = async () => {
  const response = await teamStore.update(form.value, form.value.id);
  return response;
};

const validate = async () => {
  const success = await formTeam.value.validate();
  if (success) {
    const response = form.value.id ? await update() : await store();
    if (response.success) {
      onReset();
      dialogVisible.value = false;
    }
    return true;
  }
  notifyWarning("Por favor, ingresa correctamente los datos");
  return false;
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

