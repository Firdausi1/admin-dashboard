<template>
  <div class="container" :class="{'light-background' : !isDarkMode,'dark-background' : isDarkMode}">
    <div class="login">
      <img src="@/assets/DCHQ.svg" v-show="isDarkMode">
      <img src="@/assets/DCHQ-dark.svg" v-show="!isDarkMode">
      <h4 :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}">Request Account</h4>
      <form @submit.prevent="onSubmit">
        <input
          type="email"
          placeholder="EMAIL"
          v-model="email"
          required
          :class="{'light-field' : !isDarkMode, 'dark-field' : isDarkMode}"
        >
        <button>Request Account</button>
      </form>
      <router-link
        to="/signin"
        :class="{'light-link' : isDarkMode, 'dark-link' : !isDarkMode}"
      >Already have an account? Sign in now</router-link>
      <ThemeSwitch/>
    </div>
  </div>
</template>

<script>
import ThemeSwitch from "@/components/ThemeSwitch.vue";

export default {
  name: "Request",
  components: {
    ThemeSwitch
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

      //slack API logic
      let slackUrl = new URL("https://slack.com/api/chat.postMessage");

      const data = {
        token:
          "xoxp-617154435396-611390648481-617662130245-f7e57a7bf7d6f18d25603a4713ef8370",
        channel: "hq",
        text:
          email +
          " has requested admin access to ADMIN, Please go to Netlify to invite them"
      };

      slackUrl.search = new URLSearchParams(data);

      fetch(slackUrl)
        .then(() => {
          this.$router.push({
            name: "signin",
            params: {
              userRequestedAccount: true,
              email: email
            }
          });
        })
        .catch(error => {
          alert("error:" + error);
        });
    }
  },
  mounted() {
    const params = this.$route.params;
    if (params.userLoggedOut) {
      this.hasText = true;
      this.text = "You have logged out";
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

