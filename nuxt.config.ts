export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },

  css: ["@/assets/css/main.css"],
  postcss: {
    plugins: {
      "tailwindcss/nesting": {},
      "postcss-mixins": {},
      tailwindcss: {},
      autoprefixer: {},
      cssnano:
        process.env.NODE_ENV === "production"
          ? { preset: ["default", { discardComments: { removeAll: true } }] }
          : false, // disable cssnano when not in production
    },
  },
  modules: [
    "@nuxthq/studio",
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxtjs/plausible",
    "@nuxt/image",
    "@formkit/nuxt",
    "dayjs-nuxt",
    "@nuxtjs/google-fonts",
  ],
  image: {
    imgix: {
      baseURL: "https://henryfaber.imgix.net",
      // baseURL: "https://babyghosts-new-pages.imgix.net",
    },
  },
  googleFonts: {
    display: "swap",
    families: {
      "DM+Sans": {
        wght: "100..1000",
        ital: "100..1000",
      },
    },
  },
  plausible: {
    domain: "henryfaber.com",
    autoOutboundTracking: true,
  },
  tailwindcss: {
    cssPath: "~/assets/css/main.css",
    configPath: "tailwind.config",
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: "first",
    viewer: true,
  },

  content: {
    documentDriven: true,
    markdown: {
      anchorLinks: false,

      remarkPlugins: ["remark-smartypants"],
      toc: {
        depth: 4,
        searchDepth: 4,
      },
    },
  },
  router: {
    options: {
      strict: true,
    },
  },
  app: {
    head: {
      htmlAttrs: { lang: "en" },
      bodyAttrs: { class: "antialiased font-body" },
    },
  },
});
