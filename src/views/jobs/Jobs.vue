<template>
  <div>
    <h3 class="text-center">List of jobs</h3>
    <a @click="handleLogout">logout</a>
    <JobDetails />
  </div>
</template>

<script>
import JobDetails from "./JobDetails.vue";
import { useAuthStore } from "../../stores/AuthStore";
export default {
  components: {
    JobDetails,
  },
  methods: {
    handleLogout() {
      const authStore = useAuthStore();
      authStore.logout();
      this.$router.push("/login");
    },
  },
};
</script>

<style>
</style>