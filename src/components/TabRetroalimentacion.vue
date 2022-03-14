<template>
  <div id="TabRetroalimentacion" v-if="retroalimentaciones.html" class="wrapper">
    <div class="estadisticas">
      <Estadisticas />
    </div>
    <br>
    <p v-if="retroalimentaciones.ayuda">{{ retroalimentaciones.ayuda }} </p>
    <br>
    <div>
      <div
        v-for="(tipoRetroalimentacion, index) in retroalimentaciones.tiposRetroalimentacion"
        :key="index"
        class="box-dest"
        :class="cardColor(tipoRetroalimentacion)"
      >
        <div class="cont-tit">
          <img v-if="tipoRetroalimentacion.nro_errores == 0 && !retroalimentaciones.ayuda" class="ic-check" src="../assets/imag/v1/icon/ic_check_w.svg" alt="" />
          <h3 class="tit">
            {{ tipoRetroalimentacion.feedbackTitle }} ({{ tipoRetroalimentacion.nro_errores }} encontrados)
          </h3>
        </div>
        <p class="baj" v-if="tipoRetroalimentacion.nro_errores == 0">
          {{ tipoRetroalimentacion.positiveFeedback }}
        </p>
        <p class="baj" v-else-if="tipoRetroalimentacion.nro_errores > 0">
          {{ tipoRetroalimentacion.negativeFeedback }}
        </p>
        <div class="cont-btn">
          <a
            data-fancybox=""
            data-src="#modal-selector"
            data-modal="true"
            href="javascript:;"
            class="btn-sec"
            @click="showDetalles(tipoRetroalimentacion.feedbackTitle)"            
            >Ver más</a
          >
        </div>
        <div>
          <b-modal :id="tipoRetroalimentacion.feedbackTitle" size="lg" hide-footer hide-header>
            <DetalleRetroalimentacion :tipoRetroalimentacion="tipoRetroalimentacion"/>
          </b-modal>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import { mapGetters } from "vuex";
import Estadisticas from "@/components/Estadisticas.vue";
import DetalleRetroalimentacion from "@/components/DetalleRetroalimentacion.vue";

export default {
  name: "TabRetroalimentacion",
  components: {
    Estadisticas,
    DetalleRetroalimentacion
  },
  data() {
    return {};
  },
  methods: {
    cardColor(tipoRetroalimentacion) {
      if (tipoRetroalimentacion.nro_errores == 0 && !this.retroalimentaciones.ayuda) return 'bg-green';
      return tipoRetroalimentacion.style;
    },
    showDetalles(modal) {
      this.$root.$emit('bv::show::modal', modal, '#btnShow')
    }
  },
  computed: {
    ...mapGetters({
      retroalimentaciones: "getRetroalimentacion",
    }),
  },
};
</script>

<style>
</style>