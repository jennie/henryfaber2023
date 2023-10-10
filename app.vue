<template>
  <div class="mx-auto max-w-screen-xl p-4 sm:p-6 lg:p-8 bg-white">
    <Navigation />
    <main role="main">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script setup>
const { page } = useContent();
import { ref, watch } from "vue";
let baseClasses =
  "overflow-x-hidden text-base leading-normal flex flex-col min-h-screen";
let bodyClass = ref(baseClasses);
useContentHead(page);
useHead({
  bodyAttrs: {
    class: bodyClass,
  },

  meta: [
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "keywords",
      content:
        "indie studios, game dev funding, impact funding, social finance",
    },
    { name: "robots", content: "index, follow" },
    { name: "author", content: "Baby Ghosts" },
    { name: "copyright", content: "© 2023 Baby Ghosts" },
  ],
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Baby Ghosts` : "Baby Ghosts";
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png",
    },
  ],
});
watchEffect(() => {
  const newVal = page.value ? page.value.bodyClass : null;
  if (newVal) {
    bodyClass.value = `${baseClasses} ${newVal}`;
  } else {
    bodyClass.value = baseClasses;
  }
});
const defaultTitle = "Henry Faber";
const defaultDescription = "";
const defaultImage = "";
const defaultUrl = "";
const baseUrl = "";

useSeoMeta({
  ogTitle: () => (page.value && page.value.title) || defaultTitle,
  ogDescription: () =>
    (page.value && page.value.description) || defaultDescription,
  description: () =>
    (page.value && page.value.description) || defaultDescription,
  ogImage: () =>
    page.value && page.value.image ? page.value.image.src : defaultImage,
  ogUrl: () => (page.value && `${baseUrl}${page.value._path}`) || defaultUrl,
  twitterTitle: () => (page.value && page.value.title) || defaultTitle,
  twitterDescription: () =>
    (page.value && page.value.description) || defaultDescription,
  twitterImage: () =>
    page.value && page.value.image ? page.value.image.src : defaultImage,
});
</script>
