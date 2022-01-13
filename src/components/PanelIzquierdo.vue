<template>
  <div id="PanelIzquierdo">
    <div class="container">
      <header class="enc-txt">
        <h1 class="tit">Tu texto</h1>
        <p class="doc-name">mecanicacuantica.doc</p>
      </header>
      <FileUpload />
      <Editor />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { Analisis } from "@/includes/constants.js";
import FileUpload from "@/components/FileUpload.vue";
import Editor from "@/components/Editor.vue";

export default {
  name: "LeftPanel",
  components: {
    FileUpload,
    Editor
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
#PanelIzquierdo {
  text-align: justify;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 95vh;
} 
</style>
