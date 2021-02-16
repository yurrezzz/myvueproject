import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const NotFound = () => import(
  '../components/NotFound',
);

const Photos = () => import(
  '../components/Photos',
);

const Posts = () => import(
  '../components/Posts',
);

const routes = [
  {
    path: '*',
    component: NotFound,
  },
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
