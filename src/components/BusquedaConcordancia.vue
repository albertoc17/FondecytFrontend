<template>
  <div>
    <FormulateForm @submit="onSubmit">
      <FormulateInput
        label="Ingrese Patrón"
        placeholder="tutorias"
        validation="required|max:20"
        v-model="patron"

      />
      <FormulateInput
        type="select"
        placeholder="Selecciona una opcion."
        :options="optionsTipoModelo"
        label="Selecciona un tipo de modelo."
        validation="required"
        v-model="selectedTipoModelo"
      />
      <FormulateInput type="submit" />
    </FormulateForm>
    <div><span v-html="concordancia"></span></div>
    

  </div>
  <!-- <b-container fluid>
     <b-form inline @submit="onSubmit">

    <form @submit.prevent="onSubmit" enctype="multipart/form-data">
      <b-row>
        <b-col sm="5">
          <b-form-input size="sm" v-model="patron" placeholder="Ingrese patrón"></b-form-input>
        </b-col>
        <b-col sm="4">
          <b-form-select size="sm" v-model="selectedTipoModelo" :options="optionsTipoModelo"></b-form-select>
        </b-col>
        <b-col sm="2">
          <button class="btn btn-sm btn-success">Buscar</button>
        </b-col>
      </b-row>
    </form>
    <br>
    <b-row>
      <span v-html="concordancia"></span>
    </b-row>
  </b-container>-->
</template>


<script>
import axios from "axios";

export default {
  name: "BusquedaConcordancia",
  data() {
    return {
      concordancia: null,
      patron: null,
      selectedTipoModelo: null,
      isValid: false,
      optionsTipoModelo: [
        { value: "general", label: "General" },
        { value: "especifico", label: "Específico" }
      ]
    };
  },
  methods: {
    async onSubmit() {
      const formData = new FormData();
      formData.append("patron", this.patron);
      formData.append("selectedTipoModelo", this.selectedTipoModelo);
      try {
        let res = await axios.post(
          "http://127.0.0.1:8000/api/concordancia",
          formData
        );
        this.concordancia = JSON.parse(res.data).html_response;
        console.log(this.concordancia)
      } catch (err) {
        console.warn(err);
      }
    }
  }
};
</script>