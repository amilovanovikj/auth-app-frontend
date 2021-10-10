import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { ApplicationInsights } from "@microsoft/applicationinsights-web";

const appInsights = new ApplicationInsights({
  config: {}
});
appInsights.loadAppInsights();
appInsights.trackPageView();

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
