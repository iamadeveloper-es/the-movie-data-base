import WebInputSearch from "@/components/atoms/web-input-search";
export default {
    name: 'web-filters',
    components: {
        WebInputSearch
    },
    props:{
        filters: Array
    },
    data(){
        return{
            
        }
    },
    methods:{
        searchValue(event){
            this.$emit('SearchValue', event.target.value)
        }
    }
}