<template>
  <div id="TabRetroalimentacion">
    <div
      class="row feedbackRow"
      v-for="(fb, index) in getRetroalimentacion.feedbackTypes"
      :key="index"
      :style="'background-color:' + fb.style"
    >
      <div class="col-md-12">
        <h4>
          <span class="circle">{{ fb.nro_errores }}</span>
          <span> {{ fb.feedbackTitle }} </span>
        </h4>
        <p v-if="fb.nro_errores > 0">
          {{ fb.negativeFeedback }}
        </p>
        <p v-else-if="fb.nro_errores == 0">
          {{ fb.positiveFeedback }}
        </p>
        <div
          v-if="fb.urlGenially"
          style="
            position: relative;
            padding-bottom: 56.25%;
            padding-top: 0;
            height: 0;
            margin-bottom: 2%;
          "
        >
          <iframe
            frameborder="0"
            width="1200"
            height="675"
            style="
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            "
            :src="fb.urlGenially"
            type="text/html"
            allowscriptaccess="always"
            allowfullscreen="true"
            scrolling="yes"
            allownetworking="all"
          ></iframe>
        </div>
        <div class="text-center">
          <b-button
            pill
            size="sm"
            class="mb-2"
            variant="dark"
            @click="verDetalle(fb)"
          >
            Ver Más <b-icon icon="plus-circle"></b-icon>
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
 
export default {
  name: "TabRetroalimentacion",
  data() {
    return {
      feedback: null,
    };
  },
  computed: {
    ...mapGetters(["getRetroalimentacion"]),
  },
  methods: {
    verDetalle(detalle) {
      this.$root.$emit("infoDetalleFeedback", detalle);
    },
  },
};
</script>

<style>
#TabRetroalimentacion {
  margin: 3%;
}
.feedbackRow {
  border-bottom: 1px solid;
  border-top: 1px solid;
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