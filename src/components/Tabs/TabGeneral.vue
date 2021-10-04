<template id="TabGeneral">
  <div class="row">
    <div class="col-md-12">
      <b-tabs content-class="mt-3">
        <b-tab
          v-for="(a, index) in analysisTypes"
          :key="index"
          :title="a.analysisTitle"
          @click="emitInfo(a.feedbackTypes)"
        >
          <TabEditor2 :endpoint="a.endpoint" />
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import TabEditor2 from "@/components/Tabs/TabEditor2.vue";
import { mapActions } from "vuex";

export default {
  name: "TabGeneral",
  props: ["analysisTypes"],
  components: {
    TabEditor2
  },
  data() {
    return {
    };
  },
  methods: {
    ...mapActions(["saveTabSelected"]),
    emitInfo(feedback) {
      this.saveTabSelected(feedback);
    },
  },
};
</script>
