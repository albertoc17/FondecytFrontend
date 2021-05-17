<template>
  <div id="RightPanel">
    <!-- class="position-fixed" -->
    <div v-if="modoInformacion === 'feedback'">
      <b-tabs content-class="mt-3">
        <b-tab title="Retroalimentación" active>
          <Barchart :chartData="chartData" />
          <Retroalimentacion :feedback="feedback" />
        </b-tab>
        <b-tab title="Concordancia">
          <TabConcordancia />
        </b-tab>
      </b-tabs>
    </div>
    <div v-else-if="modoInformacion === 'estadistica'">
      <b-tabs content-class="mt-3">
        <b-tab title="Retroalimentación" active>
          <Barchart :chartData="chartData" />
        </b-tab>
        <b-tab title="Concordancia">
          <TabConcordancia />
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import Barchart from "./Barchart.vue";
import TabConcordancia from "./TabConcordancia";
import Retroalimentacion from "./TabRetroalimentacion.vue";

export default {
  name: "RightPanel",
  components: {
    Barchart,
    TabConcordancia,
    Retroalimentacion,
  },
  data() {
    return {
      chartData: null,
      feedback: null,
      modoInformacion: "estadistica",
    };
  },
  mounted() {
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
}
.resumen {
  /* background-colo  r: rgba(56, 136, 211, 0.15); */
  padding-top: 600px;
}
.amarillo {
  background-color: rgba(246, 248, 102, 0.3);
  padding-top: 15px;
  padding-bottom: 15px;
}
.naranjo {
  background-color: rgba(252, 210, 91, 0.3);
  padding-top: 15px;
  padding-bottom: 15px;
}
/* div.fixed {
  position: fixed;
} */
</style>
