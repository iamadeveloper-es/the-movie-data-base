import WebItemList from "@/components/organism/web-item-list";
import MixinMoviesService from "@/mixin/services/moviesService";
import MixinTVService from "@/mixin/services/tVShowsService";
import { mapGetters } from "vuex";
export default {
  name: "web-view-all",
  props: {
    tvShow: {
        type: Boolean,
        default: true
    }
  },
  components: {
    WebItemList
  },
  mixins: [
    MixinMoviesService,
    MixinTVService
  ],
  data() {
    return {
      isServiceError: false,
      dataList: undefined,
      currentpage: 1,
    };
  },
  created() {
    this.configView();
  },
  methods: {
    configView(){
      if(!this.tvShow){
        this.getMovies();
        this.$store.commit('clearMovieSelectedGenre');
      }
      else{
        this.getTvShows();
        this.$store.commit('clearTvSelectedGenre');

      }
      
    },
    getMovies(filters){
      this.getDiscoverMovies(filters)
        .then(response => {
          this.dataList = response
        })
        .catch(() => this.isServiceError = true)
    },
    getTvShows(filters){
      this.getDiscoverTv(filters)
        .then(response => {
          this.dataList = response
        })
        .catch(() => this.isServiceError = true)
    },
    filterGenre(id, event){
      if(!this.tvShow){
        const payload = {
          with_genres: id,
        };
        this.getMovies(payload);
        this.$store.commit('setMovieSelectedGenre', id);
      }
      else{
        const payload = {
          with_genres: id,
        };
        this.getTvShows(payload);
        this.$store.commit('setTvSelectedGenre', id);
      }
      this.colorizeButton(event);
      this.currentpage = 1;
    },
    colorizeButton(event){
      const buttons = document.querySelectorAll(".genres .web-button");
      buttons.forEach(button => {
        button.classList.remove('selected');
      });
      event.target.classList.add('selected');
    },
    nextPage(){
      this.currentpage++
        const payload = {
          with_genres: this.tvShow ? this.getTvSelectedGenre : this.getMovieSelectedGenre,
          page: this.currentpage
        };
        this.tvShow ? this.getTvShows(payload) : this.getMovies(payload);
    },
    previousPage(){
      if(this.currentpage > 1){
        this.currentpage--
        const payload = {
          with_genres: this.tvShow ? this.getTvSelectedGenre : this.getMovieSelectedGenre,
          page: this.currentpage
        };
        this.tvShow ? this.getTvShows(payload) : this.getMovies(payload);
      }
      else{
        return
      }
    }
  },
  computed:{
    ...mapGetters([
      'getAllmovieGenres', 
      'getMovieSelectedGenre',
      'getAllTvGenres',
      'getTvSelectedGenre'
    ]),
  },
};
