<template>
  <div>
    <Header/>
    <div class="container">
      <div class="movie-image">
        <img src="@/assets/movie-poster-4.jpg" alt>
      </div>
      <hr>
      <div class="box">
        <div class="title-box">
          <h4 :class="{ 'light-gen': !isDarkMode, 'dark-gen': isDarkMode }">genre</h4>
          <h2
            class="title"
            :class="{ 'light-text': !isDarkMode, 'dark-text': isDarkMode }"
          >movie-title</h2>
        </div>
        <div class="rating">
          <h4
            :class="{ 'light-text': !isDarkMode, 'dark-text': isDarkMode, 'light-border': !isDarkMode, 'dark-border': isDarkMode }"
          >G</h4>
        </div>
      </div>
      <div class="column">
        <div class="column-1">
          <p :class="{ 'light': !isDarkMode, 'dark': isDarkMode }">summary</p>
          <h5 :class="{ 'light-text': !isDarkMode, 'dark-text': isDarkMode }">Language</h5>
          <p :class="{ 'light': !isDarkMode, 'dark': isDarkMode }">movie.language</p>
          <h5 :class="{ 'light-text': !isDarkMode, 'dark-text': isDarkMode }">Director</h5>
          <p :class="{ 'light': !isDarkMode, 'dark': isDarkMode }">movie.director</p>
          <h5 :class="{ 'light-text': !isDarkMode, 'dark-text': isDarkMode }">Type</h5>
          <p :class="{ 'light': !isDarkMode, 'dark': isDarkMode }">movie.type</p>
          <h5 :class="{ 'light-text': !isDarkMode, 'dark-text': isDarkMode }">Cinema_ID</h5>
          <p :class="{ 'light': !isDarkMode, 'dark': isDarkMode }">movie.cinemaId</p>
        </div>
        <div class="column-2">
          <h5 :class="{ 'light-text': !isDarkMode, 'dark-text': isDarkMode }">Release date</h5>
          <p :class="{ 'light': !isDarkMode, 'dark': isDarkMode }">movie.releaseDate</p>
          <h5 :class="{ 'light-text': !isDarkMode, 'dark-text': isDarkMode }">Review</h5>
          <p :class="{ 'light': !isDarkMode, 'dark': isDarkMode }">movie.review</p>
          <h5 :class="{ 'light-text': !isDarkMode, 'dark-text': isDarkMode }">Writer</h5>
          <p :class="{ 'light': !isDarkMode, 'dark': isDarkMode }">movie.writer</p>
          <h5 :class="{ 'light-text': !isDarkMode, 'dark-text': isDarkMode }">Year</h5>
          <p :class="{ 'light': !isDarkMode, 'dark': isDarkMode }">movie.year</p>
          <h5 :class="{ 'light-text': !isDarkMode, 'dark-text': isDarkMode }">Video_ID</h5>
          <p :class="{ 'light': !isDarkMode, 'dark': isDarkMode }">movie.videoId</p>
        </div>
      </div>
      <div class="edit-button">
        <router-link to="/editMovie">
          <button>Edit Movie</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import { db } from "@/firebase";

export default {
  name: "viewMovie",
  data() {
    return {
      movies: []
    };
  },
  components: {
    Header
  },
  firebase: {
    movies: db.ref("Movie Information")
  },
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
}

p,
h4,
h5 {
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.7rem;
  letter-spacing: 0.1rem;
}

h5,
h4 {
  margin-bottom: 2px;
  font-weight: bold;
}

p {
  margin-top: 0;
  margin-bottom: 20px;
}

.light-gen {
  color: $purple;
}

.dark-gen {
  color: $pink;
}

.light {
  color: rgba(0, 0, 0, 0.6);
}

.dark {
  color: rgba(255, 255, 255, 0.6);
}
.movie-image {
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 300px;
    height: auto;
  }
}

.title-box {
  float: left;
}

.title {
  margin-top: 0;
  margin-bottom: 0;
}

.rating {
  float: right;
}

.dark-border {
  border: 2px solid $white;
  border-radius: 50%;
  padding: 3px;
}

.light-border {
  border: 2px solid $black;
  border-radius: 50%;
  padding: 3px;
}

.column {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.edit-button {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>