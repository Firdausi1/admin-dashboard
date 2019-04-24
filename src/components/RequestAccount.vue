<template>
  <transition name="slide-in-right" enter-active-class="animated slideInRight">
    <div
      class="request"
      v-show="show"
      :class="{'light-request' : isDarkMode, 'dark-request' : !isDarkMode}"
    >
      Don't have a Design+Code HQ account?
      <router-link to="/recover">Request an account</router-link>
    </div>
  </transition>
</template>

<script>
export default {
  name: "RequestAccount",
  data() {
    return {
      show: false
    };
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  },
  mounted() {
    this.show = true;
  }
};
</script>

<style lang="scss" scoped>
.request {
  position: absolute;
  top: 40px;
  right: 40px;
}

.light-request {
  color: rgba(255, 255, 255, 0.3);

  a {
    color: $white;
  }
}

.dark-request {
  color: rgba(0, 0, 0, 0.3);

  a {
    color: $black;
  }
}
</style>