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
            :class="color(fb)"
          >
            <div class="cont-tit">
              <img v-if="fb.nro_errores == 0" class="ic-check" src="../assets/imag/v1/icon/ic_check_w.svg" alt="" />
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
import { FEEDBACKSTYPESTRED } from "@/includes/constants.js";


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
      if(feedback.nro_errores == 0){
        return 'box-dest bg-green';
      }
      if(FEEDBACKSTYPESTRED.includes(feedback.feedbackTitle)){
        return "box-dest bg-red";
      } else {
        return "box-dest bg-yellow";
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