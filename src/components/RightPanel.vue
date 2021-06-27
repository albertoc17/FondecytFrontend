<template>
  <div id="RightPanel">
    <div v-if="modoInformacion === 'feedback'">
      <b-tabs v-model="tabIndex" class="mt-3">
        <b-tab title="Retroalimentación" active>
          <div v-if="show">
            <Barchart :chartData="chartData" />
            <Retroalimentacion :feedback="feedback" />
          </div>
          <div v-else>
            <h6>Cargue un documento por favor</h6>
          </div>
        </b-tab>
        <b-tab title="Concordancia">
          <TabConcordancia />
        </b-tab>
        <b-tab title="Detalle retroalimentación">
          <Detalle />
        </b-tab>
      </b-tabs>
    </div>
    <div v-else-if="modoInformacion === 'estadistica'">
      <b-tabs content-class="mt-3">
        <b-tab title="Retroalimentación" active>
          <div v-if="show">
            <Barchart :chartData="chartData" />
          </div>
          <div v-else>
            <h6>Cargue un documento por favor</h6>
          </div>
        </b-tab>
        <b-tab title="Concordancia">
          <TabConcordancia />
        </b-tab>
        <b-tab title="Detalle retroalimentación">
          <Detalle />
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import Barchart from "./Barchart.vue";
import Retroalimentacion from "./TabRetroalimentacion.vue";
import Detalle from "./Detalle.vue";
import TabConcordancia from "./TabConcordancia.vue";


export default {
  name: "RightPanel",
  components: {
    Barchart,
    Retroalimentacion,
    Detalle,
    TabConcordancia
  },
  data() {
    return {
      tabIndex: 0,
      chartData: null,
      feedback: null,
      id_analisis: null,
      show: null,
      modoInformacion: "estadistica",
    };
  },
  mounted() {
    this.$root.$on("mensaje_fileupload", (data) => {
      this.show = data;
    });
    this.$root.$on("activeTabIndex", () => {
      this.tabIndex = 2;
    });
    this.$root.$on("mensaje_feedback_modal", (feedback) => {
      this.modoInformacion = "feedback";
      this.feedback = feedback;
      //this.chartData.labels = feedback.map((d) => d.label);
      this.chartData = {
        labels: feedback.map((d) => d.label),
        datasets: [
          {
            backgroundColor: feedback.map((d) => d.style),
            data: feedback.map((d) => d.nro_errores),
            borderWidth: 2,
          },
        ],
      };
    });
    this.$root.$on("mensaje_estadistica_modal", (data) => {
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
  },
};
</script>

<style>
#RightPanel {
  text-align: justify;
  padding-top: 10px;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 93vh;
  padding: 0;
}
.resumen {
  padding-top: 600px;
}
</style>
