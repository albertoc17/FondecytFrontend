<template>
  <div id="Detalle" v-if="detalle">
    <h3>{{ detalle.label }} </h3>
    <div class="row">
      <div class="col-md-12">
        <span v-html="detalle.feedback_negativo"></span>
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col-md-12">
        <span v-html="detalle.info"></span>
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col-md-12">
        <p> A continuación te dejamos un ejemplo de como se evidencia este problema en la escritura de un estudiante: </p>
      </div>
    </div>
    <div v-if=" detalle.label != 'Párrafos Extensos' && detalle.label != 'Párrafos Breves'">
      <div class="row">
        <div class="col-md-12">
          <b-alert variant="danger" class="text-center" show>
            <span v-html="detalle.error"></span>
          </b-alert>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <span v-html="detalle.comentario"></span>
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
          <span v-html="detalle.correccion"></span>
        </b-alert>
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

export default {
  name: 'Detalle',
  components: Navbar,
  props: ["detalle"],
  data() {
    return {
      isHidden: true,
      feedback: null,
    }
  },
  methods: {
    showEjemploCorregido() {
      this.isHidden = !this.isHidden;
    },
  }
}
</script>

<style>
#Detalle {
  margin: 3%;
  text-align: justify;
}
</style>
