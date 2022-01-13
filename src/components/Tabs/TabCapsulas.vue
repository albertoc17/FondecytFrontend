<template>
    <div>
      <div
          v-for="(capsula, index) in capsulas"
          :key="index"
           class= "capsulaWrapper"
      >
        <iframe class="img-wrap" :src="capsula" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      
      <div class="cont-txt">
        <h5 class="subtit text">
          La mecánica cuántica es la rama de la física que estudia la naturaleza a escalas espaciales pequeñas.
        </h5>
      </div> 
    </div>
  </div>
</template>

<script>
import { LINKSCAPSULAS } from "@/includes/constants.js";

export default {
  name: "TabCapsulas",
  data() {
    return {
      capsulas: LINKSCAPSULAS,
    };
  },
  methods: {
    makeToast(message, variant) {
      let title = variant == 'success' ? 'Operación exitosa' : 'Operación fallida';
      this.$bvToast.toast(message, {
        title: title,
        variant: variant,
        solid: false,
        autoHideDelay: 2000,
      })
    }
  },
};
</script>

<style scoped>
.capsulaContainer {
  display: flex;
  flex-direction: row;
}
.capsulaWrapper {
  display: flex;
  flex-direction: row;
  padding: 2% 0;
}
.text {
  color: #374957;
  line-height: 1.5;
  font-family: "Lato-Bold", Helvetica Neue, -apple-system, "system-ui", BlinkMacSystemFont, sans-serif;
  margin: 2%;
}
</style>