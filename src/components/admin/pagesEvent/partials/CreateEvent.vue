<template>
  <q-dialog v-model="dialogVisible">
    <q-card style="min-width: 80vh">
      <q-card-section>
        <div class="title">{{ titleDynamic }}</div>
      </q-card-section>
      <q-card-section style="max-height: 60vh" class="scroll">
        <q-form
          ref="formStatus"
          class="q-gutter-md"
          enctype="multipart/form-data"
          @reset="onReset"
        >
          <div v-if="selectedImage" class="row col-12 flex flex-center">
            <q-img
              style="max-width: 400px; max-height: 400px"
              :src="selectedImage"
              :ratio="1"
            ></q-img>
          </div>
          <div v-if="form.image !== null" class="row col-12 flex flex-center">
            <q-img
              style="max-width: 300px; max-height: 300px"
              :src="`${companyStore.getBaseUrl}/images/${form.image}`"
              :ratio="1"
            ></q-img>
          </div>
          <div class="row col-12">
            <div class="col-xs-12 col-sm-6 col-md-6">
              <q-input
                v-model="form.title"
                class="col-xs-12 col-sm-6 col-md-6 q-pa-xs"
                outlined
                label="Nombre"
                :rules="[
                  (val) => (val && val.length > 0) || 'Este campo es requerido',
                ]"
              />
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6">
              <q-input
                v-model="form.place"
                class="col-xs-12 col-sm-6 col-md-6 q-pa-xs"
                outlined
                label="lugar"
                style="max-width: 100%"
                :rules="[
                  (val) => (val && val.length > 0) || 'Este campo es requerido',
                ]"
              ></q-input>
            </div>
          </div>
          <div class="row col-12">
            <div class="col-xs-12 col-sm-6 col-md-6">
              <q-input
                v-model="form.address"
                class="col-xs-12 col-sm-6 col-md-6 q-pa-xs"
                outlined
                label="Dirección"
                :rules="[
                  (val) => (val && val.length > 0) || 'Este campo es requerido',
                ]"
              />
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6">
              <q-input
                v-model="form.city"
                class="col-xs-12 col-sm-6 col-md-6 q-pa-xs"
                outlined
                label="Ciudad"
                style="max-width: 100%"
                :rules="[
                  (val) => (val && val.length > 0) || 'Este campo es requerido',
                ]"
              ></q-input>
            </div>
          </div>
          <div class="row col-12">
            <div class="col-xs-12 col-sm-6 col-md-6">
              <q-input
                v-model="form.start_date"
                label="Fecha inicial"
                class="col-xs-12 col-sm-6 col-md-6 q-pa-xs"
                outlined
                mask="date"
                :rules="['date']"
                @click="$refs.qstartDateProxy.show()"
              >
                <template #append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      ref="qstartDateProxy"
                      cover
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date v-model="form.start_date">
                        <div class="row items-center justify-end">
                          <q-btn
                            v-close-popup
                            label="Close"
                            color="primary"
                            flat
                          />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6">
              <q-input
                v-model="form.end_date"
                label="Fecha final"
                mask="date"
                class="col-xs-12 col-sm-6 col-md-6 q-pa-xs"
                outlined
                :rules="['date']"
                @click="$refs.qendDateProxy.show()"
              >
                <template #append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      ref="qendDateProxy"
                      cover
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date v-model="form.end_date" :options="optionsFn">
                        <div class="row items-center justify-end">
                          <q-btn
                            v-close-popup
                            label="Close"
                            color="primary"
                            flat
                          />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>
          </div>
          <div class="row col-12">
            <div class="col-12">
              <q-file
                v-model="form.imageForm"
                outlined
                class="col-12 q-pa-xs"
                label="Subir imagen"
                accept=".png, image/*"
              >
                <template #prepend>
                  <q-icon name="cloud_upload" />
                </template>
              </q-file>
            </div>
          </div>
          <div class="row col-12">
            <div class="col-xs-12 col-sm-6 col-md-6 q-pa-xs">
              <q-select
                v-model="form.type"
                :options="typeOption"
                label="Tipo"
                option-label="name"
                outlined
                map-options
                clearable
              />
            </div>

            <div class="col-xs-12 col-sm-6 col-md-6 q-pa-xs">
              <q-select
                v-model="form.status"
                :options="options"
                label="Estatus"
                option-label="name"
                outlined
                map-options
                option-value="status"
                clearable
              />
            </div>
          </div>
          <div class="row col-12">
            <div class="col-xs-12 col-sm-12 col-md-12 q-pa-xs">
              <q-input
                v-model="form.description"
                class="col-xs-12 col-sm-6 col-md-6 q-pa-xs"
                outlined
                label="Descripción"
                type="textarea"
                style="max-width: 100%"
                :rules="[
                  (val) => (val && val.length > 0) || 'Este campo es requerido',
                ]"
              ></q-input>
            </div>
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
import { computed, onMounted, ref, watch } from "vue";
import { useCompanyStore } from "stores/company-store";
import { useEventStore } from "src/stores/events-store";
import { notifyWarning } from "src/utils/notify";

const props = defineProps({
  dataUpdate: {
    type: Object,
    default: null,
  },
});
const companyStore = useCompanyStore();
const eventStore = useEventStore();
const form = ref({
  title: null,
  description: null,
  start_date: null,
  end_date: null,
  imageForm: null,
  place: null,
  address: null,
  city: null,
  status: null,
  type: null,
  image: null,
});

const options = ref([
  { status: 0, name: "Inactivo" },
  { status: 1, name: "Activo" },
]);
const typeOption = ref(["presencial", "en-linea"]);

const emit = defineEmits(["EventsDialogCreate", "updateStatus", "createEvent"]);
const formStatus = ref(null);
const status = ref(true);
const selectedImage = ref("");
onMounted(() => {
  if (props.dataUpdate.id !== undefined) {
    form.value = props.dataUpdate;
  }
});

const dialogVisible = computed({
  get() {
    return status.value;
  },
  set(value) {
    if (!value) {
      emit("EventsDialogCreate", value);
      return value;
    }
  },
});
const titleDynamic = computed({
  get() {
    return form.value.id ? "Actualizar el eventeo" : "Crear un nuevo evento";
  },
});
const buttonDynamic = computed({
  get() {
    return form.value.id ? "Actualizar" : "Agregar";
  },
});

const store = async () => {
  form.value.image =
    form.value.imageForm !== null ? form.value.imageForm : null;
  const response = await eventStore.store(form.value);
  if (response.success == true) {
    emit("createEvent");
  }
  return response;
};

const optionsFn = (date) => {
  return date >= form.value.start_date;
};
watch(
  () => form.value.imageForm,
  (newValue) => {
    const file = newValue;
    if (file) {
      selectedImage.value = URL.createObjectURL(file);
    } else {
      selectedImage.value = null;
    }
  },
  { deep: true }
);

const update = async () => {
  form.value.image = form.value.imageForm;
  const response = await eventStore.update(form.value, form.value.id);
  return response;
};
const validate = async () => {
  const success = await formStatus.value.validate();
  if (success) {
    const response = form.value.id ? await update() : await store();
    if (response.success) {
      onReset();
      dialogVisible.value = false;
    }
    return true;
  }
  notifyWarning("Por favor, ingresa correctamente los datos del formulario");
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
