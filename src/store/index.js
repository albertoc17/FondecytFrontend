import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'
Vue.use(Vuex)

const initialState = {
  gerundios: {
    html: null,
    nro_errores: 0,
  },
  oraciones: {
    html: null,
    nro_errores: 0,
  },
  parrafos: {
    html: null,
    nro_errores: 0,
  },
  persona: {
    html: null,
    nro_errores: 0,
  },
  vozPasiva: {
    html: null,
    nro_errores: 0,
  },
  conectores: {
    html: null,
    nro_errores: 0,
  },
  lecturabilidad: {
    html: null,
    nro_errores: 0,
  },
  proposito: {
    html: null,
    nro_errores: 0,
  },
  tabSelected: null,
  groupSelected: null,
}

const store = new Vuex.Store({
  state: initialState,
  getters,
  actions,
  mutations,
})

export default store;