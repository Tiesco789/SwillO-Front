import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Contato from '../views/Contato.vue';
import Loja from '../views/Loja.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/contato',
    name: 'Contato',
    component: Contato,
  },
  {
    path: '/loja',
    name: 'Loja',
    component: Loja,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
