<template>
  <div id="PanelDerecho">
    <div class="container block-tabs">
      <header class="cont-tit">
        <h2 class="tit">Acerca de tu texto y otros apoyos</h2>
      </header>
      <!-- tabs -->
      <div class="content">

          <b-nav test1>
              <b-nav-item
                data-toggle-target=".tab-content-1"
                :class="{ 'active': isSelected(0) }"
                @click="selected = 0">Análisis</b-nav-item>
              <b-nav-item
                      data-toggle-target=".tab-content-2"
                      :class="{ 'active': isSelected(1) }"
                      @click="selected = 1" >Concordancia</b-nav-item>
              <b-nav-dropdown
                      id="dropdown_test"
                      text="Consulta Procesos"
                      toggle-class="nav-link-custom"
                      right
              >
                  <b-dropdown-item
                          data-toggle-target=".tab-content-4"
                          :class="{ 'active': isSelected(4) }"
                          @click="selected = 4"
                  >Conceptualización</b-dropdown-item>
                  <b-dropdown-item data-toggle-target=".tab-content-5"
                                   :class="{ 'active': isSelected(5) }"
                                   @click="selected = 5"
                  >Ideación</b-dropdown-item>
                  <b-dropdown-item data-toggle-target=".tab-content-6"
                                   :class="{ 'active': isSelected(6) }"
                                   @click="selected = 6"
                  >Transcripción Traducción</b-dropdown-item>
                  <b-dropdown-item data-toggle-target=".tab-content-7"
                                   :class="{ 'active': isSelected(7) }"
                                   @click="selected = 7"
                  >Traducción Reconceptualización</b-dropdown-item>

              </b-nav-dropdown>
              <b-nav-item
                          data-toggle-target=".tab-content-3"
                          :class="{ 'active': isSelected(3) }"
                          @click="selected = 3"
              >Cápsulas</b-nav-item>
          </b-nav>
        <!--
        <nav class="tabs__bar tab-btns">
          <a
            href="#"
            class="tab"
            data-toggle-target=".tab-content-1"
            :class="{ 'active': isSelected(0) }"
            @click="selected = 0"
          >
            Análisis
          </a>
          <a
            href="#"
            class="tab"
            data-toggle-target=".tab-content-2"
            :class="{ 'active': isSelected(1) }"
            @click="selected = 1"
          >
            Concordancia
          </a>
          <a
            href="#"
            class="tab"
            data-toggle-target=".tab-content-4"
            :class="{ 'active': isSelected(2) }"
            @click="selected = 2"
          >
            Consulta Procesos
          </a>
          <a
            href="#"
            class="tab"
            data-toggle-target=".tab-content-3"
            :class="{ 'active': isSelected(3) }"
            @click="selected = 3"
          >
            Cápsulas
          </a>
        </nav>
        -->
        <div class="tabs__content tab-content tab-content-1"
          :class="{ 'active': isSelected(0) }">
          <TabRetroalimentacion />
        </div>
        <div
          class="tabs__content tab-content tab-content-2"
          :class="{ 'active': isSelected(1) }"
        >
          <TabConcordancia />
        </div>
        <div
          class="tabs__content tab-content tab-content-3"
          :class="{ 'active': isSelected(3) }"
        >
          <TabCapsulas />
        </div>

        <div
                class="tabs__content tab-content tab-content-4"
                :class="{ 'active': isSelected(4) }"
        >
            <tabConceptualizacion />
        </div>
        <div
                class="tabs__content tab-content tab-content-5"
                :class="{ 'active': isSelected(5) }"
        >
            <tabIdeacion />
        </div>
          <div
                  class="tabs__content tab-content tab-content-6"
                  :class="{ 'active': isSelected(6) }"
          >
              <tabTranscripcion />
          </div>
          <div
                  class="tabs__content tab-content tab-content-7"
                  :class="{ 'active': isSelected(7) }"
          >
              <tabReconceptualizacion />
          </div>
      </div>
      <!-- / tabs -->
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { Analisis } from "@/includes/constants.js";
import TabRetroalimentacion from "@/components/TabRetroalimentacion.vue";
import TabConcordancia from "@/components/TabConcordancia.vue";

import TabCapsulas from "@/components/TabCapsulas.vue";
import tabConceptualizacion from "./TabConceptualizacion.vue";
import tabIdeacion from "./TabIdeacion.vue";
import tabTranscripcion from "./TabTranscripcion.vue";
import tabReconceptualizacion from "./TabReconceptualizacion.vue";
export default {
  name: "PanelDerecho",
  components: {
    TabRetroalimentacion,
    TabConcordancia,
    TabCapsulas,
      tabConceptualizacion,
      tabIdeacion,
      tabTranscripcion,
      tabReconceptualizacion,
  },
  data() {
    return {
      analisis: Analisis,
      selected: 0,
    };
  },
  computed: {
    ...mapActions(["saveAnalysisGroupTab", "saveAnalisisPantalla"]),
    ...mapGetters({ retroalimentacion: "getRetroalimentacion" }),
  },
  methods: {
    isSelected(i) {
      return i === this.selected;
    },
  },
};
</script>