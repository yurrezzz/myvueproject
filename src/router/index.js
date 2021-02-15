import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Photos = () => import(
  '../components/Photos.vue',
);

const Posts = () => import(
  '../components/Posts.vue',
);

const routes = [
  {
    path: '/photos',
    component: Photos,
  },
  {
    path: '/posts',
    component: Posts,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
