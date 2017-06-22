// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource'
import VueFire from 'vuefire'
import router from './router/index'

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueFire);


new Vue({
  el: '#app',
  router,
  render: h => h(require('./App.vue')),
});
