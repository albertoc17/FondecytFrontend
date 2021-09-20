<template>
  <div>
    <div class="buttonContainer">
      <button class="btn btn-success" @click="sendTextEdited()">Enviar texto</button>
      <button class="btn btn-primary" @click="exportHTML()">Descargar archivo</button>
    </div>
    <quill-editor
      v-model="contentHtml"
      :options="editorOptions"
      @change="onEditorChange($event)"
      ref="myQuillEditor"
    />
  </div>
</template>

<script>
import { quillEditor } from "vue-quill-editor";
import "../../../node_modules/quill/dist/quill.snow.css";
import axios from "axios";
import {PREHTML, POSTHTML} from "@/includes/constants"

export default {
  name: "TabEditor",
  props: ['tipo_analisis'],
  components: {
    quillEditor,
  },
  data() {
    return {
      contentHtml: "",
      html: "",
      text: "",
      editorOptions: {
        readOnly: false,
        theme: "snow",
        placeholder: 'Inserte el texto aquí...',
      },
    };
  },
  methods: {
    onEditorChange({ html, text }) {
      this.html = html;
      this.text = text;
    },
    exportHTML() {
      var html2doc = PREHTML + this.html + POSTHTML;
      var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html2doc);
      var fileDownload = document.createElement("a");
      document.body.appendChild(fileDownload);
      fileDownload.href = source;
      fileDownload.download = 'document.doc';
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
        const formData = new FormData();
        this.html = this.html.replace(/<\/?span[^>]*>/g, "");
        formData.append("html", this.html);
        formData.append("text", this.text);
        formData.append("tipo_analisis", this.tipo_analisis);
        let res = null;
        res = await axios.post(
          // "http://www.redilegra.com/backend/api/SendText",
          "http://127.0.0.1:8000/api/SendText2", // only for dev env.
          formData
        );
        this.contentHtml = res.data.tipo_analisis.html_response;
        console.log(res.data.tipo_analisis);
        this.sendResToComponents(res.data);
      } catch (err) {
        console.warn(err);
      }
      loader.hide();
    },
  }
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