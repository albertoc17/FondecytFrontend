<template id="TabAnalisisLexicoGramatical">
  <div class="row">
    <div class="col-md-12">
      <b-tabs content-class="mt-3">
        <b-tab active title="Gerundios" @click="sendFeedbackModal(fb_gerundios)">
          <div v-if="showError" >
            <ErrorHtml/>
          </div>
          <div v-else>
            <span v-html="html_gerundios"></span>
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
  name: "TabAnalisisLexicoGramatical",
  components: {
    ErrorHtml,
  },
  data() {
    return {
      showError: false,
      html_gerundios: "",
      fb_gerundios: [{
        feedback_negativo: Analisis.LexicoGramaticalGerundiosExcesivo.feedback_negativo,
        feedback_positivo: Analisis.LexicoGramaticalGerundiosExcesivo.feedback_positivo,
        id: "LexicoGramaticalGerundiosExcesivo",
        label: "Gerundios",
        estilo: "naranjo",
        style: "#fffa8e",
        nro_errores : 0
      }],
      // fb_repeticionLexica: [{
      //   feedback_negativo:  Analisis.LexicoGramaticalRepeticionLexica.feedback_negativo,
      //   feedback_positivo: Analisis.LexicoGramaticalRepeticionLexica.feedback_positivo,
      //   id: "LexicoGramaticalRepeticionLexica",
      //   label: "Repetición Léxica",
      //   estilo: "naranjo",
      //   style: "#fffa8e",
      //   nro_errores : 0
      // }]
    };
  },
  methods: {
    sendFeedbackModal(feedback) {
      this.$root.$emit("mensaje_feedback_modal", feedback);
    }
  },
  mounted() {
    this.$root.$on("mensaje_fileupload", (arg) => {
      if (arg.gerunds != ""){
        this.html_gerundios = JSON.parse(arg.gerunds).html_response;
        this.fb_gerundios[0].nro_errores = JSON.parse(arg.gerunds).flag.LexicoGramaticalGerundiosExcesivo;
      }
      else{
        this.showError = true;
      }
    });
  },
};
</script>
