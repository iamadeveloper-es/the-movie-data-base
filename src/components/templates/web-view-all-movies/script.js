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
    filterGenre(id, event){
      const payload = {
        with_genres: id,
      };
      this.configView(payload);
      this.colorizeButton(event);
    },
    colorizeButton(event){
      const buttons = document.querySelectorAll(".genres .web-button");
      buttons.forEach(button => {
        button.classList.remove('selected');
      });
      event.target.classList.add('selected');
    }
  },
  computed:{
    ...mapGetters(['getAllmovieGenres', 'getSelectedGenre'])
  }
};
