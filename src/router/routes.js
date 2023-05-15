const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
    ]
  },
  { path: '/events/online', component: () => import('src/components/homePages/EventsOnline.vue') },
  { path: '/events/in-person', component: () => import('src/components/homePages/EventsInPerson.vue') },
  {
    path: '/admin/dashboard',
    component: () => import('src/components/admin/DashboardComponent.vue'),
    children: [
      { path: '/admin/company', component: () => import('src/components/admin/pagesCompany/AdministratorCompany.vue'), meta: { hideFooter: true } },
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
