import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/views/Landing.vue'
import Thot from '@/views/Thot.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '*',
    redirect: '/'
  }, {
    path: '/',
    name: 'Landing',
    component: Landing
  }, {
    path: '/thot',
    name: 'Thot',  
    component: Thot
  },
]
})
