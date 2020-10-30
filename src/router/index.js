import Vue from 'vue'
import VueRouter from 'vue-router'
import main from '../views/main/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: main,
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('../views/main/home')
      },
      {
        path: '/archive',
        name: 'archive',
        component: () => import('../views/main/archive')
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/main/about')
      },
      {
        path: '/post',
        name: 'post',
        component: () => import('../views/main/post')
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
