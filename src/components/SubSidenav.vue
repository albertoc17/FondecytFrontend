<template>
  <div id="SubSidenav">
    <ul class="panel">
      <li
        v-for="(a, index) in analysisTypes"
        :key="index"
        :class="{ 'link-active': isSelected(index) }"
        @click="
          saveAnalysisTab({
            endpoint: a.endpoint,
            selected: index,
          });
          tabRetro();
        "
      >
        <!-- <a :href="'##' + index"> -->
        <a href="#"> {{ a.analysisTitle }} <span class="arrow"></span> </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { Analisis } from "@/includes/constants.js";

export default {
  name: "Sidenav",
  props: ["analysisTypes"],
  components: {},
  data() {
    return {
      analisis: Analisis,
    };
  },
  computed: {
    ...mapGetters(["getSelectedTabIndex"]),
  },
  methods: {
    ...mapActions(["saveAnalysisTab", "saveAnalysisGroupTab"]),
    tabRetro() {
      this.$root.$emit("tabRetro");
    },
    isSelected(i) {
      return i === this.getSelectedTabIndex;
    },
  },
};
</script>

