import Vue from 'vue'
import App from './App.vue'
import VueFormulate from '@braid/vue-formulate'
import './assets/css/styles.css'
import VueRouter from 'vue-router'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueRouter)

Vue.use(VueFormulate)

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  render: h => h(App),
})
