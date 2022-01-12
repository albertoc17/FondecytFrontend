<template>
  <div id="TabRetroalimentacion3">
    <div class="tabs__content tab-content tab-content-1 active">
      <div class="wrapper">
        <div class="estadisticas">
          <Estadisticas />
        </div>
        <div v-if="retroalimentacion.feedbackTypes">
          <div
            v-for="(fb, index) in retroalimentacion.feedbackTypes"
            :key="index"
            class="box-dest"
            v-bind:class="{'bg-green': fb.nro_errores == 0 }"
          >
            <div class="cont-tit">
              <img v-if="fb.nro_errores == 0" class="ic-check" src="../assets/imag/v1/icon/ic_check_w.svg" alt="" />
              <div v-else-if="fb.nro_errores > 0" :class="color(fb.feedbackTitle)"></div>
              <h3 class="tit">
                {{ fb.feedbackTitle }} ({{ fb.nro_errores }} encontrados)
              </h3>
            </div>
            <p class="baj" v-if="fb.nro_errores == 0">
              {{ fb.positiveFeedback }}
            </p>
            <p class="baj" v-else-if="fb.nro_errores > 0">
              {{ fb.negativeFeedback }}
            </p>
            <div class="cont-btn">
              <a
                data-fancybox=""
                data-src="#modal-selector"
                data-modal="true"
                href="javascript:;"
                class="btn-sec"
                >Ver más</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import { mapGetters } from "vuex";
import Estadisticas from "./Estadisticas.vue";

export default {
  name: "TabRetroalimentacion3",
  components: {
    Estadisticas,
  },
  data() {
    return {};
  },
  methods: {
    color(feedback) {
      switch(feedback){
        case "Oraciones Extensas":
          return "circle-color circle-red";
        case "Gerundios Excesivos":
          return "circle-color circle-red";
        case "Oraciones Breves":
          return "circle-color circle-yellow";
        case "Párrafos Extensos":
          return "circle-color circle-red";
        case "Párrafos Breves":
          return "circle-color circle-yellow";
        case "Primera Persona Singular":
          return "circle-color circle-red";
        case "Segunda Persona Singular":
          return "circle-color circle-yellow";
        case "Voz Pasiva":
          return "circle-color circle-red";
        case "Ausencia de Conectores":
          return "circle-color circle-red";
        case "Conectores Repetidos":
          return "circle-color circle-yellow";
        case "Complejidad":
          return "circle-color circle-red";
        default:
          return "circle-color circle-red";
      }
    }
  },
  computed: {
    ...mapGetters({
      retroalimentacion: "getRetroalimentacion",
    }),
  },
};
</script>

<style>
</style>