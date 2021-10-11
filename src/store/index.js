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
    errores: {
      Extensas: 0,
      Breves: 0,
    }
  },
  parrafos: {
    html: null,
    errores: {
      Extensas: 0,
      Breves: 0,
    }
  },
  persona: {
    html: null,
    errores: {
      Extensas: 0,
      Breves: 0,
    }
  },
  vozPasiva: {
    html: null,
    nro_errores: 0,
  },
  conectores: {
    html: null,
    nro_errores: 0,
  },
  complejidad: {
    html: null,
    nro_errores: 0,
  },
  lecturabilidad: {
    html: null,
    errores: {
      algoDificil: 0,
      algoFacil: 0,
      Dificil: 0,
      Facil: 0,
      normal: 0,
    }
  },
  proposito: {
    html: null,
    errores: {
      Mm0: 0,
      Mm1: 0,
      Mm2: 0,
      Mm3: 0,
      Mm4: 0,
    }
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