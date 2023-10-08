<template>
  <div class="mt-10">
    <h1 class="text-center text-2xl">
      Welcome...<span class="text-coralRed"> {{ user }}</span>
    </h1>
    <h1 class="text-center text-3xl">List of jobs</h1>
    <JobDetails v-for="record in data" :key="record._id" :data="record" />
    <div class="flex justify-center mt-4">
      <button
        v-if="currentPage > 1"
        @click="fetchJobs(currentPage - 1)"
        class="px-4 py-2 bg-blue-500 text-white rounded-md mr-2"
      >
        Previous Page
      </button>
      <button
        v-if="currentPage < totalPages"
        @click="fetchJobs(currentPage + 1)"
        class="px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Next Page
      </button>
    </div>
  </div>
</template>

<script>
import JobDetails from "./JobDetails.vue";
import { useAuthStore } from "../../stores/AuthStore";
import axios from "axios";
export default {
  components: {
    JobDetails,
  },
  data() {
    return {
      data: [],
      user: localStorage.getItem("user"),
      currentPage: 1,
      totalPages: 0,
    };
  },
  methods: {
    handleLogout() {
      const authStore = useAuthStore();
      authStore.logout();
      this.$router.push("/login");
    },
    async fetchJobs(page) {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/jobs?page=${page}&limit=5`
        );
        this.data = response.data.records;
        this.currentPage = response.data.currentPage;
        this.totalPages = response.data.pages;
      } catch (error) {
        console.log(error);
      }
    },
  },
  async created() {
    this.fetchJobs(this.currentPage);
  },
};
</script>

<style>
</style>