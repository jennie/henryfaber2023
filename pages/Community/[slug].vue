<template>
  <ContentDoc>
    <template #default="{ doc }">
      <div class="flex flex-wrap mx-auto justify-center items-center">
        <div class="w-full h-full">
          <h1 class="py-0 my-0 font-black">
            {{ doc.title }}
          </h1>
          <p class="my-0 py-0 font-mono">
            {{ $dayjs(doc.date).format("MMMM D, YYYY") }}
          </p>
          <article class="prose lg:prose-lg">
            <ContentRenderer :value="doc" />
          </article>
        </div>
      </div>
    </template>
    <template #not-found>
      <div class="heading md:py-16 flex flex-wrap mx-auto">
        <div class="w-full h-full text-lg">
          <div class="article max-w-5xl mx-auto">
            <h1 class="article-title">404</h1>
            <p class="text-center">
              Sorry, that post wasn't found for some reason!
            </p>
          </div>
        </div>
      </div>
    </template>
  </ContentDoc>
</template>
<script setup lang="ts">
// definePageMeta({ documentDriven: { page: false, surround: false } });
</script>
<style lang="postcss">
.article {
  @apply text-zinc-200 p-4;

  @screen md {
    @apply p-12;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    a {
      @apply no-underline font-bold;
    }
  }

  h2 {
    @apply text-3xl mb-4 mt-2;
  }

  h3 {
    @apply text-xl uppercase tracking-wide  mb-2;
  }

  p {
    @apply mb-6 text-xl;
  }

  blockquote {
    p {
      @apply mb-0;
    }
  }

  ul {
    @apply list-disc list-outside ml-8 mt-4 mb-6;

    li {
      @apply text-xl;
    }
  }

  h1 {
    @apply leading-none font-black text-center mt-0 text-5xl;
  }

  &-date {
    color: var(--app-font-color);
    @apply font-mono mt-4;
    font-size: 0.8em;
  }

  & blockquote {
    padding: 10px 20px;
    margin: 0 0 20px;
    font-size: 17.5px;
    border-left: 5px solid #eee;
  }

  & table {
    width: 100%;
    max-width: 100%;
    margin-bottom: 20px;

    th {
      vertical-align: bottom;
      border-bottom: 2px solid #ddd;
    }

    td {
      border-top: 1px solid #ddd;
      padding: 8px;
      line-height: 1.42857143;
      vertical-align: top;
    }

    tr:nth-child(odd) td {
      background-color: #f9f9f9;
    }
  }

  & img {
    margin: auto;
    width: 80%;
    display: block;
    margin: 10px auto;
  }
}
</style>
