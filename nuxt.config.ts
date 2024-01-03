// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  $development: {
    extends: [
      import.meta.env.NUXT_VVEB3_LINK,
    ],
  },
  $production: {
    extends: [
      'github:visualizevalue-dev/vveb3-layer',
    ],
  },
})
