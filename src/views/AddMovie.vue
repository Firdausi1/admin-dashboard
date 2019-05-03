<template>
  <div class="add">
    <Header/>
    <div class="container">
      <h2 :class="{ 'light-text': !isDarkMode, 'dark-text': isDarkMode }">Add new Movies</h2>
      <form action>
        <div class="new-movie">
          <label :class="{ 'light-text': !isDarkMode, 'dark-text': isDarkMode }" for="cast">Cast:</label>
          <input
            :class="{ 'light-field': !isDarkMode, 'dark-field': isDarkMode }"
            type="text"
            name="cast"
            id="cast"
          >
        </div>
        <div class="new-movie">
          <label
            :class="{ 'light-text': !isDarkMode, 'dark-text': isDarkMode }"
            for="cinema-id"
          >Cinema_ID</label>
          <input
            :class="{ 'light-field': !isDarkMode, 'dark-field': isDarkMode }"
            type="text"
            name="cinema-id"
            id="cinema-id"
          >
        </div>
        <div class="new-movie">
          <label
            :class="{ 'light-text': !isDarkMode, 'dark-text': isDarkMode }"
            for="director"
          >Director:</label>
          <input
            :class="{ 'light-field': !isDarkMode, 'dark-field': isDarkMode }"
            type="text"
            name="director"
            id="director"
          >
        </div>
        <div class="new-movie">
          <label :class="{ 'light-text': !isDarkMode, 'dark-text': isDarkMode }" for="genre">Genre:</label>
          <input
            :class="{ 'light-field': !isDarkMode, 'dark-field': isDarkMode }"
            type="text"
            name="genre"
            id="genre"
          >
        </div>
        <div class="new-movie">
          <label
            :class="{ 'light-text': !isDarkMode, 'dark-text': isDarkMode }"
            for="languge"
          >Language:</label>
          <select
            :class="{ 'light-field': !isDarkMode, 'dark-field': isDarkMode }"
            name="language"
            id="language"
          >
            <option
              :class="{ 'light-option': !isDarkMode, 'dark-option': isDarkMode }"
              v-for="language in languages"
              :key="language"
            >{{language}}</option>
          </select>
        </div>
        <div class="new-movie">
          <label :class="{ 'light-text': !isDarkMode, 'dark-text': isDarkMode }" for="rating">Rating</label>
          <select
            :class="{ 'light-field': !isDarkMode, 'dark-field': isDarkMode }"
            name="rating"
            id="rating"
          >
            <option
              :class="{ 'light-option': !isDarkMode, 'dark-option': isDarkMode }"
              v-for="rating in ratings"
              :key="rating"
            >{{rating}}</option>
          </select>
        </div>
        <div class="new-movie">
          <label
            :class="{ 'light-text': !isDarkMode, 'dark-text': isDarkMode }"
            for="releaseDate"
          >Release Date:</label>
          <input
            :class="{ 'light-field': !isDarkMode, 'dark-field': isDarkMode }"
            type="date"
            name="releaseDate"
            id="releaseDate"
          >
        </div>
        <div class="new-movie">
          <label
            :class="{ 'light-text': !isDarkMode, 'dark-text': isDarkMode }"
            for="reviewRating"
          >Review Rating:</label>
          <input
            :class="{ 'light-field': !isDarkMode, 'dark-field': isDarkMode }"
            type="text "
            id="reviewRating "
          >
        </div>
        <div class="new-movie">
          <label
            :class="{ 'light-text': !isDarkMode, 'dark-text': isDarkMode }"
            for="runtime"
          >Runtime:</label>
          <input
            :class="{ 'light-field': !isDarkMode, 'dark-field': isDarkMode }"
            type="text "
            id="runtime "
          >
        </div>
        <div class="new-movie">
          <label
            :class="{ 'light-text': !isDarkMode, 'dark-text': isDarkMode }"
            for="summary"
          >Summary</label>
          <textarea
            :class="{ 'light-field': !isDarkMode, 'dark-field': isDarkMode }"
            name="summary "
            id="summary "
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div class="new-movie">
          <label :class="{ 'light-text': !isDarkMode, 'dark-text': isDarkMode }" for="title">Title:</label>
          <input
            :class="{ 'light-field': !isDarkMode, 'dark-field': isDarkMode }"
            type="text "
            id="title "
          >
        </div>
        <div class="new-movie">
          <label
            :class="{ 'light-text': !isDarkMode, 'dark-text': isDarkMode }"
            for="writers"
          >Writers:</label>
          <input
            :class="{ 'light-field': !isDarkMode, 'dark-field': isDarkMode }"
            type="text "
            id="writers "
          >
        </div>
        <div class="new-movie">
          <label :class="{ 'light-text': !isDarkMode, 'dark-text': isDarkMode }" for="year">Year:</label>
          <input :class="{ 'light-field': !isDarkMode, 'dark-field': isDarkMode }" type="text ">
        </div>
        <div class="new-movie">
          <label
            :class="{ 'light-text': !isDarkMode, 'dark-text': isDarkMode }"
            for="imageUrl"
          >ImageUrl:</label>
          <input
            :class="{ 'light-field': !isDarkMode, 'dark-field': isDarkMode }"
            type="url "
            name="imageUrl "
            id="imageUrl "
          >
        </div>
        <div class="new-movie">
          <label :class="{ 'light-text': !isDarkMode, 'dark-text': isDarkMode }" for="type">Type:</label>
          <input
            :class="{ 'light-field': !isDarkMode, 'dark-field': isDarkMode }"
            type="number "
            name="type "
            id="type "
          >
        </div>
        <div class="new-movie">
          <label
            :class="{ 'light-text': !isDarkMode, 'dark-text': isDarkMode }"
            for="video-id"
          >Video_ID:</label>
          <input
            :class="{ 'light-field': !isDarkMode, 'dark-field': isDarkMode }"
            type="video-id "
            id="video-id "
          >
        </div>
        <button>Add movie</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Header from "@/components/Header.vue";

export default {
  name: "AddMovie",
  data() {
    return {
      languages: ["English", "Yoruba", "Ibo", "Hausa"],
      ratings: ["G", "PG", "PG-13", "R"]
    };
  },
  components: {
    Header
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  },
  methods: {
    // ...mapActions(["add_Movie"]),
    // addNewMovie() {
    //   this.add_Movie(this.newMovie).then(() => {
    //     this.newMovie = {};
    //   });
    // }
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
.new-movie {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
}

.light-option {
  color: $black;
}

.dark-option {
  color: $black;
}

label {
  width: 25%;
  margin-right: 20px;
}

input {
  height: 40px;
  width: 40%;
}

textarea {
  width: 50%;
}
</style>