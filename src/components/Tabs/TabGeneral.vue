<template id="TabGeneral">
  <div class="row">
    <div class="col-md-12">
      <b-tabs content-class="mt-3">
        <b-tab v-for="(a, index) in tipo_analisis" :key="index"
          :title="index"
          @click="emitInfo(a.TiposAnalisis)"
        >
          <div v-if="showError">
            <ErrorHtml/>
          </div>
          <div v-else>
            <TabEditor2 :tipo_analisis="a.endpoint"/>
          </div>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import TabEditor2 from "@/components/Tabs/TabEditor2.vue";
import ErrorHtml from "../ErrorHtml.vue";

export default {
  name: "TabGeneral",
  props: ['tipo_analisis'],
  components: {
    TabEditor2,
    ErrorHtml
  },
  data() {
    return {
      html_response: "",
      showError: false,
      html: "",
    };
  },
  methods: {
    emitInfo(feedback) {
      this.$root.$emit("infoAnalisisEspecificos", feedback);
    }
  }
};
</script>
