<template>
  <div id="nav">
    <div class="links">
      <router-link to="/">SOBRE A CERVEJA</router-link>
      <router-link to="/contato">CONTATO</router-link>
      <router-link to="/loja">LOJA</router-link>
    </div>

    <div class="button-login">
      <button @click="Modal">Fazer Login</button>
      <span class="register-link"> ou <a href="">Cadastre-se</a> </span>
    </div>
  </div>
  <router-view />
</template>

<script>
import Modal from '@/components/Modal.vue';
export default {
  data() {
    Modal;
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  outline: none;
  border: none;
}

body {
  background-color: #1b191f;
  color: white;
  font-family: 'Inter', sans-serif;
  margin: 5rem 0;
}

#nav {
  display: flex;
  text-align: center;
  width: 100%;
  margin: 80px auto;
  justify-content: center;
  align-items: center;
  font-weight: 500;

  :first-child a {
    font-family: 'Roboto Slab', serif;
    color: white;
    text-decoration: none;
    margin-left: 72px;
    font-size: 24px;

    &:hover {
      color: #e58200;
    }
  }

  .button-login {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    margin-left: 72px;

    button {
      background-color: #e58200;
      border: none;
      border-radius: 4px;
      padding: 8px 16px;
      color: #1b191f;
      font-size: 16px;
      font-weight: 500;
      cursor: pointer;
      transition: 0.2s;
      font-family: 'Roboto Slab', serif;

      &:hover {
        background-color: lighten($color: #e58200, $amount: 10%);
      }
    }

    .register-link {
      color: white;
      margin: 0;
      padding: 0;
      margin-top: 5px;
      a {
        font-size: 16px;
        line-height: 24px;
        font-family: 'Inter', sans-serif;
        color: #d27e00;
      }
    }
  }
}
</style>
