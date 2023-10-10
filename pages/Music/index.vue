<template>
  <ContentDoc v-slot="{ doc }">
    <div class="prose lg:prose-base">
      <ContentRenderer :value="doc" />
    </div>
    <div class="mt-6">
      <MusicList />
    </div>
  </ContentDoc>
</template>
