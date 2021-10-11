import Vue from "vue";

const mutations = {
  setGerundios(state, {html, error}) {
    console.log(error);
    state.gerundios.html = html;
    state.gerundios.feedbackTypes.gerundiosExcesivos.nro_errores = error.LexicoGramaticalGerundiosExcesivo;
  },
  setOraciones(state, {html, error}) {
    console.log(error);
    state.oraciones.html = html;
    state.oraciones.feedbackTypes.oracionesExtensas.nro_errores = error.FormalOracionesExtensas;
    state.oraciones.feedbackTypes.oracionesBreves.nro_errores = error.FormalOracionesBreves;
  },
  setParrafos(state, {html, error}) {
    state.parrafos.html = html;
    state.parrafos.feedbackTypes.parrafosExtensos.nro_errores = error.FormalParrafosExtensos;
    state.parrafos.feedbackTypes.parrafosBreves.nro_errores = error.FormalParrafosBreves;
  },
  setPersona(state, {html, error}) {
    state.persona.html = html;
    state.persona.feedbackTypes.primeraPersonaSingular.nro_errores = error.EstiloSegundaPersonaSingular;
    state.persona.feedbackTypes.segundaPersonaSingular.nro_errores = error.EstiloPrimeraPersonaSingular;
  },
  setVozPasiva(state, {html, error}) {
    state.vozPasiva.html = html;
    state.vozPasiva.feedbackTypes.vozPasiva.nro_errores = error.EstiloVozPasiva;
  },
  setConectores(state, {html, error}) {
    state.conectores.html = html;
    state.conectores.feedbackTypes.ausenciaConectores.nro_errores = error.EstiloConectores;
    state.conectores.feedbackTypes.conectoresRepetidos.nro_errores = error.FlagRepeticionConectores;
  },
  setComplejidad(state, {html, error}) {
    state.complejidad.html = html;
    state.complejidad.feedbackTypes.complejidad.nro_errores = error.DiscursivoComplejidad;
  },
  setLecturabilidad(state, {html, error}) {
    state.lecturabilidad.html = html;
    state.lecturabilidad.feedbackTypes.dificil.nro_errores = error.DiscursivoLecturabilidadDificil;
    state.lecturabilidad.feedbackTypes.algoDificil.nro_errores = error.DiscursivoLecturabilidadAlgoDificil; 
    state.lecturabilidad.feedbackTypes.normal.nro_errores = error.DiscursivoLecturabilidadNormal;
    state.lecturabilidad.feedbackTypes.algoFacil.nro_errores = error.DiscursivoLecturabilidadAlgoFacil;
    state.lecturabilidad.feedbackTypes.facil.nro_errores = error.DiscursivoLecturabilidadDificil;
  },
  setProposito(state, {html, error}) {
    state.proposito.html = html;
    state.proposito.feedbackTypes.resumen.nro_errores = error.Proposito;
    state.proposito.feedbackTypes.introduccion.nro_errores = error.Proposito;  
    state.proposito.feedbackTypes.desarrollo.nro_errores = error.Proposito;  
    state.proposito.feedbackTypes.resultados.nro_errores = error.Proposito; 
    state.proposito.feedbackTypes.conclusion.nro_errores = error.Proposito;
  },
  setSelectedTab(state, data) {
    Vue.set(state, "tabSelected", data);
  },
  setGroupSelected(state, data) {
    Vue.set(state, "groupSelected", data);
  },
};

export default mutations;