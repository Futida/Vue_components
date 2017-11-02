// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource'
import VueFire from 'vuefire'
import Vuetify from 'vuetify'
import router from './router/index'
import * as VueGoogleMaps from 'vue2-google-maps'


Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueFire);
Vue.use(Vuetify);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDmlY00L3Y6ZqFYMxdDRE0FnmJWnYG6vIs'
  }
});

new Vue({
  el: '#app',
  router,
  render: h => h(require('./App.vue')),
});
