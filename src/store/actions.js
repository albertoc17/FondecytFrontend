const actions = {
  saveHtmlGerundios: ({ commit }, {html, errores}) => {
    commit("setHtmlGerundios", {html, errores});
  },
  saveOraciones: ({ commit },{html, error}) => {
   commit("sethtmlOraciones", {html, error});
  },
  saveParrafos: ({ commit }, {html, error}) => {
   commit("setParrafos", {html, error});
  },
  savePersona: ({ commit }, {html, error}) => {
   commit("setPersona", {html, error});
  },
  saveVozPasiva: ({ commit }, {html, error}) => {
   commit("setVozPasiva", {html, error});
  },
  saveConectores: ({ commit }, {html, error}) => {
   commit("setConectores", {html, error});
  },
  saveComplejidad: ({ commit }, {html, error}) => {
    commit("setComplejidad", {html, error});
   },
  saveLecturabilidad: ({ commit }, {html, error}) => {
   commit("setLecturabilidad", {html, error});
  },
  saveProposito: ({ commit }, {html, error}) => {
   commit("setProposito", {html, error});
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