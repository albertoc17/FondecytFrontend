<template>
  <div class="row">
    <div class="col-md-12">
      <b-tabs content-class="mt-3">
        <b-tab title="Largo de Oraciones" active @click="sendFeedbackModal(fb_oraciones)">
          <div v-if="showErrorOraciones" >
            <ErrorHtml/>
          </div>
          <div v-else>
            <span v-html="html_oraciones"></span>
          </div>
        </b-tab>
        <b-tab title="Micropárrafos" @click="sendFeedbackModal(fb_microparrafos)">
          <div v-if="showErrorMicroParrafos" >
            <ErrorHtml/>
          </div>
          <div v-else>
            <span v-html="html_microparrafos"></span>
          </div>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import { Analisis } from "@/includes/constants.js";
import { validModel } from "@/includes/functions.js"
import ErrorHtml from "./ErrorHtml.vue";

export default {
  name: "TabAnalisisFormal",
  components: {
   ErrorHtml,
  },
  data() {
    return {
      showErrorOraciones: false,
      showErrorMicroParrafos: false,
      html_oraciones: "",
      html_microparrafos: "",
      fb_oraciones: [
        {
          feedback_negativo: Analisis.FormalOracionesExtensas.feedback_negativo,
          feedback_positivo: Analisis.FormalOracionesExtensas.feedback_positivo,
          id: "FormalOracionesExtensas",
          label: "Oraciones Extensas",
          style: '#ffd075',
          estilo: "naranjo",
          nro_errores: 0
        },
        {
          feedback_negativo: Analisis.FormalOracionesBreves.feedback_negativo,
          feedback_positivo: Analisis.FormalOracionesBreves.feedback_positivo,
          id: "FormalOracionesBreves",
          label: "Oraciones Breves",
          style: "#fffa8e",
          estilo: "amarillo",
          nro_errores: 0
        }
      ],
      fb_microparrafos: [
        {
          feedback_negativo: Analisis.FormalParrafosExtensos.feedback_negativo,
          feedback_positivo: Analisis.FormalParrafosExtensos.feedback_positivo,
          id: "FormalParrafosExtensos",
          label: "Parrafos Extensos",
          style: '#ffd075',
          estilo: "naranjo",
          nro_errores: 0
        },
        {
          feedback_negativo: Analisis.FormalParrafosBreves.feedback_negativo,
          feedback_positivo: Analisis.FormalParrafosBreves.feedback_positivo,
          id: "FormalParrafosBreves",
          label: "Parrafos Breves",
          style: "#fffa8e",
          estilo: "amarillo",
          nro_errores: 0
        }
      ],
    };
    
  },
  
  methods:{
    sendFeedbackModal(feedback){
      this.$root.$emit("mensaje_feedback_modal", feedback);
    },
  },
  mounted() {
    this.$root.$on("mensaje_fileupload", (arg) => {
      if(validModel(arg.oraciones)){
        this.html_oraciones = JSON.parse(arg.oraciones).html_response;
        this.fb_oraciones[0].nro_errores = JSON.parse(arg.oraciones).flag.FormalOracionesExtensas;
        this.fb_oraciones[1].nro_errores = JSON.parse(arg.oraciones).flag.FormalOracionesBreves;
      }
      else{
        this.showErrorOraciones = true;
      }
      if(validModel(arg.micro_paragraphs)){
        this.showErrorOraciones = true;
        this.html_microparrafos = JSON.parse(arg.micro_paragraphs).html_response;
        this.fb_microparrafos[0].nro_errores = JSON.parse(arg.micro_paragraphs).flag.FormalParrafosExtensos;
        this.fb_microparrafos[1].nro_errores = JSON.parse(arg.micro_paragraphs).flag.FormalParrafosBreves;
      }
      else{
        this.showErrorMicroParrafos = true;
      }
    });
  },
};
</script>

<style>

</style>
