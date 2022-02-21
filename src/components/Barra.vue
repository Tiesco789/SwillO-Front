/* eslint-disable */
<template>
  <BarraNavegacaoLogado v-if="usuarioestaLogado" />
  <BarraNavegacaoDeslogado v-else />
</template>
<script>
import store from "@/store/index.js";
import BarraNavegacaoDeslogado from "@/components/BarraNavegacaoDeslogado";
import BarraNavegacaoLogado from "@/components/BarraNavegacaoLogado";
/* eslint-disable */
export default {
  components: {
      BarraNavegacaoLogado,
      BarraNavegacaoDeslogado
  },
  computed: {
    
    usuarioestaLogado() {
        console.log(store.state.token)
        return Boolean(this.$store.state.token)
    }
  }
}
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
}

#nav {
  display: flex;
  text-align: center;
  width: 100%;
  padding: 3rem;
  margin-bottom: 80px;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  box-shadow: 0 0 0 0.1rem #e58200;

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

  .links {
    display: flex;
    align-items: center;
  }

  .button-login {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    margin-left: 72px;

    a.login {
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

    a.register {
      color: #e58200;
      font-size: 16px;
      font-weight: 500;
      font-family: 'Roboto Slab', serif;
      cursor: pointer;
      transition: 0.2s;
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
  img.cart {
    width: 40px;
    height: 40px;
    margin-left: 72px;
    cursor: pointer;
    filter: invert(57%) sepia(97%) saturate(1706%) hue-rotate(3deg)
      brightness(85%) contrast(101%);
  }
}
</style>
