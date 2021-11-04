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
          label: "Buscar"
        },
        {
          icon: "home",
          action: "HOME",
          label: "Inicio"
        },
        {
          icon: "inventory",
          action: "MY-LIST",
          label: "Mi Lista"
        },
        {
          icon: "movie_creation",
          action: "ALL-MOVIES",
          label: "Películas"
        },
        {
          icon: "ondemand_video",
          action: "ALL-TV",
          label: "Series"
        }
      ]
    }
  }
};
