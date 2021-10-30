export default {
  state: {
    homeMovies: [],
  },
  getters: {
    getHomeMovies: (state) => state.homeMovies,
  },
  mutations: {
    setHomeMovies(state, payload) {
      state.homeMovies = payload;
    },
  },
  actions: {},
};
