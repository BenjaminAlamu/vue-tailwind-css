import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import sample from "./sample";
import auth from "./auth";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    sample,
    auth,
  },
  plugins: [
    createPersistedState({
      key: "name-of-app",
    }),
  ],
});
