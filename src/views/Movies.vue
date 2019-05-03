<template>
  <div>
    <Header/>
    <div class="container">
      <h2 :class="{ 'light-text': !isDarkMode, 'dark-text': isDarkMode }">Movies</h2>

      <div class="movies">
        <div v-for="movie in movies" :key="movie['.key']" class="movie">
          <div
            class="movie-title"
            :class="{'light-background' : !isDarkMode, 'dark-background' : isDarkMode}"
          >
            <h3 ref="title">{{movie.Title}}</h3>
          </div>
          <div class="movie-poster">
            <router-link to="/editMovie" >
            <img :src="movie.imageUrl" ref="image" editable>
            </router-link>
          </div>
          <div
            class="movie-description"
            :class="{'light-background' : !isDarkMode, 'dark-background' : isDarkMode}"
          >
            <p
              :class="{'light-text' : !isDarkMode, 'dark-text' : isDarkMode}"
              ref="descripton"
            >{{excerpt(movie.Summary)}}</p>
          </div>
          <div
            class="icons"
            :class="{'light-background' : !isDarkMode, 'dark-background' : isDarkMode}"
          >
            <a>
              <img src="@/assets/view.svg">
            </a>
            <router-link to="/editMovie">
            <a>
              <img src="@/assets/edit.svg">
            </a>
            </router-link>
          </div>
        </div>
        <router-link to="/addMovie" class="add movie">
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
import { db } from "@/firebase";
import { mapState } from "vuex";

export default {
  name: "Movies",
  components: {
    Header,
    ThemeSwitch
  },
  firebase: {
    movies: db.ref("Movie Information")
  },
  data() {
    return {
      movies: []
    };
  },
  methods: {
    excerpt(summary) {
      if (summary.length <= 100) {
        return summary;
      }
      return summary.substring(1, 100) + "...";
    }
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  }
  // created() {
  //   this.$bind('todos', db.ref('Movie Information')).then(movies => {
  //     this.movies === movies
  //     this.$unbind('movies')
  //   })

  // }
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