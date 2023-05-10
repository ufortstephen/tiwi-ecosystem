// https://nuxt.com/docs/api/configuration/nuxt-config
// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  app: {
    head: {
      title: "TIWI ECOSYSTEM: A Decentralized Ecosystem of cryptographic projects designed to bring real-world utilities and applications.",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap",
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap",
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css",
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "/fonts/font-editorial/stylesheet.css",
        },
      ],
      script: [
        "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js",

      ],
    },
  },
  ssr: false,
  css: ["~/assets/scss/global.scss", "~/assets/css/tailwind.css"],
  build: {
    transpile: ['gsap'],
  },

  modules: ['@nuxtjs/tailwindcss'],

  runtimeConfig: {
    public: {
        APP_URL: process.env.APP_URL,
     
    },

  },
});
