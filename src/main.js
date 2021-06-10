
import Vue from 'vue'
import App from './App'
import router from './router'

import { iconsSet as icons } from './assets/icons/icons.js'

import store from './store'
import i18n from './i18n'
import Vuelidate from 'vuelidate'
import axios from 'axios'
const {getApiUrl} = require("../src/assets/js/service")


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
  else if(to.name =='deposit'){
    next();
  }
  else if(to.name == 'payment'){
    next();
  }
  else if(to.name == 'reset_password'){
    next();
  }
  else if(to.name == 'forget_password'){
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
const http = axios.create({
  baseURL: "https://alphaworkbook.com:/api/",});
http.interceptors.response.use(null, function (error) {
  console.log("checks every response");
  if (error.response.status === 401) {
    Store.dispatch(
      "check",
      "- some one have loged in with your account or token have expired"
    )


    // router.replace('/Login')
  }
  else if (error.response.status === 403) {

    // router.push('/Forbidden')
  }

  else {
    console.log(error);
  }
  return Promise.reject(error)
})


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
