import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import LessonsPage from './pages/LessonsPage.vue'
import LessonDetail from './pages/LessonDetail.vue'
import CartPage from './pages/CartPage.vue'
import OrderConfirmation from './pages/OrderConfirmation.vue'

const routes = [
  { path: '/', component: HomePage, name: 'Home' },
  { path: '/classes', component: LessonsPage, name: 'Lessons' },
  { path: '/classes/:id', component: LessonDetail, name: 'LessonDetail', props: true },
  { path: '/cart', component: CartPage, name: 'Cart' },
  { path: '/order-confirmation', component: OrderConfirmation, name: 'OrderConfirmation' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
