<template>
  <div>
    <div
      class="row pt-4"
      v-for="(fb, index) in feedback"
      :key="index"
      :style="itemStyle(fb)"
    >
      <div class="col-md-12">
        <div class="title">
          <h4><span class="circle"> {{fb.nro_errores}}</span> {{ fb.label }} </h4>
          <p v-if="fb.nro_errores > 0"> {{ fb.feedback_negativo }} </p>
          <p v-else> {{ fb.feedback_positivo }} </p>
        </div>
        <div class="text-center">
          <b-button pill size="sm" class="mt-2 mb-2" variant="dark" @click="getUrl(fb.id)">
            <b-icon icon="tools"></b-icon> Ver detalle
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Retroalimentacion",
  data() {
    return {
      concordancia: null,
    };
  },
  props: ['feedback'],
  methods: {
    getUrl(id_analisis) {
      this.$root.$emit("activeTabIndex");
      console.log(id_analisis);
      this.$root.$emit("sendIdAnalisis", id_analisis);
    },
    itemStyle(fb) {
      if(fb.nro_errores > 0) return `background-color: ${fb.style}; border-bottom: 1px solid; border-top: 1px solid;`;
      else                   return `background-color: #afd27f; border-bottom: 1px solid; border-top: 1px solid;`;
    }
  },
};
</script>

<style>
.circle {
  background: black;
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

.title {
  margin: 0 3%;
}
</style>