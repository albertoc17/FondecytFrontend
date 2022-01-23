<template>
  <div id="PanelIzquierdo">
    <div class="container">
      <header class="enc-txt">
        <h1 class="tit">Tu texto</h1>
        <p class="doc-name">{{ this.filename }}</p>
      </header>
      <FileHandler />
      <Editor />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { Analisis } from "@/includes/constants.js";
import FileHandler from "@/components/FileHandler.vue";
import Editor from "@/components/Editor.vue";

export default {
  name: "LeftPanel",
  components: {
    FileHandler,
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
  computed: {
    ...mapGetters({filename: "getFilename"})
  }
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
