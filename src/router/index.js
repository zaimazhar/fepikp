import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    
  },
  {
    path: '/courses',
    name: 'Courses',
    component: () => import('../views/Course.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    children: [
      {
        path: 'program',
        component: () => import('../views/admin/Create.vue')
      },
      {
        path: 'edit/:id',
        component: () => import('../views/admin/Edit.vue')
      },
      {
        path: 'view/:id',
        component: () => import('../views/admin/View.vue')
      },
      {
        path: 'delete/:id',
        component: () => import('../views/admin/Delete.vue')
      },
      {
        path: 'home',
        component: () => import('../views/admin/Home.vue')
      },
    ],
    component: () => import('../views/admin/Dashboard.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/register/:id',
    component: () => import('../views/Register.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeResolve((to, from, next) => {
  if(to.matched.some(rec => rec.meta.requiresAuth)) {
    if(!store.getters.authState) {
      next('/login')
      return
    } 
    else next()
  } else next()
})

export default router
