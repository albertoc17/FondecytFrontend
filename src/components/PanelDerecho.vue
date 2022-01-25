<template>
  <div id="PanelDerecho">
    <div class="container block-tabs">
      <header class="cont-tit">
        <h2 class="tit">Acerca de tu texto y otros apoyos</h2>
      </header>
      <!-- tabs -->
      <div class="content">
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
            data-toggle-target=".tab-content-3"
            :class="{ 'active': isSelected(2) }"
            @click="selected = 2"
          >
            Cápsulas
          </a>
        </nav>
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
          :class="{ 'active': isSelected(2) }"
        >
        <TabCapsulas />

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
import TabConcordancia from "@/components/Tabs/TabConcordancia.vue";
import TabCapsulas from "@/components/Tabs/TabCapsulas.vue";

export default {
  name: "PanelDerecho",
  components: {
    TabRetroalimentacion,
    TabConcordancia,
    TabCapsulas,
  },
  data() {
    return {
      analisis: Analisis,
      selected: 0,
    };
  },
  computed: {
    ...mapActions(["saveAnalysisGroupTab", "saveAnalysisTab"]),
    ...mapGetters({ retroalimentacion: "getRetroalimentacion" }),
  },
  methods: {
    isSelected(i) {
      return i === this.selected;
    },
  },
};
</script>