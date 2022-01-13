import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/views/Landing.vue'
import Dashboard from '@/views/Dashboard.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '*',
    redirect: '/'
  }, {
    path: '/landing',
    name: 'Landing',
    component: Landing
  }, {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
]
})
