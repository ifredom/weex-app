/*global Vue*/
import Router from 'vue-router';
import Home from '@/assets/views/home';
import Neighbour from '@/assets/views/neighbour';
import Message from '@/assets/views/message';
import My from '@/assets/views/my';

Vue.use(Router);

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/neighbour',
      name: 'neighbour',
      component: Neighbour
    },
    {
      path: '/message',
      name: 'message',
      component: Message
    },
    {
      path: '/my',
      name: 'my',
      component: My
    }
  ]
});
