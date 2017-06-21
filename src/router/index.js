import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Photos from '../components/Photos.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/photos', component: Photos }
  ];

const router = new VueRouter({
  mode: 'history',
  routes

});

export default router
