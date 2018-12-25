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
      component: Msite,
      meta: {
        showFooter: true
      }
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
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
      meta: {
        showFooter: true
      }
    }
  ]
})
