<template>
  <div class="row">
    <div class="col-md-12">
      <b-tabs content-class="mt-3">
        <b-tab title="Complejidad" active @click="sendFeedbackModal(fb_complejidad)">
          <div v-if="showErrorComplejidad" >
            <ErrorHtml/>
          </div>
          <div v-else>
            <span v-html="html_complejidad"></span>
          </div>
        </b-tab>
        <b-tab title="Lecturabilidad" @click="sendFeedbackModal(fb_lecturabilidad)">
          <div v-if="showErrorComplejidad" >
            <ErrorHtml/>
          </div>
          <div v-else>
            <span v-html="html_lecturabilidad"></span>
          </div>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import { Analisis } from "@/includes/constants.js";
import ErrorHtml from "./ErrorHtml.vue";

export default {
  name: "TabAnalisisDiscursivo",
  components: {
    ErrorHtml
  },
  data() {
    return {
      showErrorComplejidad: false,
      html_proposito: "",
      html_complejidad: "",
      html_lecturabilidad: "",
      fb_proposito: "",
      fb_complejidad: [{
        feedback_negativo: Analisis.DiscursivoComplejidad.feedback_negativo,
        feedback_positivo: Analisis.DiscursivoComplejidad.feedback_positivo,
        id: "DiscursivoComplejidad",
        label: "Complejidad",
        style: '#ffaa8e',
        nro_errores : 0
      }],
      fb_lecturabilidad: [
        Analisis.DiscursivoLecturabilidadDificil,
        Analisis.DiscursivoLecturabilidadAlgoDificil,
        Analisis.DiscursivoLecturabilidadNormal,
        Analisis.DiscursivoLecturabilidadAlgoFacil,
        Analisis.DiscursivoLecturabilidadFacil,
      ],
    };
  },
  methods: {
    sendFeedbackModal(analisis) {
      this.$root.$emit("mensaje_feedback_modal", analisis);
    },
  },
  mounted() {
    this.$root.$on("mensaje_fileupload", (arg) => {
      console.log(arg.lecturabilidad_parrafo.html_response);
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
    });
  },
};
</script>
