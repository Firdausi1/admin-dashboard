<template>
  <div class="container">
    <form @submit.prevent="onClick">
      <div class="uploadImage">
        <input
          :class="{'light-field' : !isDarkMode, 'dark-field' : isDarkMode}"
          type="file"
          name="uploadFieldName"
          ref="file"
          id
        >
      </div>
      <div class="new-title">
        <input
          :class="{'light-field' : !isDarkMode, 'dark-field' : isDarkMode}"
          type="text"
          required
          placeholder="Movie title"
          ref="title"
        >
      </div>
      <div class="about-movie">
        <textarea
          :class="{'light-field' : !isDarkMode, 'dark-field' : isDarkMode}"
          name="about"
          id
          cols="30"
          rows="10"
          ref="about"
          required
          placeholder="Movie description"
        ></textarea>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Edit",
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding-left: 15%;
  padding-right: 15%;
  padding-top: 10%;
}

.uploadImage {
  width: 250px;
}

input[type="file"] {
  width: 100%;
  background: none;
  border: none;
}

.new-title {
  width: 350px;
}

input[type="text"] {
  width: 100%;
}

.about-movie {
  width: 500px;
}

textarea {
  width: 100%;
  font-size: 20px;
  box-sizing: border-box;
  padding-left: 20px;
  margin-top: 20px;
}
</style>