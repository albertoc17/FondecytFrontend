<template>
  <div>
    <div
      class="row pt-4"
      v-for="(fb, index) in feedback"
      :key="index"
      :style="itemStyle(fb)"
    >
      <div class="col-md-12">
        <h5> {{ fb.label }} </h5>
        nro_errores: {{ fb.nro_errores }}
        <p v-if="fb.nro_errores > 0" style="padding: 0px; margin: 0px"> {{ fb.feedback_negativo }} </p>
        <p v-else                    style="padding: 0px; margin: 0px"> {{ fb.feedback_positivo }} </p>
        <div>
          <router-link
            :to="getUrl(index)"
            target="_blank"
            style="font-size: 13px; text-align: center"
          >
            Ver detalles <b-icon-arrow-up-right> </b-icon-arrow-up-right>
          </router-link>
        </div>
        <br/>
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
    getUrl(index) {
      return "DetallesFeedback/" + this.feedback[index].id;
    },
    itemStyle(fb) {
      if(fb.nro_errores > 0) return `background-color: ${fb.style};`;
      else                   return `background-color: #9ee5b8;`;
    }
  },
};
</script>