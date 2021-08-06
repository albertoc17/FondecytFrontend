<template>
  <div>
    <div  v-if="proposito!=5 && proposito!=4 && proposito!=3 && proposito!=2 && proposito!=1" class="buttonContainer">
      <div>
        <button class="btn btn-success" @click="sendTextEdited">Enviar Texto</button>
      </div>
      <div>
        <button class="btn btn-primary" @click="exportHTML" >Descargar DOC</button>
      </div>
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
import "../../node_modules/quill/dist/quill.snow.css";
import axios from "axios";


export default {
  name: "TabEditor",
  props: ['proposito'],
  components: {
    quillEditor,
  },
  data() {
    return {
      editorOptions: {
        readOnly: false,
        theme: "snow",
      },
      contentHtml: "Inserte texto aquí...",
      html: '',
      text: '',
    };
  },
  methods: {
    onEditorChange({ html, text }) {
      this.html = html;
      this.text = text;
    },
    exportHTML() {
      var preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
      var postHtml = "</body></html>";
      var html2doc = preHtml + this.html + postHtml;
      var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html2doc);
      var fileDownload = document.createElement("a");
      document.body.appendChild(fileDownload);
      fileDownload.href = source;
      fileDownload.download = 'document.doc';
      fileDownload.click();
      document.body.removeChild(fileDownload);
    },
    sendResToComponents(data) {
      this.$root.$emit("mensaje_fileupload", data);
    },
    sendResToComponents2(data, proposito) {
      this.$root.$emit("mensaje_fileupload2", data, proposito);
    },
    async sendTextEdited() {
      let loader = this.$loading.show({ isFullPage: true, canCancel: false });
      try {
        const formData = new FormData();
        formData.append("html", this.html);
        formData.append("text", this.text);
        let res;
        if (this.proposito !== undefined) {
          formData.append("macromovida", this.proposito);
          res = await axios.post(
            "http://www.redilegra.com/backend/api/PostTextRedilegra",
            // "http://127.0.0.1:8000/api/PostTextRedilegra", // only for dev env.
            formData
          );
          this.sendResToComponents2(res.data, this.proposito);
        }
        else {
          res = await axios.post(
            "http://www.redilegra.com/backend/api/PostTextRedilegra",
            //"http://127.0.0.1:8000/api/PostTextRedilegra", // only for dev env.
            formData
          );
          this.sendResToComponents(res.data);
        }
      } catch (err) {
        console.warn(err);
      }
      loader.hide();
    },
  },
  mounted() {
    this.$root.$on("mensaje_fileupload", (arg) => {
      if (!this.proposito) {
        this.contentHtml = arg.html;
      }
    });
  },
};
</script>

<style>
.buttonContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 2%;
}
</style>