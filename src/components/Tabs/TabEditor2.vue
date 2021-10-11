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
        v-model="getRetroalimentacion.html"
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
import { PREHTML, POSTHTML } from "@/includes/constants.js";
import { mapActions, mapGetters } from "vuex";

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
      html: "",
      text: "",
      editorOptions: {
        readOnly: false,
        theme: "snow",
        placeholder: "Inserte el texto aquí...",
      },
    };
  },
  computed: {
    ...mapGetters(["getRetroalimentacion"]),
  },
  methods: {
    ...mapActions([
      "saveGerundios",
      "saveOraciones",
      "saveParrafos",
      "savePersona",
      "saveVozPasiva",
      "saveConectores",
      "saveComplejidad",
      "saveLecturabilidad",
      "saveProposito",
      "saveSelectedTab"
    ]),
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
    async sendTextEdited() {
      let loader = this.$loading.show({ isFullPage: true, canCancel: false });
      try {
        //this.$root.$emit("mensaje_showRightPanel");
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
        this.$root.$emit("mensaje_showRightPanel");
        console.log(res.data.tipo_analisis.flag);
        this.saveSelectedTab(this.endpoint);
        const payload = { 'html' : res.data.tipo_analisis.html_response, 'error': res.data.tipo_analisis.flag }
        switch (this.endpoint) {
          case "gerunds":
            this.saveGerundios(payload);
            break;
          case "oraciones":
            this.saveOraciones(payload);
            break;
          case "micro_paragraphs":
            this.saveParrafos(payload);
            break;
          case "fs_person":
            this.savePersona(payload);
            break;
          case "passive_voice":
            this.saveVozPasiva(payload);
            break;
          case "conectores":
            this.saveConectores(payload);
            break;
          case "sentence_complexity":
            this.saveComplejidad(payload);
            break;
          case "lecturabilidad_parrafo":
            this.saveLecturabilidad(payload);
            break;
          case "proposito":
            this.saveProposito(payload);
            break;
          default:
            break;
        }
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