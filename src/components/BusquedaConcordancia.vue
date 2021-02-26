<template>
  <b-container class="bv-example-row">
    <form @submit.prevent="onSubmit" enctype="multipart/form-data">
      <b-row>
        <b-col cols="6">
          <input v-model="patron" />
        </b-col>
        <b-col cols="6">
          <button class="btn btn-sm btn-success">Buscar</button>
        </b-col>
      </b-row>
    </form>
    <b-row>
      <span v-html="concordancia"></span>
    </b-row>
  </b-container>
</template>


<script>
import axios from "axios";

export default {
  name: "BusquedaConcordancia",
  data() {
    return {
      concordancia: null
    };
  },
  methods: {
  async onSubmit() {
      const formData = new FormData();
      formData.append("patron", this.patron);
      try {
        let res = await axios.post(
          "http://127.0.0.1:8000/api/concordancia",
          formData
        );
        this.concordancia = JSON.parse(res.data).html_response;

      } catch (err) {
        console.warn("ERROR!");
        console.warn(err);
      }
  },

  },
};
</script>