<template>
  <ContentDoc>
    <template #default="{ doc }">
      <div class="prose lg:prose-base">
        <ContentRenderer :value="doc" />
      </div>
    </template>
    <template #not-found>
      <div class="prose lg:prose-base">
        <h1 class="page-title">Sorry, no post here!</h1>
      </div>
    </template>
  </ContentDoc>
</template>

<style lang="postcss">
.page {
  @apply p-4;
  @screen md {
    @apply p-12;
  }
}
</style>
