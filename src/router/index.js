import { createRouter, createWebHistory } from '@ionic/vue-router';

import memories_page from '../pages/memories_page.vue';


const routes = [
  {
    path: '/',
    redirect: '/memories'
  },
  {
    path: '/memories',
    component: memories_page
  },
  {
    path: '/memories/:id',
    component: () => import('../pages/memories_details.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
