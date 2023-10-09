<template>
  <DynamicList :query="query">
    <template #default="{ post }">
      <Excerpt :post="post" />
    </template>
  </DynamicList>
</template>

<script setup lang="ts">
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";

const query: QueryBuilderParams = {
  path: "/productivity",
  where: [
    { _path: { $ne: "/productivity" } },
    { _path: { $ne: "/productivity/_dir" } },
  ],
  only: ["title", "date", "_path", "description"],
  sort: [{ date: -1 }],
};
</script>
