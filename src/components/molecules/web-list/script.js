import WebLink from "@/components/atoms/web-link";
export default {
    name: 'web-list',
    components: {
        WebLink
    },
    props: {
        flex: {
            type: Boolean,
            default: true
        },
        items: Array
    }
}