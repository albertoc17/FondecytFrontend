<template>
  <div id="Thot">
    <Navbar />
    <splitpanes class="default-theme" vertical style="position:'relative' , overflow:'hidden'">
      <pane min-size="50" size="70" class="leftPane">
        <div class="row" style="margin:0%">
          <div class="col-md-12" >
            <FileUpload />
            <br />
            <b-tabs content-class="mt-3">
              <b-tab v-for="(a, index) in analisis" :key="index"
                :title="a.tabTitle"
                @click="emitInfo(a)"
              >
                <TabGeneral :analysisTypes="a.analysisTypes"/>
              </b-tab>
            </b-tabs>
          </div>
        </div>
      </pane>
      <pane min-size="20" size="30">
        <div class="row">
          <div class="col-md-12">
            <RightPanel />
          </div>
        </div>
      </pane>
    </splitpanes>
  </div>
</template>
  
<script>
import { mapActions } from "vuex";
import Navbar from "@/components/Navbar.vue";
import TabGeneral from "@/components/Tabs/TabGeneral.vue";
import RightPanel from "@/components/RightPanel.vue";
import FileUpload from "@/components/FileUpload.vue";
import { Splitpanes, Pane } from "splitpanes";
import "splitpanes/dist/splitpanes.css";
import { Analisis } from "@/includes/constants.js";

export default {
  name: "Thot",
  components: {
    Splitpanes,
    Pane,
    TabGeneral,
    RightPanel,
    FileUpload,
    Navbar,
  },
  data() {
    return {
      analisis: Analisis,
      estadisticas: null,
      data_general: [
        { label: "Léxico Gramatical", count: 0 },
        { label: "Formal", count: 0 },
        { label: "Estilo", count: 0 },
        { label: "Discursivo", count: 0 },
      ],
      data_lexicoGramatical: [
        { label: "Gerundios", count: 0 },
      ],
      data_formal: [
        { label: "Oraciones Extensas", count: 0 },
        { label: "Oraciones Breves", count: 0 },
        { label: "Párrafos Extensos", count: 0 },
        { label: "Párrafos Breves", count: 0 },
      ],
      data_estilo: [
        { label: "Conectores", count: 0 },
        { label: "Voz pasiva", count: 0 },
        { label: "1ra Persona", count: 0 },
        { label: "2da Persona", count: 0 },
      ],
      data_discursivo: [
        { label: "Complejidad", count: 0 },
        { label: "Lecturabilidad", count: 0 },
      ],
      data_proposito: [
        { label: "Resumen", count: 0 },
        { label: "Introducción", count: 0 },
        { label: "Desarrollo", count: 0 },
        { label: "Resultados", count: 0 },
        { label: "Conclusión", count: 0 },
      ],
    };
  },
  mounted() {
    this.$root.$on("mensaje_fileupload", (arg) => {
      //console.table(arg.statistics);
      
      this.estadisticas = arg.statistics;
      this.data_lexicoGramatical[0].count = arg.gerunds.flag.LexicoGramaticalGerundiosExcesivo;
      this.data_formal[0].count           = arg.oraciones.flag.FormalOracionesExtensas;
      this.data_formal[1].count           = arg.oraciones.flag.FormalOracionesBreves;
      this.data_formal[2].count           = arg.micro_paragraphs.flag.FormalParrafosExtensos;
      this.data_formal[3].count           = arg.micro_paragraphs.flag.FormalParrafosBreves;
      this.data_estilo[0].count           = arg.conectores.flag.EstiloConectores;
      this.data_estilo[1].count           = arg.passive_voice.flag.EstiloVozPasiva;
      this.data_estilo[2].count           = arg.fs_person.flag.EstiloPrimeraPersonaSingular;
      this.data_estilo[3].count           = arg.fs_person.flag.EstiloSegundaPersonaSingular;
      this.data_estilo[3].count           = arg.fs_person.flag.EstiloSegundaPersonaSingular;
      this.data_discursivo[0].count       = arg.sentence_complexity.flag.DiscursivoComplejidad;
      // this.data_discursivo[0].count       = arg.sentence_complexity.flag.EstiloSegundaPersonaSingular;

      this.data_general[0].count          = this.sumarNumeroErrores(this.data_lexicoGramatical).count;
      this.data_general[1].count          = this.sumarNumeroErrores(this.data_formal).count;
      this.data_general[2].count          = this.sumarNumeroErrores(this.data_estilo).count;
      this.data_general[3].count          = this.sumarNumeroErrores(this.data_discursivo).count;
    });
  },
  methods: {
    ...mapActions(["saveGroupSelected"]),
    emitInfo(feedback) {
      this.saveGroupSelected(feedback);
    },
    // emitInfo(data) {
    //   console.log("ignorar", data);
    //   // this.$root.$emit("infoAnalisisGeneral", data, this.estadisticas);
    // },
    sumarNumeroErrores(data) {1
      return data.reduce((a, b) => {
        return {count: a.count + b.count} 
      });
    }
  },
};
</script>

<style>
span {
  text-align: justify;
}
.splitpanes--vertical > .splitpanes__splitter {
  min-width: 12px;
  background: linear-gradient(90deg, rgb(230, 230, 230), rgba(230, 230, 230, 0.6)); /* color del separador (por alguna razon debe ser con linear-gradient) */
}
.splitpanes__pane {
  background-color: white !important; /* color de los paneles (fondo default era gris) */
}

.leftPane {
  overflow-y: scroll;
  height: 93vh;
}
</style>
