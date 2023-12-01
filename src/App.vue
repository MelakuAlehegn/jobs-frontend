<template>
  <div class="font-poppins">
    <Nav v-if="!isLoggedIn" />
    <a
      v-if="isLoggedIn"
      class="text-blueGray-700 float-right mr-9 cursor-pointer rounded-md text-white bg-coralRed px-5 py-2 hover:bg-bluePrimary transition duration-700"
      @click="hundleLogOut"
      >Logout</a
    >
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
  methods: {
    hundleLogOut() {
      const authStore = useAuthStore();
      authStore.logout();
      this.$router.push("/login");
    },
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
