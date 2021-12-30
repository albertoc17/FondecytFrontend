<template>
  <div id="SubSidenav">
    <ul
      v-for="(a, index) in analysisTypes"
      :key="index"
      @click="
        saveAnalysisTab(a.endpoint);
        tabRetro();
      "
      class="panel"
    >
      <li> <!-- class="link-active" -->
        <a :href="'##'+index"> {{ a.analysisTitle }} <span class="arrow"></span></a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { Analisis } from "@/includes/constants.js";

export default {
  name: "Sidenav",
  props: ["analysisTypes"],
  components: {
    // TabGeneral,
    // FileUpload,
  },
  data() {
    return {
      analisis: Analisis,
    };
  },
  methods: {
    ...mapActions(["saveAnalysisTab", "saveAnalysisGroupTab"]),
    tabRetro() {
      this.$root.$emit("tabRetro");
    },
  },
};
</script>


