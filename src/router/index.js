import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import AboutView from "../views/AboutView.vue";
import Login from "../views/auth/Login.vue"
import Jobs from "../views/jobs/Jobs.vue"
import { useAuthStore } from '../stores/AuthStore';

const authGuard = (to, from, next) => {
  const authStore = useAuthStore();
  if (authStore.isAuthenticated) {
    next()
  }
  else {
    next('/login')
  }
}
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs,
    beforeEnter: authGuard
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
