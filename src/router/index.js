import { createRouter, createWebHistory } from 'vue-router'

import ProfileView from '../views/ProfileView.vue'
import ProfileCreatorView from '../views/ProfileCreatorView.vue'
import WorldCreatorView from '../views/WorldCreatorView.vue'
import ExplorationView from '../views/ExplorationView.vue'
import InteractionView from '../views/InteractionView.vue'
import InventoryView from '../views/InventoryView.vue'
import DuelView from '../views/DuelView.vue'

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
      meta: { header: false, goback: false, background: "bg-color-brand-five"}
    },
    {
      path: '/world-creator',
      name: 'World Creator',
      component: WorldCreatorView,
      meta: { header: false, goback: false, background: "bg-color-brand-five"}
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
      meta: { header: true, goback: true, background: "bg-color-brand-five" }
    },
    {
      path: '/inventory',
      name: 'Inventory',
      component: InventoryView,
      meta: { header: true, goback: true, background: "bg-color-brand-five" }
    },
    {
      path: '/duel',
      name: 'Duel',
      component: DuelView,
      meta: { header: true, goback: true, background: "bg-color-brand-five" }
    },
  ],
})

export default router
