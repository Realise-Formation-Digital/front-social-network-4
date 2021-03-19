import Vue from 'vue'
import App from './App.vue'

//Importing plugins
import vuetify from '@/plugins/vuetify'
import VueRouter from 'vue-router'

// Importing pages
import Home from '@/pages/Home'
import Villes from '@/pages/Villes'
import Contact from '@/pages/Contact'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/villes',
    component: Villes
  },
  { 
    path: '/contact',
    component: Contact
  }
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

new Vue({
  vuetify,
  router: router,
  render: h => h(App),
}).$mount('#app')
