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
      <div></div>
    </q-card-section>
    <q-card-section>
      <div class="col-12" style="min-height: 40px">
        <span class="">{{ data.date }}</span>
        <span class="float-right q-mx-xl">
          <q-btn label="See Details" rounded color="secondary" outline></q-btn>
        </span>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardProduct",

  props: ["data"],
});
</script>

<style scoped>
</style>
