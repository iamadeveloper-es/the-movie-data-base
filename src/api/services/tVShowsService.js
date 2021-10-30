import Api from "../call/api";
export default class TVShowsService {
  static getTVPopular() {
    return Api.get("/tv/popular")
      .then((response) => response.json())
      .then((data) => data.results);
  }
  static getTVTopRated() {
    return Api.get("/tv/top_rated")
      .then((response) => response.json())
      .then((data) => data.results);
  }
}