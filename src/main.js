import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";

import Amplify, * as AmplifyModules from "aws-amplify";
import { AmplifyPlugin } from "aws-amplify-vue";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);
Vue.use(AmplifyPlugin, AmplifyModules);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount("#app");
