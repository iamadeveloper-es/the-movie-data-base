import WebRegularCard from "@/components/organism/web-regular-card";
import MixinMoviesService from "@/mixin/services/moviesService";
import { mapGetters } from "vuex";
export default {
  name: "web-view-home",
  components: {
    WebRegularCard
  },
  mixins: [
    MixinMoviesService
  ],
  data(){
    return{
      popularMovies: undefined,
      movies: [
        {
          type: 'popular',
          data: undefined,
          label: 'Popular Movies'
        },
        {
          type: 'top-rated',
          data: undefined,
          label: 'Top Rated'
        },
        {
          type: 'up-coming',
          data: undefined,
          label: 'Up Coming'
        }
      ]
    }
  },
  created(){
    this.configView();
  },
  methods: {
    configView(){
      
      const homeMoviesList = JSON.parse(JSON.stringify(this.getStoreHomeMovies));

      if(homeMoviesList.length){
        this.movies.forEach((item, index) => {
          item.data = homeMoviesList[index];
        });
      }
      else{
        this.getHomeMoviesService()
          .then(response => {
            this.movies.forEach((item, index) => {
              item.data = response[index]
            });

            this.$store.commit('setHomeMovies', JSON.parse(JSON.stringify(response)));
        })
      }
    }
  },
  computed:{
    ...mapGetters({
      getStoreHomeMovies: 'getHomeMovies'
    })
  }
};
