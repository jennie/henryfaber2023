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
  path: "/music",
  where: [{ _path: { $ne: "/music" } }, { _path: { $ne: "/music/_dir" } }],
  only: ["title", "date", "_path", "description"],
  sort: [{ date: -1 }],
};
</script>
