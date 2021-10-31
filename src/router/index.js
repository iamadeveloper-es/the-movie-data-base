import Vue from "vue";
import VueRouter from "vue-router";
import WebViewHome from "../components/templates/web-view-home";
import WebViewDetail from "../components/templates/web-view-detail";

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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
