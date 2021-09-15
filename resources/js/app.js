require('./bootstrap');

import Vue from "vue";
import router from "./router";
import Vuetify from "vuetify";
import Index from "./pages/admin/product/Index";
// import App from "./components/App";
import store from "./store/index";

Vue.use(Vuetify);
const app = new Vue({
    router,
    store,
    vuetify: new Vuetify(),
}).$mount('#app');
