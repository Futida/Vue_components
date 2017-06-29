import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Photos from '../components/Photos.vue'
import News from '../components/News.vue'
import Customers from '../components/Customers.vue'
import Todos from '../components/Todos.vue'
import Comments from '../components/Comments.vue'
import Maps from '../components/Maps.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/photos', component: Photos },
  { path: '/news', component: News },
  { path: '/customers', component: Customers },
  { path: '/todos', component: Todos },
  { path: '/comments', component: Comments },
  { path: '/maps', component: Maps },
  { path: '/*', redirect: '/' }
  ];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router
