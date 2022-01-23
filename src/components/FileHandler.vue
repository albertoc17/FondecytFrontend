<template>
  <div id="FileHandler">
    <div class="btn-bar">
      <div class="cont-btn">
        <div class="d-flex">
          <label for="file" class="btn-file btn-sec">Reemplazar el documento</label>
          <input style="display: none"  type="file" id="file" ref="file" value="Reemplazar el documento" v-on:change="handleFileUpload()" />
        </div>
        <button class="btn-sec" @click="exportHTML()"><span class="icon-download" ></span> Descarga tu texto  </button>
      </div>
      <button class="btn-main" type="button" v-on:click="onSubmit()">
        Evaluar texto
      </button>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import { mapActions, mapGetters } from "vuex";
import { validModel } from "@/includes/functions.js";
import { PREHTML, POSTHTML } from "@/includes/constants.js";

export default {
  name: "FileUpload",
  data() {
    return {
      file: null,
    };
  },
  computed: {
    ...mapGetters({retroalimentacion: "getRetroalimentacion", fileName: "getFilename", analysisType: "getAnalysisTab"})
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
      "saveFilename"
    ]),
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      console.log(this.file.name);
      console.log("handlerFile", this.file )
      this.saveFilename(this.file.name)
    },
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
    exportHTML() {
      if(this.retroalimentacion.html === null){
        this.makeToast("No se adjuntó el archivo.", "danger");
        return;
      }
      var html2doc = PREHTML + this.retroalimentacion.html + POSTHTML;
      var source =
        "data:application/vnd.ms-word;charset=utf-8," +
        encodeURIComponent(html2doc);
      var fileDownload = document.createElement("a");
      document.body.appendChild(fileDownload);
      fileDownload.href = source;
      fileDownload.download = `${this.fileName}-${this.analysisType}-corregido.doc`;
      fileDownload.click();
      document.body.removeChild(fileDownload);
    },
  },
};
</script>

<style  scoped>

</style>>
