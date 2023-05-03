<template>
  <q-page class="q-pa-sm bg-white flex flex-center">
    <div class="row q-col-gutter-sm color">
      <q-stepper
        ref="stepper"
        v-model="step"
        header-nav
        color="primary"
        animated
      >
        <q-step
          :name="1"
          title="Información básica"
          icon="shopping_cart"
          :done="step > 1"
          :header-nav="step > 1"
        >
          <div class="row">
            <div class="col-6">
              <q-item>
                <q-input
                  v-model="company.name"
                  dense
                  outlined
                  class="full-width"
                  label="Nombre *"
                />
              </q-item>
            </div>
            <div class="col-6">
              <q-item>
                <q-input
                  v-model="company.email"
                  dense
                  autogrow
                  outlined
                  class="full-width"
                  label="Correo *"
                />
              </q-item>
            </div>
            <div class="col-6">
              <q-item>
                <q-input
                  v-model="company.phone_number"
                  dense
                  outlined
                  class="full-width"
                  label="Número de teléfono *"
                />
              </q-item>
            </div>
            <div class="col-6">
              <q-item>
                <input type="file" class="form-control" @change="onChange" />
                <!-- <q-input
                  v-model="company.logo"
                  type="file"
                  outlined
                  dense
                  class="full-width"
                  accept=".jpg, png, image/*"
                  hint="Selecciona el logo"
                  @change="selectFile($event)"
                ></q-input> -->
              </q-item>
            </div>
          </div>

          <q-stepper-navigation>
            <q-btn
              rounded
              class="float-right q-mr-md q-mb-md"
              color="primary"
              label="Next"
              @click="
                () => {
                  done1 = true;
                  step = 2;
                }
              "
            />
          </q-stepper-navigation>
        </q-step>

        <q-step
          :name="2"
          title="Dirección"
          icon="fa-solid fa-location-dot"
          :done="step > 2"
          :header-nav="step > 2"
        >
          <div class="row">
            <div class="col-6">
              <q-item>
                <q-input
                  v-model="company.city"
                  dense
                  outlined
                  class="full-width"
                  label="Ciudad *"
                />
              </q-item>
            </div>
            <div class="col-6">
              <q-item>
                <q-input
                  v-model="company.state"
                  dense
                  outlined
                  class="full-width"
                  label="Estado *"
                />
              </q-item>
            </div>
            <div class="col-6">
              <q-item>
                <q-input
                  v-model="company.zip_code"
                  dense
                  autogrow
                  outlined
                  class="full-width"
                  label="Código postal *"
                />
              </q-item>
            </div>
            <div class="col-6">
              <q-item>
                <q-input
                  v-model="company.country"
                  dense
                  autogrow
                  outlined
                  class="full-width"
                  label="País"
                />
              </q-item>
            </div>
            <div class="col-6">
              <q-item>
                <q-input
                  v-model="company.address"
                  dense
                  autogrow
                  outlined
                  class="full-width"
                  label="Dirección"
                />
              </q-item>
            </div>
            <div class="col-12 text-right">
              <q-btn
                rounded
                class="float-right q-mr-md q-mb-md q-ml-md q-mt-sm"
                color="primary"
                label="Guardar"
                @click="storeCompany()"
              />
            </div>
          </div>
        </q-step>
      </q-stepper>
    </div>
  </q-page>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useCompanyStore } from "stores/company-store";

const companyStore = useCompanyStore();

const step = ref(1);
const company = ref({
  name: null,
  address: null,
  country: null,
  state: null,
  zip_code: null,
  city: null,
  phone_number: null,
  email: null,
  logo: null,
});
onMounted(() => {
  getCompany();
});
const onChange = (event) => {
  company.value.logo = event.target.files[0];
};
const getCompany = async () => {
  await companyStore.getDataCompany();
  company.value = companyStore.getCompany;
};
const storeCompany = async () => {
  let data = new FormData();
  data.append("image", company.value.logo);
  await companyStore.store(data);
};
</script>

<style scoped>
.color {
  background-color: aquamarine !important;
  min-height: 80vh;
}
</style>
