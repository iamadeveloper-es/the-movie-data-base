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
          action: "/search",
          label: "Buscar"
        },
        {
          icon: "home",
          action: "/",
          label: "Inicio"
        },
        {
          icon: "inventory",
          action: "/my-list",
          label: "Mi Lista"
        },
        {
          icon: "movie_creation",
          action: "/movies",
          label: "Películas"
        },
        {
          icon: "ondemand_video",
          action: "/tv-shows",
          label: "Series"
        }
      ]
    }
  }
};
