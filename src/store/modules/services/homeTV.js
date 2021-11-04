export default {
  state: {
    homeTV: [],
    tvGenres: [],
    tvSelectedGenre: "",
  },
  getters: {
    getHomeTV: (state) => state.homeTV,
    getTVGenres: (state) => (ids) => {
      return state.tvGenres.filter(genre => ids.some(id => id === genre.id))
    },
    getAllTvGenres: state => state.tvGenres,
    getTvSelectedGenre: state => state.tvSelectedGenre
  },
  mutations: {
    setHomeTV(state, payload) {
      state.homeTV = payload;
    },
    setTVGenres(state, payload) {
      state.tvGenres = payload;
    },
    setTvSelectedGenre(state, payload){
      state.tvSelectedGenre = payload;
    },
    clearTvSelectedGenre(state){
      state.tvSelectedGenre = ""
    }
  },
  actions: {},
};
