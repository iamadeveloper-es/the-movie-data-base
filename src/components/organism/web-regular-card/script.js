import WebImage from "@/components/atoms/web-image";
export default {
  name: "web-regular-card",
  components: {
    WebImage,
  },
  props: {
    basePath: String,
    src: String,
    width: String,
    altText: String,
    title: String,
  },
};
