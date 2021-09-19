<template id="TabAnalisisLexicoGramatical">
  <div class="row">
    <div class="col-md-12">
      <b-tabs content-class="mt-3">
        <b-tab active title="Gerundios" @click="emitInfo(fb_gerundios)">
          <div v-if="showErrorGerundios" >
            <ErrorHtml/>
          </div>
          <div v-else>
             <quill-editor
                v-model="html_gerundios"
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
import { quillEditor } from "vue-quill-editor";
import "../../../node_modules/quill/dist/quill.snow.css";
import { LexicoGramaticalGerundiosExcesivo } from "@/includes/constants.js";
import ErrorHtml from "../ErrorHtml.vue";

export default {
  name: "TabAnalisisLexicoGramatical",
  components: {
    ErrorHtml,
    quillEditor,
  },
  data() {
    return {
      showErrorGerundios: false,
      html_gerundios: "",
      fb_gerundios: [LexicoGramaticalGerundiosExcesivo],
    };
  },
  methods: {
    emitInfo(feedback) {
      this.$root.$emit("infoAnalisisEspecificos", feedback);
    }
  },
  mounted() {
    this.$root.$on("mensaje_fileupload", (arg) => {
      if (arg.gerunds != ""){
        this.html_gerundios = arg.gerunds.html_response;
        this.fb_gerundios[0].nro_errores = arg.gerunds.flag.LexicoGramaticalGerundiosExcesivo;
      }
      else this.showErrorGerundios = true;
    });
  },
};
</script>
