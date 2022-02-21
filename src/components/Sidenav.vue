<template>
  <div id="Sidienav" class="sidenav desktop">
    <!-- logo -->
    <figure class="cont-logo">
      <a href="#">
        <img src="@/assets/imag/v1/logos/logo_main.svg" alt="" />
      </a>
    </figure>
    <h2 class="subtit">Tipos de Análisis</h2>
    <section class="cont-accordion">
      <div v-for="(a, index) in analisis" :key="index" class="row-accordion">
        <!-- saveAnalysisGroupTab(index);
            saveAnalisisPantalla(null); -->
        <div
          class="enc-accordion"
        > <!-- class="enc-accordion active" -->
          <div class="content ">
            <span class="ic-txt"></span>
            <p>{{ a.tabTitle }}</p>
          </div>
          <!-- <span class="btn-accordion"></span> -->
        </div>
        <SubSidenav :analysisTypes="a.analysisTypes" />
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { Analisis } from "@/includes/constants.js";
import SubSidenav from "@/components/SubSidenav.vue";

export default {
  name: "Sidenav",
  components: {
    SubSidenav
  },
  data() {
    return {
      analisis: Analisis,
    };
  },
  methods: {
    ...mapActions(["saveAnalysisGroupTab", "saveAnalisisPantalla"]),
  },
};
</script>

<style scoped>
figure {
  margin:0;
}
</style>


