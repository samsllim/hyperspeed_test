import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Others from '../views/Others.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    title: 'Home',
    component: Home
  },
  {
    path: '/corporate-secretary',
    name: 'corporateSecretary',
    meta: {
      title: 'Corporate Secretary',
    },
    component: Others
  },
  {
    path: '/directors',
    name: 'directors',
    meta: {
      title: 'Directors',
    },
    component: Others
  },
  {
    path: '/shareholders',
    name: 'shareholders',
    meta: {
      title: 'Shareholders',
    },
    component: Others
  },
  {
    path: '/company-timeline',
    name: 'companyTimeline',
    meta: {
      title: 'Company Timeline',
    },
    component: Others
  },
  {
    path: '/documents',
    name: 'documents',
    meta: {
      title: 'Documents',
    },
    component: Others
  },
  {
    path: '/e-signatures',
    name: 'eSignatures',
    meta: {
      title: 'eSignatures',
    },
    component: Others
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
