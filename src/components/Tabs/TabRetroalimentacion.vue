<template>
  <div id="TabRetroalimentacion">
    <div
      class="row feedbackRow"
      v-for="(fb, index) in wea" 
      :key="index"
      :style="itemStyle(fb)"
    >
      <div class="col-md-12">
        <h4><span class="circle"> {{fb.nro_errores}}</span>{{ fb.label }}</h4>
        <p v-if="fb.nro_errores > 0" class="mb-2"> {{ fb.feedback_negativo }} </p>
        <p v-else                    class="mb-2"> {{ fb.feedback_positivo }} </p>
        <div class="text-center">
          <b-button pill size="sm" class="mb-2" variant="dark" @click="verDetalle(fb)">
            Ver Más <b-icon icon="plus-circle"></b-icon>
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "TabRetroalimentacion",
  data() {
    return {
      feedback: null,
    };
  },
  computed: {
    ...mapGetters({
      tabSelected : 'getTabSelected'
    }),
    wea() {
      console.log('holas', this.tabSelected);
      return this.tabSelected;
    }
  },
  methods: {
    verDetalle(detalle) {
      this.$root.$emit("infoDetalleFeedback", detalle);
    },
    itemStyle(fb) {
      if (fb.nro_errores != 999999) return `background-color: ${fb.style};`;
      else                    return `background-color: #afd27f;`;
    }
  },
};
</script>

<style>
#TabRetroalimentacion {
  margin: 3%;
}
.feedbackRow {
  border-bottom: 1px solid; border-top: 1px solid;
  padding-top: 2%;
}
.circle {
  background: #343a40;
  border-color: #343a40;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  color: white;
  display: inline-block;
  font-weight: bold;
  line-height: 40px;
  margin-right: 5px;
  text-align: center;
  width: 40px;
}
</style>