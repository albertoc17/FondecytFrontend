<template>
  <div id="PanelDerecho">
    <div class="container block-tabs">
      <header class="cont-tit">
        <h2 class="tit">Retroalimentación</h2>
      </header>
      <!-- tabs -->
      <div class="content">
        <nav class="tabs__bar tab-btns">
          <a
            href="#"
            class="tab active"
            data-toggle-target=".tab-content-1"
            >Acerca de tu texto
          </a>
          <a href="#" class="tab" data-toggle-target=".tab-content-2"
            >Concordancia
          </a>
          <a href="#" class="tab" data-toggle-target=".tab-content-3"
            >Cápsulas
          </a>
        </nav>
        <TabRetroalimentacion2 /> 
        <div class="tab-content tab-content-2">b</div>
        <div class="tab-content tab-content-3">c</div>
      </div>
      <!-- / tabs -->
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { Analisis } from "@/includes/constants.js";
import TabRetroalimentacion2 from "@/components/TabRetroalimentacion2.vue";
// import TabGeneral from "@/components/Tabs/TabGeneral.vue";
// import FileUpload from "@/components/FileUpload.vue";

export default {
  name: "LeftPanel",
  components: {
    // TabGeneral,
    // FileUpload,
    TabRetroalimentacion2
  },
  data() {
    return {
      analisis: Analisis,
    };
  },
  methods: {
    ...mapActions(["saveAnalysisGroupTab", "saveAnalysisTab"]),
  },
};
</script>

<style>
#PanelIzquierdo {
  text-align: justify;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 93vh;
  padding-top: 10px;
}
</style>
