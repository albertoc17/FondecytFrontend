<template>
  <div id="Estadisticas" v-if="estadisticas">
    <h4>Estadísticas</h4>
    <div class="row">
      <div class="col-md-12">
        Número de Párrafos: {{ estadisticas.analysis.paragraphs }}
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        Número de Oraciones: {{ estadisticas.analysis.total_sentences }}
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        Número de Palabras: {{ estadisticas.analysis.total_words }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Estadisticas",
  props: ["estadisticas"],
  data() {
    return {
    };
  },
};
</script>

<style>
#Estadisticas {
  margin: 5%;
  text-align: center;
}
</style>
  