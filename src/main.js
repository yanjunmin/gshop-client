// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {Button} from 'mint-ui'
// 引入mint-ui css
import 'mint-ui/lib/style.css'
// 加载mockServer即可
import '@/mock/mockServer'

Vue.config.productionTip = false
// 注册全局组件标签
Vue.component(Button.name, Button) // <mt-button>
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
