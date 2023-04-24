const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
    ]
  },
  {
    path: '/admin/dashboard',
    component: () => import('components/admin/AdminMainLayout.vue'),
    beforeEnter: (to, from, next) => {
      if (sessionStorage.getItem('authentication_token')) {
        next();
      } else {
        next('/login');
      }
    },
  },
  {
    path: '/login',
    component: () => import('src/components/admin/LoginComponent.vue'),
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  },
]

export default routes
