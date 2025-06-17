import { createRouter, createWebHistory } from 'vue-router'   // ✅ Required
import LoginPage from '../views/LoginPage.vue'
import HomePage from '../views/HomePage.vue'
import DetailsPage from '../views/DetailsPage.vue'

const routes = [
  { path: '/', name: 'Login', component: LoginPage },
  { path: '/home', name: 'Home', component: HomePage },
  { path: '/details/:code', name: 'Details', component: DetailsPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// ✅ Route Guard for Login
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token')
  if (to.name !== 'Login' && !isAuthenticated) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
