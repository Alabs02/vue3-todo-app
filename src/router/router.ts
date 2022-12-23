import {createWebHistory, createRouter, RouteRecordRaw} from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'AppLayout',
    component: () =>
      import(/* webpackChunkName: "layout" */ '@/layouts/AppLayout.vue'),
    children: [
      {
        path: '',
        name: 'MainPage',
        component: () =>
          import(/* webpackChunkName: "mainRoute" */ '@/pages/MainPage.vue'),
        meta: {
          requiresAuth: false,
        },
      },
    ],
  },
  {
    path: '/:pathMatch(.*)',
    name: 'TodoAppNotFoundPage',
    component: () =>
      import(
        /* webpackChunkName: "ErrorRoute" */ '@/pages/TodoAppNotFoundPage.vue'
      ),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash)
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    else if (savedPosition) return savedPosition
    else
      return {
        top: 0,
        behavior: 'smooth',
      }
  },
})

export default router
