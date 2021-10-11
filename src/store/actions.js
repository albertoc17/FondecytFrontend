const actions = {
  saveGerundios: ({ commit }, { html, error }) => {
    commit("setGerundios", { html, error });
  },
  saveOraciones: ({ commit }, { html, error }) => {
    commit("setOraciones", { html, error });
  },
  saveParrafos: ({ commit }, { html, error }) => {
    commit("setParrafos", { html, error });
  },
  savePersona: ({ commit }, { html, error }) => {
    commit("setPersona", { html, error });
  },
  saveVozPasiva: ({ commit }, { html, error }) => {
    commit("setVozPasiva", { html, error });
  },
  saveConectores: ({ commit }, { html, error }) => {
    commit("setConectores", { html, error });
  },
  saveComplejidad: ({ commit }, { html, error }) => {
    commit("setComplejidad", { html, error });
  },
  saveLecturabilidad: ({ commit }, { html, error }) => {
    commit("setLecturabilidad", { html, error });
  },
  saveProposito: ({ commit }, { html, error }) => {
    commit("setProposito", { html, error });
  },
  saveSelectedTab: ({ commit }, data) => {
    commit("setSelectedTab", data);
  },
  saveGroupSelected: ({ commit }, data) => {
    // console.log("group: ", data);
    commit("setGroupSelected", data);
  }
}

export default actions;