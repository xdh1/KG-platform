import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/query"
    },
    {
      path: '/',
      name: 'mainPage',
      component: () => import('@/views/MainView.vue'),
      children: [
        {
          path: "/query",
          name: "query",
          component: () => import('@/views/QueryView.vue')
        },
        {
          path: "/material",
          name: "uploadMaterial",
          component: () => import('@/views/MaterialView.vue')
        },
        {
          path: "/doc",
          name: "doc",
          component: () => import('@/views/DocView.vue')
        }
      ]
    }

  ]
})

export default router
