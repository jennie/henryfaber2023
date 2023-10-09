<template>
  <NuxtLink :to="post._path" class="block mb-4">
    <h3 v-html="post.title" />
  </NuxtLink>

  <div class="flex flex-col md:flex-row items-start">
    <div class="metadata md:w-1/4 mb-4 md:mb-0">
      <div class="date font-mono">
        {{ $dayjs(post.date).format("MMMM D, YYYY") }}
      </div>
    </div>

    <div class="excerpt md:w-3/4" v-html="md.render(post.description)" />
  </div>
</template>

<script>
import MarkdownIt from "markdown-it";
// console.log(this.post);
export default {
  props: ["post"],
  data() {
    return {
      md: new MarkdownIt({ typographer: true }),
    };
  },
};
</script>

<style scoped>
h3 {
  @apply text-3xl underline;
}

section {
  .excerpt {
    :deep() p {
      @apply text-lg mt-0 pt-0 !important;
    }
    @apply text-xl;
  }
}
</style>
