import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import HelloWorld from '@/components/HelloWorld'

const routes = [
  {
    path: '/hello',
    component: HelloWorld
  }
]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

export default router