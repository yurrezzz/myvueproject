<template>
  <div id="posts">
    <table>
      <tr
        v-for="post in this.result"
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
export default {
  name: 'Posts',

  data() {
    return {
      result: null,
    };
  },

  methods: {
    async getData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      this.result = await response.json();
    },
  },

  mounted() {
    this.getData();
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

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
