<template>
  <div class="row">
    <div class="col-md-12">
      <b-tabs content-class="mt-3">
        <b-tab title="Complejidad" active @click="sendFeedbackModal(fb_complejidad)">
          <span v-html="html_complejidad"></span>
        </b-tab>
        <b-tab disabled title="Propósito" @click="sendFeedbackModal(fb_proposito)">
          <span v-html="html_proposito"></span>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import { Analisis } from "@/includes/constants.js";
export default {
  name: "TabAnalisisDiscursivo",
  data() {
    return {
      html_proposito: "",
      html_complejidad: "",
      fb_proposito: "",
      fb_complejidad: [{
        feedback_negativo: Analisis.DiscursivoComplejidad.feedback_negativo,
        feedback_positivo: Analisis.DiscursivoComplejidad.feedback_positivo,
        id: "DiscursivoComplejidad",
        label: "Complejidad",
        style: '#ffaa8e',
        estilo: "naranjo",
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
      console.log(JSON.parse(arg.sentence_complexity).flag); // decirle esta wea aa seba
      this.html_complejidad = JSON.parse(arg.sentence_complexity).html_response;
      this.fb_complejidad[0].nro_errores = 3;
      // this.fb_complejidad[0].nro_errores = JSON.parse(arg.passive_voice).flag.DiscursivoComplejidad;
      // this.html_proposito = JSON.parse(arg.proposito).html_response;
      // this.fb_proposito[0].nro_errores = JSON.parse(arg.sentence_complexity).flag.EstiloVozPasiva;
    });
  },
};
</script>
