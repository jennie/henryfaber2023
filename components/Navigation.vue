<template>
  <div
    id="header-wrap"
    class="flex flex-wrap max-w-screen-xl items-center space-x-2">
    <div
      id="name-box"
      class="flex max-w-screen-xl items-center space-x-2 w-full lg:w-1/2">
      <div
        class="py-8 whitespace-nowrap font-display font-black text-4xl tracking-tighter">
        Henry Faber
      </div>
      <div class="flex items-center space-x-2">
        <span class="text-5xl">/</span>
        <span class="font-display text-xs lg:text-base font-medium">
          EQUITABLE SPACE - COMMUNITY - VR, VIDEO GAMES + DIGITAL
        </span>
      </div>
    </div>

    <nav>
      <ContentNavigation v-slot="{ navigation }">
        <ul class="list-none p-0 m-0 flex flex-wrap space-x-4">
          <li
            class="inline text-base"
            v-for="(link, index) of navigation"
            :key="link._path">
            <NuxtLink class="text-base hover:text-gray-500" :to="link._path">{{
              link.title
            }}</NuxtLink>
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
