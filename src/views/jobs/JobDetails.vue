<template>
  <main v-if="data" class="my-14 flex flex-col gap-10" id="main">
    <div
      class="bg-white pl-4 flex flex-col md:flex-row md:justify-between md:py-5 md:px-6 md:items-center gap-2 justify-between shadow-md hover:shadow-md container mx-auto border-l-4 rounded-md pb-3"
      :class="{ 'border-l-coralRed': data['featured'] }"
    >
      <div
        class="flex flex-col gap-2 md:mr-7 md:flex-row md:gap-4 md:items-center"
      >
        <img src="./images/account.svg" class="w-12 -mt-6 md:mt-0 md:w-20" />
        <div class="flex flex-col items-start justify-start">
          <div class="flex items-center">
            <p class="text-coralRed font-bold mr-4 md:text-md">
              {{ data["company"] }}
            </p>
            <div class="flex font-bold text-white items-center">
              <p
                v-if="data['isnew']"
                class="bg-bluePrimary uppercase rounded-full px-2 pt-1 text-sm mr-2"
              >
                NEW
              </p>
              <p
                v-if="data['featured']"
                class="bg-veryDarkGrayishCyan uppercase rounded-full px-2 pt-1 text-sm"
              >
                featured
              </p>
            </div>
          </div>
          <p class="text-loginPrimary font-bold md:text-xl">
            {{ data["position"] }}
          </p>
          <div class="flex gap-2 items-center">
            <p class="text-loginPrimary">
              {{ getRlativeTime(data["postedAt"]) }}
            </p>
            <p class="text-coralRed mb-3 text-2xl">.</p>
            <p class="text-loginPrimary" v-if="data['contract']">
              {{ data["contract"] }}
            </p>
            <p class="text-coralRed mb-3 text-2xl">.</p>
            <p class="text-loginPrimary">{{ data["location"] }}</p>
          </div>
        </div>
      </div>
      <hr class="h-[1px] bg-darkGrayishCyan border-none w-11/12 md:hidden" />
      <div class="flex flex-wrap gap-3 pr-8 md:flex-nowrap md:float-right">
        <p
          class="font-bold text-loginPrimary hover:text-white hover:bg-coralRed transition duration-700 bg-lightCoralRed px-2 pt-2 pb-1 rounded-md cursor-pointer"
        >
          {{ data["role"] }}
        </p>
        <p
          class="font-bold text-loginPrimary hover:text-white hover:bg-coralRed transition duration-700 bg-lightCoralRed px-2 pt-2 pb-1 rounded-md cursor-pointer"
        >
          {{ data["level"] }}
        </p>
        <p
          v-for="language in data['languages']"
          :key="language"
          class="font-bold text-loginPrimary hover:text-white hover:bg-coralRed transition duration-700 bg-lightCoralRed px-2 pt-2 pb-1 rounded-md cursor-pointer"
        >
          {{ language }}
        </p>
        <p
          v-for="tools in data['tools']"
          :key="tools"
          class="font-bold text-loginPrimary hover:text-white hover:bg-coralRed transition duration-700 bg-lightCoralRed px-2 pt-2 pb-1 rounded-md cursor-pointer"
        >
          {{ tools }}
        </p>
      </div>
    </div>
  </main>
  <div v-else>Loading...</div>
</template>

<script>
import moment from "moment";
export default {
  props: {
    data: Object,
  },
  data() {},
  methods: {
    getRlativeTime(date) {
      const postedAt = moment(date);
      return postedAt.fromNow();
    },
  },
  computed: {
    imageUrl() {
      return `./images/${this.data.logo}`;
    },
  },
};
</script>

<style>
</style>