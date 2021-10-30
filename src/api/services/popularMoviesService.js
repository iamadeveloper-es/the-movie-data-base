import Api from "../call/api";
export default class PopularMoviesService {
  static getPopularMovies() {
    return Api.get("/movie/popular")
            .then(response => response.json())
            .then(data => data.results)
      
  }
}
