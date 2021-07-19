<template>
  <div class="row">
    <div class="col-md-12">
      <b-tabs content-class="mt-3">
        <b-tab title="Resumen" >
          <div v-if="showError" >
            <ErrorHtml />
          </div>
          <div v-else>
            <TabEditor proposito="1" />
          </div>
        </b-tab>
        <b-tab title="Introducción" >
          <div v-if="showError" >
            <ErrorHtml />
          </div>
          <div v-else>
            <TabEditor proposito="2" />
          </div>
        </b-tab>
        <b-tab title="Desarrollo / Antecedentes" >
          <div v-if="showError" >
            <ErrorHtml />
          </div>
          <div v-else>
            <TabEditor proposito="3" />
          </div>
        </b-tab>
        <b-tab title="Resultados" >
          <div v-if="showError" >
            <ErrorHtml />
          </div>
          <div v-else>
            <TabEditor proposito="4"/>
          </div>
        </b-tab>
        <b-tab title="Conclusión" >
          <div v-if="showError" >
            <ErrorHtml />
          </div>
          <div v-else>
            <TabEditor proposito="5"/>
          </div>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import ErrorHtml from "./ErrorHtml.vue";
import TabEditor from "./TabEditor.vue";

export default {
  name: "TabAnalisisProposito",
  components: {
    ErrorHtml,
    TabEditor
  },
  data() {
    return {
      showError: false,
    };
  },
  methods: {

  },
};
</script>
