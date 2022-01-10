<template>
  <div id="PanelIzquierdo">
    <div class="container">
      <header class="enc-txt">
        <h1 class="tit">Tu texto</h1>
        <p class="doc-name">mecanicacuantica.doc</p>
      </header>
      <FileUpload />
      <Editor2 />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { Analisis } from "@/includes/constants.js";
import FileUpload from "@/components/FileUpload.vue";
import Editor2 from "@/components/Editor2.vue";

export default {
  name: "LeftPanel",
  components: {
    FileUpload,
    Editor2
  },
  data() {
    return {
      analisis: Analisis,
    };
  },
  methods: {
    ...mapActions(["saveAnalysisGroupTab", "saveAnalysisTab"]),
  },
};
</script>

<style>
/* #PanelIzquierdo {
  text-align: justify;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 93vh;
  padding-top: 10px;
} */
</style>
