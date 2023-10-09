<template>
  <ContentList :query="query">
    <template #default="{ list }">
      <div v-for="post in list" :key="post._path" class="mb-12 h-full">
        <slot :post="post" />
      </div>
    </template>
    <template #not-found>
      <p class="text-2xl">No articles found… yet!</p>
    </template>
  </ContentList>
</template>

<script setup lang="ts">
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";

defineProps({
  query: {
    type: Object as () => QueryBuilderParams,
    required: true,
  },
});
</script>
