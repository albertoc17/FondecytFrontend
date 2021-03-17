<template>
  <div class="file">
    <form @submit.prevent="onSubmit">
      <br />
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-4">
          <b-form-file
            v-model="file"
            :state="Boolean(file)"
            placeholder="Escoge o arrastra un archivo..."
            drop-placeholder="Arrastra el archivo..."
          ></b-form-file>
        </div>
        <div class="col-md-3" style="margin: 0px; padding: 0px">
          <button class="btn btn-success">Enviar documento</button>
        </div>
      </div>
      <!-- <div class="row" style="text-align:left">
      <div class="col-md-10">
        <ul v-if="passive_voice" id="lista1">
          <h3><b>Resultados voz pasiva</b></h3>
          <li>Nro de voces pasivas: {{ passive_voice.count }}</li>
          <li>
            Voces pasivas:
            <ul v-if="passive_voice" id="lista1.1">
              <li v-for="(item, index) in passive_voice.wordlist" :key="index" > {{ item }} </li>
            </ul>
          </li>
        </ul>
        <ul v-if="statistics" id="lista2">
          <h3><b>Resultados de estadísticas</b></h3>
          <li>Parrafos: {{ statistics.paragraphs }}</li>
          <li>Palabras: {{ statistics.total_words }}</li>
          <li>Oraciones: {{ statistics.total_sentences }}</li>
          <li>min_words: {{ statistics.min_words }}</li>
          <li>max_words: {{ statistics.max_words }}</li>
          <li>min_sentences: {{ statistics.min_sentences }}</li>
          <li>max_sentences: {{ statistics.max_sentences }}</li>
        </ul>
      </div>
    </div> -->
    </form>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

// Init Loading plugin
Vue.use(Loading);

export default {
  name: "FileUpload",
  data() {
    return {
      file: null,
      passive_voice: null,
      statistics: null,
      oraciones: null,
      data_general: [
        { label: "Gerundios", count: 0 },
        { label: "Formal", count: 0 },
        { label: "Estilo", count: 0 },
        { label: "Discursivo", count: 0 },
      ],
      flags: null,
    };
  },
  methods: {
    async onSubmit() {
      const formData = new FormData();
      formData.append("file", this.file);
      let loader = this.$loading.show({ isFullPage: true, canCancel: false });
      try {
        this.text = await axios.post(
          "http://127.0.0.1:8000/api/FileUploadView",
          formData
        );
        // this.sendFeedbackModal(this.data_general);
        // this.passive_voice = JSON.parse(this.text.data.passive_voice);
        // this.statistics = JSON.parse(this.text.data.statistics);
        this.sendText(this.text.data);
        loader.hide();
      } catch (err) {
        console.warn(err);
        loader.hide();
      }
    },
    // sendFeedbackModal(data) {
    //   this.$root.$emit("mensaje_estadistica_modal", data);
    // },
    sendText(data) {
      this.$root.$emit("mensaje_fileupload", data);
    },
  },
};
</script>

