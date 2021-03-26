<template>
  <div id="Thot">
    <Navbar />
    <splitpanes vertical>
      <pane min-size="50" size="73">
        <div class="row" style="padding-left: 15px; padding-right: 15px">
          <div class="col-md-12">
            <FileUpload />
            <br />
            <b-tabs content-class="mt-3">
              <b-tab
                title="Editor de texto"
                active
                @click="sendFeedbackModal(data_general)"
              >
                <TabEditor />
              </b-tab>
              <b-tab
                title="Léxico gramatical"
                @click="sendFeedbackModal(data_lexicoGramatical)"
              >
                <TabAnalisisLexicoGramatical />
              </b-tab>
              <b-tab title="Formal" @click="sendFeedbackModal(data_formal)">
                <TabAnalisisFormal />
              </b-tab>
              <b-tab title="Estilo" @click="sendFeedbackModal(data_estilo)">
                <TabAnalisisEstilo />
              </b-tab>
              <!-- <b-tab title="Discursivo" @click="sendFeedbackModal(data_discursivo)"> -->
              <b-tab disabled title="Discursivo">
                <TabAnalisisDiscursivo />
              </b-tab>
            </b-tabs>
          </div>
        </div>
      </pane>
      <pane min-size="20" size="27">
        <div class="row" style="padding-left: 15px; padding-right: 20px">
          <div class="col-md-12">
            <RightPanel />
          </div>
        </div>
      </pane>
    </splitpanes>
  </div>
</template>
  
<script>
import Navbar from "@/components/Navbar.vue";
import TabEditor from "@/components/TabEditor.vue";
import TabAnalisisLexicoGramatical from "@/components/TabAnalisisLexicoGramatical.vue";
import TabAnalisisFormal from "@/components/TabAnalisisFormal.vue";
import TabAnalisisEstilo from "@/components/TabAnalisisEstilo.vue";
import TabAnalisisDiscursivo from "@/components/TabAnalisisDiscursivo.vue";
import RightPanel from "@/components/RightPanel.vue";
import FileUpload from "@/components/FileUpload.vue";

import { Splitpanes, Pane } from "splitpanes";
import "splitpanes/dist/splitpanes.css";

export default {
  name: "Thot",
  components: {
    Splitpanes,
    Pane,
    TabEditor,
    TabAnalisisLexicoGramatical,
    TabAnalisisFormal,
    TabAnalisisEstilo,
    TabAnalisisDiscursivo,
    RightPanel,
    FileUpload,
    Navbar,
  },
  data() {
    return {
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
      // data_discursivo: [
      //   { label: "Análisis concordancia", count: 7 },
      //   { label: "Proposito", count: 3 },
      // ],
    };
  },
  mounted() {
    this.$root.$on("mensaje_fileupload", (arg) => {
      this.data_lexicoGramatical[0].count = JSON.parse(arg.gerunds).flag.LexicoGramaticalGerundiosExcesivo;
      this.data_formal[0].count           = JSON.parse(arg.oraciones).flag.FormalOracionesExtensas;
      this.data_formal[1].count           = JSON.parse(arg.oraciones).flag.FormalOracionesBreves;
      this.data_formal[2].count           = JSON.parse(arg.micro_paragraphs).flag.FormalParrafosExtensos;
      this.data_formal[3].count           = JSON.parse(arg.micro_paragraphs).flag.FormalParrafosBreves;
      this.data_estilo[0].count           = JSON.parse(arg.conectores).flag.EstiloConectores;
      this.data_estilo[1].count           = JSON.parse(arg.passive_voice).flag.EstiloVozPasiva;
      this.data_estilo[2].count           = JSON.parse(arg.fs_person).flag.EstiloPrimeraPersonaSingular;
      this.data_estilo[3].count           = JSON.parse(arg.fs_person).flag.EstiloSegundaPersonaSingular;

      this.data_general[0].count          = this.sumarNumeroErrores(this.data_lexicoGramatical).count;
      this.data_general[1].count          = this.sumarNumeroErrores(this.data_formal).count;
      this.data_general[2].count          = this.sumarNumeroErrores(this.data_estilo).count;
      // this.data_general[3].count         = this.sumarNumeroErrores(this.data_discursivo).count;
    });
  },
  methods: {
    sendFeedbackModal(data) {
      this.$root.$emit("mensaje_estadistica_modal", data);
    },
    sumarNumeroErrores(data) {1
      return data.reduce((a, b) => {
        return {count: a.count + b.count} 
      });
    }
  },
};
</script>

<style>
.splitpanes--vertical > .splitpanes__splitter {
  min-width: 10px;
  background: linear-gradient(90deg, #ccc, #111);
}

span {
  text-align: justify;
}
</style>
