export default {
    name: 'web-select',
    props: {
        options: Array,
    },
    methods:{
        setValue(value){
            this.$emit('EmitValue', value);
        }
    }
}