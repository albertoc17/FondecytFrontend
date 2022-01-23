<template>
  <div class="estadisticasContainer" v-if="estadisticas">
    <!-- <div class="titulo">
      <h4>Estadísticas</h4>
    </div> -->
    <!-- <div class="cont-graphic"> -->
      <ul class="cont-txt">
        <li>
          Número de Párrafos: <span class="number"> {{ estadisticas.analysis.paragraphs }}</span>
        </li>
        <li>
          Número de Oraciones: <span class="number">{{ estadisticas.analysis.total_sentences }}</span>
        </li>
        <li>
          Número de Palabras: <span class="number">{{ estadisticas.analysis.total_words }}</span>
        </li>
      </ul>
    <!-- </div> -->
  </div>
  
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "Estadisticas",
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters({
      estadisticas: "getEstadisticasGenerales",
    }),
  },
};
</script>

<style>
.estadisticasContainer {
  display: flex;
  flex-direction: column;
  padding: 3% 0;
}
</style>
  