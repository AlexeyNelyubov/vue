import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/pinia',
      name: 'pinia',
      component: () => import('../views/PiniaView.vue')
    },
    {
      path: '/composible',
      name: 'composible',
      component: () => import('../views/ComposibleView.vue')
    }
  ]
})

export default router
