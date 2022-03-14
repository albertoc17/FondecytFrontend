<template>
  <!-- class="wrapper" -->
  <div class="capsulaContainer">
    <p class="baj">
      En esta sección, te dejamos disponible cápsulas informativas que te
      ayudarán a entender mejor algunos conceptos fundamentales del proceso de
      escritura académica. También encontrarás algunas orientaciones y ejemplos
      de cómo escribir distintos tipos de informes.
    </p>
    <br>
    <!-- class="box-hor" -->
    <div
      v-for="(capsula, index) in capsulas"
      :key="index"
      class="capsulaWrapper box-hor"
    >
      <!-- class="img-wrap" -->
      <div class="imgWrapper">
        <iframe
          :src="capsula.link"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="cont-txt">
        <h3 class="subtit subtitCustom">{{ capsula.titulo }}</h3>
      </div>
      <!-- <div class="cont-txt">
        <h3 class="subtit">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget</h3>
      </div> -->
    </div>
  </div>
</template>

<script>
import { CAPSULAS } from "@/includes/constants.js";

export default {
  name: "TabCapsulas",
  data() {
    return {
      capsulas: CAPSULAS,
    };
  },
};
</script>

<style scoped>
.capsulaContainer {
  max-height: 85vh;
  overflow-y: scroll;
}
.capsulaWrapper {
  display: flex;
  flex-direction: row;
}
.imgWrapper {
  position: relative;
  -webkit-flex: 0 0 120px;
  flex: 0 0 120px;
}
.subtitCustom {
  font-size: 16px !important;
}
</style>