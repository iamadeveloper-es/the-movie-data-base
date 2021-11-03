import WebItemList from "@/components/organism/web-item-list";
import MixinTVService from "@/mixin/services/tVShowsService";
export default {
  name: "web-view-all-tv-shows",
  components: {
    WebItemList
  },
  mixins:[
    MixinTVService
  ],
  data() {
    return {
      isServiceError: false,
      tvShowList: undefined,
      currentpage: 1
    };
  },
  created(){
    this.configView();
  },
  methods: {
    configView(){
      this.getDiscoverTv()
        .then(response => {
          this.tvShowList = response
        })
        .catch(() => this.isServiceError = true)
    }
    
  },
  
};
