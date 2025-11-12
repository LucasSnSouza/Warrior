import { createRouter, createWebHistory } from 'vue-router'
import ExplorationView from '../views/ExplorationView.vue'
import InteractionView from '../views/InteractionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Exploration',
      component: ExplorationView,
      meta: { goback: false }
    },
    {
      path: '/interaction',
      name: 'Interaction',
      component: InteractionView,
      meta: { goback: true }
    },
  ],
})

export default router
