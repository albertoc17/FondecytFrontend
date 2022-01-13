<template>
  <div id="TabConcordancia">
    <div class="wrapper">
      <p class="baj" style="margin:0">Aquí va escrita la instrucción para el usuario Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget</p>
      <FormulateForm class="filterbar" @submit="submitHandler" #default="{ isLoading }">
        <div class="form-group">
          <div class="form-group">
            <FormulateInput
              type="text"
              name="patron"
              label="Patrón"
              label-class="control-label"
              placeholder="Patrón"
              v-model="patron"
            />
          </div>
        </div>
        <div class="form-group">
          <div class="form-group">
            <FormulateInput
              type="select"
              name="modelo"
              label="Modelo"
              label-class="control-label"
              placeholder="Seleccione"
              :options="optionsTipoModelo"
              v-model="modelo"
            />
          </div>
        </div>
        <FormulateInput
          type="submit"
          :disabled="isLoading"
          :label="isLoading ? 'Cargando...' : 'BUSCAR'"
          class="formulate-input"
        />
      </FormulateForm>
      <div class="txt-box">
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
        console.log(res);
        this.resConcordancia = res.data.html_response;
        console.log(this.resConcordancia);
        this.makeToast(
          "Análisis de concordancia realizado exitosamente.",
          "success"
        );
      } catch (err) {
        console.warn(err);
        this.makeToast(err, "danger");
      }
      loader.hide();
    },
    makeToast(message, variant) {
      let title =
        variant == "success" ? "Operación exitosa" : "Operación fallida";
      this.$bvToast.toast(message, {
        title: title,
        variant: variant,
        solid: false,
        autoHideDelay: 2000,
      });
    },
  },
};
</script>