import Vue from "vue";
import Vuex from "vuex";
const estado = {
  token: null,
  role: null,
  erro: false,
  erroMessage: true,
  usuario: {},
};

const store = new Vuex.Store({
  state: estado,
  mutations: {
    DEFINIR_USUARIO_LOGADO(state, { token, role }) {
      state.token = token;
      state.role = role;
    },
    DESLOGAR_USUARIO(state) {
      state.token = null;
      state.usuario = {};
    },
    EXIBE_ERRO(state, { erro, erroMessage }) {
      (state.erro = erro), (state.erroMessage = erroMessage);
    },
    FECHA_ERRO(state) {
      (state.erro = false), (state.erroMessage = null);
    },
  },
  actions: {},
  modules: {},
});

export default store;
