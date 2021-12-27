<template>
  <div id="Dashboard" class="dashboard">
    <div class="content-main">
      <Sidenav />
      <div class="main">
        <splitpanes
        class="default-theme"
        vertical
        style="position:'relative', overflow:'hidden'"
        >
          <pane min-size="50" size="60">
            <div class="row">
              <div class="col lg-12">
                <div class="container">
                  <header class="enc-txt">
                    <h1 class="tit">Tu texto</h1>
                    <p class="doc-name">mecanicacuantica.doc</p>
                  </header>
                  <div class="btn-bar">
                    <div class="cont-btn">
                      <div class="d-flex">
                        <input type="file" name="file1" id="file1" class="file" />
                        <input
                          type="button"
                          class="btn-file btn-sec"
                          value="Reemplazar el documento"
                        />
                      </div>
                      <a href="" class="btn-sec">
                        <span class="icon-download"></span> Descarga tu texto
                      </a>
                    </div>
                    <button class="btn-main btn-disabled" type="button" disabled>
                      Evaluar texto
                    </button>
                    <button class="btn-main" type="button" style="display: none">
                      Evaluar texto
                    </button>
                  </div>
                  <Editor />
                  <!-- <div class="cont-editor">
                    <img
                      class="tools-ex"
                      src="imag/v1/master/tools_img.jpg"
                      alt=""
                    />
                    <div class="cont-text">
                      <div class="wrapper">
                        <p class="bg-red">
                          La mecánica cuántica es la rama de la física que estudia
                          la naturaleza a escalas espaciales pequeñas. Los sistemas
                          atómicos y subatómicos, sus interacciones con la radiación
                          electromagnética y otras fuerzas, en términos de
                          cantidades observables. Se basa en la observación de que
                          todas las formas de energía se liberan en unidades
                          discretas o paquetes llamados cuantos. Estos cuantos
                          tienen la característica de pertenecer todos a un grupo
                          específico de bosones, estando cada uno ligado a una
                          interacción fundamental. (Ej: el fotón pertenece a la
                          electromagnética). Sorprendentemente, la teoría cuántica
                          solo permite normalmente cálculos probabilísticos o
                          estadísticos de las características observadas de las
                          partículas elementales, entendidos en términos de
                          funciones de onda. La ecuación de Schrödinger desempeña el
                          papel en la mecánica cuántica que las leyes de Newton y la
                          conservación de la energía hacen en la mecánica clásica.
                          Es decir, la predicción del comportamiento futuro de un
                          sistema dinámico y es una ecuación de onda en términos de
                          una función de onda la que predice analíticamente la
                          probabilidad precisa de los eventos o resultados.
                        </p>
                        <p class="bg-yellow">
                          La mecánica cuántica es la rama de la física que estudia
                          la naturaleza a escalas espaciales pequeñas.
                        </p>
                        <p>
                          En teorías anteriores de la física clásica, la energía era
                          tratada únicamente como un fenómeno continuo, en tanto que
                          la materia se supone que ocupa una región muy concreta del
                          espacio y que se mueve de manera continua. Según la teoría
                          cuántica, la energía se emite y se absorbe en cantidades
                          discretas y minúsculas. Un paquete individual de energía,
                          llamado cuanto, en algunas situaciones se comporta como
                          una partícula de materia. Por otro lado, se encontró que
                          las partículas exponen algunas propiedades ondulatorias
                          cuando están en movimiento y ya no son vistas como
                          localizadas en una región determinada, sino más bien
                          extendidas en cierta medida. La luz u otra radiación
                          emitida o absorbida por un átomo solo tiene ciertas
                          frecuencias (o longitudes de onda), como puede verse en la
                          línea del espectro asociado al elemento químico
                          representado por tal átomo. La teoría cuántica demuestra
                          que tales frecuencias corresponden a niveles definidos de
                          los cuantos de luz, o fotones, y es el resultado del hecho
                          de que los electrones del átomo solo pueden tener ciertos
                          valores de energía permitidos. Cuando un electrón pasa de
                          un nivel permitido a otro, una cantidad de energía es
                          emitida o absorbida, cuya frecuencia es directamente
                          proporcional a la diferencia de energía entre los dos
                          niveles.
                        </p>
                        <p>
                          La mecánica cuántica es la rama de la física que estudia
                          la naturaleza a escalas espaciales pequeñas. Los sistemas
                          atómicos y subatómicos, sus interacciones con la radiación
                          electromagnética y otras fuerzas, en términos de
                          cantidades observables. Se basa en la observación de que
                          todas las formas de energía se liberan en unidades
                          discretas o paquetes llamados cuantos. Estos cuantos
                          tienen la característica de pertenecer todos a un grupo
                          específico de bosones, estando cada uno ligado a una
                          interacción fundamental. (Ej: el fotón pertenece a la
                          electromagnética). Sorprendentemente, la teoría cuántica
                          solo permite normalmente cálculos probabilísticos o
                          estadísticos de las características observadas de las
                          partículas elementales, entendidos en términos de
                          funciones de onda. La ecuación de Schrödinger desempeña el
                          papel en la mecánica cuántica que las leyes de Newton y la
                          conservación de la energía hacen en la mecánica clásica.
                          Es decir, la predicción del comportamiento futuro de un
                          sistema dinámico y es una ecuación de onda en términos de
                          una función de onda la que predice analíticamente la
                          probabilidad precisa de los eventos o resultados.
                        </p>
                      </div>
                    </div>
                  </div> -->
                </div>
              </div>
            </div>
          </pane>
          <pane min-size="20" size="40">
            <div class="row">
              <div class="col lg-12">
                <div class="container block-tabs">
                  <header class="cont-tit">
                    <h2 class="tit">Retroalimentación</h2>
                  </header>
                  <!-- tabs -->
                  <div class="content">
                    <nav class="tabs__bar tab-btns">
                      <a
                        href="#"
                        class="tab active"
                        data-toggle-target=".tab-content-1"
                        >Acerca de tu texto
                      </a>
                      <a href="#" class="tab" data-toggle-target=".tab-content-2"
                        >Concordancia
                      </a>
                      <a href="#" class="tab" data-toggle-target=".tab-content-3"
                        >Cápsulas
                      </a>
                    </nav>
                    <TabRetroalimentacion2 /> 
                    <div class="tab-content tab-content-2">b</div>
                    <div class="tab-content tab-content-3">c</div>
                  </div>
                  <!-- / tabs -->
                </div>
              </div>
            </div>
          </pane>
        </splitpanes>
      </div>  
    </div>
  </div>
