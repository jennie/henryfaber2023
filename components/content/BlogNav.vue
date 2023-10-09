<script setup lang="ts">
const route = useRoute();

const [previous, next] = await queryContent("news")
  .where({
    $and: [{ _path: { $ne: "/news" } }, { _path: { $ne: "/news/_dir" } }],
  })
  .only(["_path", "title"])
  .sort({ date: 1 })
  .findSurround(route.path);
</script>

<template>
  <div class="max-w-screen-xl mx-auto flex justify-between pt-8 mt-8">
    {{ previous }} •
    {{ next }}
    <div v-if="previous">
      Previous:
      <NuxtLink :to="previous._path" class="flex items-center">
        <span>{{ previous.title }}</span>
      </NuxtLink>
    </div>
    <div v-if="next">
      Next:
      <NuxtLink :to="next._path" class="flex items-center">
        <span>{{ next.title }}</span>
      </NuxtLink>
    </div>
  </div>
</template>
<style scoped></style>
