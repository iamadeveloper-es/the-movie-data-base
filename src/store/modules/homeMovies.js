export default {
  state: {
    homeMovies: [],
    movieGenres: []
  },
  getters: {
    getHomeMovies: (state) => state.homeMovies,
    getMovieGenres: (state) => state.movieGenres,
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
