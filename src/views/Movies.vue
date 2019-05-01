<template>
  <div>
    <Header/>
    <div class="container">
      <h2 :class="{ 'light-text': !isDarkMode, 'dark-text': isDarkMode }">Movies</h2>

      <div class="movies">
        <div class="movie">
          <div
            class="movie-title"
            :class="{'light-background' : !isDarkMode, 'dark-background' : isDarkMode}"
          >
            <h3 ref="title">Diary of a wimpy kid</h3>
          </div>
          <div class="movie-poster">
            <img src="@/assets/movie-poster-4.jpg" ref="image" editable>
          </div>
          <div
            class="movie-description"
            :class="{'light-background' : !isDarkMode, 'dark-background' : isDarkMode}"
          >
            <p
              :class="{'light-text' : !isDarkMode, 'dark-text' : isDarkMode}"
              ref="descripton"
            >{{"this paragraph contains the description of the movie this paragraph contains the description of the movie" | truncate(300, '...')}}</p>
          </div>
          <div
            class="icons"
            :class="{'light-background' : !isDarkMode, 'dark-background' : isDarkMode}"
          >
            <a>
              <img src="@/assets/view.svg">
            </a>
            <a>
              <img src="@/assets/edit.svg">
            </a>
          </div>
        </div>
        <div class="movie">
          <div
            class="movie-title"
            :class="{'light-background' : !isDarkMode, 'dark-background' : isDarkMode}"
          >
            <h3>Amazing Spiderman</h3>
          </div>
          <div class="movie-poster">
            <img src="@/assets/movie-poster-19.jpg" editable>
          </div>
          <div
            class="movie-description"
            :class="{'light-background' : !isDarkMode, 'dark-background' : isDarkMode}"
          >
            <p
              :class="{'light-text' : !isDarkMode, 'dark-text' : isDarkMode}"
            >{{"this paragraph contains the description of the movie this paragraph contains the description of the movie" | truncate(300, '...')}}</p>
          </div>
          <div
            class="icons"
            :class="{'light-background' : !isDarkMode, 'dark-background' : isDarkMode}"
          >
            <a>
              <img src="@/assets/view.svg">
            </a>
            <a>
              <img src="@/assets/edit.svg">
            </a>
          </div>
        </div>
        <div class="movie">
          <div
            class="movie-title"
            :class="{'light-background' : !isDarkMode, 'dark-background' : isDarkMode}"
          >
            <h3>Hotel Transylvania</h3>
          </div>
          <div class="movie-poster">
            <img src="@/assets/movie-poster-9.jpg" editable>
          </div>
          <div
            class="movie-description"
            :class="{'light-background' : !isDarkMode, 'dark-background' : isDarkMode}"
          >
            <p
              :class="{'light-text' : !isDarkMode, 'dark-text' : isDarkMode}"
            >{{"this paragraph contains the description of the movie this paragraph contains the description of the movie" | truncate(300, '...')}}</p>
          </div>
          <div
            class="icons"
            :class="{'light-background' : !isDarkMode, 'dark-background' : isDarkMode}"
          >
            <a>
              <img src="@/assets/view.svg">
            </a>
            <a>
              <img src="@/assets/edit.svg">
            </a>
          </div>
        </div>
        <div class="movie">
          <div
            class="movie-title"
            :class="{'light-background' : !isDarkMode, 'dark-background' : isDarkMode}"
          >
            <h3>The Expendables 2</h3>
          </div>
          <div class="movie-poster">
            <img src="@/assets/movie-poster-32.jpg" editable>
          </div>
          <div
            class="movie-description"
            :class="{'light-background' : !isDarkMode, 'dark-background' : isDarkMode}"
          >
            <p
              :class="{'light-text' : !isDarkMode, 'dark-text' : isDarkMode}"
            >{{"this paragraph contains the description of the movie this paragraph contains the description of the movie" | truncate(300, '...')}}</p>
          </div>
          <div
            class="icons"
            :class="{'light-background' : !isDarkMode, 'dark-background' : isDarkMode}"
          >
            <a>
              <img src="@/assets/view.svg">
            </a>
            <a>
              <img src="@/assets/edit.svg">
            </a>
          </div>
        </div>
        <div class="movie">
          <div
            class="movie-title"
            :class="{'light-background' : !isDarkMode, 'dark-background' : isDarkMode}"
          >
            <h3>The Possession</h3>
          </div>
          <div class="movie-poster">
            <img src="@/assets/movie-poster-36.jpg" editable>
          </div>
          <div
            class="movie-description"
            :class="{'light-background' : !isDarkMode, 'dark-background' : isDarkMode}"
          >
            <p
              :class="{'light-text' : !isDarkMode, 'dark-text' : isDarkMode}"
            >{{"this paragraph contains the description of the movie this paragraph contains the description of the movie" | truncate(300, '...')}}</p>
          </div>
          <div
            class="icons"
            :class="{'light-background' : !isDarkMode, 'dark-background' : isDarkMode}"
          >
            <a>
              <img src="@/assets/view.svg">
            </a>
            <a>
              <img src="@/assets/edit.svg">
            </a>
          </div>
        </div>
        <div class="movie" v-if="show">
          <div
            class="movie-title"
            :class="{'light-background' : !isDarkMode, 'dark-background' : isDarkMode}"
          >
            <h3 v-for="movie in movies" :key="movie">
              <span>{{movie.title}}</span>
            </h3>
          </div>
          <div class="movie-poster"></div>
          <div
            class="movie-description"
            :class="{'light-background' : !isDarkMode, 'dark-background' : isDarkMode}"
          >
            <p
              v-for="movie in movies"
              :key="movie"
              :class="{'light-text' : !isDarkMode, 'dark-text' : isDarkMode}"
            >{{movie.desc}}</p>
          </div>
          <div
            class="icons"
            :class="{'light-background' : !isDarkMode, 'dark-background' : isDarkMode}"
          >
            <a>
              <img src="@/assets/view.svg">
            </a>
            <a>
              <img src="@/assets/edit.svg">
            </a>
          </div>
        </div>
        <router-link to="/movies/add" class="add movie">
          <img
            src="@/assets/add.svg"
            :class="{'light-icon' : !isDarkMode, 'dark-icon' : isDarkMode}"
          >
        </router-link>
      </div>
      <ThemeSwitch/>
    </div>
  </div>
