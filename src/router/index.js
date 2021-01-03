import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import overview from '../views/overview.vue'
import products from '../views/products.vue'
import orders from '../views/orders.vue'

Vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      children: [{
        path: 'overview',
        name: 'Overview',
        component: overview
      },
      {
        path: 'products',
        name: 'products',
        component: products
      },
      {
        path: 'orders',
        name: 'orders',
        component: orders
      },
      ]
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  ]
});