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
      meta: { header: false, goback: false, configuration: false, navigation: false}
    },
    {
      path: '/profile-creator',
      name: 'Profile Creator',
      component: ProfileCreatorView,
      meta: { header: false, goback: false, configuration: false, navigation: false}
    },
    {
      path: '/exploration',
      name: 'Exploration',
      component: ExplorationView,
      meta: { header: true, goback: false, configuration: true, navigation: true }
    },
    {
      path: '/interaction',
      name: 'Interaction',
      component: InteractionView,
      meta: { header: true, goback: true, configuration: true, navigation: true }
    },
  ],
})

export default router
