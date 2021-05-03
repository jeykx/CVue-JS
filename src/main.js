import Vue from 'vue'
import VueMeta from 'vue-meta'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/style.css'

import { BootstrapVue } from 'bootstrap-vue'
Vue.use(BootstrapVue)

Vue.use(VueMeta)

import router from './router'

Vue.config.productionTip = false

module.exports = {
  publicPath: '/Jeremy-Dufour/'
}


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
