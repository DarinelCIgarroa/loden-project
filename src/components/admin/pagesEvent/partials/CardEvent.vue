<template>
  <q-card class="">
    <q-img src="src/statics/images/inPerson44.jpg" height="160px">
      <q-chip
        v-if="data.chip"
        :class="data.chip_class"
        :color="data.chip_color"
        :label="data.chip"
      ></q-chip>
    </q-img>

    <q-card-section>
      <q-btn
        fab
        color="teal-10"
        icon="fas fa-eye"
        padding="sm"
        class="absolute"
        style="top: 0; right: 12px; transform: translateY(-50%)"
      />
    </q-card-section>

    <q-card-section>
      <div class="text-h6">
        {{ data.title }}
      </div>
      <div class="text-subtitle1 text-justify q-mt-sm">
        {{ data.caption }}
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
            conformationDelet();
            eventId = data.id;
          "
        />
      </q-card-actions>

    <q-card-section>
      <div class="col-12" style="min-height: 40px">
        <span class="">{{ data.date }}</span>
        <span class="float-right q-mx-xl">
          <q-btn label="See Details" rounded color="secondary" outline></q-btn>
        </span>
      </div>

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
import { defineProps, ref } from "vue";

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardProduct",

  props: ["data"],
});

const eventId = ref(null);
const confirmDelete = ref(null);
const emit = defineEmits(["updateEvent", "removeEvent"]);
function updateEvent() {
  ///console.log("ediatr", props.data);
  emit("updateEvent", props.data);
}
function deleteEvent() {
  emit("removeEvent", props.data);
}
const conformationDelet = () => {
  confirmDelete.value = true;
};

</script>

<style scoped></style>
