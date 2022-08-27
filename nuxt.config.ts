import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        "@nuxt/content",
    ],

    css: [
        "~/assets/styles/common.css",
        "~/assets/styles/layout.css",
        "~/assets/styles/index.css",
        "~/assets/styles/blog.css",
        "~/assets/styles/contact.css",
        "~/assets/styles/singleblog.css",
    ]

})

