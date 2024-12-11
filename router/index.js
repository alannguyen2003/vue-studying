import Vue from 'vue';
import VueRouter from 'vue-router'

// import Demo from '@/modules/wms/components/Demo.vue';
// import Index from '@/modules/wms/components/Index.vue';
import route from './router';


Vue.use(VueRouter)

const routes = [].concat(
  route
);

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes,
  linkExactActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});

export default router

