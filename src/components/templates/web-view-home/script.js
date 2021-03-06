import WebLogo from "@/components/atoms/web-logo";
import WebItemList from "@/components/organism/web-item-list";
import MixinMoviesService from "@/mixin/services/moviesService";
import MixinTVService from "@/mixin/services/tVShowsService";
import MixinRouterFunctions from "@/mixin/routerFunctions";
import { mapGetters } from "vuex";
export default {
  name: "web-view-home",
  components: {
    WebLogo,
    WebItemList
  },
  mixins: [
    MixinMoviesService,
    MixinTVService,
    MixinRouterFunctions
  ],
  data() {
    return {
      tvShows: [
        {
          type: "popular",
          data: undefined,
          label: this.$t('subheadLines.popular')
        },
        {
          type: "top-rated",
          data: undefined,
          label: this.$t('subheadLines.mostVoted'),
        },
      ],
      movies: [
        {
          type: "popular",
          data: undefined,
          label: this.$t('subheadLines.popular'),
        },
        {
          type: "top-rated",
          data: undefined,
          label: this.$t('subheadLines.mostVoted'),
        },
        {
          type: "up-coming",
          data: undefined,
          label: this.$t('subheadLines.comingUp'),
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
    },
    goToDetail(route, payload){
      this.navigate(route, payload);
    }
  },
  computed: {
    ...mapGetters({
      getStoreHomeMovies: "getHomeMovies",
      getStoreTVShows: "getHomeTV",
      userList: "getUserList"
    }),
  },
};
