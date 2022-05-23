import Vue from 'vue'
// 处理 NavigationDuplicated 错误，封装 VueRouter
import VueRouter from '@/utils/rewritePush'

import Home from '@/views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login')
  }
]

const router = new VueRouter({
  routes
})

export default router
