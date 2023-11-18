import tree from "ant-design-vue/lib/tree";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "NDC | National Developers Community",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-B8835VNELF",
        async: true,
      },
    ],
  },

  css: ["ant-design-vue/dist/antd.css", "@/assets/css/base.css"],

  plugins: [
    "@/plugins/antd-ui",
    { src: "@/plugins/v-mask.js", ssr: false },
    "@/plugins/aos.client.js",
    { src: "@/plugins/facebook.js", ssr: false },
    { src: "@/plugins/google.js", ssr: false },
  ],

  components: true,

  buildModules: [],

  modules: ["@nuxtjs/axios", "vue-toastification/nuxt", "@nuxtjs/i18n"],

  i18n: {
    locales: ["ru", "uz"],
    defaultLocale: "ru",
    vueI18n: {
      fallbackLocale: "ru",
    },
  },

  axios: {
    baseURL: process.env.BASE_URL,
  },

  build: {
    babel: {
      compact: true,
    },
    vendor: ["aos"],
    standalone: true,
    extend(config, ctx) {
      config.externals = [
        {
          encoding: "encoding",
        },
      ];
    },
  },
};
