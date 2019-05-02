import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as netlifyIdentityWidget from "netlify-identity-widget";
import Gotrue from "gotrue-js";
import VueFire from 'vuefire';

Vue.config.productionTip = false;
Vue.use(VueFire);

//Initialize netlify identity
netlifyIdentityWidget.init();

//Initialize gotrue.js for netlify
export const auth = new Gotrue({
    APIUrl: "https://firdausi-vue.netlify.com/.netlify/identity",
    setCookie: true
});

/* eslint-disable no-new */
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");