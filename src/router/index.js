import { createRouter, createWebHistory } from 'vue-router'
import KingdomView from '../views/KingdomView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Kingdom',
      component: KingdomView,
    },
  ],
})

export default router
