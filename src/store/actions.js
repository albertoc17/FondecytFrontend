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
  saveEstadisticasGenerales: ({ commit }, data) => {
    commit("setEstadisticasGenerales", data);
  },
  saveAnalysisTab: ({ commit }, { endpoint, selected }) => {
    commit("setAnalysisTab", {endpoint, selected});
  },
  saveAnalysisGroupTab: ({ commit }, data) => {
    commit("setAnalysisGroupTab", data);
  },
  saveFilename: ({ commit }, data) => {
    commit("setFilename", data);
  }
}

export default actions;