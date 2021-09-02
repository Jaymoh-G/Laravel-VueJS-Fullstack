require("./bootstrap");
import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";
import Vue from "vue";
import common from "./common";
import router from "./router";
Vue.mixin(common);
Vue.use(ViewUI);

Vue.component("mainapp", require("./components/mainapp.vue").default);
const app = new Vue({
    el: "#app",
    router
});
