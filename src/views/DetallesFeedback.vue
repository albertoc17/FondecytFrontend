<template>
  <div id="DetallesFeedback">
    <Navbar/>
    <br>
    <h2>{{ titulo }} </h2>
    <br>
    <div class="row">
      <div class="col-md-12">
        <p>{{ feedback_negativo }}</p>
        <p>{{ info }} </p>
        <p> A continuación te dejamos un ejemplo de como se evidencia este problema en la escritura de un estudiante:</p>
        <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-8">
            <b-alert variant="danger" class="text-center" show>
              <p>{{ ejemplo_error }}</p>
            </b-alert>
          </div>
        </div>
        <p> {{ comentario }} </p>
        <div class="text-center">
          <b-button @click="showEjemploCorregido()" variant="success">Mostrar ejemplo corregido</b-button>
        </div>
        <br>
        <div v-if="!isHidden" class="row">
          <div class="col-md-2"></div>
          <div class="col-md-8">
            <b-alert variant="success" class="text-center" show>
              <p>{{ ejemplo_correccion }}</p>
            </b-alert>
          </div>
        </div>
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
import Navbar from "@/components/Navbar.vue";
import { Analisis } from "@/includes/constants.js";

  export default {
    name: 'DetallesFeedback',
    components: Navbar,
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
      this.titulo = Analisis[this.analisisId].titulo;
      this.feedback_negativo = Analisis[this.analisisId].feedback_negativo;
      this.feedback_positivo = Analisis[this.analisisId].feedback_positivo;
      this.info = Analisis[this.analisisId].info;
      this.ejemplo_error = Analisis[this.analisisId].ejemplo_error;
      this.comentario = Analisis[this.analisisId].comentario;
      this.ejemplo_correccion = Analisis[this.analisisId].ejemplo_correccion;
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
