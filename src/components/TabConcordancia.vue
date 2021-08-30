<template>
  <div id="TabConcordancia">
    <FormulateForm @submit="submitHandler" #default="{ isLoading }">
      <div class="row">
        <div class="col-md-5">
          <FormulateInput
            type="text"
            name="patron"
            label="Patrón"
            validation="required"
            v-model="patron"
          />
        </div>
        <div class="col-md-4">
          <FormulateInput
            type="select"
            name="modelo"
            label="Modelo"
            placeholder="Seleccione"
            validation="required"
            :options="optionsTipoModelo"
            v-model="modelo"
          />
        </div>
        <div class="col-md-2" style="padding-top: 20px">
          <FormulateInput
            type="submit"
            :disabled="isLoading"
            :label="isLoading ? 'Cargando...' : 'Buscar'"
          />
        </div>
      </div>
    </FormulateForm>
    <br>
    <div class="row">
      <div class="col-md-12">
        <span v-html="resConcordancia"></span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "TabConcordancia",
  data() {
    return {
      resConcordancia: null,
      patron: null,
      modelo: null,
      optionsTipoModelo: [
        { value: "general", label: "General" },
        { value: "especifico", label: "Específico" },
      ],
    };
  },
  methods: {
    async submitHandler() {
      let loader = this.$loading.show({ isFullPage: true, canCancel: false });
      try {
        const formData = new FormData();
        formData.append("patron", this.patron);
        formData.append("modelo", this.modelo);
        let res = await axios.post(
          "http://www.redilegra.com/backend/api/Concordancia",
          //"http://127.0.0.1:8000/api/Concordancia",
          formData
        );
        this.resConcordancia = res.data.html_response;
        this.makeToast('Análisis de concordancia realizado exitosamente.', 'success');
      } catch (err) {
        console.warn(err);
        this.makeToast(err, 'danger');
      }
      loader.hide();
    },
    makeToast(message, variant) {
      let title = variant == 'success' ? 'Operación exitosa' : 'Operación fallida';
      this.$bvToast.toast(message, {
        title: title,
        variant: variant,
        solid: false,
        autoHideDelay: 2000,
      })
    }
  },
};
</script>

<style>
#TabConcordancia {
  margin: 3%;
}
</style>