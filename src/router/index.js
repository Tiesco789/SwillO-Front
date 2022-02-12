import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Contato from '../views/Contato.vue';
import Loja from '../views/Loja.vue';
import Login from '../views/Login.vue';
import Cadastro from '../views/Cadastro.vue';
import Carrinho from '../views/Carrinho.vue';
import CadastrarProduto from '../views/CadastrarProduto.vue';

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

  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: Cadastro,
  },

  {
    path: '/carrinho',
    name: 'Carrinho',
    component: Carrinho,
  },
  {
    path: '/cadastrar-produto',
    name: 'CadastrarProduto',
    component: CadastrarProduto,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
