const routes = [{
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
    children: [{
        path: '',
        component: () => import('pages/IndexPage.vue')
      },
    ]
  },
  {
    path: '/login',
    component: () => import('components/admin/Login.vue')
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  },
]

export default routes
