<template>
  <div class="row">
    <div class="col-md-12">
      <b-tabs content-class="mt-3">
        <b-tab
          title="Conectores"
          active
          @click="sendFeedbackModal(fb_conectores)"
        >
        <span v-html="html_conectores"></span>
        </b-tab>
        <b-tab title="Voz pasiva" @click="sendFeedbackModal(fb_voz_pasiva)">
          <span v-html="html_vozpasiva"></span>
        </b-tab>
        <b-tab
          title="Primera y Segunda Persona"
          @click="sendFeedbackModal(fb_persona)"
        >
        <span v-html="html_persona"></span>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import { Analisis } from "@/includes/constants.js";
export default {
  name: "analisisEstilo",
  data() {
    return {
      html_conectores: "",
      html_vozpasiva: "",
      html_persona: "",
      fb_conectores: [{
        feedback_negativo: Analisis.EstiloConectores.feedback_negativo,
        feedback_positivo: Analisis.EstiloConectores.feedback_positivo,
        id: "EstiloConectores",
        estilo: "amarillo",
      }],
      fb_voz_pasiva: [{
        feedback_negativo: Analisis.EstiloVozPasiva.feedback_negativo,
        feedback_positivo: Analisis.EstiloVozPasiva.feedback_positivo,
        id: "EstiloVozPasiva",
        estilo: "amarillo",
      }],
      fb_persona: [
        {
          feedback_negativo: Analisis.EstiloPrimeraPersonaSingular.feedback_negativo,
          feedback_positivo: Analisis.EstiloPrimeraPersonaSingular.feedback_positivo,
          id: "EstiloPrimeraPersonaSingular",
          estilo: "naranjo",
        },
        {
          feedback_negativo: Analisis.EstiloSegundaPersonaSingular.feedback_negativo,
          feedback_positivo: Analisis.EstiloSegundaPersonaSingular.feedback_positivo,
          id: "EstiloSegundaPersonaSingular",
          estilo: "amarillo",
        },
      ],
    };
  },
  methods:{
     sendFeedbackModal(feedback, flags){
       this.$root.$emit("mensaje_feedback_modal", feedback, flags);
     },
  },
  mounted() {
    this.$root.$on("mensaje_fileupload", (arg) => {
      
      this.html_conectores = JSON.parse(arg.conectores).html_response;
      this.html_vozpasiva = JSON.parse(arg.passive_voice).html_response;
      this.html_persona = JSON.parse(arg.fs_person).html_response;
      
      this.fb_conectores[0].nro_errores = JSON.parse(arg.conectores).flag.EstiloConectores;
      this.fb_voz_pasiva[0].nro_errores = JSON.parse(arg.passive_voice).flag.EstiloVozPasiva;
      this.fb_persona[0].nro_errores    = JSON.parse(arg.fs_person).flag.EstiloPrimeraPersonaSingular;
      this.fb_persona[1].nro_errores    = JSON.parse(arg.fs_person).flag.EstiloSegundaPersonaSingular;
    });
  },
};
</script>

<style>

</style>
