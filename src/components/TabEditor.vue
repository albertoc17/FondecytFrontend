<template>
  <div>
    <quill-editor
      v-model="content"
      ref="myQuillEditor"
      :options="editorOptions"
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
      content: "Inserte texto aquí...",
    };
  },
  mounted(){
    this.$root.$on("mensaje_fileupload", (arg) => {
      this.content = arg.html;
    });
  },
};
</script>
