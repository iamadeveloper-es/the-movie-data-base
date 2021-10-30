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
  },
};
