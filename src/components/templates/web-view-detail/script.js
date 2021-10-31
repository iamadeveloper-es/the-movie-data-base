import WebHero from "@/components/organism/web-hero";
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
            selectedObject: undefined
        }
    },
    created(){
        this.getSelectedObject()
    },
    methods: {
        //FIXME: CONTROLAR SI NO VIENE EL backdrop_path
        getSelectedObject(){
            this.selectedObject = this.$route.params.id
            if(this.tvShow){
                this.selectedObject
                Object.assign(this.selectedObject, {title: this.selectedObject.name})
            }
        }
    }
}