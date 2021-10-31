export default {
    name: 'web-button',
    props: {
        btnText: String,
        btnClass: Array,
        btnType: String,
        disabled: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        emitEvent(event){
            this.$emit('Clicked', event)
        }
    }
}