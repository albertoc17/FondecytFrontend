<template>
  <div>
    <FormulateForm @submit="submitHandler" #default="{ isLoading }">
      <div class="row">
        <div class="col-md-5">
          <FormulateInput
            type="text"
            name="patron"
            label="Patrón"
            validation="required|max:20"
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
          />
        </div>
        <div class="col-md-1" style="padding-top: 20px">
          <FormulateInput
            type="submit"
            :disabled="isLoading"
            :label="isLoading ? 'Cargando...' : 'Buscar'"
          />
        </div>
      </div>
    </FormulateForm>
    <div>
      <span v-html="resConcordancia"></span>
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
      optionsTipoModelo: [
        { value: "general", label: "General" },
        { value: "especifico", label: "Específico" },
      ],
    };
  },
  methods: {
    async submitHandler(data) {
      try {
        console.log(data);
        let res = await axios.post(
          "http://redilegra.com/backend/api/concordancia",
          data
        );
        this.resConcordancia = JSON.parse(res.data).html_response;
        console.log(this.resConcordancia);
      } catch (err) {
        console.warn(err);
      }
    },
  },
};
</script>