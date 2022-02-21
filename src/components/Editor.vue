<template>
  <div id="Editor">
    <br>
    <div v-if="retroalimentacion.feedbackTypes">
      <div v-if="showError">
        <ErrorHtml />
      </div>
      <div>
        <quill-editor
          v-model="retroalimentacion.html"
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
import { mapGetters, mapActions } from "vuex";

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
      editorOptions: {
        readOnly: false,
        theme: "snow",
        placeholder: "Inserte el texto aquí...",
      },
    };
  },
  computed: {
    ...mapGetters({
      retroalimentacion: "getRetroalimentacion"
    }),
  },
  methods: {
    ...mapActions([
      "savetextoEditor"
    ]),
    onEditorChange({ text }) {
      this.savetextoEditor(text);
    }
  },
  // created() {
  //   this.savetextoEditor(this.$refs.myQuillEditor.quill.container.innerText);
  // }
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