<template>
  <div id="TabRetroalimentacion2">
    <div class="tabs__content tab-content tab-content-1 active">
      <div class="wrapper">
        <div class="cont-graphic">
          <img src="imag/v1/master/grafico_img.png" alt="" />
          <ul class="cont-txt">
            <li>
              Número de Párrafos: <span class="number">2</span>
            </li>
            <li>
              Número de Oraciones: <span class="number">15</span>
            </li>
            <li>
              Número de Palabras: <span class="number">385</span>
            </li>
          </ul>
        </div>
        <div class="box-dest">
          <div class="cont-tit">
            <div class="circle-color circle-red"></div>
            <h3 class="tit">
              ¡Estos párrafos son muy extensos! (2 encontrados)
            </h3>
          </div>
          <p class="baj">
            Te sugerimos que la extensión de un párrafo sea de 3
            oraciones como mínimo y 5 máximo.
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
        <div class="box-dest">
          <div class="cont-tit">
            <div class="circle-color circle-yellow"></div>
            <h3 class="tit">
              ¡Estos párrafos son muy extensos! (2 encontrados)
            </h3>
          </div>
          <p class="baj">
            Te sugerimos que la extensión de un párrafo sea de 3
            oraciones como mínimo y 5 máximo.
          </p>
          <div class="cont-btn">
            <a href="" class="btn-sec">Ver más</a>
          </div>
        </div>
        <div class="box-dest bg-green">
          <div class="cont-tit">
            <img
              class="ic-check"
              src="imag/v1/icon/ic_check_w.svg"
              alt=""
            />
            <h3 class="tit">
              ¡Felicitaciones! No tienes uso excesivo de gerundios
            </h3>
          </div>
          <p class="baj">
            Evita usarlos con frecuencia para que no dificulte la
            comprensión de tu texto.
          </p>
          <div class="cont-btn">
            <a href="" class="btn-sec">Ver más</a>
          </div>
        </div>
        <div class="box-dest bg-green">
          <div class="cont-tit">
            <img
              class="ic-check"
              src="imag/v1/icon/ic_check_w.svg"
              alt=""
            />
            <h3 class="tit">
              ¡Felicitaciones! No tienes uso excesivo de gerundios
            </h3>
          </div>
          <p class="baj">
            Evita usarlos con frecuencia para que no dificulte la
            comprensión de tu texto.
          </p>
          <div class="cont-btn">
            <a href="" class="btn-sec">Ver más</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
// import Navbar from "@/components/Navbar.vue";

export default {
  name: "TabRetroalimentacion2",
  components: {
    // Navbar,
  },
  data() {
    return {};
  },
};
</script>

