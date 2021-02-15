<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import NotFound from './components/NotFound';
import Photos from './components/Photos';
import Posts from './components/Posts';

export default {
  name: 'App',
  components: {
    NotFound,
    Photos,
    Posts,
  },
};
</script>
