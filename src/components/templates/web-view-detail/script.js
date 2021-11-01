import WebHero from "@/components/organism/web-hero";
import WebItemList from "@/components/organism/web-item-list";
import MixinMoviesService from "@/mixin/services/moviesService";
import MixinTVService from "@/mixin/services/tVShowsService";
import { mapGetters } from "vuex";
export default {
    name: 'web-view-detail',
    components: {
        WebHero,
        WebItemList
    },
    mixins: [
        MixinMoviesService,
        MixinTVService
    ],
    props: {
        tvShow: {
            type: Boolean,
            default: true
        }
    },
    data(){
        return{
            selectedObject: undefined,
            genres: undefined,
            isItemList: false
        }
    },
    created(){
        this.configView()
    },
    methods: {
        //FIXME: CONTROLAR SI NO VIENE EL backdrop_path
        /* getSelectedObject(){
            this.selectedObject = this.$route.params.id
            const genres = this.selectedObject.genre_ids
            if(this.tvShow){
                this.genres = this.getStoreTvGenres(genres)
                Object.assign(this.selectedObject, {title: this.selectedObject.name})
            }else{
                this.genres = this.getStoreMovieGenres(genres)
            }
        }, */
        configView(){
            const id = this.$route.params.id
            if(this.tvShow){
                this.tvShowById(id)
            }
            else{
                this.movieById(id)
            }
        },
        tvShowById(id){
            this.getTvById(id)
                .then(response => {
                    this.selectedObject = response
                    Object.assign(this.selectedObject, {title: this.selectedObject.name})
                })
                .catch(() => new Error())
        },
        movieById(id){
            this.getMovieById(id)
                .then(response => {
                    this.selectedObject = response
                })
                .catch(() => new Error())
        },
        addItemToList(item){
            this.$store.commit("addUserListItem", item);
            this.isItemList = true;
        },
        deleteItemFromList(id){
            this.$store.commit("deleteUserListItem", id);
            this.isItemList = false;
        }
    },
    computed:{
        ...mapGetters({
            isUserListItemExistStore :"isUserListItemExist",
            getUserListStore: "getUserList"
        }),
    }
}