</template>

<script>
// import Navbar from "@/components/Navbar.vue";
import Sidenav from "@/components/Sidenav.vue";
import Editor from "@/components/Editor.vue";
import TabRetroalimentacion2 from "@/components/TabRetroalimentacion2.vue";
import { Splitpanes, Pane } from "splitpanes";
import "splitpanes/dist/splitpanes.css";

export default {
  name: "Dashboard",
  components: {
    Splitpanes,
    Pane,
    Sidenav,
    Editor,
    TabRetroalimentacion2
  },
  data() {
    return {};
  },
};

// cerrar modal
// $('.modal-selector .btn-sec').click(function () {
//   $.fancybox.close();
// });
</script>

<style>
span {
  text-align: justify;
}
.splitpanes--vertical > .splitpanes__splitter {
  min-width: 12px;
  background: linear-gradient(
    90deg,
    rgb(230, 230, 230),
    rgba(230, 230, 230, 0.6)
  ); /* color del separador (por alguna razon debe ser con linear-gradient) */
}
.splitpanes__pane {
  background-color: white !important; /* color de los paneles (fondo default era gris) */
}
</style>

<!--
<script src="js-local/jquery/jquery-3.6.0.min.js"></script>
<script src="js-local/jquery/jquery-migrate-1.2.1.min.js"></script>
<script src="js-local/js-global.js"></script>
<script src="js-local/fancybox/jquery.fancybox.min.js"></script>
 -->

