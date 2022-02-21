<template>
  <div class="login-container">
    <div class="title">
      <h1>Fazer Login</h1>
    </div>
    <form @submit.prevent="efetuarLogin">
      <label for="">Email</label>
      <input required type="email" v-model="user.name" />

      <label for="">Senha</label>
      <input required type="password" v-model="user.password" />

      <button>Fazer Login</button>
    </form>
  </div>
  <Modal v-show="isVisible" @close="closeModal" />
</template>

<script>
import http from "@/http";
import store from "@/store/index.js";
import Modal from "@/components/Modal";
export default {
  setup() {
    return {};
  },
  components: {
    Modal,
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
  computed: {
    isVisible() {
      console.log(store.state.erro);
      return Boolean(store.state.erro);
    },
  },
  methods: {
    efetuarLogin() {
      http
        .post("api/login", this.user)
        .then((response) => {
          console.log(response.data.token);
          store.commit("DEFINIR_USUARIO_LOGADO", {
            token: response.data.token,
            role: response.data.autorizacao,
          });
          this.$router.push({ name: "Home" });
        })
        .catch((erro) => {
          store.commit("EXIBE_ERRO", {
            erro: true,
            erroMessage: "Email ou senha estão incorretas",
          });
        });
    },
    closeModal() {
      store.commit("FECHA_ERRO");
    },
  },
};
</script>

<style lang="scss" scoped>
.login-container {
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
    }
  }
}
</style>
