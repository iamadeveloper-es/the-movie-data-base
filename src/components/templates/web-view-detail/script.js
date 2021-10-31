import WebHero from "@/components/organism/web-hero";
import { mapGetters } from "vuex";
export default {
    name: 'web-view-detail',
    components: {
        WebHero
    },
    props: {
        tvShow: {
            type: Boolean,
            default: true
        }
    },
    data(){
        return{
            selectedObject: undefined,
            genres: undefined
        }
    },
    created(){
        this.getSelectedObject()
    },
    methods: {
        //FIXME: CONTROLAR SI NO VIENE EL backdrop_path
        getSelectedObject(){
            this.selectedObject = this.$route.params.id
            const genres = this.selectedObject.genre_ids
            if(this.tvShow){
                this.genres = this.getTVGenres(genres)
                Object.assign(this.selectedObject, {title: this.selectedObject.name})
            }else{
                this.genres = this.getMovieGenres(genres)
            }
        }
    },
    computed:{
        ...mapGetters(['getTVGenres', 'getMovieGenres'])
    }
}