export default {
  state: {
    homeMovies: [],
    movieGenres: [],
    movieSelectedGenre: "",
  },
  getters: {
    getHomeMovies: (state) => state.homeMovies,
    getAllmovieGenres: state => state.movieGenres,
    getMovieGenres: (state) => (ids) => {
      return state.movieGenres.filter(genre => ids.some(id => id === genre.id))
    },
    getMovieSelectedGenre: state => state.movieSelectedGenre
  },
  mutations: {
    setHomeMovies(state, payload) {
      state.homeMovies = payload;
    },
    setMovieGenres(state, payload) {
      state.movieGenres = payload;
    },
    setMovieSelectedGenre(state, payload){
      state.movieSelectedGenre = payload;
    },
    clearMovieSelectedGenre(state){
      state.movieSelectedGenre = ""
    }
  },
  actions: {},
};
