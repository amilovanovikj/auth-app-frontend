import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { ApplicationInsights } from "@microsoft/applicationinsights-web";

const appInsights = new ApplicationInsights({
  config: {
    connectionString: process.env.VUE_APP_INSIGHTS_CONNECTION_STRING,
    disableFetchTracking: false,
    enableCorsCorrelation: true,
    enableRequestHeaderTracking: true,
    enableResponseHeaderTracking: true,
  }
});
appInsights.loadAppInsights();
appInsights.trackPageView();

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
