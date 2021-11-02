import TVShowsService from "../../api/services/tVShowsService";

export default {
  methods: {
    getTVPopular() {
      return new Promise((resolve, reject) => {
        return TVShowsService.getTVPopular()
          .then((response) => resolve(response))
          .catch((error) => reject(error));
      });
    },
    getTVTopRated() {
      return new Promise((resolve, reject) => {
        return TVShowsService.getTVTopRated()
          .then((response) => resolve(response))
          .catch((error) => reject(error));
      });
    },
    getHomeTVService() {
      const tVServices = [
        this.getTVPopular(),
        this.getTVTopRated(),
      ];
      return Promise.allSettled(tVServices).then((responses) =>
        responses.map((response) => response.value)
      );
    },
    getTVGenres() {
      return new Promise((resolve, reject) => {
        return TVShowsService.getTVGenre()
          .then((response) => resolve(response))
          .catch((error) => reject(error));
      });
    },
    getTvById(id){
      return new Promise((resolve, reject) => {
        return TVShowsService.getTvById(id)
          .then((response) => resolve(response))
          .catch((error) => reject(error));
      });
    },
    getSimilarTV(id){
      return new Promise((resolve, reject) => {
        return TVShowsService.getSimilarTV(id)
          .then((response) => resolve(response))
          .catch((error) => reject(error));
      });
    }
  },
};
