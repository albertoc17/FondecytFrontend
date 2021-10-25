<template>
  <div id="LeftPanel">
    <div class="row" style="margin: 0%">
      <div class="col-md-12">
        <FileUpload />
        <br />
        <b-tabs content-class="mt-3">
          <b-tab
            v-for="(a, index) in analisis"
            :key="index"
            :title="a.tabTitle"
            @click="
              saveAnalysisGroupTab(index);
              saveAnalysisTab(null);
            "
          >
            <TabGeneral :analysisTypes="a.analysisTypes" />
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { Analisis } from "@/includes/constants.js";
import TabGeneral from "@/components/Tabs/TabGeneral.vue";
import FileUpload from "@/components/FileUpload.vue";

export default {
  name: "LeftPanel",
  components: {
    TabGeneral,
    FileUpload,
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
#LeftPanel {
  text-align: justify;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 93vh;
  padding-top: 10px;
}
</style>
