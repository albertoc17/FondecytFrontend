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
        <div class="col-md-1" style="padding-top: 20px">
          <FormulateInput
            type="submit"
            :disabled="isLoading"
            :label="isLoading ? 'Cargando...' : 'Buscar'"
          />
        </div>
      </div>
    </FormulateForm>
    <br>
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
      try {
      const formData = new FormData();
      formData.append("patron", this.patron);
      formData.append("modelo", this.modelo)
        let res = await axios.post(
          "http://www.redilegra.com/backend/api/Concordancia",
          formData
        );
        this.resConcordancia = JSON.parse(res.data).html_response;
        console.log(res);
      } catch (err) {
        console.warn(err);
      }
    },
  },
};
</script>