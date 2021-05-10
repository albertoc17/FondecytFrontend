<template>
  <div class="card" style="width: 18rem">
    <img class="card-img-top" src="..." alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">Error con el archivo</h5>
      <p class="card-text">Whops!! Algo fallo uwu.</p>
    </div>
  </div>
</template> 


<script>

export default {
  name: "Error",
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
      else                   return `background-color: #A8D480;`;
    }
  },
};
</script>