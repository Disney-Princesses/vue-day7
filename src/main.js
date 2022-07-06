import Vue from 'vue'
import ElementUI from 'element-ui';
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false

// 导入模块
import axios from 'axios'
// 设置根地址
axios.defaults.baseURL = 'https://www.escook.cn'
// 将axios设置到vue原型对象上
Vue.prototype.$axios = axios
new Vue({
  render: h => h(App),
}).$mount('#app')
