import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'
// 配置接口的基本路径
axios.defaults.baseURL=' https://www.escook.cn'
// 挂载到Vue实例对象的原型上
Vue.prototype.$axios = axios

new Vue({
  render: h => h(App),
}).$mount('#app')
