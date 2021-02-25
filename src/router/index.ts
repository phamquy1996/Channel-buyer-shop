import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/index',
    name: 'index',
    component: () => import('./../pages/index/index.vue')
  },
  {
    path:'/product/category',
    name: '/product/category',
    component: () => import('./../pages/addCateProduct/index.vue')
  },
  {
    path:'/product/new',
    name: '/product/new',
    component: () => import('./../pages/ProductNew/index.vue')
  },
  {
    path:'/sale/order',
    name: '/sale/order',
    component: () => import('./../pages/SaleOrder/index.vue')
  },
  {
    path:'/sale/order/:id',
    name: '/sale/detail',
    component: () => import('./../pages/DetailOrder/index.vue')
  },
  {
    path:'/product/list/',
    name: '/product/list',
    component: () => import('./../pages/ListProduct/index.vue')
  }
] 

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
