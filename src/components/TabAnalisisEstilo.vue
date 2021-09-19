<template>
  <div class="row">
    <div class="col-md-12">
      <b-tabs content-class="mt-3">
        <b-tab
          title="Conectores"
          active
          @click="emitInfo(fb_conectores)"
        >
          <div v-if="showErrorConectores">
            <ErrorHtml />
          </div>
          <div v-else>
            <quill-editor
              v-model="html_conectores"
              :options="editorOptions"
              @change="onEditorChange($event)"
              ref="myQuillEditor"
            />
          </div>
        </b-tab>
        <b-tab title="Voz Pasiva" @click="emitInfo(fb_voz_pasiva)">
          <div v-if="showErrorPassiveVoice">
            <ErrorHtml />
          </div>
          <div v-else>
            <quill-editor
              v-model="html_vozpasiva"
              :options="editorOptions"
              @change="onEditorChange($event)"
              ref="myQuillEditor"
            />
          </div>
        </b-tab>
        <b-tab
          title="1ª y 2ª Persona Singular"
          @click="emitInfo(fb_persona)"
        >
          <div v-if="showErrorFsVoice">
            <ErrorHtml />
          </div>
          <div v-else>
            <quill-editor
              v-model="html_persona"
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
import { Estilo } from "@/includes/constants.js";
import ErrorHtml from "./ErrorHtml.vue";
import { quillEditor } from "vue-quill-editor";
import "../../node_modules/quill/dist/quill.snow.css";

export default {
  name: "TabAnalisisEstilo",
  components: {
    ErrorHtml,
    quillEditor
  },
  data() {
    return {
      showErrorConectores: false,
      showErrorPassiveVoice: false,
      showErrorFsVoice: false,
      html_conectores: "",
      html_vozpasiva: "",
      html_persona: "",
      fb_conectores: [
        Estilo.Conectores
      ],
      fb_voz_pasiva: [
        Estilo.VozPasiva
      ],
      fb_persona: [
        Estilo.PrimeraPersonaSingular,
        Estilo.SegundaPersonaSingular
      ]
    };
  },
  methods: {
    emitInfo(feedback) {
      this.$root.$emit("infoAnalisisEspecificos", feedback);
    },
  },
  mounted() {
    this.$root.$on("mensaje_fileupload", (arg) => {
      if (arg.conectores != "") {
        this.html_conectores = arg.conectores.html_response;
        this.fb_conectores[0].nro_errores =
          arg.conectores.flag.EstiloConectores;
      } else this.showErrorConectores = true;

      if (arg.passive_voice != "") {
        this.html_vozpasiva = arg.passive_voice.html_response;
        this.fb_voz_pasiva[0].nro_errores =
          arg.passive_voice.flag.EstiloVozPasiva;
      } else this.showErrorPassiveVoice = true;

      if (arg.fs_person != "") {
        this.html_persona = arg.fs_person.html_response;
        this.fb_persona[0].nro_errores =
          arg.fs_person.flag.EstiloPrimeraPersonaSingular;
        this.fb_persona[1].nro_errores =
          arg.fs_person.flag.EstiloSegundaPersonaSingular;
      } else this.showErrorFsVoice = true;
    });
  },
};
</script>
