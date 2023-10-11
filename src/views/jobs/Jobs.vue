<template>
  <div class="mt-10">
    <h1 class="text-center text-2xl mb-10">
      Welcome <span class="text-coralRed"> {{ user }}</span>
    </h1>
    <div class="max-w-xs ml-6">
      <label for="company" class="block mb-2 text-sm font-medium text-gray-90"
        >Find by Company</label
      >
      <div class="max-w-xs ml-6">
        <input
          v-model="selectedCompany"
          @input="handleSearch"
          type="text"
          @blur="handleSearch"
          placeholder="Search by company..."
          class="py-2 px-2 block w-full border-2 rounded-md text-sm outline-none focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
    </div>
    <div v-if="data.length === 0" class="text-center mt-6">
      <p class="text-gray-500">No jobs found.</p>
    </div>
    <JobDetails v-for="record in data" :key="record._id" :data="record" />
    <div class="flex justify-center gap-3 mt-4">
      <button
        v-if="currentPage > 1"
        @click="fetchJobs(currentPage - 1)"
        type="button"
        class="focus:outline-none text-white bg-coralRed hover:bg-coralRed focus:ring-2 focus:ring-lightCoralRed font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
      >
        Previous
      </button>
      <div>
        <p class="text-black mt-2">
          Page <span class="text-coralRed">{{ currentPage }}</span>
        </p>
      </div>
      <button
        v-if="currentPage < totalPages"
        @click="fetchJobs(currentPage + 1)"
        type="button"
        class="focus:outline-none text-white bg-coralRed hover:bg-coralRed focus:ring-2 focus:ring-lightCoralRed font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
import _debounce from "lodash/debounce";
import VueCookies from "vue-cookies";
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
      user: VueCookies.get("user"),
      currentPage: 1,
      totalPages: 0,
      selectedCompany: "",
    };
  },
  methods: {
    updateCurrentPage() {
      this.currentPage = 1;
    },
    handleLogout() {
      const authStore = useAuthStore();
      authStore.logout();
      this.$router.push("/login");
    },
    async fetchJobs(page = this.currentPage, debounce = false) {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/jobs?page=${page}&limit=3&company=${encodeURIComponent(
            this.selectedCompany
          )}`
        );
        this.data = response.data.records;
        this.currentPage = response.data.currentPage;
        this.totalPages = response.data.pages;
      } catch (error) {
        console.log(error);
      }
    },
    handleSearch: _debounce(function () {
      this.fetchJobs(1, true);
    }, 300),
  },
  created() {
    this.fetchJobs(this.currentPage);
  },
  watch: {
    selectedCompany(newValue) {
      if (newValue.trim() === "") {
        this.fetchJobs();
      }
    },
  },
};
</script>

<style>
</style>