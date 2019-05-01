<template>
  <div class="view">
    <div class="container">
      <div movie-image>
        <input type="file" name="uploadFieldName" ref="file" id>
      </div>
      <div class="movie-title"></div>
      <div class="movie-description">
        <textarea
          name="about"
          id
          cols="30"
          rows="10"
          ref="about"
          required
          placeholder="Movie description"
        ></textarea>
      </div>
      <button @click="back()">Back</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "View",
  components: {},
  methods: {
    back() {
      this.$router.replace("/movies");
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding-left: 15%;
  padding-right: 15%;
}
button {
  width: 200px;
}
</style>