<template>
  <div id="TabRetroalimentacion">
    <div class="wrapper">
      <div class="estadisticas">
        <Estadisticas />
      </div>
      <div v-if="retroalimentacion.feedbackTypes">
        <div
          v-for="(fb, index) in retroalimentacion.feedbackTypes"
          :key="index"
          class="box-dest"
          :class="cardColor(fb)"
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
              @click="showDetalles(fb.feedbackTitle)"            
              >Ver más</a
            >
          </div>
          <div>
            <b-modal :id="fb.feedbackTitle" size="lg" hide-footer>
              <DetallesFeedback :feedback="fb"/>
            </b-modal>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import { mapGetters } from "vuex";
import Estadisticas from "./Estadisticas.vue";
import DetallesFeedback from "./DetallesFeedback.vue";
import { FEEDBACKSTYPESTDISABLED } from "@/includes/constants.js";

export default {
  name: "TabRetroalimentacion",
  components: {
    Estadisticas,
    DetallesFeedback
  },
  data() {
    return {};
  },
  methods: {
    cardColor(fb) {
      if (fb.nro_errores == 0 && !FEEDBACKSTYPESTDISABLED.includes(fb.feedbackTitle)) return 'bg-green';
      return fb.style;
    },
    showDetalles(modal){
      this.$root.$emit('bv::show::modal', modal, '#btnShow')
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