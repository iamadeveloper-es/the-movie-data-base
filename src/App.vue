<template>
  <web-view-dashboard></web-view-dashboard>
</template>
<script>
import WebViewDashboard from "@/components/templates/web-view-dashboard";
import MixinTVService from "@/mixin/services/tVShowsService";
import MixinMoviesService from "@/mixin/services/moviesService";
export default {
  components: {
    WebViewDashboard,
  },
  mixins:[
    MixinTVService,
    MixinMoviesService
  ],
  data(){
    return{
      tvGenresList: undefined,
      movieGenresList: undefined
    }
  },
  created(){
      this.configGenres()
  },
  methods:{
    configGenres(){
      this.tvGenres();
      this.movieGenres();
      
    },
    tvGenres(){
      this.getTVGenres()
        .then(response => {
          this.$store.commit('setTVGenres', response)
        })
        .catch(() => new Error('error trayenndo tv géneros'))
    },
    movieGenres(){
      this.getMoviesGenres()
        .then(response => {
          this.$store.commit('setMovieGenres', response)
        })
        .catch(() => new Error('error trayenndo movie géneros'))
    }
  }
};
</script>
<style lang="scss">
@import "@/static/scss/main";
</style>
