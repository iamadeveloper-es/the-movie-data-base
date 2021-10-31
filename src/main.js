import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//Components
import WebLink from "@/components/atoms/web-link";
import WebButton from "@/components/atoms/web-button";
import WebGrid from "@/components/atoms/web-grid";
import WebSectionTitle from "@/components/atoms/web-section-title";
import WebList from "@/components/molecules/web-list";

Vue.component("web-link", WebLink);
Vue.component("web-button", WebButton);
Vue.component("web-grid", WebGrid);
Vue.component("web-section-title", WebSectionTitle);
Vue.component("web-list", WebList);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
