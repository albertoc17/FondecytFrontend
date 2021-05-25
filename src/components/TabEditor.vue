<template>
  <div>
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
    };
  },
  methods: {
    onEditorChange({ html, text }) {
      console.log(html);
      console.log(text);
    },
  },
  mounted() {
    this.$root.$on("mensaje_fileupload", (arg) => {
      this.contentHtml = arg.html;
    });
  },
};
</script>