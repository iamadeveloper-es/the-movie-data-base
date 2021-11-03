import WebItemList from "@/components/organism/web-item-list";
import { mapGetters } from "vuex";
export default {
  name: "web-view-my-list",
  components: {
    WebItemList
  },
  data() {
    return {
      
    };
  },
  created() {
    
  },
  methods: {
    
    
  },
  computed: {
    ...mapGetters(['getUserList'])
  }
  
};
