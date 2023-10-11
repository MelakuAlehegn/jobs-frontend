<template>
  <div
    class="max-w-md md:max-w-l mx-auto rounded-xl py-20 p-14 shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]"
  >
    <h1 class="text-xl font-bold mb-10 text-loginPrimary">Login to Account</h1>
    <form @submit.prevent="hundleLogin" class="flex flex-col text-left">
      <label class="font-bold text-loginPrimary text-base md:text-lg mb-2"
        >Email</label
      >
      <input
        type="email"
        placeholder="Email"
        v-model="email"
        class="border-2 py-2 px-4 rounded-md border-gray-300 focus:border-none focus:outline-none focus:ring-2 focus:ring-bluePrimary placeholder:text-gray-300 placeholder:text-sm"
      />
      <ErrorForms v-if="emailError" :text="emailError" />
      <label class="font-bold text-loginPrimary text-base md:text-lg mb-2 mt-5"
        >Password</label
      >
      <input
        v-model="password"
        type="password"
        placeholder="password"
        class="border-2 py-2 px-4 rounded-md border-gray-300 focus:border-none focus:outline-none focus:ring-2 focus:ring-bluePrimary placeholder:text-gray-300 placeholder:text-sm"
      />
      <ErrorForms v-if="passwordError" :text="passwordError" />
      <button
        type="submit"
        class="text-blueGray-700 mt-5 text-white bg-coralRed px-5 py-2 hover:bg-bluePrimary transition duration-700 rounded-md"
      >
        Login
      </button>
    </form>
    <ErrorForms v-if="incorrectCredentials" :text="incorrectCredentials" />
  </div>
</template>

<script>
import ErrorForms from "../../components/ErrorForms.vue";
import { useAuthStore } from "../../stores/AuthStore";
import axios from "axios";
export default {
  components: {
    ErrorForms,
  },
  data() {
    return {
      email: "",
      password: "",
      emailError: "",
      passwordError: "",
      incorrectCredentials: "",
    };
  },
  methods: {
    async hundleLogin() {
      this.emailError = this.email ? "" : "Please add email";
      if (this.emailError) {
        setTimeout(() => {
          this.emailError = "";
        }, 2000);
      }
      if (!this.emailError) {
        this.passwordError = this.password
          ? this.password.length >= 4
            ? ""
            : "Password must be at least 8 chars"
          : "Please add password";
        if (this.passwordError) {
          setTimeout(() => {
            this.passwordError = "";
          }, 2000);
        }
      } else {
        this.passwordError = "";
      }
      if (!this.emailError && !this.passwordError) {
        const authStore = useAuthStore();
        try {
          const response = await axios.post(
            "http://localhost:8000/api/users/login",
            {
              email: this.email,
              password: this.password,
            }
          );
          authStore.setToken(response.data.token);
          authStore.setUser(response.data.name);
          this.$router.push("/jobs");
        } catch (error) {
          this.incorrectCredentials = error.response.data.message;
          if (this.incorrectCredentials) {
            setTimeout(() => {
              this.incorrectCredentials = "";
            }, 2000);
          }
        }
      }
    },
  },
};
</script>

<style>
</style>