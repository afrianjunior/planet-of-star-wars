import Router from 'vue-router';
import Vue from 'vue';

import { Home } from './pages';

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
});
