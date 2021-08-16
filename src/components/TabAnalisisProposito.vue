<template>
  <div class="row">
    <div class="col-md-12">
      <b-tabs content-class="mt-3">
        <b-tab active title="Resumen" @click="emitInfo(fb_resumen)">
          <div v-if="showErrorResumen">
            <ErrorHtml />
          </div>
          <div v-else>
            <span v-html="html_resumen"></span>
            <TabEditor proposito="1"/>
          </div>
        </b-tab>
        <b-tab title="Introducción" @click="emitInfo(fb_introduccion)">
          <div v-if="showErrorIntroduccion">
            <ErrorHtml />
          </div>
          <div v-else>
            <span v-html="html_introduccion"></span>
            <TabEditor proposito="2"/>
          </div>
        </b-tab>
        <b-tab title="Desarrollo / Antecedentes" @click="emitInfo(fb_desarrollo)">
          <div v-if="showErrorDesarrollo">
            <ErrorHtml />
          </div>
          <div v-else>
            <TabEditor proposito="3"/>
          </div>
        </b-tab>
        <b-tab title="Resultados" @click="emitInfo(fb_resultados)">
          <div v-if="showErrorResultados">
            <ErrorHtml />
          </div>
          <div v-else>
            <TabEditor proposito="4"/>
          </div>
        </b-tab>
        <b-tab title="Conclusión" @click="emitInfo(fb_conclusion)">
          <div v-if="showErrorConclusion">
            <ErrorHtml />
          </div>
          <div v-else>
            <TabEditor proposito="5"/>
          </div>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import ErrorHtml from "./ErrorHtml.vue";
import TabEditor from "./TabEditor.vue";
import { Analisis } from "@/includes/constants.js";

export default {
  name: "TabAnalisisProposito",
  components: {
    ErrorHtml,
    TabEditor
  },
  data() {
    return {
      html_resumen: null,
      html_introduccion: null,
      html_desarrollo: null,
      html_resultados: null,
      html_conclusion: null,
      showErrorResumen: false,
      showErrorIntroduccion: false,
      showErrorDesarrollo: false,
      showErrorResultados: false,
      showErrorConclusion: false,
      fb_resumen: [Analisis.PropositoResumen],
      fb_introduccion: [Analisis.PropositoIntroduccion],
      fb_desarrollo: [Analisis.PropositoDesarrollo],
      fb_resultados: [Analisis.PropositoResultados],
      fb_conclusion: [Analisis.PropositoConclusion]
    };
  },
  methods: {
    emitInfo(feedback) {
      this.$root.$emit("infoAnalisisEspecificos", feedback);
    }
  },
  mounted() {
    this.$root.$on("mensaje_fileupload2", (arg, proposito) => {
      console.log(arg.proposito.flag);
      if (arg.proposito != "") {
        if (proposito == 1) {
          // this.html_resumen = arg.proposito.html_response;
          this.fb_resumen[0].nro_errores = arg.proposito.flag.Proposito;
        } else if (proposito == 2) {
          // this.html_introduccion = arg.proposito.html_response;
          this.fb_introduccion[0].nro_errores = arg.proposito.flag.Proposito;
        } else if (proposito == 3) {
          // this.html_desarrollo = arg.proposito.html_response;
          this.fb_desarrollo[0].nro_errores = arg.proposito.flag.Proposito;
        } else if (proposito == 4) {
          // this.html_resultados = arg.proposito.html_response;
          this.fb_resultados[0].nro_errores = arg.proposito.flag.Proposito;
        } else if (proposito == 5) {
          // this.html_conclusion = arg.proposito.html_response;
          this.fb_conclusion[0].nro_errores = arg.proposito.flag.Proposito;
        }
      }
      else this.showErrorOraciones = true;
      // if (arg.micro_paragraph != "") {
      //   this.html_microparrafos = arg.micro_paragraphs.html_response;
      //   this.fb_microparrafos[0].nro_errores = arg.micro_paragraphs.flag.FormalParrafosExtensos;
      //   this.fb_microparrafos[1].nro_errores = arg.micro_paragraphs.flag.FormalParrafosBreves;
      // }
      // else this.showErrorMicroParrafos = true;
    });
  },
};
</script>
