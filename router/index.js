import Vue from 'vue';
import VueRouter from 'vue-router'

import Demo from '@/modules/wms/components/Demo.vue';
import Index from '@/modules/wms/components/Index.vue';


Vue.use(VueRouter)

const routes = [
  {
    path: '/demo',
    name: 'demo-page',
    component: Demo
  },
  {
    path: '/',
    name: 'index-page',
    component: Index
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes,
  linkExactActiveClass: 'active'
})

export default router

