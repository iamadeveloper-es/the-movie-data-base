import MoviesService from "../../api/services/moviesService.js";

export default {
  methods: {
    getPopular(){
      return new Promise((resolve, reject) => {
        return MoviesService.getPopular()
                .then(response => resolve(response))
                .catch(error => reject(error))
      })
    },
  }
};
