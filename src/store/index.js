import Vue from "vue";
import Vuex from "vuex";
import userData from "./modules/userData";
import homeMovies from "./modules/services/homeMovies";
import homeTV from "./modules/services/homeTV";
import userList from "./modules/services/userList";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    userData,
    homeMovies,
    homeTV,
    userList
  },
});
