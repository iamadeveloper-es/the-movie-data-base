import WebNavbar from "@/components/organism/web-navbar";
export default {
  name: "web-view-dashboard",
  components: {
    WebNavbar
  },
  data(){
    return{
      navItems: [
        {
          icon: "search",
          action: "SEARCH",
          label: this.$t('menu.search')
        },
        {
          icon: "home",
          action: "HOME",
          label: this.$t('menu.home')
        },
        {
          icon: "inventory",
          action: "MY-LIST",
          label: this.$t('menu.myList')
        },
        {
          icon: "movie_creation",
          action: "ALL-MOVIES",
          label: this.$t('menu.movies')
        },
        {
          icon: "ondemand_video",
          action: "ALL-TV",
          label: this.$t('menu.tvShow')
        }
      ]
    }
  }
};
