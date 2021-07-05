<template id="TabAnalisisLexicoGramatical">
  <div class="row">
    <div class="col-md-12">
      <b-tabs content-class="mt-3">
        <b-tab active title="Gerundios" @click="emitInfo(fb_gerundios)">
          <div v-if="showErrorGerundios" >
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
      showErrorGerundios: false,
      html_gerundios: "",
      fb_gerundios: [Analisis.LexicoGramaticalGerundiosExcesivo],
    };
  },
  methods: {
    emitInfo(feedback) {
      this.$root.$emit("infoAnalisisEspecificos", feedback);
    }
  },
  mounted() {
    this.$root.$on("mensaje_fileupload", (arg) => {
      if (arg.gerunds != ""){
        this.html_gerundios = arg.gerunds.html_response;
        this.fb_gerundios[0].nro_errores = arg.gerunds.flag.LexicoGramaticalGerundiosExcesivo;
      }
      else this.showErrorGerundios = true;
    });
  },
};
</script>
