import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
// import plugin from "./myPlugin";

import "../src/assets/sass/_custom.scss";
import "bootstrap/dist/js/bootstrap.bundle";

const app = createApp(App);

app.use(router);
// app.use(plugin);

router.isReady().then(function () {
  app.mount("#app");
});
