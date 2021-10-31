export default {
  state: {
    homeMovies: [],
    movieGenres: []
  },
  getters: {
    getHomeMovies: (state) => state.homeMovies,
    getMovieGenres: (state) => (ids) => {
      return state.movieGenres.filter(genre => ids.some(id => id === genre.id))
    }
  },
  mutations: {
    setHomeMovies(state, payload) {
      state.homeMovies = payload;
    },
    setMovieGenres(state, payload) {
      state.movieGenres = payload;
    },
  },
  actions: {},
};
