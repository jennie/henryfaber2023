<template>
  <div class="py-8">Henry Faber</div>

  <nav>
    <ContentNavigation v-slot="{ navigation }">
      <ul class="list-none p-0 m-0 flex flex-wrap space-x-4">
        <li
          class="inline text-base"
          v-for="(link, index) of navigation"
          :key="link._path">
          <NuxtLink :to="link._path">
            {{ link.title }}
          </NuxtLink>
        </li>
      </ul>
    </ContentNavigation>
  </nav>
</template>
<script setup>
const route = useRoute();

const { data: navigation } = await useAsyncData("navigation", () =>
  fetchContentNavigation()
);
import { ref } from "vue";
</script>

<style></style>
