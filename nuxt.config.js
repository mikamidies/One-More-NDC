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
  },

  css: ["ant-design-vue/dist/antd.css", "@/assets/css/base.css"],

  plugins: [
    "@/plugins/antd-ui",
    { src: "@/plugins/v-mask.js", ssr: false },
    "@/plugins/aos.client.js",
  ],

  components: true,

  buildModules: [],

  modules: ["@nuxtjs/axios", "vue-toastification/nuxt"],

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
