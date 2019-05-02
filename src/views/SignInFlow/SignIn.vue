<template>
  <div
    class="container"
    :class="{ 'light-background': !isDarkMode, 'dark-background': isDarkMode }"
  >
    <Notification v-if="hasText" :text="text" />
    <RequestAccount />
    <div class="login">
      <img src="@/assets/Melon.svg" height="60px" v-show="isDarkMode" />
      <img src="@/assets/Melon-dark.svg" height="60px" v-show="!isDarkMode" />
      <h4 :class="{ 'light-text': !isDarkMode, 'dark-text': isDarkMode }">
        Sign into Melon HQ
      </h4>
      <form @submit.prevent="onSubmit">
        <input
          type="email"
          placeholder="EMAIL"
          v-model="email"
          required
          :class="{ 'light-field': !isDarkMode, 'dark-field': isDarkMode }"
        />
        <input
          type="password"
          placeholder="PASSWORD"
          v-model="password"
          required
          :class="{ 'light-field': !isDarkMode, 'dark-field': isDarkMode }"
        />
        <button type="submit">sign in</button>
      </form>
      <router-link
        to="/recover"
        :class="{ 'light-link': isDarkMode, 'dark-link': !isDarkMode }"
        >forgot your password?</router-link
      >
      <ThemeSwitch />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import RequestAccount from "@/components/RequestAccount.vue";
import ThemeSwitch from "@/components/ThemeSwitch.vue";
import Notification from "@/components/Notification.vue";
import { auth } from "@/main.js";
import * as netlifyIdentityWidget from "netlify-identity-widget";

export default {
  name: "SignIn",
  components: {
    RequestAccount,
    ThemeSwitch,
    Notification
  },
  data() {
    return {
      email: null,
      password: null,
      hasText: false,
      text: ""
    };
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  },
  methods: {
    onSubmit() {
      const email = this.email;
      const password = this.password;
      auth
        .login(email, password, true)
        .then(response => {
          console.log(response);
          
          this.$router.replace("/");
        })
        .catch(error => {
          alert("error" + error);
        });
    }
  },
  mounted() {
    const params = this.$route.params;
    if (params.userLoggedOut) {
      this.hasText = true;
      this.text = "You have logged out";
    } else if (params.userRecoveredAccount) {
      this.hasText = true;
      this.text = "A recovery email has been sent to" + params.email;
    } else if (params.userRequestedAccount) {
      this.hasText = true;
      this.text =
        "Your request has been sent to an administrator for " + params.email;
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
}

.login {
  width: 400px;
  text-align: center;
}
</style>
