import Vue from "vue";

const mutations = {
  setGerundios(state, {html, error}) {
    state.gerundios.html = html;
    state.gerundios.tiposRetroalimentacion.gerundiosExcesivos.nro_errores = error.LexicoGramaticalGerundiosExcesivo;
  },
  setOraciones(state, {html, error}) {
    state.oraciones.html = html;
    state.oraciones.tiposRetroalimentacion.oracionesExtensas.nro_errores = error.FormalOracionesExtensas;
    state.oraciones.tiposRetroalimentacion.oracionesBreves.nro_errores = error.FormalOracionesBreves;
  },
  setParrafos(state, {html, error}) {
    state.parrafos.html = html;
    state.parrafos.tiposRetroalimentacion.parrafosExtensos.nro_errores = error.FormalParrafosExtensos;
    state.parrafos.tiposRetroalimentacion.parrafosBreves.nro_errores = error.FormalParrafosBreves;
  },
  setPersona(state, {html, error}) {
    state.persona.html = html;
    state.persona.tiposRetroalimentacion.primeraPersonaSingular.nro_errores = error.EstiloSegundaPersonaSingular;
    state.persona.tiposRetroalimentacion.segundaPersonaSingular.nro_errores = error.EstiloPrimeraPersonaSingular;
  },
  setVozPasiva(state, {html, error}) {
    state.vozPasiva.html = html;
    state.vozPasiva.tiposRetroalimentacion.vozPasiva.nro_errores = error.EstiloVozPasiva;
  },
  setConectores(state, {html, error}) {
    state.conectores.html = html;
    state.conectores.tiposRetroalimentacion.ausenciaConectores.nro_errores = error.EstiloConectores;
    state.conectores.tiposRetroalimentacion.conectoresRepetidos.nro_errores = error.FlagRepeticionConectores;
  },
  setComplejidad(state, {html, error}) {
    state.complejidad.html = html;
    state.complejidad.tiposRetroalimentacion.complejidad.nro_errores = error.DiscursivoComplejidad;
  },
  setLecturabilidad(state, {html, error}) {
    state.lecturabilidad.html = html;
    state.lecturabilidad.tiposRetroalimentacion.dificil.nro_errores = error.DiscursivoLecturabilidadDificil;
    state.lecturabilidad.tiposRetroalimentacion.algoDificil.nro_errores = error.DiscursivoLecturabilidadAlgoDificil; 
    state.lecturabilidad.tiposRetroalimentacion.normal.nro_errores = error.DiscursivoLecturabilidadNormal;
    state.lecturabilidad.tiposRetroalimentacion.algoFacil.nro_errores = error.DiscursivoLecturabilidadAlgoFacil;
    state.lecturabilidad.tiposRetroalimentacion.facil.nro_errores = error.DiscursivoLecturabilidadDificil;
  },
  setProposito(state, {html, error}) {
    state.proposito.html = html;
    state.proposito.tiposRetroalimentacion.introduccion.nro_errores = error.MM1;  
    state.proposito.tiposRetroalimentacion.desarrollo.nro_errores = error.MM2;  
    state.proposito.tiposRetroalimentacion.resultados.nro_errores = error.MM3; 
    state.proposito.tiposRetroalimentacion.conclusion.nro_errores = error.MM4;
  },
  setEstadisticasGenerales(state, data) {
    Vue.set(state, "estadisticasGenerales", data);
  },
  setAnalisisPantalla(state, {endpoint, selected}) {
    Vue.set(state, "analysisTab", endpoint);
    Vue.set(state, "selectedTabIndex", selected);
  },
  setAnalysisGroupTab(state, data) {
    Vue.set(state, "analysisGroupTab", data);
  },
  setFilename(state, data) {
    Vue.set(state, "filename", data);
  },
  setTextoEditor(state, data) {
    Vue.set(state, "textoEditor", data);
  }
};

export default mutations;