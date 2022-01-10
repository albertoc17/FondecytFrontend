<template>
  <div id="TabRetroalimentacion2">
    <div class="tabs__content tab-content tab-content-1 active">
      <div class="wrapper">
        <div class="estadisticas" v-if="!retroalimentacion.feedbackTypes" >
          <Estadisticas :estadisticas="estadisticas" />
        </div>
        <!-- / PARRAFOS -->
        <div v-show="showParrafos" >
          <div class="box-dest">
            <div class="cont-tit">
              <div class="circle-color circle-red"></div>
              <h3 class="tit">
                ¡Estos párrafos son muy extensos! ({{parrafosExtensosCantidad}} encontrados)
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
                >Ver más</a>
            </div>
          </div>
          <div class="box-dest">
            <div class="cont-tit">
              <div class="circle-color circle-yellow"></div>
              <h3 class="tit">
                ¡Estos párrafos son breves! ({{parrafosBrevesCantidad}} encontrados)
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
        </div>

        <!-- / GERUNDIOS -->
        <div v-show="showGerundios">
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
        <div v-show="showGerundiosError"> 
          <div class="box-dest">
              <div class="cont-tit">
                <div class="circle-color circle-yellow"></div>
                <h3 class="tit">
                  ¡Tienes! ({{cantidadGerundios}} Gerundios encontrados)
                </h3>
              </div>
              <div class="cont-btn">
                <a href="" class="btn-sec">Ver más</a>
              </div>
            </div>
        </div>

        <!-- / ORACIONES -->

        <div v-show="showOraciones" >
          <div class="box-dest">
            <div class="cont-tit">
              <div class="circle-color circle-red"></div>
              <h3 class="tit">
                ¡Estas oraciones son muy extensas! ({{oracionesExtensasCantidad}} encontrados)
              </h3>
            </div>
            <p class="baj">
              Te sugerimos que la extensión de una oracion sea de 3
              palabras como mínimo y 5 máximo.
            </p>
            <div class="cont-btn">
              <a
                data-fancybox=""
                data-src="#modal-selector"
                data-modal="true"
                href="javascript:;"
                class="btn-sec"
                >Ver más</a>
            </div>
          </div>
          <div class="box-dest">
            <div class="cont-tit">
              <div class="circle-color circle-yellow"></div>
              <h3 class="tit">
                ¡Estas oraciones son breves! ({{oracionesBrevesCantidad}} encontrados)
              </h3>
            </div>
            <p class="baj">
              Te sugerimos que la extensión de una oracion sea de 3
              palabras como mínimo y 5 máximo.
            </p>
            <div class="cont-btn">
              <a href="" class="btn-sec">Ver más</a>
            </div>
          </div>
        </div>

        <!-- / VOZ PASIVA -->

        <div v-show="showPassiveVoice" >
          <div class="box-dest">
            <div class="cont-tit">
              <div class="circle-color circle-red"></div>
              <h3 class="tit">
                {{vozPasiva.title}}
              </h3>
            </div>
            <p class="baj">
              Te sugerimos que la extensión de una oracion sea de 3
              palabras como mínimo y 5 máximo.
            </p>
            <div class="cont-btn">
              <a
                data-fancybox=""
                data-src="#modal-selector"
                data-modal="true"
                href="javascript:;"
                class="btn-sec"
                >Ver más</a>
            </div>
          </div>
        </div>

        <!-- / CONECTORES -->

        <div v-show="showConectores" >
          <div class="box-dest">
            <div class="cont-tit">
              <div class="circle-color circle-red"></div>
              <h3 class="tit">
                {{conectores.title}}
              </h3>
            </div>
            <p class="baj">
              {{conectores.comment}}
            </p>
            <div class="cont-btn">
              <a
                data-fancybox=""
                data-src="#modal-selector"
                data-modal="true"
                href="javascript:;"
                class="btn-sec"
                >Ver más</a>
            </div>
          </div>
        </div>

        <!-- / PRIMERA Y SEGUNDA PERSONA -->

        <div v-show="showFsPerson" >
          <div class="box-dest">
            <div class="cont-tit">
              <div class="circle-color circle-red"></div>
              <h3 class="tit">
                {{primeraPersona.title}}
              </h3>
            </div>
            <p class="baj">
              {{primeraPersona.positiveFeedback}}
            </p>
            <div class="cont-btn">
              <a
                data-fancybox=""
                data-src="#modal-selector"
                data-modal="true"
                href="javascript:;"
                class="btn-sec"
                >Ver más</a>
            </div>
          </div>
          <div class="box-dest">
            <div class="cont-tit">
              <div class="circle-color circle-red"></div>
              <h3 class="tit">
                {{segundaPersona.title}}
              </h3>
            </div>
            <p class="baj">
              {{segundaPersona.positiveFeedback}}
            </p>
            <div class="cont-btn">
              <a
                data-fancybox=""
                data-src="#modal-selector"
                data-modal="true"
                href="javascript:;"
                class="btn-sec"
                >Ver más</a>
            </div>
          </div>
        </div>

        <!-- / COMPLEJIDAD -->

        <div v-show="showComplejidad" >
          <div class="box-dest">
            <div class="cont-tit">
              <div class="circle-color circle-red"></div>
              <h3 class="tit">
                {{complejidad.title}}
              </h3>
            </div>
            <p class="baj">
              {{complejidad.positiveFeedback}}
            </p>
            <div class="cont-btn">
              <a
                data-fancybox=""
                data-src="#modal-selector"
                data-modal="true"
                href="javascript:;"
                class="btn-sec"
                >Ver más</a>
            </div>
          </div>
        </div>

        <!-- / PROPOSITO -->

        <div v-show="showProposito" >
          <div class="box-dest">
            <div class="cont-tit">
              <div class="circle-color circle-red"></div>
              <h3 class="tit">
                {{proposito.title}}
              </h3>
            </div>
            <p class="baj">
              {{proposito.positiveFeedback}}
            </p>
            <div class="cont-btn">
              <a
                data-fancybox=""
                data-src="#modal-selector"
                data-modal="true"
                href="javascript:;"
                class="btn-sec"
                >Ver más</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
  
