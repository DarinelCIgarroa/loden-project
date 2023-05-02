<template>
  <q-dialog v-model="dialogVisible">
    <q-card style="min-width: 700px">
      <q-card-section>
        <div class="title">{{ titleDynamic }}</div>
      </q-card-section>
      <q-card-section style="max-height: 50vh" class="scroll">
        <q-form
          ref="formStatus"
          class="q-gutter-md"
          enctype="multipart/form-data"
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
          <div class="row col-12">
            <q-input
              v-model="form.address"
              class="col-xs-12 col-sm-6 col-md-6 q-pa-xs"
              outlined
              label="Dirección"
              :rules="[
                (val) => (val && val.length > 0) || 'Este campo es requerido',
              ]"
            />
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
          <div class="row col-12">
            <div class="q-pa-md col-xs-12 col-sm-6 col-md-6 q-pa-xs">
              <q-input
                v-model="form.start_date"
                label="Fecha inicial"
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
            <div class="q-pa-md col-xs-12 col-sm-6 col-md-6 q-pa-xs">
              <q-input
                v-model="form.end_date"
                label="Fecha final"
                mask="date"
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
            <q-file
              v-model="form.image"
              class="col-xs-12 col-sm-6 col-md-6 q-pa-xs"
              accept=".png, image/*"
            >
              <template #prepend>
                <q-icon name="cloud_upload" />
              </template>
            </q-file>

            <div class="q-gutter-md col-xs-12 col-sm-6 col-md-6 q-pa-xs">
              <q-select
                v-model="form.status"
                :options="options"
                label="Estatus"
                option-label="name"
                outlined
                map-options
                option-value="code"
                clearable
              />
            </div>
          </div>
          <div class="row col-12">
            <div class="q-gutter-md col-xs-12 col-sm-6 col-md-6 q-pa-xs">
              <q-select
                v-model="form.tipe"
                :options="typeOption"
                label="Tipo"
                option-label="name"
                outlined
                map-options
                option-value="code"
                clearable
              />
            </div>
          </div>
          <div class="row col-12">
            <div class="q-gutter-md col-xs-12 col-sm-12 col-md-12 q-pa-xs">
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
import { computed, defineEmits, onMounted, ref } from "vue";
import { useEventStore } from "src/stores/events-store";
import { notifyWarning } from "src/utils/notify";

const props = defineProps({
  dataUpdate: {
    type: Object,
    default: null,
  },
});

const options = ref([
  { code: 0, name: "inactivo" },
  { code: 1, name: "Activo" },
]);
const typeOption = ref(["Presencial", "En linea"]);

const eventStore = useEventStore();
const emit = defineEmits(["EventsDialogCreate", "updateStatus"]);
const formStatus = ref(null);
const status = ref(true);
//para menejo de fechas
const optionsFn = (date) => {
  return date >= form.value.start_date;
};

onMounted(() => {
  if (props.dataUpdate.id !== undefined) {
    form.value = props.dataUpdate;
  }
});
const form = ref({
  name: null, //
  description: null,
  start_date: null, //
  end_date: null, //
  place: null, //
  address: null,
  city: null,
  status: null, //
  tipe: null,
  image: null,
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
  const response = await eventStore.store(form.value);
  console.log(response);
  return response;
};

const update = async () => {
  const response = await eventStore.update(form.value, form.value.id);
  return response;
};
const validate = async () => {
  const success = await formStatus.value.validate();
  if (success) {
    const response = form.value.id ? update() : await store();
    if (response.success) {
      onReset();
      dialogVisible.value = false;
    }
    return true;
  }
  notifyWarning();
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
