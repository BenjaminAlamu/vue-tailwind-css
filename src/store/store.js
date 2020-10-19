import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import sample from "./sample";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    sample,
  },
  plugins: [
    createPersistedState({
      key: "name-of-app",
    }),
  ],
});
