<template>
  <div class="container" :class="{'light-background' : !isDarkMode,'dark-background' : isDarkMode}">
    <RequestAccount/>
    <div class="login">
      <img src="@/assets/DCHQ.svg" v-show="isDarkMode">
      <img src="@/assets/DCHQ-dark.svg" v-show="!isDarkMode">
      <h4 :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}">Sign into DesignCode HQ</h4>
      <input
        type="email"
        placeholder="EMAIL"
        :class="{'light-field' : !isDarkMode, 'dark-field' : isDarkMode}"
      >
      <input
        type="password"
        placeholder="PASSWORD"
        :class="{'light-field' : !isDarkMode, 'dark-field' : isDarkMode}"
      >
      <button>sign in</button>
      <router-link
        to="/recover"
        :class="{'light-link' : isDarkMode, 'dark-link' : !isDarkMode}"
      >forgot your password?</router-link>
      <ThemeSwitch/>
    </div>
  </div>
</template>

<script>
import RequestAccount from "@/components/RequestAccount.vue";
import ThemeSwitch from "@/components/ThemeSwitch.vue";

export default {
  name: "SignIn",
  components: {
    RequestAccount,
    ThemeSwitch
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
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
}
</style>

