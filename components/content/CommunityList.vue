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
  path: "/community",
  where: [
    { _path: { $ne: "/community" } },
    { _path: { $ne: "/community/_dir" } },
  ],
  only: ["title", "date", "_path", "description"],
  sort: [{ date: -1 }],
};
</script>
