<template>
  <div class="font-poppins">
    <Nav v-if="!isLoggedIn" />
    <router-view />
  </div>
</template>
<script>
import Nav from "./components/Nav.vue";
import { useAuthStore } from "./stores/AuthStore";
export default {
  components: {
    Nav,
  },
  computed: {
    isLoggedIn() {
      const authStore = useAuthStore();
      return authStore.isAuthenticated;
    },
  },
};
</script>

<style>
/* @import url("https://fonts.googleapis.com/css2?family=Inter:wght@500;700&display=swap"); */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");
</style>
