<template>
  <div class="manage">
    <Header/>
    <div class="container">
      <h1 :class="{'dark' : !isDarkMode, 'light' : isDarkMode}">Manage Users</h1>
      <h4
        :class="{'light-text' : !isDarkMode, 'dark-text' : isDarkMode}"
      >Enter either customer email or subscription ID</h4>
      <div class="field-container">
        <div class="fields">
          <input
            type="text"
            :class="{'light-field' : !isDarkMode, 'dark-field' : isDarkMode}"
            placeholder="Customer Email"
          >
          <div class="or">or</div>
          <input
            type="text"
            :class="{'light-field' : !isDarkMode, 'dark-field' : isDarkMode}"
            placeholder="Subscription ID"
          >
          <button>Get Customer Details</button>
        </div>
      </div>
      <hr :class="{'dark-hr' : !isDarkMode, 'light-hr' : isDarkMode}">
      <h1 :class="{'dark' : !isDarkMode, 'light' : isDarkMode}">Customer Details</h1>
      <div class="details">
        <div class="column-1">
          <h5 :class="{ 'light-link': !isDarkMode, 'dark-link': isDarkMode }">Subscription State</h5>
          <h4
            :class="{'light-text' : !isDarkMode, 'dark-text' : isDarkMode}"
          >Active until 2 Oct 2019</h4>
          <h5 :class="{ 'light-link': !isDarkMode, 'dark-link': isDarkMode }">On trial</h5>
          <h4 :class="{'light-text' : !isDarkMode, 'dark-text' : isDarkMode}">Is not on trial</h4>
        </div>
        <div class="column-2">
          <h5 :class="{ 'light-link': !isDarkMode, 'dark-link': isDarkMode }">Seated</h5>
          <h4 :class="{'light-text' : !isDarkMode, 'dark-text' : isDarkMode}">No</h4>
          <h5 :class="{ 'light-link': !isDarkMode, 'dark-link': isDarkMode }">Trial End Date</h5>
          <h4 :class="{'light-text' : !isDarkMode, 'dark-text' : isDarkMode}">-</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "Manage",
  components: {
    Header
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding-left: 15%;
  padding-right: 15%;
}

h1.dark {
  @include heading-3;
  color: $black;
}

h1.light {
  @include heading-3($white);
}

h5,
h4 {
  font-weight: 300;
  margin: 0;
}

h5 {
  font-size: 18px;
  margin-top: 20px;
}

hr .light-hr {
  background: rgba(255, 255, 255, 0.1);
}

hr .dark-hr {
  background: rgba(0, 0, 0, 0.1);
}

.dark-link {
  color: rgba(255, 255, 255, 0.4);
}

.light-link {
  color: rgba(0, 0, 0, 0.4);
}

.field-container {
  display: flex;
  width: 100%;
  flex-wrap: nowrap;
  margin-bottom: 30px;
}

.fields {
  width: 100%;
  display: flex;
  align-items: center;
}

input,
.or {
  margin-right: 20px;
}

input,
button {
  width: 100%;
}

button {
  margin: 20px 0 0 0;
}

.details {
  display: flex;
  width: 100%;
  align-items: center;
}

.column-1 {
  margin-right: 200px;
}
</style>