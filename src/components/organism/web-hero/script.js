import WebImage from "@/components/atoms/web-image";
export default {
    name: 'web-hero',
    components: {
        WebImage
    },
    props:{
        basePath: String,
        src: String,
        width: String,
        altText: String,
        heroFull: {
            type: Boolean,
            default: true
        }
    }
}