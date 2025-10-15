import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import ClassesPage from './pages/ClassesPage.vue'
import ClassDetailPage from './pages/ClassDetailPage.vue'
import CartPage from './pages/CartPage.vue'
import OrderConfirmationPage from './pages/OrderConfirmationPage.vue'
import AboutPage from './pages/AboutPage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/classes', name: 'Classes', component: ClassesPage },
  { path: '/class/:id', name: 'ClassDetail', component: ClassDetailPage },
  { path: '/cart', name: 'Cart', component: CartPage },
  { path: '/confirmation', name: 'OrderConfirmation', component: OrderConfirmationPage },
  { path: '/about', name: 'About', component: AboutPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

