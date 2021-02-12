import Vue from 'vue';
import App from './App';
import Photos from './components/Photos';
import Posts from './components/Posts';

Vue.config.productionTip = false;

const NotFound = {
  template: '<div>Page not found</div>',
};

const routes = {
  '/': App,
  '/photos': Photos,
  '/posts': Posts,
};

const vue = new Vue({
  el: '#app',
  mode: 'history',
  data: {
    currentRoute: window.location.pathname,
  },
  computed: {
    ViewComponent() {
      return routes[this.currentRoute] || NotFound;
    },
  },
  components: { App, Photos, Posts },
  render(h) {
    return h(this.ViewComponent);
  },
});

vue();
