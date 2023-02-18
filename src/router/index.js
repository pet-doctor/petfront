// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/petdoctor',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/Home.vue'),
    children: [
      {
        path: 'enrollment',
        name: 'Make An Appointment',
        component: () => import('@/views/Enrollment.vue')
      },
      {
        path: 'employee',
        name: 'Our Doctors',
        component: () => import('@/views/Employee.vue')
      }
    ],
  },
  {}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
