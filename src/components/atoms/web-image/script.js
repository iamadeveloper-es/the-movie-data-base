export default {
    name: 'web-image',
    props: {
        basePath: {
            type: String,
            default: 'https://image.tmdb.org/t/p'
        },
        src: String,
        width: {
            type: String,
            default: 'w300'
        },
        altText: String
    },
    computed:{
        imgSrc(){
            return `${this.basePath}/${this.width}/${this.src}`
        }
    }
}