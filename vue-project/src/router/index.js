import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import DirectoryView from '@/views/DirectoryView.vue'
import PlaygroundView from '@/views/PlaygroundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/directory',
      name: 'directory',
      component: DirectoryView
    },
    {
      path: '/playground/',
      name: 'playground',
      component: PlaygroundView,
      // meta: { componentToRender: null }
    }
  ]
})

export default router
