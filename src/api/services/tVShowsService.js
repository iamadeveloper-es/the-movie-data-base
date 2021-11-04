import Api from "../call/api";
export default class TVShowsService {
  static getTVPopular() {
    return Api.get("/tv/popular")
      .then((response) => response.json())
      .then((data) => data.results);
  };
  static getTVTopRated() {
    return Api.get("/tv/top_rated")
      .then((response) => response.json())
      .then((data) => data.results);
  };
  static getTVGenre() {
    return Api.get("/genre/tv/list")
      .then((response) => response.json())
      .then((data) => data.genres);
  };
  static getTvById(id) {
    return Api.get(`/tv/${id}`)
      .then((response) => response.json())
      .then((data) => data);
  };
  static getSimilarTV(id) {
    return Api.get(`/tv/${id}/similar`)
      .then((response) => response.json())
      .then((data) => data.results);
  };
  static getDiscoverTv(filters = {}) {
    const queryParams = {};

    if(filters){
      for(let key in filters){
        Object.assign(queryParams, {[key]: filters[key]})
      }
    };
    return Api.get('/discover/tv', queryParams)
      .then((response) => response.json())
      .then((data) => data.results);
  };
}