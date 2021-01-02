import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import LayoutIndex from '@/pages/layout/layout-index'
import Index from '@/pages/index'

const routes = [
  {
    path: '/',
    component: LayoutIndex,
    children: [
      {
        path: 'index',
        component: Index
      }
    ]
  }
]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

export default router