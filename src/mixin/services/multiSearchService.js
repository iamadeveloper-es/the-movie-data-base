import MultiSearchService from "../../api/services/multiSearchService";

export default {
  methods: {
    getMultiSearchService(filters) {
        return new Promise((resolve, reject) => {
            return MultiSearchService.getMultiSearchService(filters)
            .then((response) => resolve(response))
            .catch((error) => reject(error));
        });
        },
    }
}