<template>
  <div class="add">
    <Header/>
    <div class="container">
      <form @submit.prevent="addNewMovie">
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
            v-model="newMovie.title"
            :class="{'light-field' : !isDarkMode, 'dark-field' : isDarkMode}"
            type="text"
            required
            placeholder="Movie title"
            ref="title"
          >
        </div>
        <div class="about-movie">
          <textarea
            v-model="newMovie.desc"
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
        <button>Add movie</button>
      </form>
      <button @click="back()">cancel</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Header from "@/components/Header.vue";

export default {
  name: "Add",
  data() {
    return {
      newMovie: {}
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
    ...mapActions(["add_Movie"]),

    addNewMovie() {
      this.add_Movie(this.newMovie).then(() => {
        this.newMovie = {};
      });
    },
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