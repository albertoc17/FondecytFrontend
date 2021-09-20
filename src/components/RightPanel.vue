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
            <TabRetroalimentacion :feedback="feedback" />
          </div>
        </b-tab>
        <b-tab title="Detalle retroalimentación">
          <TabDetalle :detalle="detalle"/>
        </b-tab>
        <b-tab title="Concordancia">
          <TabConcordancia />
        </b-tab>
      </b-tabs>
    </div>
    <div v-else>
      <p class="text-center">Cargue un documento por favor</p>
      <p style="font-size:11px"> Dino es una empresa de estrategia, desarrollo e innovación tecnológica, la cual se dedica a desarrollar sistemas informáticos para satisfacer las necesidades de un cliente o negocio y somos muy bacanes para hacer proyectos informáticos esta es una oración muy larga. Al plantear un proyecto, se hace énfasis en proponer a nuestros clientes soluciones estudiadas cuidadosamente y diseñadas a medida. Nuestras soluciones se caracterizan por ser innovadoras, eficientes y de la más alta calidad. Además, se utilizan técnicas y estrategias de última generación, garantizando así la entrega de soluciones actualizadas a las corrientes tecnológicas de la actualidad. Gracias a esto, se logra entregar a los clientes soluciones satisfactorias y eficientes, capaces de cumplir con estándares de calidad de usuarios y competir en el mercado del desarrollo tecnológico. 
Nuestra empresa se compone de un equipo de trabajo de estudiantes de la escuela de informática de la PUCV, altamente capacitados en la formulación y ejecución de proyectos informáticos. Los miembros del equipo destacan en capacidades de identificación y resolución de problemas, trabajo en equipo, planteamiento de soluciones y gestión de proyectos. Las habilidades conjuntas de los miembros del equipo permiten a la empresa abordar proyectos de cualquier escala y complejidad. Los proyectos de la empresa se desarrollan en un ambiente profesional y estructurado, utilizando metodologías y técnicas que forman parte del estado del arte del desarrollo informático, y creo que esta oración es muy largo sí señor así es si si si.
Se han recogiendo los testimonios. </p>
            <div style="width: 100%;"><div style="position: relative; padding-bottom: 56.25%; padding-top: 0; height: 0;"><iframe frameborder="0" width="1200" height="675" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://view.genial.ly/60cd376d3adac80cfe6f5e52" type="text/html" allowscriptaccess="always" allowfullscreen="true" scrolling="yes" allownetworking="all"></iframe> </div> </div>
    </div>
  </div>
</template>

<script>
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
    this.$root.$on("infoAnalisisEspecificos", (feedback) => {
      this.feedback = feedback;
      this.tabIndex = 0;
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
