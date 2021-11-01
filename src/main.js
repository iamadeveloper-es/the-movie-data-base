import Vue from "vue";
import VueMaterial from 'vue-material'
import App from "./App.vue";
import router from "./router";
import store from "./store";

import 'vue-material/dist/vue-material.min.css'

//Components
import WebLink from "@/components/atoms/web-link";
import WebButton from "@/components/atoms/web-button";
import WebGrid from "@/components/atoms/web-grid";
import WebSectionTitle from "@/components/atoms/web-section-title";
import WebList from "@/components/molecules/web-list";
import WebIconAction from "@/components/molecules/web-icon-action";

Vue.use(VueMaterial)

Vue.component("web-link", WebLink);
Vue.component("web-button", WebButton);
Vue.component("web-grid", WebGrid);
Vue.component("web-section-title", WebSectionTitle);
Vue.component("web-list", WebList);
Vue.component("web-icon-action", WebIconAction);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
