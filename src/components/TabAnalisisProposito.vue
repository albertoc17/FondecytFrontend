<template>
  <div class="row">
    <div class="col-md-12">
      <b-tabs content-class="mt-3">
        <b-tab title="Resumen">
          <div v-if="showError" >
            <ErrorHtml />
          </div>
          <div v-else>
            <div v-html="fb_resumen"></div>
            <TabEditor proposito="1" />
          </div>
        </b-tab>
        <b-tab title="Introducción">
          <div v-if="showError" >
            <ErrorHtml />
          </div>
          <div v-else>
            <div v-html="fb_introduccion"></div>
            <TabEditor proposito="2" />
          </div>
        </b-tab>
        <b-tab title="Desarrollo / Antecedentes">
          <div v-if="showError" >
            <ErrorHtml />
          </div>
          <div v-else>
            <div v-html="fb_desarrollo"></div>
            <TabEditor proposito="3" />
          </div>
        </b-tab>
        <b-tab title="Resultados">
          <div v-if="showError" >
            <ErrorHtml />
          </div>
          <div v-else>
            <div v-html="fb_resultados"></div>
            <TabEditor proposito="4"/>
          </div>
        </b-tab>
        <b-tab title="Conclusión">
          <div v-if="showError" >
            <ErrorHtml />
          </div>
          <div v-else>
            <div v-html="fb_conclusion"></div>
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
// import { Analisis } from "@/includes/constants.js";

export default {
  name: "TabAnalisisProposito",
  components: {
    ErrorHtml,
    TabEditor
  },
  data() {
    return {
      showError: false,
      fb_resumen: [
      ],
      fb_introduccion: [
      ],
      fb_desarrollo: [
      ],
      fb_resultados: [
      ],
      fb_conclusion: [
      ]
    };
  },
  methods: {

  },
  mounted() {
    this.$root.$on("mensaje_fileupload2", (arg, proposito) => {
      console.log(proposito);
      console.log(arg.proposito);
      if (proposito == 1) {
        this.fb_resumen[0] = arg.proposito;
      }
      else if (proposito == 2) {
        this.fb_introduccion[0] = arg.proposito;
      }
      else if (proposito == 3) {
        this.fb_desarrollo[0] = arg.proposito;
      }
      else if (proposito == 4) {
        this.fb_resultados[0] = arg.proposito;
      }
      else if (proposito == 5) {
        this.fb_conclusion[0] = arg.proposito;
      }
      else this.showError = true;
    });
  },
};
</script>
