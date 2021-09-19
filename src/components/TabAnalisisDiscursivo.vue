<template>
  <div class="row">
    <div class="col-md-12">
      <b-tabs content-class="mt-3">
        <b-tab title="Complejidad" active @click="emitInfo(fb_complejidad)">
          <div v-if="showErrorComplejidad" >
            <ErrorHtml/>
          </div>
          <div v-else>
            <quill-editor
              v-model="html_complejidad"
              :options="editorOptions"
              @change="onEditorChange($event)"
              ref="myQuillEditor"
            />
            <!-- <span v-html="html_complejidad"></span> -->
          </div>
        </b-tab>
        <b-tab title="Lecturabilidad" @click="emitInfo(fb_lecturabilidad)">
          <div v-if="showErrorComplejidad" >
            <ErrorHtml/>
          </div>
          <div v-else>
            <quill-editor
              v-model="html_lecturabilidad"
              :options="editorOptions"
              @change="onEditorChange($event)"
              ref="myQuillEditor"
            />
          </div>
        </b-tab>
        <b-tab title="Propósito" @click="emitInfo(fb_proposito)">
          <div v-if="showErrorProposito" >
            <ErrorHtml/>
          </div>
          <div v-else>
            <quill-editor
              v-model="html_proposito"
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
import { Discursivo } from "@/includes/constants.js";
import { Proposito } from "@/includes/constants.js";
import { quillEditor } from "vue-quill-editor";
import ErrorHtml from "./ErrorHtml.vue";

export default {
  name: "TabAnalisisDiscursivo",
  components: {
    ErrorHtml,
    quillEditor
  },
  data() {
    return {
      showErrorComplejidad: false,
      html_complejidad: "",
      html_lecturabilidad: "",
      fb_complejidad: [
        Discursivo.Complejidad
      ],
      fb_lecturabilidad: [
        Discursivo.LecturabilidadDificil,
        Discursivo.LecturabilidadAlgoDificil,
        Discursivo.LecturabilidadNormal,
        Discursivo.LecturabilidadAlgoFacil,
        Discursivo.LecturabilidadFacil,
      ],
      showErrorProposito: false,
      html_proposito: "",
      fb_proposito: [
        Proposito.Resumen,
        Proposito.Introduccion,
        Proposito.Desarrollo,
        Proposito.Resultados,
        Proposito.Conclusion,
      ],
      editorOptions: {
        readOnly: false,
        theme: "snow",
        placeholder: 'Inserte el texto aquí...',
      },
    };
  },
  methods: {
    emitInfo(analisis) {
      this.$root.$emit("infoAnalisisEspecificos", analisis);
    },
    onEditorChange({ html, text }) {
      this.html = html;
      this.text = text;
    },
  },
  mounted() {
    this.$root.$on("mensaje_fileupload", (arg) => {
      if (arg.sentence_complexity != "") {
        this.html_complejidad = arg.sentence_complexity.html_response;
        this.fb_complejidad[0].nro_errores = arg.sentence_complexity.flag.DiscursivoComplejidad;
      }
      else {
        this.showErrorComplejidad = true;
      }
      if (arg.lecturabilidad_parrafo != "") {
        this.html_lecturabilidad = arg.lecturabilidad_parrafo.html_response;
        this.fb_lecturabilidad[0].nro_errores = arg.lecturabilidad_parrafo.flag.DiscursivoLecturabilidadDificil;
        this.fb_lecturabilidad[1].nro_errores = arg.lecturabilidad_parrafo.flag.DiscursivoLecturabilidadAlgoDificil;
        this.fb_lecturabilidad[2].nro_errores = arg.lecturabilidad_parrafo.flag.DiscursivoLecturabilidadNormal;
        this.fb_lecturabilidad[3].nro_errores = arg.lecturabilidad_parrafo.flag.DiscursivoLecturabilidadAlgoFacil;
        this.fb_lecturabilidad[4].nro_errores = arg.lecturabilidad_parrafo.flag.DiscursivoLecturabilidadFacil;
      }
      else {
        this.showErrorComplejidad = true;
      }
      if (arg.proposito != "") {
        this.html_proposito = arg.proposito.html_response;
        this.fb_proposito[0].nro_errores = arg.proposito.flag.MM0;
        this.fb_proposito[1].nro_errores = arg.proposito.flag.MM1;
        this.fb_proposito[2].nro_errores = arg.proposito.flag.MM2;
        this.fb_proposito[3].nro_errores = arg.proposito.flag.MM3;
        this.fb_proposito[4].nro_errores = arg.proposito.flag.MM4;
      } else {
        this.showErrorProposito = true;
      }
    });
  },
};
</script>
