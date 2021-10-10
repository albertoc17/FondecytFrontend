const actions = {
  saveHtmlGerundios: ({ commit }, data) => {
    commit("setHtmlGerundios", data);
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
  saveTabSelected: ({ commit }, data) => {
    console.log("wardiola: ", data);
    commit("setTabSelected", data);
  },
  saveGroupSelected: ({ commit }, data) => {
    // console.log("group: ", data);
    // let asd = data.map((d) => d.label)
    commit("setGroupSelected", data);
  }
}

export default actions;