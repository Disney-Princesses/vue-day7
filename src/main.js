import Vue from 'vue'
import App from './App.vue'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import axios from "axios";
axios.defaults.baseURL = "https://www.escook.cn";
Vue.prototype.$axios=axios;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
