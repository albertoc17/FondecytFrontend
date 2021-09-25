import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'
Vue.use(Vuex)

const initialState = {
  htmlGerundios: null,
  htmlOraciones: null,
  htmlParrafos: null,
  htmlPersona: null,
  htmlVozPasiva: null,
  htmlConectores: null,
  htmlLecturabilidad: null,
  htmlProposito: null,
}

const store = new Vuex.Store({
  state: initialState,
  getters,
  actions,
  mutations,
})

export default store;