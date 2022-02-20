import { createApp } from "vue";
import App from "./App.vue";
// import Vue from 'vue'
import router from "./router";
import store from "./store";
// import http from '@/http'

// Vue.config.productionTip = false
// Vue.prototype.$http = http
createApp(App).use(store).use(router).mount("#app");
