<template>
  <div id="DetallesFeedback">
    <br>
    <h2>{{ titulo }} </h2>
    <br>
    <div class="row">
      <div class="col-md-12">
        <p>{{ feedback_negativo }} </p>
        <p>{{ info }} </p>
        <b-alert variant="danger" class="text-center" show>
          <p>{{ ejemplo }}</p>
        </b-alert>
      </div>
    </div>
    <div class="text-center">
      <b-button @click="showEjemploCorregido()" variant="success">Mostrar ejemplo corregido</b-button>
    </div>
    <br>
    <div v-if="!isHidden" class="row">
      <div class="col-md-2"></div>
      <div class="col-md-8">
        <b-alert variant="success" class="text-center" show>
          <p>{{ ejemplo }}</p>
        </b-alert>
      </div>
    </div>
    <br><br>
    <h3>Cápsulas relacionadas</h3>
    <div class="row">
      <div class="col-md-12">
        <ul>
          <li> Capsula 1 </li>
          <li> Capsula 2 </li>
          <li> Capsula 3 </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { Analisis } from "@/includes/constants.js";

  export default {
    name: 'DetallesFeedback',
    data() {
      return {
        analisisId: "",
        titulo: "",
        feedback_negativo: "",
        info: "",
        ejemplo: "",
        isHidden: true
      }
    },
    methods: {
      showEjemploCorregido(){
        this.isHidden = !this.isHidden;
      },
    },
    created() {
      this.analisisId = this.$route.params.analisisId;
      this.feedback_negativo = Analisis[this.analisisId].feedback_negativo;
      this.info = Analisis[this.analisisId].info;
      this.titulo = Analisis[this.analisisId].titulo;
      this.ejemplo = Analisis[this.analisisId].ejemplo;
    }
  }
</script>

<style>
  #DetallesFeedback {
    padding-left: 70px;
    padding-right: 80px;
    text-align: justify;
  }
</style>
