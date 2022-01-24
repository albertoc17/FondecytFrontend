<template>
  <div id="Editor">
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
import { mapGetters } from "vuex";

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
    ...mapGetters(["getRetroalimentacion"]),
    contentHtml () {
      return this.getRetroalimentacion.html;
    },
    feedbackTypes () {
      return this.getRetroalimentacion.feedbackTypes;
    },
  },
  methods: {
    onEditorChange({ html, text }) {
      this.html = html;
      this.text = text;
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