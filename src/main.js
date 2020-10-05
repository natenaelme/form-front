
import Vue from 'vue'
import App from './App'
import router from './router'

import { iconsSet as icons } from './assets/icons/icons.js'

import store from './store'
import i18n from './i18n'
import Vuelidate from 'vuelidate'

Vue.config.performance = true
Vue.use(Vuelidate)

Vue.prototype.$log = console.log.bind(console)

new Vue({
  el: '#app',
  router,
  store,
  icons,
  template: '<App/>',
  i18n,

  components: {
    App
  }
})