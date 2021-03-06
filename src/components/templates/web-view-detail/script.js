import {getYear} from "@/utils/dateFunctions";
import WebHero from "@/components/organism/web-hero";
import WebItemList from "@/components/organism/web-item-list";
import WebRating from "@/components/organism/web-rating";
import WebEmptyCase from "@/components/organism/web-empty-case";
import MixinMoviesService from "@/mixin/services/moviesService";
import MixinTVService from "@/mixin/services/tVShowsService";
import { mapGetters } from "vuex";
export default {
    name: 'web-view-detail',
    components: {
        WebHero,
        WebItemList,
        WebRating,
        WebEmptyCase
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
            serviceError: false,
            similarServiceError: false,
            selectedObject: undefined,
            genres: undefined,
            isItemList: false,
            similarList: undefined,
        }
    },
    created(){
        this.configView()
    },
    methods: {
        configView(){
            const id = this.$route.params.id
            if(this.tvShow){
                this.tvShowById(id);
                this.similarTV(id);
            }
            else{
                this.movieById(id);
                this.similarMovies(id);
            }
        },
        tvShowById(id){
            this.getTvById(id)
                .then(response => {
                    if(response.success === false){
                        this.serviceError = true
                    }
                    this.selectedObject = response
                    Object.assign(this.selectedObject, {title: this.selectedObject.name});
                    Object.assign(this.selectedObject, this.selectedObject.first_air_date ? 
                        {formatedYear: getYear(this.selectedObject.first_air_date)}
                        : {formatedYear : ""});
                })
                .catch(() => this.serviceError = true)
        },
        movieById(id){
            this.getMovieById(id)
                .then(response => {
                    this.selectedObject = response;
                    Object.assign(this.selectedObject, this.selectedObject.release_date ? 
                        {formatedYear: getYear(this.selectedObject.release_date)}
                        :{formatedYear: ""});
                    
                })
                .catch(() => this.serviceError = true)
        },
        similarTV(id){
            this.getSimilarTV(id)
                .then(response => this.similarList = response)
                .catch(() => {
                    console.log('algo ha ido mal')
                })
        },
        similarMovies(id){
            this.getSimilarMovies(id)
                .then(response => this.similarList = response)
                .catch(() => this.similarServiceError = true)
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