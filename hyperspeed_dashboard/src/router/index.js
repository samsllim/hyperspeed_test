import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CorporateSecretary from '../views/CorporateSecretary.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/corporate-secretary',
    name: 'corporateSecretary',
    component: CorporateSecretary
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
