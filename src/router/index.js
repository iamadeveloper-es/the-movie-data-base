import Vue from "vue";
import VueRouter from "vue-router";
import WebViewHome from "../components/templates/web-view-home";
import WebViewDetail from "../components/templates/web-view-detail";
import WebViewSearch from "../components/templates/web-view-search";
import WebViewMyList from "../components/templates/web-view-my-list";
import WebViewAll from "../components/templates/web-view-all";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HOME",
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
    name: "SEARCH",
    component: WebViewSearch,
  },
  {
    path: "/my-list",
    name: "MY-LIST",
    component: WebViewMyList,
  },
  {
    path: "/movies-all",
    name: "ALL-MOVIES",
    component: WebViewAll,
    props: {tvShow: false}
  },
  {
    path: "/tv-show-all",
    name: "ALL-TV",
    component: WebViewAll,
    props: {tvShow: true}
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
