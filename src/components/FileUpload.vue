<template>
  <div class="file">
    <form @submit.prevent="onSubmit">
      <br />
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-5">
          <b-form-file
            v-model="file"
            :state="Boolean(file)"
            placeholder="Seleccione el documento... "
            drop-placeholder="Arrastre el archivo..."
          ></b-form-file>
        </div>
        <div class="col-md-3" style="margin: 0px; padding: 0px">
          <button class="btn btn-success">Enviar documento</button>
        </div>
      </div>
      <!-- <FormulateInput
        type="file"
        name="file"
        label="Escoja o arrestre un archivo..."
        validation="mime:application/msword"
      />      -->
    </form>
  </div>
</template>


<script>
import axios from "axios";
import { validModel } from "@/includes/functions.js";

export default {
  name: "FileUpload",
  data() {
    return {
      file: null,
      passive_voice: null,
      statistics: null,
      oraciones: null,
      data_general: [
        { label: "Gerundios", count: 0 },
        { label: "Formal", count: 0 },
        { label: "Estilo", count: 0 },
        { label: "Discursivo", count: 0 },
      ],
      flags: null,
    };
  },
  methods: {
    async onSubmit() {
      const formData = new FormData();
      formData.append("file", this.file);
      let loader = this.$loading.show({ isFullPage: true, canCancel: false });
      try {
        this.res = await axios.post(
          "http://www.redilegra.com/backend/api/FileUploadView",
          // "http://127.0.0.1:8000/api/FileUploadView",
          formData
        );
        // this.sendFeedbackModal(this.data_general);
        this.sendResToComponents(this.res.data);
        this.makeToast('Documento analizado correctamente.', 'success');
      } catch (err) {
        console.warn(err);
        this.makeToast('Error: '+err, 'danger');
      }
      loader.hide();
    },
    // sendFeedbackModal(data) {
    //   this.$root.$emit("mensaje_estadistica_modal", data);
    // },
    sendResToComponents(data) {
      // var validateData = this.validateData(data);
      this.$root.$emit("mensaje_fileupload", data);
    },
    makeToast(message, variant) {
      let title = variant == 'success' ? 'Operación exitosa' : 'Operación fallida';
      this.$bvToast.toast(message, {
        title: title,
        variant: variant,
        solid: false,
        autoHideDelay: 2000,
      })
    },
    validateData(data) {
      for (const property in data) {
        if (!validModel(data[property]) && property != "html") {
          data[property] = "";
        }
      }
      return data;
    },
  },
};
</script>