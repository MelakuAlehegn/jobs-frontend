<template>
  <nav class="p-7 flex gap-2 justify-center text-lg uppercase">
    <router-link
      class="text-blueGray-700 focus:text-white focus:bg-coralRed px-2 py-1 rounded-md"
      :to="{ name: 'Home' }"
      >Home</router-link
    >
    |
    <router-link
      class="text-blueGray-700 focus:text-white focus:bg-coralRed px-2 py-1 rounded-md"
      :to="{ name: 'About' }"
      >About</router-link
    >
    <router-link
      class="text-blueGray-700 focus:text-white focus:bg-coralRed px-2 py-1 rounded-md"
      :to="{ name: 'Login' }"
      >Login</router-link
    >
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>