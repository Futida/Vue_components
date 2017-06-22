import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Photos from '../components/Photos.vue'
import News from '../components/News.vue'
import Customers from '../components/Customers.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/photos', component: Photos },
  { path: '/news', component: News },
  { path: '/customers', component: Customers },
  { path: '/*', redirect: '/' }
  ];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router
