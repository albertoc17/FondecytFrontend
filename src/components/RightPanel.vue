<template>
  <div id="RightPanel">
    <!-- cambiar show por chartData cuando se cargue esta variable al cargar el archivo // TO DO -->
    <div v-if="show">
      <b-tabs v-model="tabIndex">
        <b-tab title="Retroalimentación" active>
          <div v-if="!getRetroalimentacion.feedbackTypes">
            <Barchart :chartData="getChartData" />
            <Estadisticas :estadisticas="getEstadisticasGenerales" />
          </div>
          <div v-else>
            <TabRetroalimentacion :feedbackTypes="getRetroalimentacion.feedbackTypes" />
          </div>
        </b-tab>
        <b-tab title="Detalle">
          <TabDetalle :detalle="detalle" />
        </b-tab>
        <b-tab title="Concordancia">
          <TabConcordancia />
        </b-tab>
        <b-tab title="Cápsulas informativas">
          hola
        </b-tab>
      </b-tabs>
    </div>
    <div v-else>
      <p class="text-center">Cargue un documento por favor</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Barchart from "./Barchart.vue";
import Estadisticas from './Estadisticas.vue';
import TabRetroalimentacion from "./Tabs/TabRetroalimentacion.vue";
import TabDetalle from "./Tabs/TabDetalle.vue";
import TabConcordancia from "./Tabs/TabConcordancia.vue";

export default {
  name: "RightPanel",
  components: {
    Barchart,
    Estadisticas,
    TabRetroalimentacion,
    TabDetalle,
    TabConcordancia,
  },
  data() {
    return {
      tabIndex: 0,
      show: false,
      detalle: null,
    };
  },
  computed: {
    ...mapGetters(["getChartData", "getRetroalimentacion", "getEstadisticasGenerales"]),
  },
  mounted() {
    this.$root.$on("mensaje_showRightPanel", () => {
      this.show = true;
    });
    this.$root.$on("tabRetro", () => {
      this.tabIndex = 0;
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
