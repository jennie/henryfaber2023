<template>
  <div id="header-wrap" class="flex flex-wrap max-w-screen-xl items-center">
    <div
      id="name-box"
      class="flex max-w-screen-xl items-center w-full lg:w-1/2">
      <div
        class="py-8 whitespace-nowrap font-display font-black text-4xl tracking-tighter">
        Henry Faber
      </div>
      <div class="flex items-center">
        <span class="text-5xl px-4">/</span>
        <span class="font-display text-xs lg:text-base font-medium">
          EQUITABLE SPACE - COMMUNITY - VR, VIDEO GAMES + DIGITAL
        </span>
      </div>
    </div>

    <nav class="w-full lg:w-1/2">
      <ContentNavigation v-slot="{ navigation }">
        <ul class="list-none pl-4 m-0 grid grid-cols-3 grid-rows-2 gap-x-4">
          <li></li>
          <li
            class="inline text-base"
            v-for="(link, index) of navigation"
            :key="link._path">
            <NuxtLink
              class="text-base hover:text-gray-500 uppercase no-underline"
              :to="link._path"
              >{{ link.title }}</NuxtLink
            >
          </li>
        </ul>
      </ContentNavigation>
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
