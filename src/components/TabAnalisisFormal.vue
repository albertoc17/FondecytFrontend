<template>
  <div class="row">
    <div class="col-md-12">
      <b-tabs content-class="mt-3">
        <b-tab title="Largo de Oraciones" active @click="emitInfo(fb_oraciones)">
          <div v-if="showErrorOraciones" >
            <ErrorHtml/>
          </div>
          <div v-else>
            <!-- <span v-html="html_oraciones"></span> -->
            <!-- <TabEditor :html_analisis="html_oraciones"/> -->
            <span v-html="html_oraciones"></span>
          </div>
        </b-tab>
        <b-tab title="Micropárrafos" @click="emitInfo(fb_microparrafos)">
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
import ErrorHtml from "./ErrorHtml.vue";
// import TabEditor from "./TabEditor.vue";

export default {
  name: "TabAnalisisFormal",
  components: {
   ErrorHtml,
  //  TabEditor
  },
  data() {
    return {
      showErrorOraciones: false,
      showErrorMicroParrafos: false,
      html_oraciones: "",
      html_microparrafos: "",
      fb_oraciones: [
        Analisis.FormalOracionesExtensas,
        Analisis.FormalOracionesBreves
      ],
      fb_microparrafos: [
        Analisis.FormalParrafosExtensos,
        Analisis.FormalParrafosBreves
      ],
    };
    
  },
  methods:{
    emitInfo(feedback){
      this.$root.$emit("infoAnalisisEspecificos", feedback);
    },
  },
  mounted() {
    this.$root.$on("mensaje_fileupload", (arg) => {
      if (arg.oraciones != "") {
        this.html_oraciones = arg.oraciones.html_response;
        this.fb_oraciones[0].nro_errores = arg.oraciones.flag.FormalOracionesExtensas;
        this.fb_oraciones[1].nro_errores = arg.oraciones.flag.FormalOracionesBreves;
      }
      else this.showErrorOraciones = true;

      if (arg.micro_paragraph != "") {
        this.html_microparrafos = arg.micro_paragraphs.html_response;
        this.fb_microparrafos[0].nro_errores = arg.micro_paragraphs.flag.FormalParrafosExtensos;
        this.fb_microparrafos[1].nro_errores = arg.micro_paragraphs.flag.FormalParrafosBreves;
      }
      else this.showErrorMicroParrafos = true;
    });
  },
};
</script>

<style>

</style>
