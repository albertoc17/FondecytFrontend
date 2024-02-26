<template>
  <div id="ConsultaProcesos">
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
            Conceptualizacion
          </a>
          <a
            href="#"
            class="tab"
            data-toggle-target=".tab-content-2"
            :class="{ 'active': isSelected(1) }"
            @click="selected = 1"
          >
            Ideación
          </a>
          <a
            href="#"
            class="tab"
            data-toggle-target=".tab-content-3"
            :class="{ 'active': isSelected(2) }"
            @click="selected = 2"
          >
            Transcripción<br>Traducción
          </a>
        </nav>
        <div class="tabs__content tab-content tab-content-1"
          :class="{ 'active': isSelected(0) }">
          <Conceptualizacion />
        </div>
        <div
          class="tabs__content tab-content tab-content-2"
          :class="{ 'active': isSelected(1) }"
        >
          <Ideacion />
        </div>
        <div
          class="tabs__content tab-content tab-content-3"
          :class="{ 'active': isSelected(2) }"
        >
          <Transcripcion />
        </div>

      </div>
      <!-- / tabs -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { Analisis } from "@/includes/constants.js";
import Conceptualizacion from "@/components/TabConceptualizacion.vue";
import Ideacion from "@/components/TabIdeacion.vue";
import Transcripcion from "@/components/TabTranscripcion.vue";

export default {
  name: "ConsultaProcesos",
  components: {
    Conceptualizacion,
    Ideacion,
    Transcripcion
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