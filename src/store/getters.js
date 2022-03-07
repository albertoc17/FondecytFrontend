const getters = {
  getGerundios(state) {
    return state.gerundios;
  },
  getOraciones(state) {
    return state.oraciones;
  },
  getParrafos(state) {
    return state.parrafos;
  },
  getPersona(state) {
    return state.persona;
  },
  getVozPasiva(state) {
    return state.vozPasiva;
  },
  getConectores(state) {
    return state.conectores;
  },
  getLecturabilidad(state) {
    return state.lecturabilidad;
  },
  getProposito(state) {
    return state.proposito;
  },
  getEstadisticasGenerales(state) {
    return state.estadisticasGenerales
  },
  getAnalysisTab(state) {
    return state.analysisTab
  },
  getSelectedTabIndex(state) {
    return state.selectedTabIndex;
  },
  getFilename(state) {
    return state.filename;
  },
  getTextoEditor(state) {
    return state.textoEditor;
  },
  getRetroalimentacion(state) {
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
                state.gerundios.tiposRetroalimentacion.gerundiosExcesivos.nro_errores
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
                state.oraciones.tiposRetroalimentacion.oracionesExtensas.nro_errores,
                state.oraciones.tiposRetroalimentacion.oracionesBreves.nro_errores,
                state.parrafos.tiposRetroalimentacion.parrafosExtensos.nro_errores,
                state.parrafos.tiposRetroalimentacion.parrafosBreves.nro_errores
              ],
              borderWidth: 2
            },
          ],
        }
        break;
      case "estilo":
        chartData = {
          labels: ["Primera persona", "Segunda persona", "Voz Pasiva", "Falta Conectores", "Conectores Repetidos"],
          datasets: [
            {
              backgroundColor: "#F87979",
              data: [
                state.persona.tiposRetroalimentacion.primeraPersonaSingular.nro_errores,
                state.persona.tiposRetroalimentacion.segundaPersonaSingular.nro_errores,
                state.vozPasiva.tiposRetroalimentacion.vozPasiva.nro_errores,
                state.conectores.tiposRetroalimentacion.ausenciaConectores.nro_errores,
                state.conectores.tiposRetroalimentacion.conectoresRepetidos.nro_errores,
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
                state.complejidad.tiposRetroalimentacion.complejidad.nro_errores
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