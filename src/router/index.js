import Vue from "vue";
import VueRouter from "vue-router";
import WebViewHome from "../components/templates/web-view-home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: WebViewHome,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
