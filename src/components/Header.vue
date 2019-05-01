<template>
  <div>
    <div id="nav" :class="{'nav-light' : !isDarkMode , 'nav-dark' : isDarkMode}">
      <div class="nav-1">
        <img src="@/assets/Melon.svg">
        <router-link to="/" :class="{ 'light-nav': !isDarkMode, 'dark-nav': isDarkMode }">Home</router-link>
        <router-link
          to="/manage"
          :class="{ 'light-nav': !isDarkMode, 'dark-nav': isDarkMode }"
        >Manage Users</router-link>
        <router-link to="/Team" :class="{ 'light-nav': !isDarkMode, 'dark-nav': isDarkMode }">Team</router-link>
        <router-link
          to="/Movies"
          :class="{ 'light-nav': !isDarkMode, 'dark-nav': isDarkMode }"
        >Movies</router-link>
      </div>
      <a @click="onClick">
        logout
        <img src="@/assets/logout.svg">
      </a>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { auth } from "@/main.js";
export default {
  name: "Header",
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  },
  methods: {
    onClick() {
      const user = auth.currentUser();
      user
        .logout()
        .then(response => {
          this.$router.push({
            name: "signin",
            params: {
              userLoggedOut: true
            }
          });
        })
        .catch(error => {
          alert("error:" + error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.nav-light {
  background: $white;
}

.nav-dark {
  background: $super-dark-blue;
}

#nav {
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  padding: 15px 15%;
  a {
    font-weight: bold;
    color: $dark-grey;
    &.router-link-exact-active.dark-nav {
      color: $white;
    }
    &.router-link-exact-active.light-nav {
      color: $middle-blue;
    }
  }
}

.nav-1 {
  display: flex;
  align-items: center;

  a {
    margin-left: 20px;
    margin-right: 20px;
  }
}

img {
  margin-right: 20px;
}
</style>
