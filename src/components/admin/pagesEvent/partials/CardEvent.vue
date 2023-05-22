<template>
  <q-card class="">
    <q-img :src="`${process.getBaseUrl}/images/${data.image}`" height="160px">
      <q-chip :class="eventActive"></q-chip>
    </q-img>
    <div></div>
    <q-card-section>
      <q-btn
        style="top: 0; right: 12px; transform: translateY(-50%)"
        size="sm"
        round
        icon="fa-solid fa-pen-to-square"
        class="bg-teal text-white absolute"
        @click="updateEvent()"
      />
    </q-card-section>

    <q-card-section>
      <div class="text-h6">
        {{ data.title }}
      </div>
      <div
        class="col-5 print-hide text-subtitle1 text-justify q-mt-sm ellipsis"
      >
        {{ data.description }}
      </div>
      <div>
        <q-item v-ripple clickable>
          <q-item-section>
            <q-item-label caption lines="2">
              <span class="text-weight-bold">{{ data.type }}</span>
            </q-item-label>
          </q-item-section>
          <q-item-section side top>
            <span>
              <q-badge
                v-if="data.status == '1'"
                outline
                color="secondary"
                label="Activo" />
              <q-badge v-else outline color="orange" label="Inactivo"
            /></span>
          </q-item-section>
        </q-item>
        <q-separator inset="item" />
      </div>
    </q-card-section>
    <q-card-section class="q-pb-xl">
      <q-card-actions align="around">
        <div class="q-gutter-lg">
          <q-badge rounded color="red">{{ data.start_date }}</q-badge>
          <span>-</span>
          <q-badge rounded>{{ data.end_date }}</q-badge>
        </div>
        <q-separator dark />
        <q-btn
          push
          round
          size="sm"
          icon="fa-solid fa-trash"
          class="bg-negative text-white q-mx-xs"
          @click="
            conformationDelete();
            eventId = data.id;
          "
        />
      </q-card-actions>
    </q-card-section>
  </q-card>

  <q-dialog v-model="confirmDelete" persistent>
    <q-card>
      <q-card-section class="row items-center">
        <q-avatar
          icon="fa-solid fa-triangle-exclamation fa-xl"
          style="background-color: #fff"
          text-color="red"
        >
        </q-avatar>
        <span class="q-ml-sm">¿Seguro que desea eliminar el registro?</span>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn v-close-popup flat label="Cancelar" color="primary"></q-btn>
        <q-btn
          v-close-popup
          flat
          label="Cofirmar"
          color="primary"
          @click="deleteEvent()"
        ></q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, computed } from "vue";
import { useCompanyStore } from "stores/company-store";
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
const process = useCompanyStore();
const eventId = ref(null);
const confirmDelete = ref(null);
const emit = defineEmits(["updateEvent", "removeEvent"]);
function updateEvent() {
  emit("updateEvent", props.data);
}
function deleteEvent() {
  emit("removeEvent", props.data);
}
const conformationDelete = () => {
  confirmDelete.value = true;
};
const eventActive = computed(() => {
  return props.data.status === 1 ? "active-class" : "inactive-class";
});
</script>

<style scoped>
.active-class {
  background-color: #32a852; /* Un verde vibrante para el fondo */
  color: #f5f5f5; /* Un color de texto claro para contrarrestar el fondo oscuro */
  animation: glowing 3s infinite;
  transition: background-color 1s ease;
}

.inactive-class {
  background-color: rgb(121, 121, 121);
}
@keyframes glowing {
  0% {
    box-shadow: 0 0 5px #32a852, 0 0 5px #32a852, 0 0 15px #32a852,
      0 0 20px #32a852;
  }
  50% {
    box-shadow: 0 0 10px #32a852, 0 0 20px #32a852, 0 0 30px #32a852,
      0 0 40px #32a852;
  }
  100% {
    box-shadow: 0 0 5px #32a852, 0 0 5px #32a852, 0 0 15px #32a852,
      0 0 20px #32a852;
  }
}
</style>