</template>

<script>
import ThemeSwitch from "../components/ThemeSwitch.vue";
import Header from "@/components/Header.vue";
import { mapState } from "vuex";

export default {
  name: "Movies",
  components: {
    Header,
    ThemeSwitch
  },
  data() {
    return {
      show: false
    };
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },

    ...mapState(["movies"])
  },
  filters: {
    truncate: function(text, length, suffix) {
      return text.substring(0, length) + suffix;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding-left: 10%;
  padding-right: 10%;
}

.movies {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: space-evenly;
}

.movie {
  width: 100%;
  max-width: 27%;
  height: 500px;
  border-radius: 10px;
  margin: 2%;
}

.light-background {
  background-color: $white;
  color: $black;
}

.dark-background {
  background-color: $super-dark-blue;
  color: $white;
}

.light-icon {
  color: $black;
}

.dark-icon {
  color: $white;
}

.movie-title {
  box-sizing: border-box;
  width: 100%;
  padding-left: 10px;
  padding-top: 2px;
  padding-bottom: 2px;
  margin: 0;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  text-align: center;
}

.movie-poster {
  width: 100%;
  height: 300px;
  margin: 0;
  padding: 0;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    opacity: 0.6;
  }
}

.movie-description {
  box-sizing: border-box;
  width: 100%;
  padding: 15px;
  margin: 0;

  & p {
    margin: 0;
    font-size: 16px;
    line-height: 20px;
  }
}

.icons {
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;

  & img {
    width: 25px;
    padding-left: 15px;
    padding-right: 15px;
  }
}

.add {
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    width: 150px;
  }
}
</style>