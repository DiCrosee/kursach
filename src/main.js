import "./assets/main.scss";

import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import naive from "naive-ui";
const app = createApp(App);
app.use(router);
app.use(naive);
app.mount("#app");
