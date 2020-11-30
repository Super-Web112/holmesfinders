// =========================================================
// * Vue HolmesFinders - v1.2.2
// =========================================================
//
// * Product Page: https://www.HolmesFinders.com/product/vue-material-kit
// * Copyright 2019 HolmesFinders (https://www.HolmesFinders.com)
// * Licensed under MIT (https://github.com/creativetimofficial/vue-material-kit/blob/master/LICENSE.md)
//
// * Coded by HolmesFinders
//
// =========================================================
//
// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import MaterialKit from "./plugins/material-kit";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BNavbar } from 'bootstrap-vue'
import { NavbarPlugin } from 'bootstrap-vue'
import VueCarousel from 'vue-carousel';
 
Vue.use(VueCarousel);
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.component('b-navbar', BNavbar)
Vue.use(NavbarPlugin)

Vue.config.productionTip = false;

Vue.use(MaterialKit);

const NavbarStore = {
  showNavbar: false
};

Vue.mixin({
  data() {
    return {
      NavbarStore
    };
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

