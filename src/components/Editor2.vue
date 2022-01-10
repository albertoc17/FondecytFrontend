<template>
  <div id="Editor2">
    <br>
    <div v-if="feedbackTypes">
      <div v-if="showError">
        <ErrorHtml />
      </div>
      <div>
        <quill-editor
          v-model="contentHtml"
          :options="editorOptions"
          @change="onEditorChange($event)"
          ref="myQuillEditor"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ErrorHtml from "./ErrorHtml.vue";
import { quillEditor } from "vue-quill-editor";
import "../../node_modules/quill/dist/quill.snow.css";
import axios from "axios";
import { PREHTML, POSTHTML } from "@/includes/constants.js";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Editor",
  props: ["endpoint"],
  components: {
    ErrorHtml,
    quillEditor,
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
    contentHtml () {
      return this.getRetroalimentacion.html;
    },
    feedbackTypes () {
      return this.getRetroalimentacion.feedbackTypes;
    },
    ...mapGetters(["getRetroalimentacion"]),
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
      "saveAnalysisTab",
    ]),
  },
  methods: {
    onEditorChange({ html, text }) {
      this.html = html;
      this.text = text;
    },
    async sendTextEdited() {
      let loader = this.$loading.show({ isFullPage: true, canCancel: false });
      try {
        this.html = this.html.replace(/<\/?span[^>]*>/g, "");
        this.html = this.html.replace(/<\/?img[^>]*>/g, "");
        
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
        this.saveAnalysisTab(this.endpoint);
        const payload = {
          html: res.data.tipo_analisis.html_response,
          error: res.data.tipo_analisis.flag,
        };
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