<template>
  <div id="Detalle" v-if="detalle">
    <h4>{{ detalle.feedbackTitle }} </h4>
    <div class="row">
      <div class="col-md-12">
        <span v-html="detalle.negativeFeedback"></span> <span v-if="detalle.feedbackComment" v-html="detalle.feedbackComment"></span>
      </div>
    </div>
    <br>
    <div v-if="detalle.errorExample">
      <div class="row">
        <div class="col-md-12">
          <p> A continuación te dejamos un ejemplo de como se evidencia este problema en la escritura de un estudiante: </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <b-alert variant="danger" class="text-center" show>
            <span v-html="detalle.errorExample"></span>
          </b-alert>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <span v-html="detalle.errorComment"></span>
        </div>
      </div>
      <br>
      <div class="text-center">
        <b-button @click="showEjemploCorregido()" variant="success" >Mostrar ejemplo corregido</b-button>
      </div>
      <br>
      <div v-if="!isHidden" class="row">
      <div class="col-md-12">
        <b-alert variant="success" class="text-center" show>
          <span v-html="detalle.errorCorrection"></span>
        </b-alert>
      </div>
      </div>
    </div>
    <div v-else>
      <div class="row">
        <div class="col-md-12">
          <p>Un ejemplo de párrafo categorizado con este grado de lecturabilidad se presenta a continuación:</p> 
          <span v-html="detalle.example"></span>
        </div>
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
  font-size: 15px;
}
</style>
