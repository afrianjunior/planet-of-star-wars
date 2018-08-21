import Vue from 'vue'
import Axios from 'axios'
import App from './App.vue'

import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.config.devtools = true
Vue.prototype.Axios = Axios.create({
  baseURL: 'https://swapi.co/api/'
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
