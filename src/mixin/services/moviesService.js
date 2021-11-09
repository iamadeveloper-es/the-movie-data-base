import MoviesService from "../../api/services/moviesService";

export default {
  methods: {
    getMoviesPopular() {
      return new Promise((resolve, reject) => {
        return MoviesService.getMoviesPopular()
          .then((response) => resolve(response))
          .catch((error) => reject(error));
      });
    },
    getMoviesTopRated() {
      return new Promise((resolve, reject) => {
        return MoviesService.getMoviesTopRated()
          .then((response) => resolve(response))
          .catch((error) => reject(error));
      });
    },
    getMoviesUpComing() {
      return new Promise((resolve, reject) => {
        return MoviesService.getMoviesUpComing()
          .then((response) => resolve(response))
          .catch((error) => reject(error));
      });
    },
    getHomeMoviesService() {
      const moviesServices = [
        this.getMoviesPopular(),
        this.getMoviesTopRated(),
        this.getMoviesUpComing(),
      ];
      return Promise.allSettled(moviesServices).then((responses) =>
        responses.map((response) => response.value)
      );
    },
    getMoviesGenres() {
      return new Promise((resolve, reject) => {
        return MoviesService.getMoviesGenre()
          .then((response) => resolve(response))
          .catch((error) => reject(error));
      });
    },
    getMovieById(id){
      return new Promise((resolve, reject) => {
        return MoviesService.getMovieById(id)
          .then((response) => resolve(response))
          .catch((error) => reject(error));
      });
    },
    getSimilarMovies(id){
      return new Promise((resolve, reject) => {
        return MoviesService.getSimilarMovies(id)
          .then((response) => resolve(response))
          .catch((error) => reject(error));
      });
    },
    getDiscoverMovies(filters){
      return new Promise((resolve, reject) => {
        return MoviesService.getDiscoverMovies(filters)
          .then((response) => resolve(response))
          .catch((error) => reject(error));
      });
    }
  },
};
