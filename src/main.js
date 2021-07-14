import Vue from 'vue'
import App from './App.vue'

import VueRouter from '_vue-router@3.5.2@vue-router';

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this,location).catch(err => err) 
}

import '@/assets/css/common.css';
Vue.config.productionTip = false
import router from './router'

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
