import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  },
  {
    path: '/bookings',
    name: 'bookings',
    component: () => import(/* webpackChunkName: "bookings" */ '../views/BookingsView.vue')
  },
  {
    path: '/history',
    name: 'history',
    component: () => import(/* webpackChunkName: "history" */ '../views/HistoryView.vue')
  },
  {
    path: '/schedules',
    name: 'schedules',
    component: () => import(/* webpackChunkName: "schedules" */ '../views/SchedulesView.vue')
  },
  {
    path: '/specs',
    name: 'specs',
    component: () => import(/* webpackChunkName: "specs" */ '../views/SpecsView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/help',
    name: 'help',
    component: () => import(/* webpackChunkName: "help" */ '../views/HelpView.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/ProfileView.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
