<template>
  <main class="my-14 flex flex-col gap-10" id="main">
    <div
      class="bg-white pl-4 flex flex-col md:flex-row md:justify-between md:py-5 md:px-6 md:items-center gap-2 justify-between shadow-xl container mx-auto border-l-4 rounded-md pb-3 border-l-desaturatedDarkCyan"
    >
      <div
        class="flex flex-col gap-2 md:mr-7 md:flex-row md:gap-4 md:items-center"
      >
        <img
          class="w-12 -mt-6 md:mt-0 md:w-20"
          src="../../assets/images/account.svg"
        />
        <div class="flex flex-col items-start justify-start">
          <div class="flex items-center">
            <p class="text-desaturatedDarkCyan font-bold mr-4 md:text-md">
              Photosnap
            </p>
            <div class="flex font-bold text-white items-center">
              <p
                class="bg-desaturatedDarkCyan uppercase rounded-full px-2 pt-1 text-sm mr-2"
              >
                New!
              </p>
              <p
                class="bg-veryDarkGrayishCyan uppercase rounded-full px-2 pt-1 text-sm"
              >
                Featured
              </p>
            </div>
          </div>
          <p class="text-veryDarkGrayishCyan font-bold md:text-xl">
            Senior Frontend Developer
          </p>
          <div class="flex gap-2 items-center">
            <p class="text-darkGrayishCyan">1d ago</p>
            <p class="text-darkGrayishCyan mb-3 text-2xl">.</p>
            <p class="text-darkGrayishCyan">Full Time</p>
            <p class="text-darkGrayishCyan mb-3 text-2xl">.</p>
            <p class="text-darkGrayishCyan">USA only</p>
          </div>
        </div>
      </div>
      <hr class="h-[1px] bg-darkGrayishCyan border-none w-11/12 md:hidden" />
      <div class="flex flex-wrap gap-3 pr-8 md:flex-nowrap md:float-right">
        <p
          class="font-bold text-desaturatedDarkCyan bg-lightGreyishCyanBg px-2 pt-2 pb-1 rounded-md cursor-pointer"
        >
          Frontend
        </p>
        <p
          class="font-bold text-desaturatedDarkCyan bg-lightGreyishCyanBg px-2 pt-2 pb-1 rounded-md cursor-pointer"
        >
          Senior
        </p>
        <p
          class="font-bold text-desaturatedDarkCyan bg-lightGreyishCyanBg px-2 pt-2 pb-1 rounded-md cursor-pointer"
        >
          HTML
        </p>
        <p
          class="font-bold text-desaturatedDarkCyan bg-lightGreyishCyanBg px-2 pt-2 pb-1 rounded-md cursor-pointer"
        >
          CSS
        </p>
        <p
          class="font-bold text-desaturatedDarkCyan bg-lightGreyishCyanBg px-2 pt-2 pb-1 rounded-md cursor-pointer"
        >
          JavaScript
        </p>
      </div>
    </div>
  </main>
</template>

<script>
import logo from "../../assets/images/account.svg";
export default {};
</script>

<style>
</style>