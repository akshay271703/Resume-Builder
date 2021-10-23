import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Template2 from '../components/Templates/Template2.vue'
import PrintTemplate from '../views/TemplateForm.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/template',
    name: 'Template2',
    component: Template2
  },
  {
    path: '/print',
    name: 'PrintTemplate',
    component: PrintTemplate
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
