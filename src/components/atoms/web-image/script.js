export default {
  name: "web-image",
  props: {
    basePath: {
      type: String,
      default: "https://image.tmdb.org/t/p",
    },
    src: String,
    fallBackImg: String,
    width: {
      type: String,
      default: "w300",
    },
    altText: String,
  },
  computed: {
    imgSrc() {
      return this.src === null || !this.src ? require(`@/static/assets/${this.fallBackImg}`)  : `${this.basePath}/${this.width}/${this.src}`;
    },
  },
};
