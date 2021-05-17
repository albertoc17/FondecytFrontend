<template>
  <div id="DetallesFeedback">
    <Navbar/>
    <br>
      <h2>{{ titulo }} </h2>
    <br>
    <div class="row">
      <div class="col-md-12">
        <span v-html="feedback_negativo"></span> <span v-html="info"></span>
        <p> A continuación te dejamos un ejemplo de como se evidencia este problema en la escritura de un estudiante: </p>
        <!-- <section v-if=" analisisId != 'FormalOracionesBreves' && analisisId != 'FormalOracionesExtensas'">
        </section> -->
        <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-8">
            <b-alert variant="danger" class="text-center" show>
              <span v-html="error"></span>
            </b-alert>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <span v-html="comentario"></span>
          </div>
        </div>
        <br>
        <div class="text-center">
          <b-button @click="showEjemploCorregido()" variant="success">Mostrar ejemplo corregido</b-button>
        </div>
        <br>
        <div v-if="!isHidden" class="row">
          <div class="col-md-2"></div>
          <div class="col-md-8">
            <b-alert variant="success" class="text-center" show>
              <span v-html="correccion"></span>
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
      isHidden: true
    }
  },
  methods: {
    showEjemploCorregido() {
      this.isHidden = !this.isHidden;
    },
  },
  created() {
    this.analisisId = this.$route.params.analisisId;
    this.titulo = Analisis[this.analisisId].titulo;
    this.feedback_negativo = Analisis[this.analisisId].feedback_negativo;
    this.info = Analisis[this.analisisId].info;
    this.error = Analisis[this.analisisId].error;
    this.comentario = Analisis[this.analisisId].comentario;
    this.correccion = Analisis[this.analisisId].correccion;
  }
}
</script>

<style>
body {
  background: white;
}
h2 {
  color: blue;
}
#DetallesFeedback {
  padding-left: 100px;
  padding-right: 110px;
  text-align: justify;
}
</style>
