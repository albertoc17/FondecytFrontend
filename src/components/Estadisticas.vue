<template id="Estadisticas">
  <div class="wrapper">
    <div class="cont-graphic" style="padding-bottom:0px !important">
      <ul v-if="estadisticas" class="cont-txt" style="margin-top:0px !important">
        <li>
          NÚMERO DE PÁRRAFOS: <span class="number"> {{ estadisticas.analysis.paragraphs }}</span>
        </li>
        <li>
          NÚMERO DE ORACIONES: <span class="number">{{ estadisticas.analysis.total_sentences }}</span>
        </li>
        <li>
          NÚMERO DE PALABRAS: <span class="number">{{ estadisticas.analysis.total_words }}</span>
        </li>
      </ul>  
    </div>
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
/* #Estadisticas {
  display: flex;
  flex-direction: column;
  padding: 3% 0;
} */
</style>
  