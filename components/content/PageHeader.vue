<template>
  <div>
    <h1
      class="py0 my-0 text-3xl sm:text-5xl uppercase sm:leading-none md:text-6xl text-zinc-200">
      <ContentSlot :use="$slots.default" unwrap="p" />
    </h1>
    <div v-if="$slots.intro">
      <p class="text-4xl mt-8 font-display leading-10" id="intro">
        fds<ContentSlot :use="$slots.intro" unwrap="p" />
      </p>
    </div>
  </div>
</template>
