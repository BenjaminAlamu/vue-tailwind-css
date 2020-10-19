import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";
import router from "./router/router";
import { store } from "./store/store";
Vue.prototype.$Bus = new Vue();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
