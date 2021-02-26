import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/views/Landing.vue'
import Thot from '@/views/Thot.vue'
import DetallesFeedback from '@/views/DetallesFeedback.vue'


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
  {
    path: '/DetallesFeedback/:analisisId',
    name: 'DetallesFeedback',  
    component: DetallesFeedback
  }

]
})
