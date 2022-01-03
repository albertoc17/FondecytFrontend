const getters = {
  gethtmlGerundios(state) {
    return state.htmlGerundios;
  },
  gethtmlOraciones(state) {
    return state.htmlOraciones;
  },
  gethtmlParrafos(state) {
    return state.htmlParrafos;
  },
  gethtmlPersona(state) {
    return state.htmlPersona
  },
  gethtmlVozPasiva(state) {
    return state.htmlVozPasiva
  },
  gethtmlConectores(state) {
    return state.htmlConectores
  },
  gethtmlLecturabilidad(state) {
    return state.htmlLecturabilidad
  },
  gethtmlProposito(state) {
    return state.htmlProposito
  },
  getEstadisticasGenerales(state) {
    return state.estadisticasGenerales
  },
  getAnalysisTab(state) {
    return state.analysisTab
  },
  getRetroalimentacion(state) {
    console.log("getRetroalimentacion: ", state.analysisTab);
    switch (state.analysisTab) {
      case "gerunds":
        return state.gerundios;
      case "oraciones":
        return state.oraciones;
      case "micro_paragraphs":
        return state.parrafos;
      case "fs_person":
        return state.persona;
      case "passive_voice":
        return state.vozPasiva;
      case "conectores":
        return state.conectores;
      case "sentence_complexity":
        return state.complejidad;
      case "lecturabilidad_parrafo":
        return state.lecturabilidad;
      case "proposito":
        return state.proposito;
      default:
        return state.default;
    }
  },
  getChartData(state) {
    let chartData = null;
    switch (state.analysisGroupTab) {
      case "lexicoGramatical":
        chartData = {
          labels: ["Gerundios"],
          datasets: [
            {
              backgroundColor: "#F87979",
              data: [
                state.gerundios.feedbackTypes.gerundiosExcesivos.nro_errores
              ],
              borderWidth: 2
            },
          ],
        }
        break;
      case "formal":
        chartData = {
          labels: ["Oraciones Extensas", "Oraciones Breves", "Párrafos Extensos", "Párrafos Breves"],
          datasets: [
            {
              backgroundColor: "#F87979",
              data: [
                state.oraciones.feedbackTypes.oracionesExtensas.nro_errores,
                state.oraciones.feedbackTypes.oracionesBreves.nro_errores, 
                state.parrafos.feedbackTypes.parrafosExtensos.nro_errores, 
                state.parrafos.feedbackTypes.parrafosBreves.nro_errores
              ],
              borderWidth: 2
            },
          ],
        }
        break;
      case "estilo":
        chartData = {
          labels: ["Primera persona", "Segunda persona", "Voz Pasiva", "Falta Conectores",  "Conectores Repetidos"],
          datasets: [
            {
              backgroundColor: "#F87979",
              data: [
                state.persona.feedbackTypes.primeraPersonaSingular.nro_errores,
                state.persona.feedbackTypes.segundaPersonaSingular.nro_errores,
                state.vozPasiva.feedbackTypes.vozPasiva.nro_errores,
                state.conectores.feedbackTypes.ausenciaConectores.nro_errores,
                state.conectores.feedbackTypes.conectoresRepetidos.nro_errores,
              ],
              borderWidth: 2
            },
          ],
        }
        break;
      case "discursivo":
        chartData = {
          labels: ["Complejidad"],
          datasets: [
            {
              backgroundColor: "#F87979",
              data: [
                state.complejidad.feedbackTypes.complejidad.nro_errores
              ],
              borderWidth: 2
            },
          ],
        }
        break;
      default:
        break;
    }
    return chartData;
  }
}
export default getters;