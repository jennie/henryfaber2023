<template>
  <ContentList :query="query">
    <template #default="{ list }">
      <div v-for="post in list" :key="post._path" class="mb-12 h-full">
        <BlogExcerpt :post="post" />
      </div>
    </template>
    <template #not-found>
      <p class="text-2xl">No articles found… yet!</p>
    </template>
  </ContentList>
</template>
<script setup lang="ts">
// definePageMeta({ documentDriven: { page: false, surround: false } });
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";
const query: QueryBuilderParams = {
  path: "/blog",
  where: [{ _path: { $ne: "/blog" } }, { _path: { $ne: "/blog/_dir" } }],
  only: ["title", "date", "_path", "description"],
  sort: [{ date: -1 }],
};
</script>
