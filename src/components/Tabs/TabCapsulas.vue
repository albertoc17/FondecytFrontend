<template>
    <div class="capsulaContainer">
      <div
          v-for="(capsula, index) in capsulas"
          :key="index"
           class= "capsulaWrapper"
      >
        <iframe class="img-wrap" :src="capsula" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h5 class="text">
          Capsula {{ index + 1 }}
        </h5>
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
  max-height: 85vh; 
  overflow-y: scroll;
}
.capsulaWrapper {
  display: flex;
  flex-direction: row;
  padding: 2% 0;
  
}
.text {
  width: 150px;
  color: #374957;
  line-height: 1.5;
  font-family: "Lato-Bold", Helvetica Neue, -apple-system, "system-ui", BlinkMacSystemFont, sans-serif;
  margin-left: 5%;

}
</style>