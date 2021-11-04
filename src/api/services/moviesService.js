import Api from "../call/api";
export default class MoviesService {
  static getMoviesPopular() {
    return Api.get("/movie/popular")
      .then((response) => response.json())
      .then((data) => data.results);
  };
  static getMoviesTopRated() {
    return Api.get("/movie/top_rated")
      .then((response) => response.json())
      .then((data) => data.results);
  };
  static getMoviesUpComing() {
    return Api.get("/movie/upcoming")
      .then((response) => response.json())
      .then((data) => data.results);
  };
  static getMoviesGenre() {
    return Api.get("/genre/movie/list")
      .then((response) => response.json())
      .then((data) => data.genres);
  };
  static getMovieById(id) {
    return Api.get(`/movie/${id}`)
      .then((response) => response.json())
      .then((data) => data);
  };
  static getSimilarMovies(id) {
    return Api.get(`/movie/${id}/similar`)
      .then((response) => response.json())
      .then((data) => data.results);
  };
  static getDiscoverMovies(filters = {}) {
    const queryParams = {};

    if(filters){
      for(let key in filters){
        Object.assign(queryParams, {[key]: filters[key]})
      }
    };

    return Api.get('/discover/movie', queryParams)
      .then((response) => response.json())
      .then((data) => data.results);
  };
}
