import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { title: "Home" },
    component: () => import('../views/Home.vue')
  },
  {
    path: '/courses',
    name: 'Courses',
    meta: { title: "Courses" },
    component: () => import('../views/Course.vue')
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
