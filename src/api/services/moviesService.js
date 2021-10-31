import Api from "../call/api";
export default class MoviesService {
  static getMoviesPopular() {
    return Api.get("/movie/popular")
      .then((response) => response.json())
      .then((data) => data.results);
  }
  static getMoviesTopRated() {
    return Api.get("/movie/top_rated")
      .then((response) => response.json())
      .then((data) => data.results);
  }
  static getMoviesUpComing() {
    return Api.get("/movie/upcoming")
      .then((response) => response.json())
      .then((data) => data.results);
  }
}