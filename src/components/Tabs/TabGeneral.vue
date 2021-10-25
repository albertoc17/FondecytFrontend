<template id="TabGeneral">
  <div class="row">
    <div class="col-md-12">
      <b-tabs content-class="mt-3">
        <b-tab
          v-for="(a, index) in analysisTypes"
          :key="index"
          :title="a.analysisTitle"
          @click="saveAnalysisTab(a.endpoint)"
        >
          <TabEditor :endpoint="a.endpoint" />
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import TabEditor from "@/components/Tabs/TabEditor.vue";
import { mapActions } from "vuex";

export default {
  name: "TabGeneral",
  props: ["analysisTypes"],
  components: {
    TabEditor,
  },
  methods: {
    ...mapActions(["saveAnalysisTab", "saveAnalysisGroupTab"]),
  },
};
</script>
