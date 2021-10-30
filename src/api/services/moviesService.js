import Api from "../call/api";
export default class MoviesService {
  static getPopular() {
    return Api.get("/movie/popular")
            .then(response => response.json())
            .then(data => data.results)
      
  };
  static getNowPlaying() {
    return Api.get("/movie/now_playing")
            .then(response => response.json())
            .then(data => data.results)
      
  }
}
