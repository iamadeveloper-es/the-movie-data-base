import Api from "../call/api";
export default class MultiSearchService {
  static getMultiSearchService(filters = {}) {
    const queryParams = {};

    if(filters){
      for(let key in filters){
        Object.assign(queryParams, {[key]: filters[key]})
      }
    };
    return Api.get("/search/multi", queryParams)
      .then((response) => response.json())
      .then((data) => data.results);
  };
}