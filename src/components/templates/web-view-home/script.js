import WebRegularCard from "@/components/organism/web-regular-card";
import MixinMoviesService from "@/mixin/services/moviesService";
import MixinTVService from "@/mixin/services/tVShowsService";
import { mapGetters } from "vuex";
export default {
  name: "web-view-home",
  components: {
    WebRegularCard,
  },
  mixins: [
    MixinMoviesService,
    MixinTVService
  ],
  data() {
    return {
      tvShows: [
        {
          type: "popular",
          data: undefined,
          label: "Populares",
        },
        {
          type: "top-rated",
          data: undefined,
          label: "Más votadas",
        },
      ],
      movies: [
        {
          type: "popular",
          data: undefined,
          label: "Popular",
        },
        {
          type: "top-rated",
          data: undefined,
          label: "Más votadas",
        },
        {
          type: "up-coming",
          data: undefined,
          label: "Próximamente",
        },
      ],
    };
  },
  created() {
    this.configView();
  },
  methods: {
    configView() {
      this.getTVShows();
      this.getMovies();
    },
    getTVShows(){
      const homeTVShowList = JSON.parse(
        JSON.stringify(this.getStoreTVShows)
      );

      if (homeTVShowList.length) {
        this.tvShows.forEach((item, index) => {
          item.data = homeTVShowList[index];
        });
      } else {
        this.getHomeTVService().then((response) => {
          this.tvShows.forEach((item, index) => {
            item.data = response[index];
          });

          this.$store.commit(
            "setHomeTV",
            JSON.parse(JSON.stringify(response))
          );
        });
      }
    },
    getMovies(){
      const homeMoviesList = JSON.parse(
        JSON.stringify(this.getStoreHomeMovies)
      );

      if (homeMoviesList.length) {
        this.movies.forEach((item, index) => {
          item.data = homeMoviesList[index];
        });
      } else {
        this.getHomeMoviesService().then((response) => {
          this.movies.forEach((item, index) => {
            item.data = response[index];
          });

          this.$store.commit(
            "setHomeMovies",
            JSON.parse(JSON.stringify(response))
          );
        });
      }
    }
  },
  computed: {
    ...mapGetters({
      getStoreHomeMovies: "getHomeMovies",
      getStoreTVShows: "getHomeTV"
    }),
  },
};
