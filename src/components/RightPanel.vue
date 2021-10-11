<template>
  <div id="RightPanel">
    <!-- cambiar show por chartData cuando se cargue esta variable al cargar el archivo // TO DO -->
    <div v-if="show">
      <b-tabs v-model="tabIndex">
        <b-tab title="Retroalimentación" active>
          <!-- <div v-if="modoInformacion === 'estadisticas'">
            <Barchart v-if="chartData" :chartData="chartData" />
            <Estadisticas :estadisticas="estadisticas" />
          </div>
          <div v-else-if="modoInformacion === 'retroalimentacion'">
            <TabRetroalimentacion :feedback="feedback" />
          </div> -->
          <Barchart :chartData="chartData" v-if="1==2"/>
          <TabRetroalimentacion :feedback="feedback" />
        </b-tab>
        <b-tab title="Detalle retroalimentación">
          <TabDetalle :detalle="detalle" />
        </b-tab>
        <b-tab title="Concordancia">
          <TabConcordancia />
        </b-tab>
      </b-tabs>
    </div>
    <div v-else>
      <p class="text-center">Cargue un documento por favor</p>
      <p style="font-size: 10px">
        Dino es una empresa de estrategia, desarrollo e innovación tecnológica,
        la cual se dedica a desarrollar sistemas informáticos para satisfacer
        las necesidades de un cliente o negocio y somos muy bacanes para hacer
        proyectos informáticos esta es una oración muy larga. Al plantear un
        proyecto, se hace énfasis en proponer a nuestros clientes soluciones
        estudiadas cuidadosamente y diseñadas a medida. Nuestras soluciones se
        caracterizan por ser innovadoras, eficientes y de la más alta calidad.
        Además, se utilizan técnicas y estrategias de última generación,
        garantizando así la entrega de soluciones actualizadas a las corrientes
        tecnológicas de la actualidad. Gracias a esto, se logra entregar a los
        clientes soluciones satisfactorias y eficientes, capaces de cumplir con
        estándares de calidad de usuarios y competir en el mercado del
        desarrollo tecnológico. Nuestra empresa se compone de un equipo de
        trabajo de estudiantes de la escuela de informática de la PUCV,
        altamente capacitados en la formulación y ejecución de proyectos
        informáticos. Los miembros del equipo destacan en capacidades de
        identificación y resolución de problemas, trabajo en equipo,
        planteamiento de soluciones y gestión de proyectos. Las habilidades
        conjuntas de los miembros del equipo permiten a la empresa abordar
        proyectos de cualquier escala y complejidad. Los proyectos de la empresa
        se desarrollan en un ambiente profesional y estructurado, utilizando
        metodologías y técnicas que forman parte del estado del arte del
        desarrollo informático, y creo que esta oración es muy largo sí señor
        así es si si si. Se han recogiendo los testimonios.
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Barchart from "./Barchart.vue";
// import Estadisticas from './Estadisticas.vue';
import TabRetroalimentacion from "./Tabs/TabRetroalimentacion.vue";
import TabDetalle from "./Tabs/TabDetalle.vue";
import TabConcordancia from "./Tabs/TabConcordancia.vue";

export default {
  name: "RightPanel",
  components: {
    Barchart,
    // Estadisticas,
    TabRetroalimentacion,
    TabDetalle,
    TabConcordancia,
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
  computed: {
    ...mapState(["groupSelected"]),
  },
  mounted() {
    this.$root.$on("mensaje_showRightPanel", () => {
      this.show = true;
    });
    this.$root.$on("infoAnalisisGeneral", (data, estadisticas) => {
      this.estadisticas = estadisticas;
      // this.tabIndex = 0;
      this.modoInformacion = "estadistica";
      this.chartData = {
        labels: data.map((d) => d.label),
        datasets: [
          {
            backgroundColor: "#F87979",
            data: data.map((d) => d.count),
            borderWidth: 2,
          },
        ],
      };
    });
    this.$root.$on("infoAnalisisEspecificos", (feedback) => {
      this.feedback = feedback;
      // this.tabIndex = 0;
      this.modoInformacion = "feedback";
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
