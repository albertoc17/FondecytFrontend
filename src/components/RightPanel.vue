<template>
  <div id="RightPanel">
    <!-- class="position-fixed" -->
    <div v-if="modoInformacion === 'feedback'">
      <b-tabs content-class="mt-3">
        <b-tab title="Retroalimentación" active>
          <div
            class="row"
            :class="[fb.estilo]"
            v-for="(fb, index) in feedback"
            :key="index"
          >
            <div v-if="fb.nro_errores > 0"> 
              {{fb.nro_errores}}
              <div class="col-md-12">
                <p style="padding: 0px; margin: 0px">{{ fb.feedback_negativo }}</p>
                <div>
                  <router-link
                    :to="getUrl(index)"
                    target="_blank"
                    style="font-size: 13px; text-align: center"
                  >
                    Ver detalles <b-icon-arrow-up-right> </b-icon-arrow-up-right>
                  </router-link>
                </div>
                <br />
              </div>
            </div>
            <div v-else>
              <div class="col-md-12">
                <p> {{fb.feedback_positivo }} </p>
              </div>
            </div>
          </div>
        </b-tab>
        <b-tab title="Concordancia">
          <BusquedaConcordancia />
          <br>
        </b-tab>
      </b-tabs>
    </div>
    <div v-else-if="modoInformacion === 'estadistica'">
      <div class="row resumen">
        <div class="col-md-12">
          <Barchart :chartData="chartData" />
        </div>
      </div>
      <br />
    </div>  
  </div>
</template>

<script>
import Barchart from "./Barchart.vue";
import BusquedaConcordancia from "./BusquedaConcordancia"
export default {
  name: "RightPanel",
  components: {
    Barchart,
    BusquedaConcordancia
  },
  data() {
    return {
      chartData: null,
      feedback: null,
      modoInformacion: "estadistica",
    };
  },
  methods: {
    getUrl(index) {
      return "DetallesFeedback/" + this.feedback[index].id;
    },
  },
  mounted() {
    this.$root.$on("mensaje_feedback_modal", (feedback) => {
      this.modoInformacion = "feedback";
      this.feedback = feedback;
      console.log(this.feedback);
    });
    this.$root.$on("mensaje_estadistica_modal", (data) => {
      this.modoInformacion = "estadistica";
      this.chartData = {
        labels: data.map((d) => d.label),
        datasets: [
          {
            label: "# de posibles mejoras",
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
}
.resumen {
  background-color: rgba(56, 136, 211, 0.15);
  padding-top: 15px;
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
