import Vue from "vue";

const mutations = {
  setHtmlGerundios(state, data) {
    Vue.set(state.gerundios, data);
  },
  sethtmlOraciones(state, data) {
    Vue.set(state, "htmlOraciones", data);
  },
  sethtmlParrafos(state, data) {
    Vue.set(state, "htmlParrafos", data);
  },
  sethtmlPersona(state, data) {
    Vue.set(state, "htmlPersona", data);
  },
  sethtmlVozPasiva(state, data) {
    Vue.set(state, "htmlVozPasiva", data);
  },
  sethtmlConectores(state, data) {
    Vue.set(state, "htmlConectores", data);
  },
  sethtmlLecturabilidad(state, data) {
    Vue.set(state, "htmlLecturabilidad", data);
  },
  sethtmlProposito(state, data) {
    Vue.set(state, "htmlProposito", data);
  },
  setTabSelected(state, data) {
    Vue.set(state, "tabSelected", data);
  },
  setGroupSelected(state, data) {
    Vue.set(state, "groupSelected", data);
  },
};

export default mutations;