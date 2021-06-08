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
      </b-tabs>
    </div>
  </div>
</template>

<script>
import { Analisis } from "@/includes/constants.js";
import ErrorHtml from "./ErrorHtml.vue";

export default {
    components: {
    ErrorHtml,
  },
  name: "TabAnalisisDiscursivo",
  data() {
    return {
      showErrorComplejidad: false,
      html_proposito: "",
      html_complejidad: "",
      fb_proposito: "",
      fb_complejidad: [{
        feedback_negativo: Analisis.DiscursivoComplejidad.feedback_negativo,
        feedback_positivo: Analisis.DiscursivoComplejidad.feedback_positivo,
        id: "DiscursivoComplejidad",
        label: "Complejidad",
        style: '#ffaa8e',
        nro_errores : 0
      }],
    };
  },
  methods: {
    sendFeedbackModal(analisis) {
      this.$root.$emit("mensaje_feedback_modal", analisis);
    },
  },
  mounted() {
    this.$root.$on("mensaje_fileupload", (arg) => {
      if(arg.sentence_complexity != "") {
        this.html_complejidad = arg.sentence_complexity.html_response;
        this.fb_complejidad[0].nro_errores = arg.sentence_complexity.flag.DiscursivoComplejidad;
      }
      else {
        this.showErrorComplejidad = true;
      }
      // this.html_proposito = arg.proposito.html_response;
      // this.fb_proposito[0].nro_errores = arg.sentence_complexity.flag.EstiloVozPasiva;
    });
  },
};
</script>
