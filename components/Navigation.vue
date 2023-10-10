<template>
  <div
    id="header-wrap"
    class="flex flex-wrap max-w-screen-xl items-center mb-4">
    <div
      id="name-box"
      class="flex flex-wrap lg:flex-nowrap max-w-screen-xl items-center w-full lg:w-1/2">
      <div
        class="flex lg:py-8 whitespace-nowrap font-display font-black text-4xl tracking-tighter">
        Henry Faber
      </div>
      <span
        class="text-3xl lg:text-5xl font-medium items-center font-display px-4"
        >/</span
      >
      <div class="flex items-end lg:items-center">
        <span
          class="w-2/3 tracking-tighter mt-4 lg:mt-0 lg:w-full font-display text-xl font-bold lg:text-sm lg:font-medium">
          EQUITABLE SPACE - COMMUNITY - VR, VIDEO GAMES + DIGITAL
        </span>
        <div class="w-1/3 lg:hidden">
          <img
            src="~/assets/img/faberset.png"
            alt="faberset"
            class="w-full px-4" />
        </div>
      </div>
    </div>

    <nav class="flex flex-wrap items-center w-full lg:w-1/2">
      <div class="w-full lg:w-3/4">
        <ContentNavigation v-slot="{ navigation }">
          <ul
            class="list-none py-4 my-4 lg:pl-4 lg:m-0 grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-x-4 border-t-2 border-b-2 border-black lg:border-none">
            <li></li>
            <li
              class="inline text-base whitespace-nowrap truncate"
              v-for="(link, index) of navigation"
              :key="link._path">
              <NuxtLink
                class="text-lg tracking-tight lg:text-sm hover:text-gray-500 uppercase no-underline font-black lg:font-medium"
                :to="link._path"
                >{{ link.title }}</NuxtLink
              >
            </li>
          </ul>
        </ContentNavigation>
      </div>
      <div class="w-1/4 hidden lg:block">
        <img src="~/assets/img/faberset.png" alt="faberset" class="w-28" />
      </div>

      <!-- image here called faberset -->
    </nav>
  </div>
</template>

<script setup>
const route = useRoute();

const { data: navigation } = await useAsyncData("navigation", () =>
  fetchContentNavigation()
);
import { ref } from "vue";
</script>

<style></style>
