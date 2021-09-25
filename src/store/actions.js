const actions = {
  saveHtmlGerundios: ({ commit }, data) => {
    commit("saveHtmlGerundios", data);
  },
  savehtmlOraciones: ({ commit }, data) => {
   commit("sethtmlOraciones", data);
  },
  savehtmlParrafos: ({ commit }, data) => {
   commit("sethtmlParrafos", data);
  },
  savehtmlPersona: ({ commit }, data) => {
   commit("sethtmlPersona", data);
  },
  savehtmlVozPasiva: ({ commit }, data) => {
   commit("sethtmlVozPasiva", data);
  },
  savehtmlConectores: ({ commit }, data) => {
   commit("sethtmlConectores", data);
  },
  savehtmlLecturabilidad: ({ commit }, data) => {
   commit("sethtmlLecturabilidad", data);
  },
  savehtmlProposito: ({ commit }, data) => {
   commit("sethtmlProposito", data);
  },
}

export default actions;