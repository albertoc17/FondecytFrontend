<template>
  <div v-if="id_analisis" id="Detalle">
    <h3>{{ label }} </h3>
    <div class="row">
      <div class="col-md-12">
        <span v-html="feedback_negativo"></span> <span v-html="info"></span>
        <p> A continuación te dejamos un ejemplo de como se evidencia este problema en la escritura de un estudiante: </p>
        <div v-if=" id_analisis != 'FormalParrafosExtensos' && id_analisis != 'FormalParrafosBreves'">
          <div class="row">
            <div class="col-md-12">
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
            <b-button @click="showEjemploCorregido()" variant="success" >Mostrar ejemplo corregido</b-button>
          </div>
        </div>
        <br>
        <div v-if="!isHidden" class="row">
          <div class="col-md-12">
            <b-alert variant="success" class="text-center" show>
              <span v-html="correccion"></span>
            </b-alert>
          </div>
        </div>
      </div>
    </div>
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
  name: 'Detalle',
  components: Navbar,
  data() {
    return {
      isHidden: true,
      id_analisis: null,
      label: null,
      feedback_negativo: null,
      info: null,
      error: null,
      comentario: null,
      correccion: null,
    }
  },
  methods: {
    showEjemploCorregido() {
      this.isHidden = !this.isHidden;
    },
  },
  mounted() {
    this.$root.$on("sendIdAnalisis", (id_analisis) => {
      this.id_analisis = id_analisis;
      this.label = Analisis[id_analisis].label;
      this.feedback_negativo = Analisis[id_analisis].feedback_negativo;
      this.info = Analisis[id_analisis].info;
      this.error = Analisis[id_analisis].error;
      this.comentario = Analisis[id_analisis].comentario;
      this.correccion = Analisis[id_analisis].correccion;
    });
  }
}
</script>

<style>
body {
  background: white;
}
/* h2 {
  color: blue;
} */
#Detalle {
  /* padding-left: 100px;
  padding-right: 110px; */
  text-align: justify;
}
</style>
