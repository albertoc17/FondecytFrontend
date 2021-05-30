<template>
  <div>
    <div class="sendTextButton">
      <button class="btn btn-success" @click="sendTextEdited">
        Enviar Texto
      </button>
    </div>
    <a
      :href="item.url"
      v-text="item.label"
      @click.prevent="downloadItem(item)"
    />
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
      html: "",
      text: "",
    };
  },
  methods: {
    onEditorChange({ html, text }) {
      this.html = html;
      this.text = text;
    },

    downloadItem ({ url, label }) {
    axios.get(url, { responseType: 'blob' })
      .then(response => {
        const blob = new Blob([response.data], { type: 'application/pdf' })
        const link = document.createElement('a')
        link.href = URL.createObjectURL(blob)
        link.download = label
        link.click()
        URL.revokeObjectURL(link.href)
      }).catch(console.error)
    },

    sendResToComponents(data) {
      // var validateData = this.validateData(data);
      this.$root.$emit("mensaje_fileupload", data);
    },
    async sendTextEdited() {
      try {
        const formData = new FormData();
        formData.append("html", this.html);
        formData.append("text", this.text);
        let res = await axios.post(
          "http://www.redilegra.com/backend/api/PostTextRedilegra",
          //"http://127.0.0.1:8000/api/PostTextRedilegra", // only for dev env.
          formData
        );
        this.sendResToComponents(res.data);
      } catch (err) {
        console.warn(err);
      }
    },
  },
  mounted() {
    this.$root.$on("mensaje_fileupload", (arg) => {
      this.contentHtml = arg.html;
    });
  },
};
</script>
<style scoped>
.sendTextButton {
  margin-bottom: 2%;
}
</style>