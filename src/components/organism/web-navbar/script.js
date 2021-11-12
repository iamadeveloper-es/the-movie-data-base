import WebIcon from "@/components/atoms/web-icon";
import WebSelect from "@/components/molecules/web-select";
export default {
    name: 'web-navbar',
    components: {
        WebIcon,
        WebSelect
    },
    props: {
        items: Array,
        icon: String
    },
    data(){
        return{
            isMenuOpen: false,
            selectOptions: [
                {
                    value: "",
                    label: this.$t('menu.lang'),
                    selected: false,
                    disabled: false,
                    hidden: true
                },
                {
                    value: "es",
                    label: "Es",
                    selected: false,
                    disabled: false,
                    hidden: false
                },
                {
                    value: "en",
                    label: "En",
                    selected: false,
                    disabled: false,
                    hidden: false
                }
            ]
        }
    },
    methods:{
        menuToggle(){
            this.isMenuOpen = ! this.isMenuOpen;
        },
        setLang(event){
            const lang = event.target.value;
            console.log(lang)
            localStorage.setItem("lang", lang);
            window.location.reload();
        }
    }
    
}