export default {
  state: {
    homeTV: [],
    tvGenres: []
  },
  getters: {
    getHomeTV: (state) => state.homeTV,
    getTVGenres: (state) => state.tvGenres,
  },
  mutations: {
    setHomeTV(state, payload) {
      state.homeTV = payload;
    },
    setTVGenres(state, payload) {
      state.tvGenres = payload;
    },
  },
  actions: {},
};
