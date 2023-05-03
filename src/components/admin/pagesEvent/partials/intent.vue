<template>
  <q-dialog v-model="dialogVisible">
    <div>
      <q-input v-model="nombre" label="Nombre" />
      <q-input v-model="descripcion" label="Descripción" />
      <q-uploader
        v-model="files"
        url="http://tu-api.com/subir-imagen"
        :headers="{ 'Content-Type': 'multipart/form-data' }"
        :upload-factory="uploadFactory"
        :auto-upload="false"
      />
      <q-btn label="Subir" @click="subirImagen" />
    </div>
  </q-dialog>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      nombre: "",
      descripcion: "",
      files: [],
    };
  },
  methods: {
    subirImagen() {
      const formData = new FormData();
      formData.append("nombre", this.nombre);
      formData.append("descripcion", this.descripcion);
      formData.append("imagen", this.files[0]);

      axios
        .post("http://tu-api.com/subir-imagen", formData)
        .then((respuesta) => {
          console.log(respuesta);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    uploadFactory(upload) {
      upload.on("progress", (event) => {
        console.log(`Subida: ${event.percent}%`);
      });
      upload.send();
    },
  },
};
</script>
