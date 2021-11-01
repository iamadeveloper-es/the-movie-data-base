import WebHero from "@/components/organism/web-hero";
import WebItemList from "@/components/organism/web-item-list";
import { mapGetters } from "vuex";
export default {
    name: 'web-view-detail',
    components: {
        WebHero,
        WebItemList
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
            genres: undefined,
            isItemList: false
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
        ...mapGetters([
            "getTVGenres", 
            "getMovieGenres", 
            "isUserListItemExist",
            "getUserList"
        ]),
    }
}