<template>
  <div id="FileHandler">
    <div class="btn-bar">
      <div class="cont-btn">
        <div class="d-flex">
          <label for="file" class="btn-file btn-sec">{{
            fileInputLabel
          }}</label>
          <input
            style="display: none"
            type="file"
            id="file"
            ref="file"
            value="Reemplazar el documento"
            v-on:change="handleFileUpload()"
          />
        </div>
        <button class="btn-sec" @click="exportHTML()">
          <span class="icon-download"></span> Descarga tu texto
        </button>
      </div>
      <button class="btn-main" type="button" v-on:click="sendEditorText()">
        Evaluar texto
      </button>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import { mapActions, mapGetters } from "vuex";
import { PREHTML, POSTHTML } from "@/includes/constants.js";

export default {
  name: "FileHandler",
  data() {
    return {
      file: null,
    };
  },
  computed: {
    ...mapGetters({
      retroalimentacion: "getRetroalimentacion",
      fileName: "getFilename",
      analysisType: "getAnalysisTab",
      textoEditor: "getTextoEditor",
    }),
    fileInputLabel: function () {
      if (this.retroalimentacion.html) return "Reemplazar el documento";
      return "Carga tu texto aquí";
    },
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
      "saveFilename",
      "saveAnalisisPantalla",
    ]),
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      this.saveFilename(this.file.name);
      this.onSubmit();
    },
    async onSubmit() {
      const formData = new FormData();
      formData.append("file", this.file);
      if (!this.file) {
        this.mostrarToast("No se adjuntó el archivo.", "danger");
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
        this.saveTodo(res.data);
        this.mostrarToast("Documento analizado correctamente.", "success");
      } catch (err) {
        console.warn(err);
        this.mostrarToast(err, "danger");
      } finally {
        loader.hide();
      }
    },
    async sendEditorText() {
      let loader = this.$loading.show({ isFullPage: true, canCancel: false });
      try {
        const formData = new FormData();
        formData.append(
          "html",
          this.retroalimentacion.html.replace(/<\/?span[^>]*>/g, "")
        );
        formData.append("text", this.textoEditor);
        let res = await axios.post(
          "http://www.redilegra.com/backend/api/SendText",
          // "http://127.0.0.1:8000/api/SendText", // only for dev env.
          formData
        );
        console.log(res.data);
        this.saveTodo(res.data);
        this.mostrarToast("Documento analizado correctamente.", "success");
      } catch (err) {
        console.warn(err);
        this.showError = true;
      }
      loader.hide();
    },
    saveTodo(data) {
      this.saveEstadisticasGenerales(data.statistics);
      this.saveGerundios({
        html: data.gerunds.html_response,
        error: data.gerunds.flag,
      });
      this.saveOraciones({
        html: data.oraciones.html_response,
        error: data.oraciones.flag,
      });
      this.saveParrafos({
        html: data.micro_paragraphs.html_response,
        error: data.micro_paragraphs.flag,
      });
      this.savePersona({
        html: data.fs_person.html_response,
        error: data.fs_person.flag,
      });
      this.saveVozPasiva({
        html: data.passive_voice.html_response,
        error: data.passive_voice.flag,
      });
      this.saveConectores({
        html: data.conectores.html_response,
        error: data.conectores.flag,
      });
      this.saveComplejidad({
        html: data.sentence_complexity.html_response,
        error: data.sentence_complexity.flag,
      });
      this.saveLecturabilidad({
        html: data.lecturabilidad_parrafo.html_response,
        error: data.lecturabilidad_parrafo.flag,
      });
      this.saveProposito({
        html: data.proposito.html_response,
        error: data.proposito.flag,
      });
      this.saveAnalisisPantalla({ endpoint: "gerunds", selected: "gerundios" });
    },
    exportHTML() {
      if (this.retroalimentacion.html === null) {
        this.mostrarToast("No se adjuntó el archivo.", "danger");
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
    mostrarToast(message, variant) {
      let title =
        variant == "success" ? "Operación exitosa" : "Operación fallida";
      this.$bvToast.toast(message, {
        title: title,
        variant: variant,
        solid: false,
        autoHideDelay: 2000,
      });
    },
  },
};

// this.saveAnalisisPantalla(this.endpoint);
// const payload = {
//   html: res.data.tipo_analisis.html_response,
//   error: res.data.tipo_analisis.flag,
// };
// switch (this.endpoint) {
//   case "gerunds":
//     this.saveGerundios(payload);
//     break;
//   case "oraciones":
//     this.saveOraciones(payload);
//     break;
//   case "micro_paragraphs":
//     this.saveParrafos(payload);
//     break;
//   case "fs_person":
//     this.savePersona(payload);
//     break;
//   case "passive_voice":
//     this.saveVozPasiva(payload);
//     break;
//   case "conectores":
//     this.saveConectores(payload);
//     break;
//   case "sentence_complexity":
//     this.saveComplejidad(payload);
//     break;
//   case "lecturabilidad_parrafo":
//     this.saveLecturabilidad(payload);
//     break;
//   case "proposito":
//     this.saveProposito(payload);
//     break;
//   default:
//     break;
// }
</script>
