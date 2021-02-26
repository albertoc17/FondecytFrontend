<template>
  <div id="thot">
    <Navbar />
    <splitpanes vertical>
      <pane min-size="50" size="75">
        <div class="row" style="padding-left: 15px; padding-right: 15px;">
          <div class="col-md-12">
            <FileUpload />
            <br/>
            <b-tabs content-class="mt-3">
              <b-tab title="Editor de texto" active @click="sendFeedbackModal(data_general)">
                <tabeditor />
              </b-tab>
              <b-tab title="Léxico gramatical" @click="sendFeedbackModal(data_lexicoGramatical)">
                <analisisLexicoGramatical />
              </b-tab>
              <b-tab title="Formal" @click="sendFeedbackModal(data_formal)">
                <analisisFormal />
              </b-tab>
              <b-tab title="Estilo" @click="sendFeedbackModal(data_estilo)">
                <analisisEstilo />
              </b-tab>
              <!-- <b-tab title="Discursivo" @click="sendFeedbackModal(data_discursivo)"> -->
              <b-tab title="Discursivo">
                <analisisDiscursivo />
              </b-tab>
            </b-tabs>
          </div>
        </div>
      </pane>
      <pane min-size="20" size="25">
        <div class="row" style="padding-left: 15px; padding-right: 20px;">
          <div class="col-md-12">
            <ModalInformativo />
          </div>
        </div>
      </pane>
    </splitpanes>
  </div>
</template>
  
<script>
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import tabeditor from "../components/tab_editor.vue";
import analisisLexicoGramatical from "../components/analisisLexicoGramatical.vue";
import analisisFormal from "../components/analisisFormal.vue";
import analisisEstilo from "../components/analisisEstilo.vue";
import analisisDiscursivo from "../components/analisisDiscursivo.vue";
import ModalInformativo from "../components/ModalInformativo.vue";
import FileUpload from "../components/FileUpload.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "thot",
  components: {
    Splitpanes, 
    Pane,
    tabeditor,
    analisisLexicoGramatical,
    analisisFormal,
    analisisEstilo,
    analisisDiscursivo,
    ModalInformativo,
    FileUpload,
    Navbar
  },
  data() {
    return {
      data_general: [
        { label: "Léxico Gramatical", count: 0 },
        { label: "Formal", count: 0 },
        { label: "Estilo", count: 0 },
        { label: "Discursivo", count:0 },
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
      console.log(arg);
      this.data_lexicoGramatical[0].count = JSON.parse(arg.gerunds).flag.LexicoGramaticalGerundiosExcesivo;
      this.data_formal[0].count = JSON.parse(arg.oraciones).flag.FormalOracionesExtensas;
      this.data_formal[1].count = JSON.parse(arg.oraciones).flag.FormalOracionesBreves;
      this.data_formal[2].count = JSON.parse(arg.micro_paragraphs).flag.FormalParrafosExtensos;
      this.data_formal[3].count = JSON.parse(arg.micro_paragraphs).flag.FormalParrafosBreves;
      this.data_estilo[0].count = JSON.parse(arg.conectores).flag.EstiloConectores;
      this.data_estilo[1].count = JSON.parse(arg.passive_voice).flag.EstiloVozPasiva;
      this.data_estilo[2].count = JSON.parse(arg.fs_person).flag.EstiloPrimeraPersonaSingular;
      this.data_estilo[3].count = JSON.parse(arg.fs_person).flag.EstiloSegundaPersonaSingular;
      console.table(this.data_lexicoGramatical);
      console.table(this.data_formal);
      console.table(this.data_estilo);
    });
  },
  methods: {
    sendFeedbackModal(data) {
      this.$root.$emit("mensaje_estadistica_modal", data);
    },
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
