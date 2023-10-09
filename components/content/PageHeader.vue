<template>
  <div class="flex flex-wrap mx-auto max-w-screen-xl">
    <section class="w-full lg:w-2/3 max-w-4xl">
      <h1
        class="text-3xl sm:text-5xl uppercase sm:leading-none md:text-6xl text-zinc-200"
      >
        <ContentSlot :use="$slots.default" unwrap="p" />
      </h1>
      <div v-if="$slots.intro">
        <p class="text-4xl mt-8 font-display leading-10" id="intro">
          <ContentSlot :use="$slots.intro" unwrap="p" />
        </p>
      </div>
    </section>
  </div>
</template>
