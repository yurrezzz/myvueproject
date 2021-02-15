<template>
  <div id="photos">
    <table>
      <tr
        v-for="photo in photos"
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
export default {
  name: 'Photos',

  data() {
    return {
      photos: null,
    };
  },

  methods: {
    async getPhotos() {
      const photos = await fetch('https://jsonplaceholder.typicode.com/photos');
      this.photos = await photos.json();
    },
  },

  mounted() {
    this.getPhotos('https://jsonplaceholder.typicode.com/photos');
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
