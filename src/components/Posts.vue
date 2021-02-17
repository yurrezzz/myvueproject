<template>
  <div id="posts">
    <table>
      <tr
        v-for="post in this.posts"
        v-bind:key="post.id"
      >
        <td>
          {{ post.userId }}
        </td>
        <td>
          {{ post.title }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import url from '../constants/constants';

export default {
  name: 'Posts',

  data() {
    return {
      posts: null,
    };
  },

  methods: {
    async getPosts() {
      const posts = await fetch(url.posts);
      this.posts = await posts.json();
    },
  },

  mounted() {
    this.getPosts();
  },
};
</script>

<style>
table {
  width: 700px;
  border: 1px solid aqua;
  margin: auto;
}

td {
  height: 50px;
  text-align: center;
  background-color: bisque;
}
</style>
