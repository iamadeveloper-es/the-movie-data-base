import Vue from "vue";
import VueRouter from "vue-router";
import WebViewHome from "../components/templates/web-view-home";
import WebViewDetail from "../components/templates/web-view-detail";
import WebViewSearch from "../components/templates/web-view-search";
import WebViewMyList from "../components/templates/web-view-my-list";
import WebViewAllMovies from "../components/templates/web-view-all-movies";
import WebViewAllTvShows from "../components/templates/web-view-all-tv-shows";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: WebViewHome,
  },
  {
    path: "/tv-shows/:id",
    name: "tvShows-Detail",
    component: WebViewDetail,
    props: {tvShow: true}
  },
  {
    path: "/movies/:id",
    name: "movies-Detail",
    component: WebViewDetail,
    props: {tvShow: false}
  },
  {
    path: "/search",
    name: "search",
    component: WebViewSearch,
  },
  {
    path: "/my-list",
    name: "myList",
    component: WebViewMyList,
  },
  {
    path: "/movies-all",
    name: "allMovies",
    component: WebViewAllMovies,
  },
  {
    path: "/tv-shows-all",
    name: "tvShows",
    component: WebViewAllTvShows,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
