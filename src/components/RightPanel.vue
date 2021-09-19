<template>
  <div id="RightPanel">
    <!-- cambiar show por chartData cuando se cargue esta variable al cargar el archivo // TO DO -->
    <div v-if="show" > 
      <b-tabs v-model="tabIndex" >
        <b-tab title="Retroalimentación" active>
          <div v-if="modoInformacion === 'estadistica'"> 
            <Barchart v-if="chartData" :chartData="chartData" />
            <Estadisticas :estadisticas="estadisticas" />
          </div>
          <div v-else-if="modoInformacion === 'feedback'"> 
            <Retroalimentacion :feedback="feedback" />
          </div>
        </b-tab>
        <b-tab title="Detalle retroalimentación">
          <Detalle :detalle="detalle"/>
        </b-tab>
        <b-tab title="Concordancia">
          <TabConcordancia />
        </b-tab>
      </b-tabs>
    </div>
    <div v-else>
      <p class="text-center">Cargue un documento por favor</p>
    </div>
  </div>
</template>

<script>
import Barchart from "./Barchart.vue";
import Retroalimentacion from "./Tabs/TabRetroalimentacion.vue";
import Estadisticas from './Estadisticas.vue';
import Detalle from "./Tabs/TabDetalle.vue";
import TabConcordancia from "./Tabs/TabConcordancia.vue";


export default {
  name: "RightPanel",
  components: {
    Barchart,
    Retroalimentacion,
    Estadisticas,
    Detalle,
    TabConcordancia
  },
  data() {
    return {
      show: false,
      tabIndex: 0,
      chartData: null,
      feedback: null,
      detalle: null,
      estadisticas: null,
      modoInformacion: "estadistica",
    };
  },
  mounted() {
    this.$root.$on("mensaje_showRightPanel", () => {
      this.show = true;
    });
    this.$root.$on("infoAnalisisGeneral", (data, estadisticas) => {
      this.estadisticas = estadisticas;
      this.tabIndex = 0;
      this.modoInformacion = "estadistica";
      this.chartData = {
        labels: data.map((d) => d.label),
        datasets: [
          {
            backgroundColor: "#f87979",
            data: data.map((d) => d.count),
            borderWidth: 2,
          },
        ],
      };
    });
    this.$root.$on("infoAnalisisEspecificos", (data) => {
      this.feedback = data;
      this.tabIndex = 0;
      this.modoInformacion = "feedback";
      this.chartData = {
        labels: data.map((d) => d.label),
        datasets: [
          {
            backgroundColor: data.map((d) => d.style),
            data: data.map((d) => d.nro_errores),
            borderWidth: 2,
          },
        ],
      };
    });
    this.$root.$on("infoDetalleFeedback", (detalle) => {
      this.tabIndex = 1;
      this.detalle = detalle;
    });
  },
};
</script>

<style>
#RightPanel {
  text-align: justify;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 93vh;
  padding-top: 10px;
}
</style>
