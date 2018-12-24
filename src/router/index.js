import Vue from 'vue'
import Router from 'vue-router'
import Msite from '@/pages/Msite/Msite'
import Login from '@/pages/Login/Login'
import Profile from '@/pages/Profile/Profile'
import Shop from '@/pages/Shop/Shop'
import Order from '@/pages/Order/Order'
import Search from '@/pages/Search/Search'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/msite',
      name: 'msite',
      component: Msite
    },
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    }
  ]
})
