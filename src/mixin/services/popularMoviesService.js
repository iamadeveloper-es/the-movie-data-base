import PopularMoviesService from "../../api/services/popularMoviesService.js";

export default {
  methods: {
    getPopularMovies(){
      return new Promise((resolve, reject) => {
        return PopularMoviesService.getPopularMovies()
                .then(response => resolve(response))
                .catch(error => reject(error))
      })
    },
  }
};
