<template>
  <div class="row">
    <div class="col-md-12">
      <b-tabs content-class="mt-3">
        <b-tab
          title="Conectores"
          active
          @click="sendFeedbackModal(fb_conectores)"
        >
        <div v-if="showErrorConectores" >
            <ErrorHtml/>
          </div>
          <div v-else>
            <span v-html="html_conectores"></span>
          </div>
        </b-tab>
        <b-tab title="Voz Pasiva" @click="sendFeedbackModal(fb_voz_pasiva)">
          <div v-if="showErrorPassiveVoice" >
            <ErrorHtml/>
          </div>
          <div v-else>
            <span v-html="html_vozpasiva"></span>
          </div>
        </b-tab>
        <b-tab
          title="1ª y 2ª Persona Singular"
          @click="sendFeedbackModal(fb_persona)"
        >
          <div v-if="showErrorFsVoice" >
            <ErrorHtml/>
          </div>
          <div v-else>
            <span v-html="html_persona"></span>
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
  name: "TabAnalisisEstilo",
  components: {
    ErrorHtml,
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
        {
          feedback_negativo: Analisis.EstiloConectores.feedback_negativo,
          feedback_positivo: Analisis.EstiloConectores.feedback_positivo,
          id: "EstiloConectores",
          label: "Conectores",
          style: "#ffaa8e",
          estilo: "naranjo",
          nro_errores: 0,
        },
      ],
      fb_voz_pasiva: [
        {
          feedback_negativo: Analisis.EstiloVozPasiva.feedback_negativo,
          feedback_positivo: Analisis.EstiloVozPasiva.feedback_positivo,
          id: "EstiloVozPasiva",
          label: "Voz pasiva",
          style: "#ffaa8e",
          estilo: "naranjo",
          nro_errores: 0,
        },
      ],
      fb_persona: [
        {
          feedback_negativo:
            Analisis.EstiloPrimeraPersonaSingular.feedback_negativo,
          feedback_positivo:
            Analisis.EstiloPrimeraPersonaSingular.feedback_positivo,
          id: "EstiloPrimeraPersonaSingular",
          label: "1ª Persona Singular",
          style: "#ffaa8e",
          estilo: "naranjo",
          nro_errores: 0,
        },
        {
          feedback_negativo:
            Analisis.EstiloSegundaPersonaSingular.feedback_negativo,
          feedback_positivo:
            Analisis.EstiloSegundaPersonaSingular.feedback_positivo,
          id: "EstiloSegundaPersonaSingular",
          label: "2ª Persona Singular",
          style: "#fffa8e",
          estilo: "amarillo",
          nro_errores: 0,
        },
      ],
    };
  },
  methods: {
    sendFeedbackModal(feedback) {
      this.$root.$emit("mensaje_feedback_modal", feedback);
    },
  },
  mounted() {
    this.$root.$on("mensaje_fileupload", (arg) => {
      if (arg.conectores != "") {
        this.html_conectores = arg.conectores.html_response;
        this.fb_conectores[0].nro_errores = arg.conectores.flag.EstiloConectores;
      } 
      else this.showErrorConectores = true;

      if (arg.passive_voice != "") {
        this.html_vozpasiva = arg.passive_voice.html_response;
        this.fb_voz_pasiva[0].nro_errores = arg.passive_voice.flag.EstiloVozPasiva;
      } 
      else this.showErrorPassiveVoice = true;

      if (arg.fs_person != "") {
        this.html_persona = arg.fs_person.html_response;
        this.fb_persona[0].nro_errores = arg.fs_person.flag.EstiloPrimeraPersonaSingular;
        this.fb_persona[1].nro_errores = arg.fs_person.flag.EstiloSegundaPersonaSingular;
      } 
      else this.showErrorFsVoice = true;
    });
  },
};
</script>
