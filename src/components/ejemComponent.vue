<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form @submit.prevent="enviar">
      <q-input v-model="name" label="Username"></q-input>
      <q-input
        v-model="password"
        disable
        label="Password"
        type="password"
      ></q-input>
      <q-btn type="submit" label="Submit"></q-btn>
    </q-form>
  </div>
</template>
<script>
import { ref, watch } from "vue";
export default {
  mounted() {
    console.log("component about us");
  },
  setup() {
    const name = ref();
    //console.log(name.value);
    const enviar = () => {
      console.log(name.value);
    };
    //
    var password = ref();
    watch(name, (valornew) => {
      password.value = valornew;
      console.log(valornew + " ");
    });
    return { name, enviar, password };
  },
};
</script>

<style scoped>
/*--------------------------------------------------------------
# Counts
--------------------------------------------------------------*/
.counts {
  padding-top: 0;
}

.counts .content .count-box {
  padding: 20px 0;
  width: 100%;
}

.count-box .icon {
  display: block;
  font-size: 36px;
  float: left;
  line-height: 0;
}

.count-box span {
  font-size: 36px;
  line-height: 30px;
  display: block;
  font-weight: 700;
  color: #222222;
  margin-left: 50px;
}

.count-box p {
  padding: 15px 0 0 0;
  margin: 0 0 0 50px;
  font-family: "Raleway", sans-serif;
  font-size: 15px;
  color: #484848;
}
</style>
