<template>
  <div class="mt-10">
    <h1 class="text-center text-2xl">
      Welcome...<span class="text-coralRed"> {{ user }}</span>
    </h1>
    <h1 class="text-center text-3xl">List of jobs</h1>
    <div class="max-w-xs ml-6">
      <label for="company" class="block mb-2 text-sm font-medium text-gray-90"
        >Find by Company</label
      >
      <select
        v-model="selectedCompany"
        @change="fetchCompany"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="">All Jobs</option>
        <option
          v-for="index in companyList"
          :value="index.company"
          :key="index.id"
        >
          {{ index.company }}
        </option>
      </select>
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
      companyList: [],
      selectedCompany: "",
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
          `http://localhost:8000/api/jobs?page=${page}&limit=3&company=${encodeURIComponent(
            this.selectedCompany
          )}`
        );
        this.data = response.data.records;
        this.currentPage = response.data.currentPage;
        this.totalPages = response.data.pages;
        this.populateCompanyList();
      } catch (error) {
        console.log(error);
      }
    },
    async fetchCompany() {
      try {
        const response = await axios.get(`http://localhost:8000/api/jobs`);
        this.companyList = response.data.records;
      } catch (error) {
        console.log(error);
      }
    },
    populateCompanyList() {
      const uniqueCompanies = [
        ...new Set(this.data.map((record) => record.company)),
      ];
      this.companyList = uniqueCompanies;
    },
  },
  created() {
    this.fetchJobs(this.currentPage);
  },
  watch: {
    selectedCompany(newCompany) {
      this.currentPage = 1;
      this.fetchJobs(this.currentPage);
    },
  },
};
</script>

<style>
</style>