<template>
  <div id="photos">
    <table>
      <tr
        v-for="photo in this.$store.state.photos"
        v-bind:key="photo.id"
      >
        <td>
          <img v-bind:src=photo.thumbnailUrl>
        </td>
        <td>
          <img v-bind:src=photo.thumbnailUrl>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import url from '../constants/constants';

export default {
  name: 'Photos',

  methods: {
    async getPhotos() {
      const photos = await fetch('https://jsonplaceholder.typicode.com/photos');
      this.$store.state.photos = await photos.json();
    },
  },

  mounted() {
    this.getPhotos(url.photos);
  },
};
</script>

<style scoped>
table {
  width: 700px;
  border: 1px aqua;
  margin: auto;
}

td {
  text-align: center;
}
</style>
