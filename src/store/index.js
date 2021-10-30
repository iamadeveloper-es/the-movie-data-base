import Vue from "vue";
import Vuex from "vuex";
import homeMovies from "./modules/homeMovies";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    homeMovies,
  },
});
