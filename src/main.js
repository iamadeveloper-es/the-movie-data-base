import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//Components
import WebGrid from "@/components/atoms/web-grid";
import WebSectionTitle from "@/components/atoms/web-section-title";

Vue.component("web-grid", WebGrid);
Vue.component("web-section-title", WebSectionTitle);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
