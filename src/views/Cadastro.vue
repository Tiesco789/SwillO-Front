<template>
  <div class="cadastro-container">
    <div class="title">
      <h1>Fazer cadastro</h1>
    </div>
    <form @submit.prevent="enviarFormulario">
      <label for="">Nome</label>
      <input required type="name" v-model="user.name" />

      <label for="">Email</label>
      <input required type="email" v-model="user.email" />

      <label for="">Senha</label>
      <input required type="password" v-model="user.password" />

      <label for="">Repita sua Senha</label>
      <input required type="password" v-model="user.repeat_password" />

      <button>Finalizar cadastro</button>
    </form>
  </div>
</template>

<script>
import http from "@/http";
export default {
  setup() {
    return {};
  },
  data: function () {
    return {
      user: {
        name: "",
        password: "",
        repeat_password: "",
        email: "",
      },
    };
  },
  methods: {
    enviarFormulario() {
      http
        .post("user/create", this.user)
        .then((resposta) => {
          console.log(resposta);
          this.$router.push({ name: "Login" });
        })
        .catch((erro) => console.log(erro));
    },
  },
};
</script>

<style lang="scss" scoped>
.cadastro-container {
  margin: 0 auto;
  background-color: #2a2633;
  padding: 48px;
  width: 44%;
  border-radius: 6px;

  .title {
    padding-bottom: 32px;
    ::after {
      content: "";
      display: block;
      background-color: rgb(56, 53, 65);
      height: 2px;
      width: 100%;
      margin-top: 8px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    width: 500px;

    input {
      border-radius: 8px;
      background-color: #201e27;
      color: white;
      font-size: 16px;
      padding: 16px;

      &:hover {
        outline: 1px solid #e58200;
      }

      &:focus {
        outline: 1px solid #e58200;
      }
    }

    input + label {
      margin-top: 20px;
    }

    label {
      margin-bottom: 6px;
    }

    button {
      background-color: #e58200;
      border-radius: 8px;
      padding: 12px 24px;
      color: black;
      font-size: 16px;
      font-weight: 500;
      cursor: pointer;
      margin-top: 20px;
      font-size: 16px;
      font-family: "Roboto Slab", serif;
      font-weight: 500;
      transition: background-color 0.2s ease-in-out;

      &:hover {
        background-color: lighten($color: #e58200, $amount: 8%);
      }
    }
  }
}
</style>
