<template id="TabGeneral">
  <div class="row">
    <div class="col-md-12">
      <b-tabs content-class="mt-3">
        <b-tab
          v-for="(a, index) in analysisTypes"
          :key="index"
          :title="a.analysisTitle"
          @click="
            saveAnalysisTab(a.endpoint);
            tabRetro();
          "
        >
          <Editor :endpoint="a.endpoint" />
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import Editor from "@/components/Editor.vue";
import { mapActions } from "vuex";

export default {
  name: "TabGeneral",
  props: ["analysisTypes"],
  components: {
    Editor,
  },
  methods: {
    ...mapActions(["saveAnalysisTab", "saveAnalysisGroupTab"]),
    tabRetro() {
      this.$root.$emit("tabRetro");
    },
  },
};
</script>
