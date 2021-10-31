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
        getSelectedObject(){
            this.selectedObject = this.$route.params.id
            if(this.tvShow){
                this.selectedObject
                Object.assign(this.selectedObject, {title: this.selectedObject.name})
            }
        }
    }
}