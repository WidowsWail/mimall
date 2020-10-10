import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home.vue'
import Login from '../pages/login'
import Index from '../pages/index.vue'
import Product from '../pages/product.vue'
import Detail from '../pages/detail.vue'
import Cart from '../pages/cart.vue'
import Order from '../pages/order.vue'
import OrderConfirm from '../pages/orderConfirm.vue'
import OrderList from '../pages/orderList.vue'
import OrderPay from '../pages/orderPay.vue'
import AliPay from '../pages/alipay.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect:'/index',
    children:[
      {
        path: '/index',
        name: 'index',
        component: Index,
      },
      {
        path: '/product/:id',
        name: 'product',
        component: () => import('./../pages/product.vue'),
      },
      {
        path: '/detail/:id',
        name: 'detail',
        component: () => import('./../pages/detail.vue'),
      },
    ]
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path: '/login',
    name: 'login',
    component: () => import('./../pages/login.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('./../pages/cart.vue'),
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('./../pages/order.vue'),
    children:[
      {
        path: 'list',
        name: 'order-list',
        component: () => import('./../pages/orderList.vue'),
      },
      {
        path: 'confirm',
        name: 'order-confirm',
        component: () => import('./../pages/orderConfirm.vue'),
      },
      {
        path: 'pay',
        name: 'order-pay',
        component: () => import('./../pages/orderPay.vue'),
      },
      {
        path: 'alipay',
        name: 'alipay',
        component: () => import('./../pages/alipay.vue'),
      },
    ]
  }
]

const router = new VueRouter({
  
  routes,
  // mode: 'history',
})

export default router
