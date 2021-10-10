<template>
  <div class="file">
    <form @submit.prevent="onSubmit">
      <br />
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <b-form-file
            v-model="file"
            :state="Boolean(file)"
            placeholder="Seleccione el archivo (doc, docx, txt)"
            drop-placeholder="Arrastre el archivo (doc, docx, txt)"
            accept=".doc, .docx, .txt"
          ></b-form-file>
        </div>
        <div class="col-md-3" style="margin: 0px; padding: 0px">
          <button class="btn btn-success">Enviar documento</button>
        </div>
      </div>
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
      let extension = this.file.name.split('.')[1];
      let loader = this.$loading.show({ isFullPage: true, canCancel: false });
      try {
        if (!(['docx', 'doc', 'txt'].includes(extension))) {
          throw new Error('Archivo no soportado, utilice documentos de extensión .docx o .txt');
        }
        let res = await axios.post(
          "http://www.redilegra.com/backend/api/FileUploadView",
          //  "http://127.0.0.1:8000/api/FileUploadView",
          formData
        );
        console.log(res.data);
        // this.sendResToComponents(res.data);
        // this.emitInfo(this.data_general);
        this.makeToast('Documento analizado correctamente.', 'success');
      } catch (err) {
        console.warn(err);
        this.makeToast(err, 'danger');
      } finally {
        loader.hide();
      }
    },
    // emitInfo(data) {
    //   this.$root.$emit("infoAnalisisGeneral", data);
    // },
    sendResToComponents(data) {
      this.$root.$emit("mensaje_showRightPanel");
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
<style>
.custom-file-input:lang(es) ~ .custom-file-label::after {
  content: 'Explorar';
}
</style>