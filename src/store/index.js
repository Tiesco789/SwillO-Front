import { createStore } from "vuex";

export default createStore({
  state: {
    token: null,
    usuario: {},
  },
  mutations: {
    DEFINIR_USUARIO_LOGADO(state, { token, usuario }) {
      state.token = token;
      state.usuario = usuario;
    },
  },
  actions: {},
  modules: {},
});
