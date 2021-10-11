<template>
  <div>
    <div class="buttonContainer">
      <button class="btn btn-success" @click="sendTextEdited()">
        Enviar texto
      </button>
      <button class="btn btn-primary" @click="exportHTML()">
        Descargar archivo
      </button>
    </div>
    <div v-if="showError">
      <ErrorHtml/>
    </div>
    <div v-else>
      <quill-editor
        v-model="contentHtml"
        :options="editorOptions"
        @change="onEditorChange($event)"
        ref="myQuillEditor"
      />
    </div>
  </div>
</template>

<script>
import ErrorHtml from "../ErrorHtml.vue";
import { quillEditor } from "vue-quill-editor";
import "../../../node_modules/quill/dist/quill.snow.css";
import axios from "axios";
import { PREHTML, POSTHTML } from "@/includes/constants2.js";
import { mapActions } from "vuex";

export default {
  name: "TabEditor",
  props: ["endpoint"],
  components: {
    ErrorHtml,
    quillEditor
  },
  data() {
    return {
      showError: false,
      contentHtml: "",
      html: "",
      text: "",
      editorOptions: {
        readOnly: false,
        theme: "snow",
        placeholder: "Inserte el texto aquí...",
      },
    };
  },
  methods: {
    ...mapActions({
      saveHtmlGerundios: "saveHtmlGerundios",
      tabSelected: "saveTabSelected",
      saveOraciones: "saveOraciones",
      saveParrafos: "saveParrafos",
      savePersona: "savePersona",
      saveVozPasiva: "saveVozPasiva",
      saveConectores: "saveConectores",
      saveComplejidad: "saveComplejidad",
      saveLecturabilidad: "saveLecturabilidad",
      saveProposito: "saveProposito"
    }),
    onEditorChange({ html, text }) {
      this.html = html;
      this.text = text;
    },
    exportHTML() {
      var html2doc = PREHTML + this.html + POSTHTML;
      var source =
        "data:application/vnd.ms-word;charset=utf-8," +
        encodeURIComponent(html2doc);
      var fileDownload = document.createElement("a");
      document.body.appendChild(fileDownload);
      fileDownload.href = source;
      fileDownload.download = "document.doc";
      fileDownload.click();
      document.body.removeChild(fileDownload);
    },
    sendResToComponents(data) {
      this.$root.$emit("mensaje_showRightPanel");
      this.$root.$emit("mensaje_fileupload_new", data);
    },
    async sendTextEdited() {
      let loader = this.$loading.show({ isFullPage: true, canCancel: false });
      try {
        this.$root.$emit("mensaje_showRightPanel");
        this.html = this.html.replace(/<\/?span[^>]*>/g, "");
        const formData = new FormData();
        formData.append("html", this.html);
        formData.append("text", this.text);
        formData.append("tipo_analisis", this.endpoint);
        let res = await axios.post(
          "http://www.redilegra.com/backend/api/SendText2",
          // "http://127.0.0.1:8000/api/SendText2", // only for dev env.
          formData
        );
        this.contentHtml = res.data.tipo_analisis.html_response;
        // eslint-disable-next-line no-unused-vars
        var payload = null;
        switch (this.endpoint) {
          case "gerunds":
            this.saveHtmlGerundios(this.contentHtml, res.data.tipo_analisis.flag);
            break;
          case "oraciones":
            payload = { 'html' : this.contentHtml, 'error': res.data.tipo_analisis.flag }
            this.saveOraciones(payload);
            break;
          case "micro_paragraphs":
            payload = { 'html' : this.contentHtml, 'error': res.data.tipo_analisis.flag }
            this.saveParrafos(payload);
            break;
          case "fs_person":
            payload = { 'html' : this.contentHtml, 'error': res.data.tipo_analisis.flag }
            this.savePersona(payload);
            break;
          case "passive_voice":
            payload = { 'html' : this.contentHtml, 'error': res.data.tipo_analisis.flag }
            this.saveVozPasiva(payload);
            break;
          case "conectores":
            payload = { 'html' : this.contentHtml, 'error': res.data.tipo_analisis.flag }
            this.saveConectores(payload);
            break;
          case "sentence_complexity":
            payload = { 'html' : this.contentHtml, 'error': res.data.tipo_analisis.flag }
            this.saveComplejidad(payload);
            break;
          case "lecturabilidad_parrafo":
            payload = { 'html' : this.contentHtml, 'error': res.data.tipo_analisis.flag }
            this.saveLecturabilidad(payload);
            break;
          case "proposito":
            payload = { 'html' : this.contentHtml, 'error': res.data.tipo_analisis.flag }
            this.saveProposito(payload);
            break;
          default:
            break;
        }
        // res.data.tipo_analisis.flag.map((d) => console.log(d.label));
        // this.sendResToComponents(res.data);
      } catch (err) {
        console.warn(err);
        this.showError = true;
      }
      loader.hide();
    },
  },
};
</script>

<style>
.buttonContainer {
  justify-content: space-around;
  display: flex;
  flex-direction: row;
  margin: 2% auto;
  width: 25%;
  min-width: 280px;
}
</style>