import WebRegularCard from "@/components/organism/web-regular-card";
import MixinRouterFunctions from "@/mixin/routerFunctions";
export default {
  name: "web-item-list",
  components: {
    WebRegularCard,
  },
  mixins: [
    MixinRouterFunctions
  ],
  props: {
    basePath: String,
    src: String,
    width: String,
    altText: String,
    title: String,
    cursorPointer: Boolean,
    items: Array,
    listTitle: String
  },
  methods: {
    goToDetail(payload){
      let route = undefined;
      if(payload.name){
        route = 'tvShows-Detail'
      }
      else{
        route = 'movies-Detail'
      }
      this.navigate(route, payload);
    }
  },
  
};
