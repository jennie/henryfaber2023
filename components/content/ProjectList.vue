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
  path: "/project",
  where: [{ _path: { $ne: "/project" } }, { _path: { $ne: "/project/_dir" } }],
  sort: [{ date: -1 }],
};
</script>
