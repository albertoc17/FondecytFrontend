<template>
  <div class="row">
    <div class="col-md-12">
      <b-tabs content-class="mt-3">
        <b-tab title="Largo de Oraciones" active @click="emitInfo(fb_oraciones)">
          <div v-if="showErrorOraciones" >
            <ErrorHtml/>
          </div>
          <div v-else>
            <quill-editor
              v-model="html_oraciones"
              :options="editorOptions"
              @change="onEditorChange($event)"
              ref="myQuillEditor"
            />
          </div>
        </b-tab>
        <b-tab title="Micropárrafos" @click="emitInfo(fb_microparrafos)">
          <div v-if="showErrorMicroParrafos" >
            <ErrorHtml/>
          </div>
          <div v-else>
            <quill-editor
              v-model="html_microparrafos"
              :options="editorOptions"
              @change="onEditorChange($event)"
              ref="myQuillEditor"
            />
          </div>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import { Formal } from "@/includes/constants.js";
import ErrorHtml from "../ErrorHtml.vue";
import { quillEditor } from "vue-quill-editor";
import "../../../node_modules/quill/dist/quill.snow.css";
export default {
  name: "TabAnalisisFormal",
  components: {
    ErrorHtml,
    quillEditor,
  },
  data() {
    return {
      showErrorOraciones: false,
      showErrorMicroParrafos: false,
      html_oraciones: "",
      html_microparrafos: "",
      fb_oraciones: [
        Formal.OracionesExtensas,
        Formal.OracionesBreves
      ],
      fb_microparrafos: [
        Formal.ParrafosExtensos,
        Formal.ParrafosBreves
      ],
    };
    
  },
  methods:{
    emitInfo(feedback){
      this.$root.$emit("infoAnalisisEspecificos", feedback);
    },
  },
  mounted() {
    this.$root.$on("mensaje_fileupload", (arg) => {
      if (arg.oraciones != "") {
        this.html_oraciones = arg.oraciones.html_response;
        this.fb_oraciones[0].nro_errores = arg.oraciones.flag.FormalOracionesExtensas;
        this.fb_oraciones[1].nro_errores = arg.oraciones.flag.FormalOracionesBreves;
      }
      else this.showErrorOraciones = true;

      if (arg.micro_paragraph != "") {
        this.html_microparrafos = arg.micro_paragraphs.html_response;
        this.fb_microparrafos[0].nro_errores = arg.micro_paragraphs.flag.FormalParrafosExtensos;
        this.fb_microparrafos[1].nro_errores = arg.micro_paragraphs.flag.FormalParrafosBreves;
      }
      else this.showErrorMicroParrafos = true;
    });
  },
};
</script>

<style>

</style>
