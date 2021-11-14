export default {
    name: 'web-input-search',
    props: {
        type: String,
        placeholder: String,
        label: String
    },
    methods: {
        emitValue(event){
            this.$emit('EmitValue', event)
        }
    },
}