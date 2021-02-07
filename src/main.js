
import Vue from 'vue'
import App from './App'
import router from './router'

import { iconsSet as icons } from './assets/icons/icons.js'

import store from './store'
import i18n from './i18n'
import Vuelidate from 'vuelidate'


Vue.config.performance = true
Vue.use(Vuelidate)

Vue.prototype.$log = console.log.bind(console);

router.beforeEach((to, from, next) => {
  console.log(to.name);
  if(to.name == "login"){
    console.log("test")
    next();
  }
  else if(to.name =='signup'){
    next();
  }
  else if(to.name =='verify'){
    next();
  }
  else if(to.name != "login"){
    console.log("exit")
    if (!localStorage.getItem("token")) {
      next("/login");
    }
  
     else {
      next();
    }
  }
  
});

const auth = window.localStorage.getItem("auth");

if (auth) {
  store.commit("setAuth", JSON.parse(auth));
}

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
