<template>
  <div
    class="max-w-md md:max-w-xl mx-auto rounded-xl py-20 p-14 shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]"
  >
    <h1 class="text-xl font-bold mb-10">Login to Account</h1>
    <form @submit.prevent="hundleLogin" class="flex flex-col text-left gap-3">
      <label class="font-bold text-blue-900 text-base md:text-lg">Email</label>
      <input
        type="text"
        placeholder="Email"
        v-model="email"
        class="border-2 py-2 px-4 rounded-md border-emerald-500 outline-none placeholder:text-gray-300 placeholder:text-sm"
      />
      <ErrorForms v-if="emailError" :text="emailError" />
      <label class="font-bold text-blue-900 text-base md:text-lg"
        >Password</label
      >
      <input
        v-model="password"
        type="password"
        placeholder="password"
        class="border-2 py-2 px-4 rounded-md border-emerald-500 outline-none placeholder:text-gray-300 placeholder:text-sm"
      />
      <ErrorForms v-if="passwordError" :text="passwordError" />
      <button class="bg-emerald-500 mt-8 w-28 px-8 py-2 rounded-md self-center">
        Login
      </button>
    </form>

    <div v-if="isLoggedin">{{ isLoggedin }}</div>
  </div>
</template>

<script>
import ErrorForms from "../components/ErrorForms.vue";
export default {
  components: {
    ErrorForms,
  },
  data() {
    return {
      email: "",
      password: "",
      isLoggedin: "",
      emailError: "",
      passwordError: "",
    };
  },
  methods: {
    hundleLogin() {
      this.emailError = this.email ? "" : "Please add email";
      this.passwordError = this.password
        ? this.password.length >= 8
          ? ""
          : "Password must be at least 8 chars"
        : "Please add password";
      if (!this.emailError && !this.passwordError) {
        this.isLoggedin = "Logged In";
      }
    },
  },
};
</script>

<style>
</style>