<script>
import { mapGetters } from "vuex";
import Estadisticas from './Estadisticas.vue';

export default {
  name: "TabRetroalimentacion2",
  components: {
    Estadisticas
  },
    data() {
      return {
        oracionesBreves: null,
        oracionesExtensas: null,
        parrafosBreves: null,
        parrafosExtensos: null,
        vozPasiva: {
          title: "",
          positiveFeedback: "",
          negativeFeedback: "",
          cantidadErrores: 0
        },
        conectores: {
          title: "",
          comment: "",
          positiveFeedback: "",
          negativeFeedback: "",
          cantidadErrores: 0
        },
        primeraPersona: {
          title: "",
          comment: "",
          positiveFeedback: "",
          negativeFeedback: "",
          cantidadErrores: 0
        },
        segundaPersona: {
          title: "",
          comment: "",
          positiveFeedback: "",
          negativeFeedback: "",
          cantidadErrores: 0
        },
        complejidad: {
          title: "",
          comment: "",
          positiveFeedback: "",
          negativeFeedback: "",
          cantidadErrores: 0
        },
        proposito: {
          title: "",
          comment: "",
          positiveFeedback: "",
          negativeFeedback: "",
          cantidadErrores: 0
        },
        oracionesBrevesCantidad: 0,
        oracionesExtensasCantidad: 0,
        parrafosBrevesCantidad: 0,
        parrafosExtensosCantidad: 0,
        cantidadGerundios: 0,
        cantidadErroresVozPasiva: 0,
        showOraciones: false,
        showParrafos: false,
        showFelicitaciones: false,
        showGerundios: false,
        showGerundiosError: false,
        showFsPerson: false,
        showConectores: false,
        showComplejidad: false,
        showProposito: false,
        showPassiveVoice: false,
      };
    },

  computed: {
    ...mapGetters({retroalimentacion: "getRetroalimentacion", estadisticas: "getEstadisticasGenerales", tab: "getAnalysisTab"}),
  },
  watch: {
    retroalimentacion(){
      this.showOraciones = false;
      this.showParrafos = false;
      this.showGerundios = false;
      this.showGerundiosError = false;
      this.showFsPerson = false;
      this.showConectores = false;
      this.showComplejidad = false;
      this.showProposito = false;
      this.showPassiveVoice = false;

      if(this.tab == "oraciones"){
        this.oracionesBreves = this.retroalimentacion.feedbackTypes.oracionesBreves;
        this.oracionesBrevesCantidad = this.retroalimentacion.feedbackTypes.oracionesBreves.nro_errores;
        this.oracionesExtensas= this.retroalimentacion.feedbackTypes.oracionesExtensas;
        this.oracionesExtensasCantidad = this.retroalimentacion.feedbackTypes.oracionesExtensas.nro_errores;
        this.showOraciones = true;
      } else if(this.tab == "micro_paragraphs"){
        this.parrafosBreves = this.retroalimentacion.feedbackTypes.parrafosBreves;
        this.parrafosBrevesCantidad = this.retroalimentacion.feedbackTypes.parrafosBreves.nro_errores;
        this.parrafosExtensos= this.retroalimentacion.feedbackTypes.parrafosExtensos;
        this.parrafosExtensosCantidad = this.retroalimentacion.feedbackTypes.parrafosExtensos.nro_errores;
        this.showParrafos = true;
      } else if (this.tab == "gerunds") {
        this.cantidadGerundios = this.retroalimentacion.feedbackTypes.gerundiosExcesivos.nro_errores;
        if(this.cantidadGerundios > 0) {
          this.showGerundiosError = true;
          }
        else{
          this.showGerundios = true;
        }
      } else if(this.tab == "passive_voice") {
          this.vozPasiva.title = this.retroalimentacion.feedbackTypes.vozPasiva.feedbackTitle;
          this.showPassiveVoice = true;
      }
      else if(this.tab == "fs_person") {
        this.primeraPersona.title = this.retroalimentacion.feedbackTypes.primeraPersonaSingular.feedbackTitle;
        this.primeraPersona.positiveFeedback = this.retroalimentacion.feedbackTypes.primeraPersonaSingular.positiveFeedback;
        this.primeraPersona.negativeFeedback = this.retroalimentacion.feedbackTypes.primeraPersonaSingular.negativeFeedback;

        this.segundaPersona.title = this.retroalimentacion.feedbackTypes.segundaPersonaSingular.feedbackTitle;
        this.segundaPersona.positiveFeedback = this.retroalimentacion.feedbackTypes.segundaPersonaSingular.positiveFeedback;
        this.segundaPersona.negativeFeedback = this.retroalimentacion.feedbackTypes.segundaPersonaSingular.negativeFeedback;

        this.showFsPerson = true;
      } else if(this.tab == "conectores") {
        this.conectores.title = this.retroalimentacion.feedbackTypes.ausenciaConectores.feedbackTitle;
        if(this.retroalimentacion.feedbackTypes.ausenciaConectores.nro_errores > 0){
          this.conectores.comment = this.retroalimentacion.feedbackTypes.ausenciaConectores.negativeFeedback;
        } else {
          this.conectores.comment = this.retroalimentacion.feedbackTypes.ausenciaConectores.positiveFeedback;
        }
        this.showConectores = true;
      } else if(this.tab == "sentence_complexity") {
        this.complejidad.title = this.retroalimentacion.feedbackTypes.complejidad.feedbackTitle;
        this.complejidad.positiveFeedback = this.retroalimentacion.feedbackTypes.complejidad.positiveFeedback;
        this.complejidad.negativeFeedback = this.retroalimentacion.feedbackTypes.complejidad.negativeFeedback;
        this.showComplejidad = true;
      } else if(this.tab == "proposito") {
        this.proposito.title = this.retroalimentacion.feedbackTypes.resultados.feedbackTitle;
        this.proposito.positiveFeedback = this.retroalimentacion.feedbackTypes.resultados.positiveFeedback;
        this.proposito.negativeFeedback = this.retroalimentacion.feedbackTypes.resultados.negativeFeedback;
        this.showProposito = true;
      }
    }
  },
};
</script>

<style>

</style>