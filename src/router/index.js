import { createRouter, createWebHistory } from 'vue-router'

import ProfileView from '../views/ProfileView.vue'
import ProfileCreatorView from '../views/ProfileCreatorView.vue'
import ExplorationView from '../views/ExplorationView.vue'
import InteractionView from '../views/InteractionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Profile',
      component: ProfileView,
      meta: { header: false, goback: false, background: "bg-color-brand-three" }
    },
    {
      path: '/profile-creator',
      name: 'Profile Creator',
      component: ProfileCreatorView,
      meta: { header: true, goback: false, background: "bg-color-brand-five"}
    },
    {
      path: '/exploration',
      name: 'Exploration',
      component: ExplorationView,
      meta: { header: true, goback: false, background: "bg-color-brand-three"}
    },
    {
      path: '/interaction',
      name: 'Interaction',
      component: InteractionView,
      meta: { header: true, goback: true, background: "bg-color-brand-three" }
    },
  ],
})

export default router
