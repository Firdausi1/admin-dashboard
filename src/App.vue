<template>
  <div id="app" :class="{'light-background' : !isDarkMode, 'dark-background' : isDarkMode}">
    <router-view/>
  </div>
</template>

<script>
import "animate.css";

export default {
  name: "App",
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  },
  mounted() {
    const isDarkMode = this.$store.getters.isDarkMode;
    document.body.style.background = isDarkMode ? "#212c4f" : "#f0f3f5";
  }
};
</script>

<style lang="scss">
* {
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}

body {
  background: $dark-blue;
  margin: 0;
  padding: 0;
}

line,
text {
  opacity: 0.2;
}

h1 {
  @include heading-1;
}

p {
  @include large-text;
}

#app {
  font-family: $system-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $white;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: $white;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

//theme
h4 {
  line-height: 34px;
  font-size: 24px;

  color: #ffffff;
}

input {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  height: 60px;
  width: 100%;
  font-size: 20px;
  padding-left: 20px;
  margin-top: 20px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
}

button {
  background: #5fccf2;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  height: 60px;
  width: 100%;
  font-size: 20px;
  color: #ffffff;
  border: none;
  margin-top: 20px;
  margin-bottom: 40px;
}

a {
  line-height: 25px;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
}

.light-link {
  color: rgba(255, 255, 255, 0.3);
}

.dark-link {
  color: rgba(0, 0, 0, 0.3);
}

.light-background {
  background-color: $light-grey;

  line,
  text {
    stroke: $black;
  }
}

.dark-background {
  background-color: $dark-blue;

  line,
  text {
    stroke: $light-grey;
  }
}

.light-text {
  color: $black;
}

.dark-text {
  color: $white;
}

.light-field {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: $black;
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
}

.dark-field {
  background: rgba(198, 208, 235, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: $white;
  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
}

.dark-box {
  background: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.light-box {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
