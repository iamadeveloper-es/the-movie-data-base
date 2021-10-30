import WebRegularCard from "@/components/organism/web-regular-card";
import MixinPopularMoviesService from "@/mixin/services/popularMoviesService";
export default {
  name: "web-view-home",
  components: {
    WebRegularCard
  },
  mixins: [
    MixinPopularMoviesService
  ],
  data(){
    return{
      popularMovies: undefined
    }
  },
  created(){
    this.configView()
  },
  methods: {
    configView(){
      this.getPopularMovies()
        .then(response => {
          this.popularMovies = response
        })
    }
  }
};
