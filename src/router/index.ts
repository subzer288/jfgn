import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '@/views/IndexView.vue'
import HomePage from '@/views/pages/HomePage.vue'
import AboutPage from '@/views/pages/AboutPage.vue'
import ProfilePage from '@/views/pages/ProfilePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexView,
      children: [
        {
          name: 'Home',
          path: '',
          component: HomePage
        },
        {
          name: 'About',
          path: '/about',
          component: AboutPage,
        },
        {
          name: 'Profile',
          path: '/profile',
          component: ProfilePage,
        },
      ]
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
