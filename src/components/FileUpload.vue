<template>
  <div id="FileUpload">

    <div class="btn-bar">
      <div class="cont-btn">
        <div class="d-flex">
          <input type="file" name="file1" id="file1" class="file" />
          <input
            type="button"
            class="btn-file btn-sec"
            value="Reemplazar el documento"
          />
        </div>
        <a href="" class="btn-sec"><span class="icon-download"></span> Descarga tu texto  </a>
      </div>
      <button class="btn-main btn-disabled" type="button" disabled>
        Evaluar texto
      </button>
      <button class="btn-main" type="button" style="display: none">
        Evaluar texto
      </button>
    </div>
    
    <div class="btn-bar">
      <form @submit.prevent="onSubmit">
        <div class="cont-btn">
          <div class="d-flex">
            <b-form-file
              v-model="file"
              :state="Boolean(file)"
              placeholder="Seleccione el archivo (doc, docx, txt)"
              drop-placeholder="Arrastre el archivo (doc, docx, txt)"
              accept=".doc, .docx, .txt"
            ></b-form-file>
          </div>
        </div>
        <button class="btn-main">
          Evaluar texto
        </button>
      </form>
      <button class="btn-main" type="button" style="display: none">
        Evaluar texto
      </button>
      <button class="btn-sec" @click="exportHTML()">
        <span class="icon-download"></span> Descargar archivo
      </button>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import { mapActions } from "vuex";
import { validModel } from "@/includes/functions.js";

export default {
  name: "FileUpload",
  data() {
    return {
      file: null,
    };
  },
  methods: {
    ...mapActions([
      "saveEstadisticasGenerales",
      "saveGerundios",
      "saveOraciones",
      "saveParrafos",
      "savePersona",
      "saveVozPasiva",
      "saveConectores",
      "saveComplejidad",
      "saveLecturabilidad",
      "saveProposito",
    ]),
    async onSubmit() {
      const formData = new FormData();
      formData.append("file", this.file);
      if (!this.file) {
        this.makeToast("No se adjuntó el archivo.", "danger");
        return 0;
      }
      let extension = this.file.name.split(".")[1];
      let loader = this.$loading.show({ isFullPage: true, canCancel: false });
      try {
        if (!["docx", "doc", "txt"].includes(extension)) {
          throw new Error(
            "Archivo no soportado, utilice documentos con extensión .doc, .docx o .txt"
          );
        }
        let res = await axios.post(
          "http://www.redilegra.com/backend/api/FileUploadView",
          // "http://127.0.0.1:8000/api/FileUploadView",
          formData
        );
        console.log(res.data);
        this.$root.$emit("mensaje_showRightPanel");
        this.saveEstadisticasGenerales(res.data.statistics);
        this.saveGerundios({
          html: res.data.gerunds.html_response,
          error: res.data.gerunds.flag,
        });
        this.saveOraciones({
          html: res.data.oraciones.html_response,
          error: res.data.oraciones.flag,
        });
        this.saveParrafos({
          html: res.data.micro_paragraphs.html_response,
          error: res.data.micro_paragraphs.flag,
        });
        this.savePersona({
          html: res.data.fs_person.html_response,
          error: res.data.fs_person.flag,
        });
        this.saveVozPasiva({
          html: res.data.passive_voice.html_response,
          error: res.data.passive_voice.flag,
        });
        this.saveConectores({
          html: res.data.conectores.html_response,
          error: res.data.conectores.flag,
        });
        this.saveComplejidad({
          html: res.data.sentence_complexity.html_response,
          error: res.data.sentence_complexity.flag,
        });
        this.saveLecturabilidad({
          html: res.data.lecturabilidad_parrafo.html_response,
          error: res.data.lecturabilidad_parrafo.flag,
        });
        this.saveProposito({
          html: res.data.proposito.html_response,
          error: res.data.proposito.flag,
        });
        this.makeToast("Documento analizado correctamente.", "success");
      } catch (err) {
        console.warn(err);
        this.makeToast(err, "danger");
      } finally {
        loader.hide();
      }
    },
    makeToast(message, variant) {
      let title =
        variant == "success" ? "Operación exitosa" : "Operación fallida";
      this.$bvToast.toast(message, {
        title: title,
        variant: variant,
        solid: false,
        autoHideDelay: 2000,
      });
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
  content: "Explorar";
}
</style>