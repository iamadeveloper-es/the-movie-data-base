import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import WebGrid from "@/components/atoms/web-grid"

Vue.component("web-grid", WebGrid);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
