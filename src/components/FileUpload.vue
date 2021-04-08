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
        this.text = await axios.post(
          "http://redilegra.com/backend/api/FileUploadView",
          formData
        );
        // this.sendFeedbackModal(this.data_general);
        // this.passive_voice = JSON.parse(this.text.data.passive_voice);
        // this.statistics = JSON.parse(this.text.data.statistics);
        this.sendText(this.text.data);
        loader.hide();
      } catch (err) {
        console.warn(err);
        loader.hide();
      }
    },
    // sendFeedbackModal(data) {
    //   this.$root.$emit("mensaje_estadistica_modal", data);
    // },
    sendText(data) {
      this.$root.$emit("mensaje_fileupload", data);
    },
  },
};
</script>

