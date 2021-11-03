import WebItemList from "@/components/organism/web-item-list";
import MixinMoviesService from "@/mixin/services/moviesService";
import { mapGetters } from "vuex";
export default {
  name: "web-view-all-movies",
  components: {
    WebItemList
  },
  mixins: [
    MixinMoviesService
  ],
  data() {
    return {
      isServiceError: false,
      movieList: undefined,
      currentpage: 1,
    };
  },
  created() {
    this.configView();
  },
  methods: {
    configView(id){
      this.getDiscoverMovies(id)
        .then(response => {
          this.movieList = response
        })
        .catch(() => this.isServiceError = true)
    },
    filterGenre(id){
      const payload = {
        genre: id
      };
      this.configView(payload);
    }
  },
  computed:{
    ...mapGetters(['getAllmovieGenres', 'getSelectedGenre'])
  }
};
