/*eslint-disable-global-require */
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import store from '@/store'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import router from './router'
import Loading from "vue-loading-overlay"
import "vue-loading-overlay/dist/vue-loading.css"
import VueFormulate from '@braid/vue-formulate'
import { es } from '@braid/vue-formulate-i18n'
import './assets/css/vueFormulate.css'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(Loading);
Vue.use(VueFormulate, {
  plugins: [es],
  locale: 'es'
})

new Vue({
  el: '#app',
  store,
  router,
  components: {
    App
  },
  render: h => h(App),
})
