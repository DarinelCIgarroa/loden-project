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
    component: () => import('src/components/admin/DashboardComponent.vue'),
    children: [
      { path: '/admin/team', component: () => import('src/components/admin/pagesTeam/AdministratorTeam.vue') },
      { path: '/admin/messages', component: () => import('src/components/admin/pagesMessage/AdministratorMessages.vue') },
      { path: '/admin/events', component: () => import('src/components/admin/pagesEvent/AdministratorEvents.vue') },
    ],
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
