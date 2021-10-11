import Vue from "vue";

const mutations = {
  setHtmlGerundios(state, html, errores = 0) {
    state.gerundios.html = html;
    state.gerundios.nro_errores = errores;
  },
  sethtmlOraciones(state, {html, error}) {
    state.oraciones.html = html;
    state.oraciones.errores.Extensas = error.FormalOracionesExtensas;
    state.oraciones.errores.Breves = error.FormalOracionesBreves;
  },
  setParrafos(state, {html, error}) {
    state.parrafos.html = html;
    state.parrafos.errores.Extensas = error.FormalParrafosExtensas;
    state.parrafos.errores.Breves = error.FormalParrafosBreves;
  },
  setPersona(state, {html, error}) {
    state.persona.html = html;
    state.persona.errores.Extensas = error.EstiloSegundaPersonaSingular;
    state.persona.errores.Breves = error.EstiloPrimeraPersonaSingular;
  },
  setVozPasiva(state, {html, error}) {
    state.vozPasiva.html = html;
    state.vozPasiva.nro_errores = error.EstiloVozPasiva;
  },
  setConectores(state, {html, error}) {
    state.conectores.html = html;
    state.conectores.nro_errores = error.EstiloConectores;  
  },
  setComplejidad(state, {html, error}) {
    state.complejidad.html = html;
    state.complejidad.nro_errores = error.DiscursivoComplejidad;  
  },
  setLecturabilidad(state, {html, error}) {
    state.lecturabilidad.html = html;
    state.lecturabilidad.errores.algoDificil = error.DiscursivoComplejidadAlgoDificil;
    state.lecturabilidad.errores.algoFacil = error.DiscursivoComplejidadAlgoFacil;  
    state.lecturabilidad.errores.Dificil = error.DiscursivoComplejidadDificil;  
    state.lecturabilidad.errores.Facil = error.DiscursivoComplejidadFacil; 
    state.lecturabilidad.errores.Normal = error.DiscursivoComplejidadNormal;
  },
  setProposito(state, {html, error}) {
    state.proposito.html = html;
    state.proposito.errores.Mm0 = error.MM0;
    state.proposito.errores.Mm1 = error.MM1;  
    state.proposito.errores.Mm2 = error.MM2;  
    state.proposito.errores.Mm3 = error.MM3; 
    state.proposito.errores.Mm4 = error.MM4;
  },
  setTabSelected(state, data) {
    Vue.set(state, "tabSelected", data);
  },
  setGroupSelected(state, data) {
    Vue.set(state, "groupSelected", data);
  },
};

export default mutations;