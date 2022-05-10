import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import VueToast from "vue-toast-notification";
import "vue-toast-notification/src/themes/default/index.scss";

createApp(App)
  .use(store)
  .use(router)
  .use(VueToast, {
    position: "top-right",
    duration: 2000,
    dismissible: true,
    queue: true,
  })
  .mount("#app");
