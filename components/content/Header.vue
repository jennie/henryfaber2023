<template>
  <div class="heading md:py-16 flex flex-wrap mx-auto max-w-screen-xl">
    <section class="w-full lg:w-2/3 h-full text-lg max-w-4xl">
      <h1
        class="text-3xl leading-10 font-extrabold sm:text-5xl sm:leading-none md:text-6xl">
        <ContentSlot :use="$slots.default" unwrap="p" />
      </h1>
    </section>
  </div>
</template>
