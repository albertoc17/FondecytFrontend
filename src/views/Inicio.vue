<template>
  <div id="Inicio" class="inicio">
    <div class="inicioContainer">
      <div class="content-main">
        <div class="auxi">
          <div class="content">
            <h1 class="tit">¡Bienvenido a PEUMO!</h1>
            <div class="cont-file">
              <h3 class="subtit">Por favor, carga tu documento (doc, docx, txt)</h3>
              <div class="d-flex">
                <label for="file" class="btn-file btn-sec">{{ fileInputLabel }}</label>
                <input style="display: none" type="file" id="file" ref="file" value="Reemplazar el documento" v-on:change="handleFileUpload()" />
              </div>
            </div>
            <p class="sub-txt">O si prefieres, <a class="link" @click="goToDashboard">comienza escribiendo en nuestro editor <span class="arrow-r"></span></a></p>
          </div>
        </div>
      </div>
      <div class="img">
        <img src="../assets/img/inicio.png" class="vectorImg">
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import axios from "axios";
import { validModel } from "@/includes/functions.js";


export default {
  name: "Inicio",
  components: {
  },
   computed: {
    ...mapGetters({retroalimentacion: "getRetroalimentacion", fileName: "getFilename", analysisType: "getAnalysisTab"}),
    fileInputLabel: function () {
      if (this.retroalimentacion.html) return "Reemplazar el documento";
      return "Carga tu texto aquí"
    }
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
      "saveAnalysisTab"
    ]),
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      this.saveFilename(this.file.name);
      this.onSubmit();
      this.$router.push({ path: 'Dashboard' })
    },
    goToDashboard(){
      this.$router.push({ path: 'Dashboard' })
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
        this.saveAnalysisTab({endpoint: "gerunds", selected: "gerundios"});
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
    }
  }
};
</script>
<style scoped>
.inicioContainer {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>