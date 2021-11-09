import WebIcon from "@/components/atoms/web-icon";
export default {
    name: 'web-navbar',
    components: {
        WebIcon
    },
    props: {
        items: Array,
        icon: String
    },
    data(){
        return{
            isMenuOpen: false
        }
    },
    methods:{
        menuToggle(){
            this.isMenuOpen = ! this.isMenuOpen
        }
    }
    
}