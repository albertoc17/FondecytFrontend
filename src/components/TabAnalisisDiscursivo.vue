<template>
  <div class="row">
    <div class="col-md-12">
      <b-tabs content-class="mt-3">
        <b-tab
          title="Análisis de concordancia"
          active
          @click="sendFeedbackModal(fb_concordancia)"
        >
          <span v-html="html_analisis_concordancia"></span>
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
      html_analisis_concordancia: "",
      html_proposito: "",
      fb_proposito: "",
      fb_concordancia: "",
      modalInfo: "",
    };
  },
  methods: {
    sendFeedbackModal(analisis) {
      this.$root.$emit("mensaje_feedback_modal", analisis);
    },
  },
  mounted() {
    this.$root.$on("mensaje_fileupload", (arg) => {
      this.html_analisis_concordancia = JSON.parse(
        arg.analisis_concordancia
      ).html_response;
      this.html_proposito = JSON.parse(arg.proposito).html_response;

      this.fb_proposito = JSON.parse(arg.proposito).feedback;
      this.fb_concordancia = JSON.parse(arg.analisis_concordancia).feedback;
    });
  },
};
</script>
