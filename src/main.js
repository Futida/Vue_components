// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.use(VueRouter);


const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: require('./components/Home.vue')
    },
    {
      path: '/todos',
      component: require('./components/Todos.vue')
    },
    {
      path: '/photos',
      component: require('./components/Photos.vue')
    },
    {
      path: '/contacts',
      component: require('./components/home/Contacts.vue')
    },

  ]

});

new Vue({
  el: '#app',
  router,
  render: h => h(require('./App.vue')),
});
