export default {
  state: {
    homeTV: [],
    tvGenres: []
  },
  getters: {
    getHomeTV: (state) => state.homeTV,
    getTVGenres: (state) => (ids) => {
      return state.tvGenres.filter(genre => ids.some(id => id === genre.id))
    }
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
