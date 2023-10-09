<template>
  <ContentDoc v-slot="{ doc }">
    <div class="pt-16 flex flex-wrap mx-auto justify-center items-center">
      <div class="w-full h-full">
        <div class="prose lg:prose-base">
          <ContentRenderer :value="doc" />
        </div>
      </div>
    </div>
    <div class="mt-10 mx-auto max-w-screen-xl">
      <section class="relative">
        <div class="mt-6">
          <BlogList />
        </div>
      </section>
    </div>
  </ContentDoc>
</template>
