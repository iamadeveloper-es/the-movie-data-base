import Vue from "vue";
import Vuex from "vuex";
import homeMovies from "./modules/homeMovies";
import homeTV from "./modules/homeTV";
import userList from "./modules/userList";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    homeMovies,
    homeTV,
    userList
  },
});
