import WebRegularCard from "@/components/organism/web-regular-card";
import MixinMoviesService from "@/mixin/services/moviesService";
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
      popularMovies: undefined
    }
  },
  created(){
    this.configView()
  },
  methods: {
    configView(){
      this.getPopular()
        .then(response => {
          this.popularMovies = response
        })
    }
  }
};
