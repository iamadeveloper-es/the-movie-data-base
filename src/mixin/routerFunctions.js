export default {
    methods: {
        navigate(route, payload){
            this.$router.push({name: route, params: {id: payload}})
        }
    }
}