// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: {
      name: "Home"
    }
  },
  {
    path: '/petdoctor',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/enrollment',
    name: 'Make An Appointment',
    component: () => import('@/views/Enrollment.vue')
  },
  {
    path: '/employee',
    name: 'Our Doctors',
    component: () => import('@/views/Employee.vue')
  },
  {
    path: '/login',
    name: 'Log In',
    component: () => import('@/views/Login.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
