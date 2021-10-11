const getters = {
  gethtmlGerundios(state) {
    return state.htmlGerundios;
  },
  gethtmlOraciones(state) {
    return state.htmlOraciones;
  },
  gethtmlParrafos(state) {
    return state.htmlParrafos;
  },
  gethtmlPersona(state) {
    return state.htmlPersona
  },
  gethtmlVozPasiva(state) {
    return state.htmlVozPasiva
  },
  gethtmlConectores(state) {
    return state.htmlConectores
  },
  gethtmlLecturabilidad(state) {
    return state.htmlLecturabilidad
  },
  gethtmlProposito(state) {
    return state.htmlProposito
  },
  getTabSelected(state) {
    return state.tabSelected
  },
  getRetroalimentacion(state) {
    switch (state.tabSelected) {
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
        break;
    }
  },
}
export default getters;