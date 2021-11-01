import WebIcon from "@/components/atoms/web-icon";
export default {
    name: 'web-icon-action',
    components: {
        WebIcon
    },
    props: {
        icon: String,
        iconText: String
    },
    methods:{
        emitEvent(event){
            this.$emit('Clicked', event);
        }
    }
}