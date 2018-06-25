require('../node_modules/vuetify/src/stylus/app.styl')

import Vue from 'vue'
import VueRouter from 'vue-router'
import {
  Vuetify,
  VApp,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VToolbar,
  VGrid,
  VSubheader,
  VAvatar,
  VMenu,
  VSwitch,
  VCard,
  VTextField,
  VProgressLinear,
  transitions
} from 'vuetify'

import App from './App.vue'
import {
  routes
} from './routes'

Vue.use(Vuetify, {
  components: {
    VApp,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VToolbar,
    VGrid,
    VSubheader,
    VAvatar,
    VMenu,
    VSwitch,
    VCard,
    VTextField,
    VProgressLinear,
    transitions
  },
  theme: {
    primary: '#ee44aa',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})