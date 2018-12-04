import Vue from 'vue'
import Router from 'vue-router'
import AppHome from './components/home/AppHome.vue'
import About from './views/About.vue'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', component: AppHome },
    { path: '/about', component: About },
  ]
})

router.beforeEach((to, from, next) => {

  // redirect to login page if not logged in and trying to access a restricted page
  // const publicPages = ['/', '/login', '/register'];
  // const authRequired = !publicPages.includes(to.path);
  // const loggedIn = localStorage.getItem('user');

  // if (authRequired && !loggedIn) {
  //   return next('/');
  // }

  next();
})

export default router;
