import { createRouter, createWebHistory } from 'vue-router'
import ExplorationView from '../views/ExplorationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Exploration',
      component: ExplorationView,
    },
  ],
})

export default router
