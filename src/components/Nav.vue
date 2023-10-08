<template>
  <nav
    class="p-7 flex gap-2 justify-center md:justify-between container mx-auto text-lg uppercase"
  >
    <div>
      <router-link
        class="text-blueGray-700 mr-5 hover:text-coralRed focus:text-coralRed"
        :to="{ name: 'Home' }"
        >Home</router-link
      >
      <router-link
        class="text-blueGray-700 mr-5 hover:text-coralRed focus:text-coralRed"
        :to="{ name: 'About' }"
        >About</router-link
      >
    </div>
    <div class="flex gap-8">
      <router-link
        class="text-blueGray-700 text-white bg-coralRed px-5 py-2 hover:bg-bluePrimary transition duration-700"
        :to="{ name: 'Login' }"
        >Login</router-link
      >

      <router-link
        class="text-blueGray-700 text-white bg-coralRed px-5 py-2 hover:bg-bluePrimary transition duration-700"
        :to="{ name: 'Login' }"
        >Sign up</router-link
      >
    </div>
  </nav>
</template>

<script>
import { useAuthStore } from "../stores/AuthStore";

export default {
  data() {
    return {
      isAuthenticated: useAuthStore.isAuthenticated,
    };
  },
};
</script>

<style>
</style>