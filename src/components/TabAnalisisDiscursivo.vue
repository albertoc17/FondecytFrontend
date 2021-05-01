<template>
  <div class="row">
    <div class="col-md-12">
      <b-tabs content-class="mt-3">
        <b-tab title="Complejidad" active @click="sendFeedbackModal(fb_complejidad)">
          <span v-html="html_complejidad"></span>
        </b-tab>
        <b-tab title="Propósito" @click="sendFeedbackModal(fb_proposito)">
          <span v-html="html_proposito"></span>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabAnalisisDiscursivo",
  data() {
    return {
      html_proposito: "",
      html_complejidad: "",
      fb_proposito: "",
      fb_complejidad: "",
    };
  },
  methods: {
    sendFeedbackModal(analisis) {
      this.$root.$emit("mensaje_feedback_modal", analisis);
    },
  },
  mounted() {
    this.$root.$on("mensaje_fileupload", (arg) => {
      // this.html_proposito = JSON.parse(arg.proposito).html_response;
      this.html_complejidad = JSON.parse(arg.sentence_complexity).html_response;

      // this.fb_proposito = JSON.parse(arg.proposito).feedback;
      this.fb_complejidad = JSON.parse(arg.sentence_complexity).feedback;
    });
  },
};
</script>
