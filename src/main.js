import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'

// Importing pages
import Home from './pages/Home'
import About from './pages/About';
import Contact from './pages/Contact';
import Villes from './pages/Villes'

Vue.use(VueRouter)

import './scss/main.scss';

Vue.config.productionTip = false


const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/villes',
    component: Villes
  },
  { 
    path: '/contact',
    component: Contact
  },
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

